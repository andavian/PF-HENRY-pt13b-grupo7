import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./ProfileUser.module.css";


const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="profile-container">
        <img className="profile-image" src={user.picture} alt={user.name} />
        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-email">{user.email}</p>
        <p className="profile-billing-address">{user.billingaddress}</p>
      </div>
    )
  );
};

export default Profile;
