# LabelBlind Frontend Task - Twitter Timeline UI

This small project demonstrates a simple Twitter-like timeline built with React. It was created as part of LabelBlind's frontend recruitment assignment. A live demo is hosted on [Netlify](https://labelblind-twitter.netlify.app/).

The timeline displays sample posts fetched from [JSONPlaceholder](https://jsonplaceholder.typicode.com/), an open-source fake REST API maintained by [Typicode](https://github.com/typicode). The JSON dataset is pulled directly from Typicode's GitHub repo because the original Mocky API previously used by this project is now offline.

## Features

- Displays posts from the JSONPlaceholder data feed in a Twitter-style UI
- Navigation to individual tweet pages
- Display of tweet images
- Filtering by date range
- Liking a tweet on the individual view (tweet id stored in local storage)

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
3. Run tests (none are included by default but React scripts will run):
   ```bash
   npm test -- --watchAll=false --passWithNoTests
   ```

