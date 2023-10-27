import React, { useEffect } from 'react';
import { getClients, deleteClient } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import styles from './DashClients.module.css';

export default function DashClients() {
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.reducer.clients);

  useEffect(() => {
    dispatch(getClients());
  }, []);

  const handleToggleBanned = (clientId, isBanned) => {
    dispatch(deleteClient(clientId))
      .then(() => {
        dispatch(getClients());
      });
  };

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
                <button
                  className={`${styles.banButton} ${client.banned ? styles.unbanButton : ''}`}
                  onClick={() => handleToggleBanned(client.id, client.banned)}
                >
                  {client.banned ? 'Unban User' : 'Ban User'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


