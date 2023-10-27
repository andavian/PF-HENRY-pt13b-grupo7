import React, { useEffect, useState } from 'react';
import { addProductAdmin,deleteProduct,getProductByName,orderByPrice } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./DashProducts.module.css"
import {FiEdit} from "react-icons/fi";
import {MdDeleteForever} from "react-icons/md";
import {BsFillPlusSquareFill} from "react-icons/bs";

import { Link } from 'react-router-dom';
import SearchBar from '../../../components/SearchBar/SearchBar';




function DashProducts() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.reducer.admincatalog);
  const search = useSelector((state) => state.reducer.search)
  const [editedProducts, setEditedProducts] = useState([...products]);

  useEffect(() => {
    if(search){
      dispatch(getProductByName(search))
    }else{
      dispatch(addProductAdmin());
    }
    
  }, [dispatch,search]);
  const handleOrderChange = (e) => {
    dispatch(orderByPrice(e.target.value));
  };
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
    .then(() => {
      dispatch(addProductAdmin());

    });
  };
  

  return (
    <div className={styles.productTable}>
      <div className={styles.navbarContainer}>
        <div className={styles.navBar}>
          <SearchBar/>
          <br></br>
          <div className={styles.navItem}>
            <select className={styles.select} onChange={handleOrderChange}>
              <option value="asc">Menor a Mayor</option>
              <option value="desc">Mayor a Menor</option>
            </select>
          </div>
        </div>
      </div>
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
            <td>{product.Category.name ? product.Category.name : "no hay categoria" }</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>
              <Link to={`/dashedit/${product.id}`}>
              <FiEdit />
              </Link>
            </td>
            <td>
              <button 
              className={`${styles.banButton} ${product.hidden ? styles.unbanButton : ''}`}
              onClick={() => handleDeleteClick(product.id)}
              >
                {product.hidden ? <BsFillPlusSquareFill/> : <MdDeleteForever />}
                
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default DashProducts;


