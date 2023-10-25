import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import style from "./ConfirmacionCompra.module.css";
import check from "../../images/green-checkmark-transparent-17.png";
import { sendMailPay } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Confirmacion = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(10);
  //const { user } = useAuth0();

  useEffect(() => {
    const redirectTimer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000); // Actualizar cada 1000 milisegundos (1 segundo)

    // Limpiar el temporizador al desmontar el componente
    return () => clearInterval(redirectTimer);
  }, []);

  // Redirigir a la página de inicio cuando el contador llega a cero
  useEffect(() => {
    if (seconds === 0) {
      let mailer = {
        email: "tripkefm@gmail.com",
      };
      dispatch(sendMailPay(mailer));
      navigate("/home");
    }
  }, [seconds, navigate]);

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
        Serás redirigido a la <a href="/home">página de inicio</a> en {seconds}{" "}
        segundos.
      </p>
    </div>
  );
};

export default Confirmacion;
