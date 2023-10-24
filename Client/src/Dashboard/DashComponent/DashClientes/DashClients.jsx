import React, { useEffect } from 'react';
import { getClients, toggleBanned } from '../../../redux/actions'; // Asumiendo que tienes acciones para obtener clientes y cambiar el estado "banned".
import { useDispatch, useSelector } from 'react-redux';
import styles from './DashClients.module.css'; // Importa tus estilos CSS


import Switch from '../../../components/Switch/Switch'; // Importa el componente Switch

export default function DashClients() {
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.reducer.clients);

  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);

  return (
    <div className={styles.dashClients}>
      <h2>Client Management</h2>
      <table className={styles.clientTable}>
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Banned</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.email}</td>
              <td>{client.name}</td>
              <td>
                <Switch isOn={client.banned} userId={client.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
