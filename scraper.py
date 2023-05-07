import os
import instaloader
from datetime import datetime
from firebase_admin import credentials, initialize_app, storage, firestore

# Initialize Firebase Admin SDK
cred = credentials.Certificate("slugevents-57e0b-firebase-adminsdk-brd1a-dcc2a15087.json")
initialize_app(cred, {
    "storageBucket": "slugevents-57e0b.appspot.com"
})

# Initialize Instaloader
L = instaloader.Instaloader()

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
    "ucscmerillcollege"
]

# Firebase Storage and Firestore clients
bucket = storage.bucket()
db = firestore.client()

# Create 'instagram_images' directory if it doesn't exist
os.makedirs("instagram_images", exist_ok=True)

# Download and process Instagram images
for profile_name in profiles:
    profile = instaloader.Profile.from_username(L.context, profile_name)

    for post in profile.get_posts():
        post_id = post.shortcode  # Use the post's shortcode as a unique identifier

        # Check if the post already exists in the Firestore database
        existing_post = db.collection("events").document(post_id).get()
        if existing_post.exists:
            print(f"Skipping duplicate post: {post_id}")
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
            "imageSrc": image_url
        })

        print(f"Processed {image_name}.jpg")