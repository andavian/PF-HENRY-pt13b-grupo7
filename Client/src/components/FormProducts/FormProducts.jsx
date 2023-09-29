import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import validateForm from "./validation.js";
import styles from "./form.module.css";

//import { createProduct } from "../../redux/actions.js";

const FormProducts = () => {
  const dispatch = useDispatch();

  const [productData, setProductData] = useState({
    title: "",
    image: "",
    price: "",
    description: "",
    category: "",
  });
  const [errors, setErrors] = useState({});
  const [deleted, setDeleted] = useState(false);
  const [check, setCheck] = useState(false);

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
  // const handleCheck = () => {
  //   setCheck(!check);
  // };

  // const handleDelete = () => {
  //   setDeleted(!deleted);
  // };

  //Crear una categoria
  const create = async (productData) => {
    try {
      const URL = "/products";
      await axios.post(URL, productData);
      dispatch(createCategory(productData));
      alert("Product successfully created");
    } catch (error) {
      console.error(error);
      alert(error.response.data.message);
    }
  };

  //?Modificar un Producto
  // const update = async (productData) => {
  //   try {
  //     const URL = `henryFan/${productData.name}`;
  //     await axios.put(URL, productData);
  //     dispatch(updateCategory);
  //     alert("Category successfully updated");
  //   } catch (error) {
  //     console.error(error);
  //     alert(error.response.data.message);
  //   }
  // };

  //?borrar una categoría
  // const deleteCategory = async (productData) => {
  //   try {
  //     const URL = `henryFan/delete?name=${productData.name}`;
  //     await axios.delete(URL);
  //     dispatch(deleteCategoryAction);
  //     alert("Category successfully deleted");
  //   } catch (error) {
  //     console.error(error);
  //     alert(error.response.data.message);
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    //!check ?
    await create(productData);
    //: await update(productData);
    setProductData({
      title: "",
      image: "",
      price: "",
      description: "",
      category: "",
    });
  };

  // const handleSubmitDel = async (event) => {
  //   event.preventDefault();
  //   await deleteCategory(productData);
  // };

  return (
    <div className={styles.supraContainer}>
      <h1>Añade un Producto</h1>
      {/* <div className={styles.checkboxLabelDel}>
        <label className={styles.switch}>
          <input
            className={styles.inputCheckDel}
            type="checkbox"
            onClick={handleDelete}
          />
          <span className={styles.slider}></span>
        </label>
      </div> */}
      <div>
        {deleted ? (
          <form onSubmit={handleSubmitDel} className={styles.containerDel}>
            <div className={styles.inputLabel}>
              <input
                name="title"
                type="text"
                placeholder="Title"
                className={styles.input}
                value={productData.title}
                onChange={handleChange}
              />
              <span>{errors.name}</span>
            </div>
            {productData.title ? (
              <button className={styles.btn}>Delete</button>
            ) : (
              <div></div>
            )}
          </form>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={!check ? styles.container : styles.containerUp}
          >
            <div className={styles.containerGrid}>
              {/* <div className={styles.checkboxLabel}>
                <label className={styles.switch}>
                  <input
                    className={styles.inputCheck}
                    type="checkbox"
                    onClick={handleCheck}
                  />
                  <span className={styles.slider}></span>
                </label>
              </div> */}
              <div className={styles.inputLabel}>
                <input
                  name="title"
                  type="text"
                  placeholder="Title"
                  className={styles.input}
                  value={productData.title}
                  onChange={handleChange}
                />

                <span>{errors.name}</span>
              </div>
              <div className={styles.inputLabel}>
                <input
                  name="image"
                  type="text"
                  placeholder="URL Image"
                  className={styles.input}
                  value={productData.image}
                  onChange={handleChange}
                />

                <span>{errors.image}</span>
              </div>
              <div className={styles.inputLabel}>
                <input
                  name="price"
                  type="text"
                  placeholder="Price"
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
                  placeholder="Description"
                  className={styles.input}
                  value={productData.description}
                  onChange={handleChange}
                ></textarea>
                <span>{errors.description}</span>
              </div>
            </div>
            {Object.keys(errors).length === 0 && productData.name ? (
              <button className={styles.btn}>Submit</button>
            ) : (
              <div></div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default FormProducts;
