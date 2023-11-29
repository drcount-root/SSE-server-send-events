# The use case

This is a minimalist real-time dashboard with a page that displays the total donation collected. Every time a new user makes a donation, the total of users and the donation amount will be updated without the page reload.

## Backend Architecture

The backend will have two endpoints:

> 1. [POST] `/donate`: Make a donation
> 2. [STREAM] `/dashboard`: Receive updates about the donation collected (GET)

The frontend application will connect the endpoint /dashboard to receive updates.

## Backend dependencies & starting up the backend

>#### To Initialize Backend
>1. `/backend$ npm init -y`
>#### To install and initialize in the Typescript
>2. `/backend$ npm install --save-dev typescript ts-node`
>3. `/backend$ npx tsc --init`
>#### To install Express framework and the package to configure CORS
>4. `/backend$ npm install express cors`
>5. `/backend$ npm install --save-dev @types/express @types/cors`
>#### Backend Start up guide
>6. `/backend$ npm start`