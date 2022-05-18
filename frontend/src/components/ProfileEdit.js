import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ProfileEdit = () => {
  const { pid } = useParams();
  const navigator = useNavigate();
  const API = process.env.REACT_APP_API_URL;
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    details: "",
  });

  useEffect(() => {
    axios.get(`${API}/profile`).then((response) => setUser(response.data));
  }, [API, pid]);

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.pid]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`${API}/profile`, user).then(() => navigator(`/profile`));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username:</label>
        <input
          id="username"
          type="text"
          value={user.username}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password:</label>
        <textarea
          id="password"
          type="text"
          value={user.password}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          value={user.email}
          onChange={handleChange}
        />
        <label htmlFor="details">Details:</label>
        <input
          id="details"
          type="text"
          value={user.details}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ProfileEdit;
