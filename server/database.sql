CREATE DATABASE quiz;

\c quiz;

CREATE TABLE questions (
    question_id BIGSERIAL NOT NULL,
    question_text TEXT NOT NULL,
    question_subject TEXT NOT NULL
);

-- // Add questions to the database
INSERT INTO questions (question_text, question_subject) VALUES ('What is React.js?', 'React');

CREATE TABLE answers (
    answer_id SERIAL PRIMARY KEY,
    question_id INTEGER NOT NULL,
    answer_text TEXT NOT NULL,
    is_correct BOOLEAN NOT NULL
);

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);
