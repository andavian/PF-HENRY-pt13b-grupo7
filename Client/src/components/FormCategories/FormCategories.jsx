import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import validateForm from "./validation.js";
import styles from "./form.module.css";

import { createCategory } from "../../redux/actions.js";

const Form = () => {
  const dispatch = useDispatch();

  const [categoryData, setCategoryData] = useState({
    name: "",
    thumbnail: "",
  });
  const [errors, setErrors] = useState({});
  const [deleted, setDeleted] = useState(false);
  const [check, setCheck] = useState(false);

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

  const handleCheck = () => {
    setCheck(!check);
  };

  const handleDelete = () => {
    setDeleted(!deleted);
  };

  //Crear una categoria
  const create = async (categoryData) => {
    try {
      const URL = "henryFan";
      await axios.post(URL, categoryData);
      dispatch(createCategory(categoryData));
      alert("Category successfully created");
    } catch (error) {
      console.error(error);
      alert(error.response.data.message);
    }
  };

  //?Modificar una categoria
  // const update = async (categoryData) => {
  //   try {
  //     const URL = `henryFan/${categoryData.name}`;
  //     await axios.put(URL, categoryData);
  //     dispatch(updateCategory);
  //     alert("Category successfully updated");
  //   } catch (error) {
  //     console.error(error);
  //     alert(error.response.data.message);
  //   }
  // };

  //?borrar una categoría
  // const deleteCategory = async (categoryData) => {
  //   try {
  //     const URL = `henryFan/delete?name=${pokemonData.name}`;
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
    await create(categoryData);
    //: await update(categoryData);
    setCategoryData({
      name: "",
      thumbnail: "",
    });
  };

  // const handleSubmitDel = async (event) => {
  //   event.preventDefault();
  //   await deleteCategory(categoryData);
  // };

  return (
    <div className={styles.supraContainer}>
      <h1>Añade una Categoría</h1>
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
                name="name"
                type="text"
                placeholder="Name"
                className={styles.input}
                value={categoryData.name}
                onChange={handleChange}
              />
              <span>{errors.name}</span>
            </div>
            {pokemonData.name ? (
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
                  placeholder="thumbnail"
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
        )}
      </div>
    </div>
  );
};

export default Form;
