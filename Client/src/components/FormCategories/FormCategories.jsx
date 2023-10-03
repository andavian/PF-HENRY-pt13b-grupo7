import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import validateForm from "./validation.js";
import styles from "./form.module.css";

//import { createCategory } from "../../redux/actions";

const FormCategories = () => {
  const dispatch = useDispatch();

  const [categoryData, setCategoryData] = useState({
    name: "",
    thumbnail: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCategoryData((prevData) => ({ ...prevData, [name]: value }));
    setErrors(
      validateForm({
        ...categoryData,
        [name]: value,
      })
    );
  };

  //Crear una categoria
  const create = async (categoryData) => {
    try {
      const URL = "http://localhost:3001/categories";
      await axios.post(URL, categoryData);
      dispatch(createCategory(categoryData));
      alert("Category successfully created");
    } catch (error) {
      console.error(error);
      alert(error.response.data.message);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await create(categoryData);

    setCategoryData({
      name: "",
      thumbnail: "",
    });
  };

  return (
    <div className={styles.supraContainer}>
      <h1>Añade una Categoría</h1>

      <div>
        <form onSubmit={handleSubmit} className={styles.container}>
          <div className={styles.containerGrid}>
            <div className={styles.inputLabel}>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className={styles.input}
                value={categoryData.name}
                onChange={handleChange}
              />

              <span>{errors.name}</span>
            </div>
            <div className={styles.inputLabel}>
              <input
                name="thumbnail"
                type="text"
                placeholder="Thumbnail"
                className={styles.input}
                value={categoryData.thumbnail}
                onChange={handleChange}
              />
              <span>{errors.thumbnail}</span>
            </div>
          </div>
          {Object.keys(errors).length === 0 && categoryData.name ? (
            <button className={styles.btn}>Submit</button>
          ) : (
            <div></div>
          )}
        </form>
      </div>
    </div>
  );
};

export default FormCategories;
