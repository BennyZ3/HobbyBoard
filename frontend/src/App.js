import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import New from "./pages/New";
import AllProjects from "./pages/AllProjects";
import ProjectDetails from "./pages/ProjectDetails";
import NavBar from "./components/common/NavBar";
import TopBarM from "./components/common/TopBarM";
import UserSignup from "./pages/UserSignup";
import UserSignIn from "./pages/UserSignIn";
import Profile from "./pages/Profile";
import EditP from "./pages/EditP";
import EditProjectPage from "./pages/EditProjectPage";

function App() {
  const [res, setRes] = useState("Loading...");
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const testQuery = async () => {
      const response = await axios.get(URL);
      setRes(response.data);
    };

    testQuery();
  }, [URL]);
  return (
    <div className="App">
      <main>
        <TopBarM />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <header className="App-header">
                <Link to="/projects">
                  <p>All Project</p>
                </Link>
                <img src={logo} className="App-logo" alt="logo" />
                <p>Here is our database call = {res}</p>
              </header>
            }
          />
          <Route path="/signIn" element={<UserSignIn />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/projects/:pid" element={<ProjectDetails />} />
          <Route path="/projects/:pid/edit" element={<EditProjectPage />} />
          <Route path="/projects/new" element={<New />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/profile/editProfile" element={<EditP />} />
        </Routes>
        <NavBar />
      </main>
    </div>
  );
}

export default App;
