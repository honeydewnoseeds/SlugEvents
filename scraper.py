import os
import instaloader
from datetime import datetime, timedelta
import openai
from firebase_admin import credentials, initialize_app, storage, firestore
import googlemaps
from dateutil.parser import parse
from google.cloud.firestore import Query

# Initialize Google Maps client
gmaps = googlemaps.Client(key='AIzaSyBpT3KovRtvljSVZqZo_PthMUtQcLPV0pg')

def standardize_location(location):
    geocode_result = gmaps.geocode(location)
    if geocode_result:
        formatted_address = geocode_result[0]['formatted_address']
        lat = geocode_result[0]['geometry']['location']['lat']
        lng = geocode_result[0]['geometry']['location']['lng']
        return formatted_address, (lat, lng)
    else:
        return location, None

def standardize_date(date):
    return parse(date).date().isoformat()

def standardize_time(time):
    if '-' in time:
        start_time, end_time = time.split('-')
        return parse(start_time.strip()).time().isoformat(), parse(end_time.strip()).time().isoformat()
    else:
        return parse(time).time().isoformat(), None

# Initialize Firebase Admin SDK
cred = credentials.Certificate("slugevents-57e0b-firebase-adminsdk-brd1a-dcc2a15087.json")
initialize_app(cred, {
    "storageBucket": "slugevents-57e0b.appspot.com"
})

# Initialize Instaloader
L = instaloader.Instaloader()

# OpenAI API Key
openai.api_key = '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'

# Instagram profiles to download images from
profiles = [
    "ucsc9_jrl",
    "porter.college",
    "kc_ucsc",
    "stevenson.ucsc",
    "cowell.ucsc",
    "rcc_ucsc",
    "oakescollege",
    "ucsccrowncollege",
    "ucscmerrillcollege"
]

# Firebase Storage and Firestore clients
bucket = storage.bucket()
db = firestore.client()

# Create 'instagram_images' directory if it doesn't exist
os.makedirs("instagram_images", exist_ok=True)

# Download and process Instagram images
one_week_ago = datetime.now() - timedelta(weeks=1)
for profile_name in profiles:
    profile = instaloader.Profile.from_username(L.context, profile_name)

    for post in profile.get_posts():
        post_date = post.date_utc.replace(tzinfo=None)  # Remove timezone info

        if post_date < one_week_ago:
            continue  # Skip posts older than a week

        post_id = post.shortcode  # Use the post's shortcode as a unique identifier

        # Check if the post already exists in the Firestore database
        existing_post = db.collection("events").document(post_id).get()
        if existing_post.exists:
            print(f"Skipping duplicate post: {post_id}")
            continue

        # Determine if the post describes an event
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": f"{post.date, post.caption}\nDetermine if this instagram post description describes an event given the description and post date. If the description doesn't contain a specified location, date and time, or is an announcement, only output 'not an event'. If it does, output the location, date, and time of the event in the following format: 'location: location_placeholder, date: date_placeholder, time: start_time_placeholder - end_time_placeholder"}
            ]
        )

        # If the model determines it's not an event, skip this post
        if 'not specified' in response['choices'][0]['message']['content'].lower():
            continue
        if 'not an event' in response['choices'][0]['message']['content'].lower():
            continue

        # Extract location, date, and time from the response
        location, date, start_time, end_time, coordinates = None, None, None, None, None  # Initialize variables
        message_parts = response['choices'][0]['message']['content'].split(', ')
        for part in message_parts:
            if 'location:' in part.lower():
                location, coordinates = standardize_location(part.split(': ')[1])
            elif 'date:' in part.lower():
                date = standardize_date(part.split(': ')[1])
            elif 'time:' in part.lower():
                start_time, end_time = standardize_time(part.split(': ')[1])
        
        # Query Firestore to check for existing event with same details
        query = db.collection('events').where('eventLocation', '==', location).where('eventDate', '==', date).where('eventStartTime', '==', start_time)
        existing_events = query.stream()

        # If an event with the same details exists, skip this post
        for _ in existing_events:
            print(f"Skipping duplicate event: {post_id}")
            continue

        # Check if the post is a sidecar (album)
        if post.typename == "GraphSidecar":
            sidecar_nodes = list(post.get_sidecar_nodes())  # Convert generator to list
            url = sidecar_nodes[0].display_url  # Get the URL of the first image
        else:
            url = post.url

        # Download image
        image_name = f"{profile_name}_{post.date_utc.strftime('%Y%m%d_%H%M%S')}"
        image_path = os.path.join("instagram_images", image_name)
        L.download_pic(image_path, url, post.date_utc)

        # Append the file extension to the image_path
        image_path += ".jpg"

        # Upload image to Firebase Storage
        blob = bucket.blob(f"{image_name}.jpg")
        blob.upload_from_filename(image_path)
        blob.make_public()

        # Get image URL from Firebase Storage
        image_url = blob.public_url

        # Store image metadata in Firestore
        doc_ref = db.collection("events").document(post_id)
        doc_ref.set({
            "account": profile_name,
            "description": post.caption,
            "date_posted": post.date_utc,
            "imageSrc": image_url,
            "eventLocation": location,
            "eventCoordinates": coordinates,
            "eventDate": date,
            "eventStartTime": start_time,
            "eventEndTime": end_time
        })

        print(f"Processed {image_name}.jpg")