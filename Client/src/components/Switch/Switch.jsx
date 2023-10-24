import React from 'react';
import styles from './Switch.module.css'; // Importa tus estilos CSS
import { useDispatch } from 'react-redux';
import { deleteClient } from '../../redux/actions';

function Switch({ isOn, userId }) {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(deleteClient(userId)); // Llama a la acción para cambiar el estado "banned" con el ID del usuario.
  };

  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={isOn} onChange={handleToggle} />
      <span className={styles.slider}></span>
    </label>
  );
}

export default Switch;

