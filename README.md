# quiz

## Description

This is a quiz application that allows users to test their knowledge on various topics.

## Instructions

### Client Instructions

1. Clone the repository to your local machine.
2. Install the necessary dependencies by running `npm install`.
3. Start the application by running `npm run start`.
4. Open your web browser and navigate to `http://localhost:5173`.
5. You will be presented with a series of questions.
6. Select the correct answer for each question.
7. After answering all the questions, you will receive your quiz score.
8. Enjoy and challenge yourself with different quizzes!

## Database Instructions

To set up the database, follow these steps:

1. Open a new terminal window.
2. Navigate to the server directory of the project.
3. create a `.env` file in the root of the project and add the content of the .env.temp file to it (console.log the values to validate). If there is any other .env file in the root of the project, delete it to avoid conflicts.
4. in the terminal run the following command to create an user in the database: psql -U postgres
5. after that, run "ALTER USER mockUser CREATEDB;" to create a database with the user mockUser (this is the user that the server will use to connect to the database and you can use any value, mockUser is just an example)
6. run the command "migrate-database": "prisma migrate dev --preview-feature" in order to create the tables in the database

## Server Instructions

To run the server locally, follow these steps:

1. Open a new terminal window.
2. Navigate to the server directory of the project.
3. Add a `.env` file in the root of the project and add the content of the `.env.temp` file to it.
4. Check for any environment variables that need to be updated (JWT, ).
5. Run the command `npm run start` to start the server.
6. The server will start running on `http://localhost:3000`.
7. You can now access the quiz application by opening your web browser and navigating to `http://localhost:5173`.

Note: Make sure you have already installed the necessary dependencies by running `npm install` before starting the server.
