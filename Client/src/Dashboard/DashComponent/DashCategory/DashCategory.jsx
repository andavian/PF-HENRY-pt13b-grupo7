import React, { useEffect } from 'react';
import { getCategories, deleteCategory } from '../../../redux/actions'; // Asumiendo que tienes acciones para obtener clientes y cambiar el estado "banned".
import { useDispatch, useSelector } from 'react-redux';
import styles from './DashCategory.module.css'; // Importa tus estilos CSS
import { Link } from 'react-router-dom';
import {MdDeleteForever} from "react-icons/md";




export default function DashCategory() {
  const dispatch = useDispatch();
  const categories= useSelector((state) => state.reducer.categories);

  function handleDeleteClick (categoryName){
    dispatch(deleteCategory(categoryName))
  }

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className={styles.dashClients}>
      <h2>Categories Management</h2>
      <table className={styles.clientTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
               <tr key={category.id}>
                <td>{category.name}</td>
                <td>
              <button className={styles.boton}
                onClick={() => handleDeleteClick(category.name)}
                
              >
                <MdDeleteForever />
              </button>
            </td>         
            </tr>    
            
          ))}
        </tbody>
      </table>
    </div>
  );
}
