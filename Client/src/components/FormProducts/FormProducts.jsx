import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import validateForm from "./validation.js";
import FormCloudinary from "./FormCloudinary.jsx";
import { postProduct } from "../../redux/actions.js";

import styles from "./form.module.css";

//import { createProduct } from "../../redux/actions.js";

const FormProducts = () => {
  const dispatch = useDispatch();

  const [image, setImage] = useState("");
  const [productData, setProductData] = useState({
    title: "",
    primaryimage: "",
    price: "",
    description: "",
    categoryName: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
    setErrors(
      validateForm({
        ...productData,
        [name]: value,
      })
    );
  };

  productData.primaryimage = image;

  //const categoriesOption = console.log(categories);
  // categories.length !== 0 ? (
  //   categories.map((category) => {
  //     return (
  //       <option key={category.id} value={category.name}>
  //         {category.name}
  //       </option>
  //     );
  //   })
  // ) : (
  //   <option>Crear categoría</option>
  // );
  //Crear un producto
  // const create = async (productData) => {
  //   try {
  //     const URL = "http://localhost:3001/products";
  //     await axios.post(URL, productData);
  //     dispatch(createCategory(productData));
  //     alert("Product successfully created");
  //   } catch (error) {
  //     console.error(error);
  //     alert(error.response.data.message);
  //   }
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Checka erores antes de enviar
    if (Object.keys(errors).length === 0) {
      dispatch(postProduct(productData));
      setProductData({
        title: "",
        primaryimage: "",
        price: "",
        description: "",
        categoryName: "",
      });
      alert("Product successfully created");
    } else {
      alert("Please fill in all the fields correctly");
    }
  };

  return (
    <div className={styles.supraContainer}>
      <h1>Añade un Producto</h1>

      <div>
        <form onSubmit={handleSubmit} className={styles.container}>
          <div className={styles.containerGrid}>
            <div className={styles.inputLabel}>
              <select
                name="categoryName"
                className={styles.input}
                onChange={handleChange}
              >
                <option>Selecciona una categoría</option>
                <option value="electronics">Electronicos</option>
                <option value="jewelery">Joyería</option>
                <option value="women's clothing">Ropa de Mujer</option>
                <option value="men's clothing">Ropa de Hombre</option>
              </select>

              <span>{errors.name}</span>
            </div>
            <div className={styles.inputLabel}>
              <input
                name="title"
                type="text"
                placeholder="Titulo"
                className={styles.input}
                value={productData.title}
                onChange={handleChange}
              />

              <span>{errors.name}</span>
            </div>
            <div className={styles.inputLabel}>
              <input
                name="primaryimage"
                type="text"
                placeholder="URL Imagen"
                className={styles.input}
                value={productData.primaryimage}
                onChange={handleChange}
              />
              <FormCloudinary image={image} setImage={setImage} />
              <span>{errors.image}</span>
            </div>
            <div className={styles.inputLabel}>
              <input
                name="price"
                type="text"
                placeholder="Precio"
                className={styles.input}
                value={productData.price}
                onChange={handleChange}
              />
              <span>{errors.price}</span>
            </div>
            <div className={styles.inputLabel}>
              <textarea
                name="description"
                row="5"
                cols="50"
                placeholder="Descripción"
                className={styles.input}
                value={productData.description}
                onChange={handleChange}
              ></textarea>
              <span>{errors.description}</span>
            </div>
            {Object.keys(errors).length === 0 && productData.title ? (
              <button className={styles.btn}>Submit</button>
            ) : (
              <div>{console.log(errors)}</div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormProducts;
