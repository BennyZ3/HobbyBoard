import NewProject from "../components/NewProjects";
import "./New.css";

const New = () => {
  return (
    <div className="NewProjectPage">
      {document.cookie.split("=")[1] ? (
        <NewProject />
      ) : (
        <p>Please Sign in to create a project!</p>
      )}
    </div>
  );
};

export default New;
