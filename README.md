# Streamer Post API

This is a `README.md` file for a project that uses Express, Mongoose, and MongoDB to create an API for managing posts from various streamers on different platforms.

## Installation

To run this project, you need to have Node.js and MongoDB installed on your system.

## Getting Started

- npm install

- npm run dev

## Usage

The API provides the following endpoints:

- `POST /streamers` - Create a new post.
- `GET /streamers` - Get all posts.
- `GET /streamers/:streamerId` - Get a specific post by ID.
- `PUT /streamers/:streamerId/:vote` - Vote on a post (upvote or downvote).

## Project Structure

The project structure is as follows:

- `app.js` - Main entry point for the application. Configures the Express server, connects to the database, and sets up routes.
- `router.js` - Defines the routes for the API endpoints.
- `PostController.js` - Implements the controller functions for handling requests.
- `PostService.js` - Implements the service functions for interacting with the database.
- `Post.js` - Defines the Mongoose schema for a post.
