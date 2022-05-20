//import css
import "./TopBarM.css";

//import back button
import BackButton from "./BackButton.js";

//import useNavigate
import { useNavigate } from "react-router-dom";

//import defaultImage

import defaultImage from "../../helpers/helperFunction.js";

const TopBarM = () => {
  //set variable for navigate
  const nav = useNavigate();

  //create function to handle home logo
  const handleHome = () => {
    nav("/");
  };

  return (
    <div className="TopBarM">
      <BackButton />
      <img
        src={""}
        alt="HobbyBoard Logo"
        className="topLogo"
        onError={defaultImage}
        onClick={handleHome}
      />
    </div>
  );
};

//export our component
export default TopBarM;
