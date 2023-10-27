// Importa tus estilos desde el módulo CSS
import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./ProfileUser.module.css";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const userStorage = JSON.parse(localStorage.getItem("userData"))

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className={styles.container}>
        <div className={styles.profilecontainer}>
          <h3 className={styles.profilename}>¡Hola, {user.name}!</h3>
          <img className={styles.profilepicture} />

          <p className={styles.text}>
            Nos alegra tenerte con nosotros. Queremos asegurarnos de que tu
            experiencia sea personalizada y completa. Por favor, revisa la
            información proporcionada a continuación:
          </p>

          <p className={styles.text}>Correo electrónico:</p>

          <h3 className={styles.profileemail}>{user.email}</h3>
          <p className={styles.text}>
            Para que tu perfil esté totalmente configurado y disfrutes al máximo
            de nuestros productos, te invitamos a hacer clic en el siguiente
            enlace:
          </p>
          <Link to={"/registration"} className={styles.button}>
            Click aquí para completar tu perfil
          </Link>
        </div>
      </div>
    )
  );
};

export default Profile;
