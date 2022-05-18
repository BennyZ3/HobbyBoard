import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Img } from "react-image";

const ProfileDetails = (props) => {
  const API = process.env.REACT_APP_API_URL;
  const [user, setUser] = useState([]);
  const params = useParams();
  useEffect(() => {
    axios
      .get(`${API}profile/${params.pid}`)
      .then((response) => setUser(response.data))
      .catch((error) => console.warn(error));
  }, [API, params.pid]);

  return (
    <div className="ProfileDetails">
      <Img
        src={[
          props.project_image,
          "https://redzonekickboxing.com/wp-content/uploads/2017/04/default-image.jpg",
        ]}
        alt=""
      />
      <h2>{user.username}</h2>
      <p>{user.details}</p>
      {/* user resources */}
    </div>
  );
};

export default ProfileDetails;
