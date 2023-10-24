import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById, updateProduct } from "../../../redux/actions";
import { useParams } from "react-router-dom";
import styles from "./DashEdit.module.css"; // Importa tus estilos CSS Modules
import { useNavigate } from "react-router-dom";

export default function DashEdit() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Utiliza useNavigate para la navegación
  const { id } = useParams();
  const product = useSelector((state) => state.reducer.details);

  const [editedProduct, setEditedProduct] = useState({});

  useEffect(() => {
    dispatch(getProductById(id));
    setEditedProduct((prevEditedProduct) => ({
      ...prevEditedProduct,
      ...product,
    }));
  }, [dispatch, id]);

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevEditedProduct) => ({
      ...prevEditedProduct,
      [name]: value,
    }));
  };

  const handleSave = () => {
    dispatch(updateProduct({ id, product: editedProduct }))
      .then(() => {
        console.log("sisi");
      })
      .catch((error) => {
        alert("Error al actualizar el producto:", error);
        
      });
  };

  return (
    <div className={styles.dashEdit}>
      <h1>Edit Product</h1>
      <form>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={editedProduct.title || ""}
            onChange={handleFieldChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={editedProduct.description || ""}
            onChange={handleFieldChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={editedProduct.price || ""}
            onChange={handleFieldChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={editedProduct.stock || ""}
            onChange={handleFieldChange}
          />
        </div>

        <button className={styles.saveButton} onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
}

