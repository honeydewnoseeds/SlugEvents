import os
from instagrapi import Client
from google.cloud import firestore

# Firestore setup
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'slugevents-57e0b-firebase-adminsdk-brd1a-dcc2a15087.json'
db = firestore.Client()

# Instagram login
username = "slugevents"  # Replace with your username
password = "slugslugslug"  # Replace with your password

cl = Client()
cl.login(username, password)

user_id = cl.user_id_from_username("cowell.ucsc")
medias = cl.user_medias(user_id, 20)

for media in medias:
    # Create a document with media ID as its identifier
    doc_ref = db.collection("events").document(str(media.pk))

    # Prepare the data to be stored in Firestore
    data = {
        "account": "cowell.ucsc",
        "imageSrc": media.thumbnail_url,
        "description": media.caption_text,
        "date_posted": media.taken_at,
    }

    # Store the data in Firestore
    doc_ref.set(data)

    # Print the data for debugging purposes
    print(data)
    print("------")