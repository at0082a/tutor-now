CREATE DATABASE 2trNow;
\c 2trNow

DROP TABLE IF EXISTS student CASCADE;
DROP TABLE IF EXISTS tutor CASCADE;
DROP TABLE IF EXISTS student_rating CASCADE;
DROP TABLE IF EXISTS tutor_rating CASCADE;
DROP TABLE IF EXISTS student_request CASCADE;
DROP TABLE IF EXISTS tutoring_session CASCADE;

CREATE TABLE student(
    id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(20) NOT NULL,
    location VARCHAR(20) NOT NULL,
    email    VARCHAR(1000) NOT NULL,
    password VARCHAR(1000) NOT NULL,
    school_program VARCHAR (20) NOT NULL,
     -- need to add image category***
    dob DATE NOT NULL,
    student_rating_id INTEGER REFERENCES student_rating(id) ON DELETE CASCADE
);

CREATE TABLE tutor(
    id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(20) NOT NULL,
    email VARCHAR(1000) NOT NULL,
    location VARCHAR(1000) NOT NULL,
    specialty VARCHAR(20) NOT NULL,
    dob DATE NOT NULL,
    tutor_rating_id INTEGER REFERENCES tutor_rating(id) ON DELETE CASCADE
);


CREATE TABLE student_rating(
    id SERIAL PRIMARY KEY NOT NULL,
    student_id INTEGER REFERENCES student(id) ON DELETE CASCADE,
    tutoring_session_id INTEGER REFERENCES tutoring_session(id) ON DELETE CASCADE,
    description VARCHAR(2000) NOT NULL,
    rating INTEGER NOT NULL
);

CREATE TABLE tutor_rating(
    id SERIAL PRIMARY KEY NOT NULL,
    tutor_id INTEGER REFERENCES tutor(id) ON DELETE CASCADE,
    description VARCHAR(1000) NOT NULL,
    rating INTEGER NOT NULL
);

CREATE TABLE student_request(
    id SERIAL PRIMARY KEY NOT NULL,
    student_id INTEGER REFERENCES student(id) ON DELETE CASCADE,
    subject VARCHAR(100) NOT NULL,
    topic VARCHAR(100) NOT NULL,
    description VARCHAR(1000) NOT NULL,
    language VARCHAR(20) NOT NULL,
    session_length INTEGER NOT NULL
);


CREATE TABLE tutoring_session(
    id SERIAL PRIMARY KEY NOT NULL,
    student_id INTEGER REFERENCES student(id) ON DELETE CASCADE,
    tutor_id INTEGER REFERENCES tutor(id) ON DELETE CASCADE,
    tutor_rating_id INTEGER REFERENCES tutor_rating(id) ON DELETE CASCADE,
    student_rating_id INTEGER REFERENCES student_rating(id) ON DELETE CASCADE,
    session_time TIME NOT NULL,
    session_date DATE NOT NULL
);




