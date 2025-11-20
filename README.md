# Random Quote OOP with API

Welcome to the Random Quotes app. This project consists of a client-side Vanilla JavaScript app and a server-side Express Node.js app

## Running the app in Development Mode

### Run server

1. Navigate to the root directory of the project
2. Open a terminal window.
3. Change directory to the server subfolder:
   `cd server`
4. Install server dependencies by running the following command:
   `npm install --prefix server`
5. Run server in the development mode with hot reload feature:
   `npm run dev`

### Run client

1. Open new terminal window in the root of the project
2. Run client in the development mode with hot reload:
   `npx live-server client`

## Running the app in Production Mode

### Run server

1. Navigate to the root directory of the project
2. Open a terminal window.
3. Change directory to the server subfolder:
   `cd server`
4. Install server dependencies by running the following command:
   `npm install --prefix server`
5. Run server in the production mode:
   `npm start`
6. Configure hosting server where you run application to forward all requests to the http://localhost:3000
7. Take assigned by the hosting provider URL for your backend API server.
   For instance: https://random-quotes-api.com

### Run client

1. There's no need to build the client as it already contains HTML, CSS and JS files
2. In the `client/src/config.js` replace `http://localhost:3000` with URL assigned to the server API in the step 7.In the previous section.
   For instance: `https://random-quotes-api.com`
3. Host all client files from the `client` subfolder on the public web server.
4. Get assigned by the hosting provider URL for your client frontend app.
   For instance: `https://random-quotes-api.com`
5. Open `https://random-quotes-api.com` in the web browser
