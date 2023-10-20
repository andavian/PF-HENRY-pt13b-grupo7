import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./ProfileUser.module.css";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [favoriteProducts, setFavoriteProducts] = useState([]); // Estado para productos favoritos

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="profilecontainer">
        <div className="profile-dropdown">
          <img
            className="profilepicture"
            src={user.picture}
            alt={user.name}
          />
          <div>
            <h2 className="profilename">{user.name}</h2>
            <p className="profileemail">{user.email}</p>
            <p className="profilecontact">Dirección de envío: 123 Main St, City</p> {/* Agrega más información de contacto si es necesario */}
            <button>Ver Favoritos 👩‍🚀</button>
          </div>
        </div>
      </div>
    )
  );
};

export default Profile;
