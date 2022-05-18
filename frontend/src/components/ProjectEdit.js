import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProjectEdit = () => {
  const { pid } = useParams();
  const navigator = useNavigate();
  const API = process.env.REACT_APP_API_URL;
  const [project, setProject] = useState({
    name: "",
    details: "",
    project_image: "",
    archived: false,
  });

  useEffect(() => {
    axios
      .get(`${API}/projects/${pid}`)
      .then((response) => setProject(response.data));
  }, [API, pid]);

  const handleChange = (event) => {
    setProject({
      ...project,
      [event.target.pid]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/projects/${pid}`, project)
      .then(() => navigator(`/projects/${pid}`));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Project Name</label>
        <input
          id="name"
          type="text"
          value={project.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="details">Description</label>
        <textarea
          id="details"
          type="text"
          value={project.details}
          onChange={handleChange}
          required
        />
        <label htmlFor="project_image">Image</label>
        <input
          id="project_image"
          type="text"
          value={project.project_image}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ProjectEdit;
