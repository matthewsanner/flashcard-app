# ✨Flashy- A friendly Flashcard app 📝

## Overview

Flashy is an app for learners to create simple flashcards and organize them in sets to help with memorization and recall for language learning or any other type of learning or testing. As a Spanish learner myself, I made it to help me with vocabulary, but also to show that I can make a full-stack app that's both functional and aesthetic.

## Project Architecture
Flashy uses Node.js with Express server for the backend and the frontend is rendered by EJS templates in the views folder. Authentication, authorization, and account creation is handled by Passport. It connects with a Mongo database, and uses Mongoose to interact with it and create schemas which are in the models folder. It also use JOI and Helmet for security- to avoid some of the most common types of attacks.

App.js is the main file and requests are sent through to the routes folder and then the controllers for detailed handling. It has full CRUD (create, read, update, and delete) functionality.


## Installation

If you would like to install Flashy locally, make sure you first have [Node.js](https://nodejs.org/en/download) installed on your system, which includes npm. You should also have a Github account so that you can fork the repo from this page and then clone your fork to your local system.

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-FORKED-REPOSITORY-NAME
```
Then you should install all dependencies locally.

```bash
npm install
```
You should also [install a local version](https://www.mongodb.com/docs/manual/installation/) of MongoDB or else set up a hosted database at [MongoDB Atlas](https://www.mongodb.com/atlas/database). Note the address of your database.

## Usage

You will want to create a local .env file filling in the values with your own.

```yaml
## .env file
## locally hosted database address may look something like this- mongodb://localhost:27017/your-database-name
DB_URL=YOUR-DATABASE-ADDRESS 
## can be any secret you like
SECRET=YOUR-SECRET
## 3000 is commonly used here
PORT=DESIRED-PORT
```

To host the app locally, you should launch the main javascript file using npm.

```bash
npm start
```

## Roadmap
Features I would like to add:
- AI assistance
- add features to account pages like personalization, account info
- recreate with a React frontend
- move button styles away from standard Bootstrap

## Contributing

Flashy has been entirely created by me thus far. If anyone is interested in contributing to this project, let's start with a conversation and then we could proceed to making an issue and I'd be happy to accept pull requests that fit well with the project!

Reach out to me at [matthewsannerdev@gmail.com](mailto:matthewsannerdev@gmail.com) with any questions, ideas, etc.!

## License

[MIT](https://choosealicense.com/licenses/mit/)
