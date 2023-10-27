// RegistrationForm.js
import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import FormCloudinary from "../FormProducts/FormCloudinary";
import styles from "./RegistrationForm.module.css"; // Importa el módulo CSS
import { useDispatch, useSelector } from "react-redux";
import { postClient, sendMailReg ,getProfile, postProfile } from "../../redux/actions";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const profileGlobal = useSelector((state)=> state.reducer.profile)
  const registration = useSelector((state) => state.reducer.registration);
  

  const { user } = useAuth0();
  const [image, setImage] = useState("");

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    billingaddress: "",
    country: "",
    locality: "",
    mobilenumber: "",
    image: "",
  });

  formData.image = image;

  useEffect(()=>{
   console.log("regis",user);
  },[])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    /*if (!formData.name) {
      newErrors.name = 'Nombre es obligatorio';

    }

    if (!formData.email) {
      newErrors.email = "Correo Electrónico es obligatorio";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Correo Electrónico no es válido";
    }

    if (!formData.password) {

      newErrors.password = 'Contraseña es obligatoria';
    }*/

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

  const isValidPhoneNumber = (phoneNumber) => {
    // Puedes implementar una validación específica para números de teléfono aquí
    // Este ejemplo verifica que el número tenga al menos 10 dígitos
    return phoneNumber.replace(/\D/g, "").length >= 10;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let mailer = {
      email: user.email,
    };
    if (validateForm()) {
      try {

        const userData = {
          ...formData,
          name: user.name,
          email: user.email,
        }
        console.log("Contenido de mailer antes de enviar:", mailer);
        dispatch(postClient(userData));
        dispatch(postProfile(userData))
        dispatch(sendMailReg(mailer));
        localStorage.setItem("userData", JSON.stringify(userData));
      } catch (error) {
        alert("Hubo un error al crear la cuenta");

        dispatch(sendMailReg(mailer));
        dispatch(postClient(formData));

        // Realiza acciones adicionales después de guardar los datos
      } catch (error) {
        console.log("Error:", error);
        alert("Hubo un error al crear el perfil");

      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formcontainer}>
        <h1 className={styles.title}>Completa tu perfil</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Imagen
            <input
              type="text"
              name="image"
              value={formData.image}
              className={styles.inputImage}
            />
            <FormCloudinary image={image} setImage={setImage} />
          </label>

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
        <p className={styles.complementaryText}>
          ¡Completa los campos anteriores para crear tu cuenta!
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;

/* NO SE NECESITA CARGAR LOS CAMPOS DE NOMBRE, MAIL Y PASSWORD

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
        {errors.password && <span className={styles.error}>{errors.password}</span>}
  
*/
