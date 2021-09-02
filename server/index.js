const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "ArtHub",
});

app.post("/signup/create", (request, response) => {
  const emailAddress = request.body.emailAddress;
  const password = request.body.password;
  const username = request.body.username;
  const firstName = request.body.firstName;
  const lastName = request.body.lastName;
  console.log(request.body);

  db.query(
    "INSERT INTO Users (email_address, password, username, first_name, last_name) VALUES (?,?,?,?,?)",
    [emailAddress, password, username, firstName, lastName],
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        response.send("Successfully created!");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("server 3001");
});
