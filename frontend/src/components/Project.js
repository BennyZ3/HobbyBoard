import { Link } from "react-router-dom";
import defaultImage from "../helpers/helperFunction";
import "./Project.css";

const Project = (props) => {
  return (
    <Link to={`/projects/${props.details.project_id}`}>
      <div className="Project">
        <img src={props.project_image || ""} alt="" onError={defaultImage} />
        <h3>{props.details.name}</h3>
        <p>{props.details.details}</p>
      </div>
    </Link>
  );
};

export default Project;
