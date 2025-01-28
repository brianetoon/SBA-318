# SBA 318 - Express Server Application

## Project Summary

The purpose of this project is to demonstrate understanding of Node and Express by creating a RESTful API, creating and using Express middleware and making use a templte engine to render views with Express. A detailed list of requirements is provided below.

## Objectives

- Create a server application with Node and Express.
- Create a RESTful API using Express.
- Create Express middleware.
- Use Express middleware.
- Use a template engine to render views with Express.
- Interact with a self-made API through HTML forms.

## Project Requirements

- Create and use at least two pieces of custom middleware.
- Create and use error-handling middleware.
- Use at least three different data categories (e.g., users, posts, or comments).
- Utilize reasonable data structuring practices.
- Create GET routes for all data that should be exposed to the client.
- Create POST routes for data, as appropriate. At least one data category should allow for client creation via a POST request.
- Create PATCH or PUT routes for data, as appropriate. At least one data category should allow for client manipulation via a PATCH or PUT request.
- Create DELETE routes for data, as appropriate. At least one data category should allow for client deletion via a DELETE request.
- Include query parameters for data filtering, where appropriate. At least one data category should allow for additional filtering through the use of query parameters.
- Utilize route parameters, where appropriate.
- Adhere to the guiding principles of REST.
- Create and render at least one view using a view template and template engine. This can be a custom template engine or a third-party engine.
- Use simple CSS to style the rendered views.
- Include a form within a rendered view that allows for interaction with your RESTful API.
- Utilize reasonable code organization practices.
- Ensure that the program runs without errors.
- Include a README file that contains a description of your application.

## Application Details

This project that centers around building a RESTful API using Express. The core functionality revolves around creating, retrieving, updating, and deleting recipes, as well as posting and managing comments for each recipe. The API integrates with a mock database and supports various HTTP methods, providing users with a flexible interface to interact with the recipe data.

The project also includes a temporary front-end, created to demonstrate the interaction with the API, but the main focus was on building the Express-based REST API. Features such as validation, error handling middleware, and clean, maintainable routing structure were prioritized. The front-end will evolve, and more advanced user interface features will be implemented later as well as a MongoDB database.