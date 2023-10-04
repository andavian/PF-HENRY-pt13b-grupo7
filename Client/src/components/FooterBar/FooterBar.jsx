import React from "react";
import { Link } from "react-router-dom";
import styles from "./FooterBar.module.css";
import Footer from "../../components/Footer/Footer"; // Importa los estilos CSS Module

export default function FooterBar() {
  return (
    <div className={styles["footer-container"]}>
  
      <Link to="#" className={styles["footer-item"]}>
        Política de Privacidad | Términos y Condiciones
      </Link>
      <div className={styles["footer-item"]}>
        <p>Henry © 2023 | Todos los derechos reservados.</p>
      </div>
      <div className={styles["footer-item"]}>
        <p>Hecho con ❤️ por alumnos de Henry.</p>{" "}
        {/* Aquí se utiliza el emoji de corazón */}
      </div>
    </div>
  );
}
