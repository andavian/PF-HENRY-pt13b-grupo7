import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Profile.css";

const Profile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (!isLoading && isAuthenticated && user) {
      // El usuario está autenticado, user está disponible y la carga ha terminado
      sendUserDataToBackend(user);
    }
  }, [isLoading, isAuthenticated, user]);

  console.log("usuario", user); // Deberías ver los datos del usuario aquí
  const sendUserDataToBackend = async (userData) => {
    try {
      const response = await axios.post("/users", userData);
      console.log(response.data);
      return response.data;
    } catch (error) {
      alert("Error al enviar los datos al servidor:", error);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    isAuthenticated && (
      <div className="profilecontainer">
        <div className="profile-dropdown">
          <img
            onClick={toggleDropdown}
            className="profilepicture"
            src={user.picture}
            alt={user.name}
          />
          {isDropdownOpen && (
            <div className="dropdown-content">
              <ul class="separtador">
                <li>
                  <Link to="/admin">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-gear-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                    </svg>
                    Admin Panel
                  </Link>
                </li>
                <li>
                  <Link to="/profile">Perfil</Link>
                </li>
              </ul>

              <ul class="conteinerList">
                <li>
                  <Link onClick={() => logout()}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-door-open-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
                    </svg>
                    Cerrar sesión
                  </Link>
                </li>
              </ul>

              {/* Agrega más elementos del menú según sea necesario */}
            </div>
          )}
        </div>
        <div>
          <h2 className="profilename">{user.name}</h2>
          <p className="profileemail">{user.email}</p>
        </div>
      </div>
    )
  );
};

export default Profile;
