import React, { useEffect, useState } from 'react';
import { addProduct } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./DashProducts.module.css"

function DashProducts() {
  const dispatch = useDispatch();
  const products = useSelector((state)=> state.reducer.catalog)
  const [editedProducts, setEditedProducts] = useState([...products]);

 useEffect(()=>{
  dispatch(addProduct())
 },[dispatch])

  const handleEdit = (index, property, value) => {
    const updatedProducts = [...editedProducts];
    updatedProducts[index][property] = value;
    setEditedProducts(updatedProducts);
  };

  return (
    <table className={styles.productTable}>
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Category</th>          
          <th>price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>
              <img src={product.primaryimage} alt={product.title} />
            </td>            
            <td>{product.title}</td>
            <td>{product.title}</td>
            <td>{product.Category.name}</td>            

            <td>{product.price}</td>            
          </tr>
        ))}
      </tbody>
    </table>
  );
}
  


export default DashProducts;
