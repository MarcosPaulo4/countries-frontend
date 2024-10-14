Frontend Project

Description
This repository contains the frontend for the NestJS Starter project. It is built using React with TypeScript and Material-UI for styling.

Project Setup
Prerequisites
Node.js (version 14 or higher)
Yarn or npm

Set up environment variables by copying .env.example to .env:
cp .env.example .env

Install the project dependencies:
yarn install
# or
npm install

Run the project:
yarn start
# or
npm start


Run Modes
Development
To run the project in development mode:
yarn start

Build for Production
To build the project for production:

yarn build

The production build will be located in the /build folder.

Serve Production Build Locally
To serve the production build locally:

yarn global add serve
serve -s build


Technologies Used
React - A JavaScript library for building user interfaces.
TypeScript - A strongly typed programming language that builds on JavaScript.
Material-UI - A popular React UI framework.
Axios - For handling HTTP requests.
React Router - For routing between different views.
Useful Commands
Generate a new component: Follow your project’s structure to create a new component in src/components/.
Start the development server: yarn start
Build the project for production: yarn build
# countries-frontend
