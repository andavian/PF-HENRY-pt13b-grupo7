import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"; // Agregué la importación de Link
import {
  getCategories,
  addProduct,
  getProductByName,
  filteredByCategory,
  orderByPrice,
  setCurrentPageGlobal,
} from "../../redux/actions";
import Carrousel from "../../components/Carrousel/Carrousel";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Slider from "react-slick"; // Comenté la importación de Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../../components/Card/Card";
import styles from "./Store.module.css";
import Paginado from "../../components/Paginado/Paginado";
import Cardcategory from "../../components/Card-Category/Cardcategory";
import CardCarousel from "../../components/crouselflecha/CardCarousel";

export default function Shop() {
  const dispatch = useDispatch();
  const catalog = useSelector((state) => state.reducer.totalproducts);
  const categories = useSelector((state) => state.categories);
  const currentPage = useSelector((state) => state.currentPage);
  const [orden, setOrden] = useState("");
  const [productPerPage] = useState(6);

  // Cálculo de índices para paginación
  const indexLastProduct = currentPage * productPerPage;
  const indexFirstProduct = indexLastProduct - productPerPage;

  // Función para cambiar de página
  const paginado = (pageNumber) => {
    dispatch(setCurrentPageGlobal(pageNumber));
  };

  // Función para manejar cambios en el precio
  const handlePrice = (e) => {
    const selectedOrder = e.target.value;
    setOrden(selectedOrder);
  };

  // Función para manejar cambios en el orden
  const handleOrder = (e) => {
    const selectedOrder = e.target.value;
    // Lógica adicional según el cambio de orden...
  };

  // Función para manejar cambios en los filtros
  const handleFilter = (e) => {
    const { value, name } = e.target;
    if (name === "diets") {
      const originFilter = document.querySelector(
        'select[name="origin"]'
      ).value;
      if (originFilter === "") {
        alert("Debes seleccionar primero el filtro de origen.");
        return;
      }
    }
    // Asegúrate de definir la función filter
    dispatch(filter(value));
    // Asegúrate de definir la función setCurrentPageGlobal
    dispatch(setCurrentPageGlobal(1));
  };

  //cargar recetas según la búsqueda
  useEffect(() => {
    dispatch(addProduct());
  }, [dispatch]);

  return (
    <div>
      <aside className={styles.containerhome}>
        <div className={styles.leftSide}>
          <p>Selecciona las opciones que deseas aplicar.</p>

      

          <label className={styles.label}>Ordenar</label>
          <select
            className={styles.select}
            name="order"
            onChange={handleOrder}
            defaultValue=""
          >
            <option value="" disabled hidden>
              Selecciona un orden
            </option>
            <option value="ascendenteAlf">A-Z ⬆</option>
            <option value="descendenteAlf">Z-A ⬇</option>
            <option value="ascendenteHS">Mayor Precio ⬆</option>
            <option value="descendenteHS">Menor Precio ⬇</option>
          </select>
        </div>
      </aside>

      <article className={styles.article}>
        {/* Cards */}

        

        {/* <div className={styles.cardscategories}>
          {categories && categories.length > 0 ? (
            categories.map((e) => (
              <Link to={`/Shop/${e.id}`} key={e.id}>
                <h4>{e.title}</h4>
              </Link>
            ))
          ) : (
            <h2>No hay categorías disponibles.</h2>
          )}
        </div> */}

      </article>
    </div>
  );
}