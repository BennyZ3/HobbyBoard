import ProfileEdit from "../components/ProfileEdit";
import './EditProfile.css'

const EditP = () => {
  const user = document.cookie.split("=")[1];
  return (
    <div className="EditProfile">
      <ProfileEdit username={user} />
    </div>
  );
};

export default EditP;
