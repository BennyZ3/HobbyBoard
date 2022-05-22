import ProfileEdit from "../components/ProfileEdit";
import "./EditProfile.css";

const EditP = () => {
  const user = document.cookie.split("=")[1];
  return (
    <div className="EditProfile">
      {user ? (
        <ProfileEdit username={user} />
      ) : (
        <p>Please sign in to edit your profile!</p>
      )}
    </div>
  );
};

export default EditP;
