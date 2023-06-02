# Slug Events

## Inspiration

Have you ever seen a flyer for a super cool event on campus only to realize it was yesterday? Slug Events aims to helps students get to events they want to go to.

## What it does

SlugEvents gets data from the Instagram pages from all the colleges on campus. It uses an instagram scraper to get all the metadata from the college instagram pages.

Next it uses OpenAI API with GPT-3 to clean the metadata from the scrapper. This includes: post descriptions, event start time, event end time, location, and instagram post image.

To get a more accurate location, we feed that information through google maps to get precise coordinates for events. It then stores the fully parced data into firebase, and our front end interacts with the database to display info in a user friendly way.

SlugEvents also uses the Google Maps API to display your current location, and events happening on campus around you at their precise locations.

## How we built it

Frontend: React, MaterialUI, Next.js
Backend: Node.js, Express.js, Firebase
APIs: Instagram Scrapper API, OpenAI API with GPT-3, Google Maps API

## Challenges we ran into

This was several member's first time doing web development so we had to learn the entire tech-stack from scratch. We also ran into issues with the instagram scraper and firebase not storing images correctly, and determining how to get metadata from instagram posts. We ran into some unexpected issues with styling especially when it came to different sized displays. Additionally we had an error with our maps page that would cause a large amount of read/writes in our google cloud firebase.

## Accomplishments that we're proud of

We're proud to have successfully completed a web application while learning the entire tech stack together. Additionally we're proud we were able to integrate GPT-3 as a multitool that solved our instagram metadata concerns.

## What we learned

## What's next for SlugEvents
