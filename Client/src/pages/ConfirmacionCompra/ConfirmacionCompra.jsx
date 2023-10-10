import React from "react";
import style from "./ConfirmacionCompra.module.css";
import check from "../../images/green-checkmark-transparent-17.png"; // Importa el archivo CSS
const Confirmacion = () => {
  return (
    <div className={style.container}>
    <img src={check} alt="Checkmark" className={style.checkImage} />
    
    <h6 className={style.title}>¡Gracias por tu compra!</h6>

    <h1>Tu pedido ha sido procesado con éxito.</h1>

    <p>
      Apreciamos tu confianza en nosotros. Si tienes alguna pregunta o
      necesitas asistencia, no dudes en <a href="/contacto">contactarnos</a>.
    </p>

    <p>
      Puedes regresar a la <a href="/inicio">página de inicio</a> para seguir explorando nuestros productos.
    </p>
  </div>
  );
};

export default Confirmacion;
