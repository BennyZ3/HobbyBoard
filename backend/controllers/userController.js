const express = require("express");
const { addNewUser, getAllUsers } = require("../queries/userQueries");

const users = express.Router();

module.exports = users;
//new user POST request
users.post("/", async (request, response) => {
  console.log(`POST request to users for: ${request.body.username}`);
  //likely add an existing user check here before it get to query
  //whenever we build out user lookup
  const newUser = await addNewUser(request.body);
  //check if new username was created/received
  if (newUser.username) {
    response.status(200).json(newUser);
  } else {
    //otherwise respond with an error code
    response.status(400).json("unable to create user");
  }
});

users.get("/", async (request, response) => {
  console.log("Get request to users");
  const allUsers = await getAllUsers();
  response.status(200).json(allUsers);
});

module.exports = users;
