import React, { useEffect, useState } from 'react';
import { addProduct,deleteProduct } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./DashProducts.module.css"
import {FiEdit} from "react-icons/fi";
import {MdDeleteForever} from "react-icons/md";
import { Link } from 'react-router-dom';




function DashProducts() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.reducer.catalog);
  const [editedProducts, setEditedProducts] = useState([...products]);

  useEffect(() => {
    dispatch(addProduct());
  }, [dispatch]);

  const handleEdit = (index, property, value) => {
    const updatedProducts = [...editedProducts];
    updatedProducts[index][property] = value;
    setEditedProducts(updatedProducts);
  };

  const handleEditClick = (productId) => {
    // Redirige a la página de edición con el ID del producto
    history.push(`/edit/${productId}`);
  };

  const handleDeleteClick = (productId) => {
    // Aquí debes implementar la lógica para eliminar el producto con el ID proporcionado
    dispatch(deleteProduct(productId))
  };

  return (
    <table className={styles.productTable}>
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Category</th>
          <th>Description</th>
          <th>Price</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={product.id}>
            <td>
              <img src={product.primaryimage} alt={product.title} />
            </td>
            <td>{product.price}</td>
            <td>{product.title}</td>
            <td>{product.Category.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>
              <Link to={`/dashedit/${product.id}`}>
              <FiEdit />
              </Link>
            </td>
            <td>
              <button
                onClick={() => handleDeleteClick(product.id)}
                
              >
                <MdDeleteForever />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DashProducts;