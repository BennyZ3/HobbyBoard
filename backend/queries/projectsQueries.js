//import the DB variable that we'll be making queries to
const db = require("../db/dbConfig");

//getAllProjects async function
//input(none)
//output array of all projects
const getAllProjects = async () => {
  //try to fetch all items from projects table
  try {
    const allProjects = await db.any("SELECT * FROM projects");
    //return it
    return allProjects;
  } catch (err) {
    //if there's an error, return it.
    return err;
  }
};

//getOneProject
const getOneProject = async (pid) => {
  //try to fetch project using pid
  try {
    const targetProject = await db.one(
      "SELECT * FROM projects WHERE project_id=$1",
      pid
    );
    //return it
    return targetProject;
  } catch (err) {
    //if there's an error, return it.
    return err;
  }
};

//createProject async function
//input(project)
//output new project
const createProject = async (project) => {
  //try to create new project
  try {
    const { name, details, project_image, archived, creator } = project;
    const newProject = await db.one(
      "INSERT INTO projects (name, details, project_image, archived, creator) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, details, project_image, archived, creator]
    );
    //return project
    return newProject;
  } catch (err) {
    //if err, return err
    return err;
  }
};

//deleteProject async function
//input(id)
//output delete project
const deleteProject = async (id) => {
  // try to delete project
  try {
    const removeProject = await db.one(
      "DELETE FROM projects WHERE project_id=$1 RETURNING *",
      id
    );
    //return removeProject
    return removeProject;
  } catch (err) {
    //if err, return err
    return err;
  }
};

//updateProject function
//input(id, project)
//output updated project
const updateProject = async (id, project) => {
  //try to update project
  try {
    const { name, details, project_image, archived } = project;
    const update = await db.one(
      "UPDATE projects SET name=$2, details=$3, project_image=$4, archived=$5 WHERE project_id=$1 RETURNING *",
      [id, name, details, project_image, archived]
    );
    //return update
    return update;
  } catch (err) {
    //if err, return err
    return err;
  }
};

//export query functions
module.exports = {
  getAllProjects,
  createProject,
  getOneProject,
  deleteProject,
  updateProject,
};
