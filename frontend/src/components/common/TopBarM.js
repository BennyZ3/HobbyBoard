//import Img
import { Img } from "react-image";

//import css
import "./TopBarM.css";

//import back button
import BackButton from "./BackButton.js";

const TopBarM = () => {
  return (
    <div className="TopBarM">
      <BackButton />
      <Img
        src={[
          "Our_Logo_Img",
          "https://redzonekickboxing.com/wp-content/uploads/2017/04/default-image.jpg",
        ]}
        alt="HobbyBoard Logo"
        className="topLogo"
      />
    </div>
  );
};

//export our component
export default TopBarM;
