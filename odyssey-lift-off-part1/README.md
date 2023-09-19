# To Apollo, and Beyond!

Welcome to my local versioin of companion app of Odyssey Lift-off I! I removed the final folder that is usually here as an example to just show my own edits. Made a few light changes to the suggested tutorials for `/server` and `/client` dirs to show some personality, and remind my future self what this is. 

The `/server` mini app also experiements with the [Prettier](https://prettier.io/) linter as there are a few collegues that have been trying to evangelize it's usage. 


# OG docs
You can [find the course lessons and instructions on Odyssey](https://odyssey.apollographql.com/lift-off-part1), Apollo's learning platform.

You can [preview the completed demo app here](https://odyssey-catstronauts.netlify.app/).

## How to use this repo

The course will walk you step by step on how to implement the features you see in the demo app. This codebase is the starting point of your journey!

There are 3 main folders:

- `server`: The starting point of our GraphQL server.
- `client`: The starting point of our React application.
- `final`: The final stage of both the server and client folders, with all of the steps and code completed!

To get started:

1. Navigate to the `server` folder.
1. Run `npm install`.
1. Run `npm start`.

This will start the GraphQL API server.

Dev Note: 
I wanted to try out Prettier since it seems graphql team uses it sometimes. 
To format using prettier: 
1. run `npm run format`
To check the status of current formatting using prettier:
2. run `npm run format:check`

Also just a reminder since we use yarn at SME:
Run the server:
`npm run dev`

In another terminal window,

1. Navigate to the `client` folder.
1. Run `npm install`.
1. Run `npm start`.

This will open up `localhost:3000` in your web browser.

## Getting Help

For any issues or problems concerning the course content, please refer to the [Odyssey topic in our community forums](https://community.apollographql.com/tags/c/help/6/odyssey).
