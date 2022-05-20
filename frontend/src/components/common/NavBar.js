import { useNavigate } from "react-router-dom";
import TopBarM from "./TopBarM";
import plus from "../../assets/circle-plus.svg";
import profile from "../../assets/profile-circled.svg";
import settings from "../../assets/settings.svg";
import signIn from "../../assets/sign-in.svg";
import signOut from "../../assets/sign-out.svg";
import home from "../../assets/home.svg";
import "./NavBar.css";

const NavBar = () => {
  const nav = useNavigate();

  const handleCreateProject = () => {
    nav("/projects/new");
  };

  const handleSignIn = () => {
    nav("/signIn");
  };

  const handleProfile = () => {
    nav("/profile");
  };

  const handleSignOut = () => {
    document.cookie = "credentials=";
    nav("/");
  };

  const handleProjects = () => {
    nav("/projects");
  };

  return (
    <nav className="Nav">
      <TopBarM />
      <img onClick={handleProfile} src={profile} alt="Profile" />
      <img src={settings} alt="settings" />
      <img onClick={handleProjects} src={home} alt="home" />
      <img onClick={handleCreateProject} src={plus} alt="Add Project" />
      {document.cookie.split("=")[1] ? (
        <img onClick={handleSignOut} src={signOut} alt="Sign Out" />
      ) : (
        <img onClick={handleSignIn} src={signIn} alt="Sign In" />
      )}
    </nav>
  );
};

export default NavBar;
