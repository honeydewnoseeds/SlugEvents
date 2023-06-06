# Slug Events

## Installation/Usage Instructions

Try our app [here](slug-events-3bpt.vercel.app/)

```
git clone https://github.com/honeydewnoseeds/SlugEvents.git
cd SlugEvents
npm install --force
cd client
npm start
```

You may need to install the following libraries:

```
pip install datetime
pip install instaloader
pip instsall firebase
pip install openai
```
## Unit Tests/Automated Tests

Tests are located in the following directory
```
client/src/Components/__tests__
```

To run the tests run
```
npm run test
```

## Inspiration

Have you ever seen a flyer for a super cool event on campus only to realize it was yesterday? Slug Events aims to increase campus participation overall.

## What it does

SlugEvents gets data from the Instagram pages from all the colleges on campus. It uses an instagram scraper to get all the metadata from the college instagram pages.

Next it uses GPT-3.5 to extract post descriptions, event start time, event end time, and location from the instagram post description.
We then use Google Maps' API to standardize location names and extract exact coordinates. It then uploads the parsed data into firebase, and our front-end populates with events from firestore to display info in a user friendly way.

SlugEvents also uses the Google Maps API to display your current location, and events happening on campus around you at their precise locations.

## How we built it

- Frontend: React, MaterialUI, Next.js
- Backend: Node.js, Firebase
- APIs/Tools: Instaloader Library, OpenAI API with GPT-3.5, Google Maps API
- Deployment: Vercel

## Challenges we ran into

This was several members' first time doing web development so we had to learn the entire tech-stack from scratch. We also ran into issues with the instagram scraper and firebase not storing images correctly, and determining how to get metadata from instagram posts. We ran into some unexpected issues with styling especially when it came to different sized displays. Additionally we had an error with our maps page that would cause a large amount of read/writes in our google cloud firebase.

## Accomplishments that we're proud of

We're proud to have successfully completed a web application while learning the entire tech stack together. We were able to create a consistent design theme that looks good for users. Additionally we're proud we were able to integrate GPT-3.5 as a multitool that solved our instagram metadata concerns.

## What we learned

We learned about the Scrum framework and scrum practices. We all learned basic web development. Additionally we all learned how to use the technologies:

- React
- Node.js
- Firebase
- OpenAI API
- Google Maps API
- Instaloader Library
- Material UI
- Git/Version Control

## What's next for SlugEvents

Some features we want to implement for the future:

- Create An Event Feature
- User Accounts
- Filtering college events in the map view
- Upvoting/Downvoting popular events
- Sending events to personal google calendar
- Displaying event descriptions on map markers
- Map view zoomed in on a location based on what college filters are chosen
- Filter what events show on map view based on college
