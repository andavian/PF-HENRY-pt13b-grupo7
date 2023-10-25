// RegistrationForm.js
import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import styles from "./RegistrationForm.module.css"; // Importa el módulo CSS
import { useDispatch, useSelector } from "react-redux";
import { postClient, sendMailReg } from "../../redux/actions";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const registration = useSelector((state) => state.reducer.registration);
  const { loginWithRedirect } = useAuth0();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    billingaddress: "",
    country: "",
    locality: "",
    mobilenumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Nombre es obligatorio";
    }

    if (!formData.email) {
      newErrors.email = "Correo Electrónico es obligatorio";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Correo Electrónico no es válido";
    }

    if (!formData.password) {
      newErrors.password = "Contraseña es obligatoria";
    }

    if (!formData.billingaddress) {
      newErrors.billingaddress = "Dirección de Facturación es obligatoria";
    }

    if (!formData.country) {
      newErrors.country = "País es obligatorio";
    }

    if (!formData.locality) {
      newErrors.locality = "Localidad es obligatoria";
    }

    if (!formData.mobilenumber) {
      newErrors.mobilenumber = "Número de Teléfono Móvil es obligatorio";
    } else if (!isValidPhoneNumber(formData.mobilenumber)) {
      newErrors.mobilenumber = "Número de Teléfono Móvil no es válido";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    // Puedes implementar una validación específica para números de teléfono aquí
    // Este ejemplo verifica que el número tenga al menos 10 dígitos
    return phoneNumber.replace(/\D/g, "").length >= 10;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        dispatch(postClient(formData));

        // Realiza acciones adicionales después de guardar los datos

        if (registration !== undefined) {
          console.log("Valor de registration:", registration);

          if (registration === 200) {
            loginWithRedirect({
              screen_hint: "signup",
              login_hint: formData.email,
              email: formData.email,
              password: formData.password,
            });
          } else {
            alert("Hubo un error al crear la cuenta");
          }
        } else {
          console.log("registration es undefined o null");
          alert("Hubo un error al crear la cuenta");
        }
      } catch (error) {
        console.log("Error:", error);
        alert("Hubo un error al crear la cuenta");
      }
    }
  };

  return (
    <div className={styles.formcontainer}>
      <h1>Registro de Cuenta</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleInputChange}
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleInputChange}
        />
        {errors.password && (
          <span className={styles.error}>{errors.password}</span>
        )}
        <input
          type="text"
          name="billingaddress"
          placeholder="Dirección de Facturación"
          value={formData.billingaddress}
          onChange={handleInputChange}
        />
        {errors.billingaddress && (
          <span className={styles.error}>{errors.billingaddress}</span>
        )}
        <input
          type="text"
          name="country"
          placeholder="País"
          value={formData.country}
          onChange={handleInputChange}
        />
        {errors.country && (
          <span className={styles.error}>{errors.country}</span>
        )}
        <input
          type="text"
          name="locality"
          placeholder="Localidad"
          value={formData.locality}
          onChange={handleInputChange}
        />
        {errors.locality && (
          <span className={styles.error}>{errors.locality}</span>
        )}
        <input
          type="text"
          name="mobilenumber"
          placeholder="Número de Teléfono Móvil"
          value={formData.mobilenumber}
          onChange={handleInputChange}
        />
        {errors.mobilenumber && (
          <span className={styles.error}>{errors.mobilenumber}</span>
        )}
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
