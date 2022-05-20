const e = require("express");
const express = require("express");
const projects = express.Router();
const {
  getAllProjects,
  createProject,
  getOneProject,
  deleteProject,
  updateProject,
  updateArchiveStatus,
} = require("../queries/projectsQueries");

//get all project
projects.get("/", async (_, res) => {
  const allProjects = await getAllProjects();
  if (allProjects.length === 0) {
    res.status(404).json({ error: "error" });
  } else {
    res.status(200).json(allProjects);
  }
});

//get one project
projects.get("/:pid", async (req, res) => {
  const { pid } = req.params;
  const singleProject = await getOneProject(pid);
  res.status(200).json(singleProject);
});

//create project
projects.post("/", async (req, res) => {
  const addProject = await createProject(req.body);
  res.status(200).json(addProject);
});

//delete project
projects.delete("/:id", async (req, res) => {
  const removeProject = await deleteProject(req.params.id);
  removeProject.project_id
    ? res.status(200).json(removeProject)
    : res.status(404).json({ error: "error" });
});

//put project
projects.put("/:id", async (req, res) => {
  const update = await updateProject(req.params.id, req.body);
  update.project_id
    ? res.status(200).json(update)
    : res.status(404).json({ error: "error" });
});

//put project Archive status
projects.put("/:id/archive", async (request, response) => {
  const { id } = request.params;
  const currentStatus = await getOneProject(id);
  if (currentStatus.project_id) {
    const updatedStatus = await updateArchiveStatus(
      id,
      !currentStatus.archived
    );
    response.status(200).json(updatedStatus);
  } else {
    response.status(400).json("error: invalid ID");
  }
});

module.exports = projects;
