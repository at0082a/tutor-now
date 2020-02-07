const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express(); 
const mysql = require('mysql');
const SQL = require('sql-template-strings'); 

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'gsoccer-1',
  database: '2TRNOW'
});

app.use(bodyParser.json());
app.use(cors());

// GET Routes

app.get("/", (req, res) => {
  res.send("Hello World");
});

//add student user to DB
app.post("/register", (req, res) => {

  //the data variable stores the userinfo object from the front end
  let data = req.body.newUser;
  let { email, password, location, birthdate, name, schoolProgram, specialty } = data;

  if (schoolProgram) {
    connection.connect(function(err) {
      if (err) throw err;
        console.log("Connected!");
          connection.query(SQL`INSERT INTO student (username, location, dob, password, email, school_program) VALUES (${name}, ${location}, ${birthdate}, ${password}, ${email}, ${schoolProgram})`, function (err, result) {
            if (err) throw err;
              console.log("1 record inserted in student");
            });
          });
  } if (specialty) {
      connection.connect(function(err) {
      if (err) throw err;
        connection.query(SQL`INSERT INTO tutor (username, location, dob, password, email, specialty) VALUES (${name}, ${location}, ${birthdate}, ${password}, ${email}, ${schoolProgram})`, function (err, result) {
          if (err) throw err;
            console.log("1 record inserted in tutor");
          });
        });
    }
  res.send("db updated with new user!!!!");
});

//edit student user in DB
app.put("/register/:id", (req, res) => {
  res.send({type: 'PUT'});
});

//delete student user from DB
app.delete("/register/:id", (req, res) => {
  res.send({type: 'DELETE'});
});

app.listen(process.env.PORT || 8080);
console.log(`Express running → PORT 8080`);