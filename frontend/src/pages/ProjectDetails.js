import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Img } from "react-image";
import "./ProjectDetails.css";

const ProjectDetails = (props) => {
  const API = process.env.REACT_APP_API_URL;
  const [project, setProject] = useState([]);
  const params = useParams();
  const nav = useNavigate();
  // console.log(`${API}projects/${params.pid}`);
  useEffect(() => {
    axios
      .get(`${API}projects/${params.pid}`)
      .then((response) => setProject(response.data))
      .catch((error) => console.warn(error));
  }, [API, params.pid]);

  // could move the handleArchive and button to its own component
  // if we plan on having it in more than one place
  const handleArchive = () => {
    axios
      .put(`${API}projects/${params.pid}/archive`)
      //should reupdate the state if we want it view on this page
      // or can just let the response be nothing
      .then((response) => setProject(response.data))
      .catch((error) => console.warn(error));
  };

  const handleEdit = () => {
    nav("/projects/" + params.pid + "/edit");
  };

  const handleViewProfile = () => {
    nav("/profile/" + project.creator);
  };

  return (
    <div className="ProjectDetails">
      <Img
        src={[
          project.project_image,
          "https://redzonekickboxing.com/wp-content/uploads/2017/04/default-image.jpg",
        ]}
        alt="Project Banner"
        className="pBanner"
      />
      <h2>{project.name}</h2>
      <h3 onClick={handleViewProfile}>Project Owner: {project.creator}</h3>
      <h3>Details:</h3>
      <p>{project.details}</p>
      {/* Archive Project Button */}
      <p>Archived: {`${project.archived}`}</p>
      <button onClick={handleArchive}>Archive</button>
      <button onClick={handleEdit}>Edit</button>
      {/* Edit Project Page Button for authorized users */}
      {/* Delete Project Button */}
      {/* Links/Resources */}
      {/* {project.links.map((link) => {
                return <a href={link}>{link}</a>
            })} */}
      {/* Contributors */}
    </div>
  );
};

export default ProjectDetails;
