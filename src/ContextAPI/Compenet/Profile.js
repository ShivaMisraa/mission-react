import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <h1>Please Login</h1>;

  return <h1>Welcome</h1>;
};

export default Profile;
