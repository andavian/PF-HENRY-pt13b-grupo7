// RegistrationForm.js
import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import styles from './RegistrationForm.module.css'; // Importa el módulo CSS
import { useDispatch, useSelector } from 'react-redux';
import { postClient, sendMailReg } from '../../redux/actions';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const registration = useSelector((state)=> state.reducer.registration)
  const { loginWithRedirect } = useAuth0();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    billingaddress: '',
    country: '',
    locality: '',
    mobilenumber: '',
  });
  const [formMail, setFormMail] = useState({
    name:'',
    email:'',
  });

  const handleInputChange = (e) => {

    const { name, value } = e.target;
    console.log(value);
    setFormData({ ...formData, [name]: value });
    //setFormMail({ ...formMail, name: formData.name , email: formData.email });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let mailer = {
      email: formData.email,
    }
    try {
      console.log("Contenido de formData antes de enviar:", formData); // Agrega este console.log
      console.log("Contenido de mailer antes de enviar:", mailer);
      dispatch(sendMailReg(mailer));
      dispatch(postClient(formData));

  
      if (registration !== undefined) {
        console.log("Valor de registration:", registration);
  
        if (registration === 200) {
          loginWithRedirect({
            screen_hint: 'signup',
            login_hint: formData.email,
            email: formData.email,
            password: formData.password,
          });
        } else {
          alert('Hubo un error al crear la cuenta');
        }
      } else {
        console.log("registration es undefined o null");
        alert('Hubo un error al crear la cuenta');
      }
    } catch (error) {
      console.log("Error:", error);
      alert('Hubo un error al crear la cuenta');
    }
  };
  

  return (
    <div className={styles.formcontainer}> {/* Aplica la clase CSS del módulo */}
      <h1>Registro de Cuenta</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="billingaddress"
          placeholder="Dirección de Facturación"
          value={formData.billingaddress}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="country"
          placeholder="País"
          value={formData.country}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="locality"
          placeholder="Localidad"
          value={formData.locality}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="mobilenumber"
          placeholder="Número de Teléfono Móvil"
          value={formData.mobilenumber}
          onChange={handleInputChange}
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
