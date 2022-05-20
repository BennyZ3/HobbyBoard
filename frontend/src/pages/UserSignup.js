import UserSignupForm from "../components/UserSignupForm";
import "./UserSignup.css";

function UserSignup() {
  const user = document.cookie.split("=")[1];
  return (
    <div className="UserSignup">
      {user ? <p>Already signed in as "{user}"</p> : <UserSignupForm />}
    </div>
  );
}

export default UserSignup;
