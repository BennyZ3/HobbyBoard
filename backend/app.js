// DEPENDENCIES
const cors = require("cors");
const express = require("express");

//IMPORT QUERIES
const { testQuery } = require("./queries/testQuery");
const projectsControllers = require("./controllers/projectControllers");
const userController = require("./controllers/userController");
const connectionsController = require("./controllers/connectionsController")

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.use("/projects", projectsControllers);
app.use("/users", userController);
app.use("/connections", connectionsController)

//async, so we can use query correctly
app.get("/", async (req, res) => {
  //use query function to get data from db
  const exampleData = await testQuery();
  res.send(exampleData.content);
});

// EXPORT
module.exports = app;
