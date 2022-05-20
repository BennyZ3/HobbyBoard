import { useParams } from "react-router-dom";
import ProfileDetails from "../components/ProfileDetails";
import './Profile.css'

const Profile = () => {
  //fetch username from cookies
  let user = document.cookie.split("=")[1];
  let { username } = useParams();
  if (username) {
    user = username;
  }

  //pass in username to ProfileDetails

  return (
    <div className="Profile">
      <ProfileDetails username={user} />
    </div>
  );
};

export default Profile;
