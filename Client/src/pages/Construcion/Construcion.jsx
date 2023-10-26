import React from "react";
import style from "./Construcion.module.css";
import roket from "../../images/Recurso 1.png"; // Importa el archivo CSS
const Construccion = () => {
  return (
    <div className={style.container}>
     <img src={roket} alt="img" className={style} />
     
      <h6 className={style.title}>¡Mensaje de la estacion espacial!</h6>

      <h1>Esta página se encuentra en mantenimiento.</h1>

      <p>
        No te preocupes, estamos trabajando para mejorar tu experiencia. Puedes
        regresar a la <a href="../Home">página de inicio</a>.
      </p>
    </div>
  );
};

export default Construccion;
