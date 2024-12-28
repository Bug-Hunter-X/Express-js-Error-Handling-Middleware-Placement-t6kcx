# Express.js Error Handling Middleware Placement Issue

This repository demonstrates a common issue in Express.js applications: the incorrect placement of error handling middleware.  Improper placement can lead to errors going unhandled, resulting in crashes or unexpected behavior.  The example showcases the problem and its solution.

## Bug

The `bug.js` file shows the error handling middleware placed before all routes.  This is incorrect, and will not catch any errors thrown by the route handlers.

## Solution

The `bugSolution.js` file demonstrates the correct placement of the error handling middleware. It should always be placed *after* all other route handlers to ensure that all potential errors are caught.