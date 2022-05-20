import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewProject.css";

const NewProject = () => {
  const navigator = useNavigate();
  const API = process.env.REACT_APP_API_URL;
  const [project, setProjects] = useState({
    name: "",
    details: "",
    project_image: "",
    archived: false,
    creator: document.cookie.split("=")[1],
  });

  const handleChange = (event) => {
    setProjects({ ...project, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${API}projects`, project).then(() => navigator("/projects"));
  };

  return (
    <form className="NewProjectForm" onSubmit={handleSubmit}>
      <div className="project-name-input">
        <label htmlFor="name">Project Name</label>
        <input
          id="name"
          type="text"
          placeholder="Name"
          onChange={handleChange}
          required
        />
      </div>
      <div className="project-description-input">
        <label htmlFor="details">Description</label>
        <textarea id="details" type="text" onChange={handleChange} required />
      </div>
      <div className="project-image-input">
        <label className="project-image" htmlFor="project_image">
          Image
        </label>
        <input id="project_image" type="text" onChange={handleChange} />
      </div>

      <input type="submit" />
    </form>
  );
};

export default NewProject;
