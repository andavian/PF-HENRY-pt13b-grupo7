import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./ProfileUser.module.css";


const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const userStorage = JSON.parse(localStorage.getItem("userData"))

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
        {!userStorage.billingaddress ?
        <a href="http://localhost:3000/registration"> Click aquí para completar tu perfil </a> :
        <a href="http://localhost:3000/home"> Sigue navegando tu perfil esta completo </a>
        }
        
      </div>
    )
  );
};

export default Profile;
