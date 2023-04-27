// npm install scraper-instagram firebase-admin
const InstagramScraper = require("scraper-instagram");
const admin = require("firebase-admin");

// Initialize the Firebase Admin SDK
const serviceAccount = require("./path/to/your/firebaseServiceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

const scraper = new InstagramScraper({
  // No credentials are needed for public scraping
});

async function scrapeAndSaveToFirestore(username) {
  try {
    // Scrape the posts from the specified Instagram account
    const posts = await scraper.getUser(username);

    // Save each post to the Firestore database
    for (const post of posts) {
      const imageUrl = post.media.url;
      const metadata = {
        // Add any other metadata fields you want to store
        caption: post.caption,
        timestamp: post.timestamp,
      };

      // Save the image URL and metadata to the Firestore database
      await db.collection("instagramImages").add({
        imageUrl,
        metadata,
      });
    }

    console.log("Scraped and saved posts to Firestore.");
  } catch (error) {
    console.error("Error scraping user and saving to Firestore:", error);
  }
}

// Scrape images from the ucsc9_jrl Instagram account
scrapeAndSaveToFirestore("ucsc9_jrl");
