import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  addProduct,
  getProductByName,
  setCurrentPageGlobal,
} from "../../redux/actions";

import Card from "../../components/Card/Card";
import styles from "../Store/Store.module.css";
import Paginado from "../../components/Paginado/Paginado";
import Cardcategory from "../../components/Card-Category/Cardcategory";

export default function Shop() {
  const dispatch = useDispatch();
  const catalog = useSelector((state) => state.reducer.totalproducts);
  const categories = useSelector((state) => state.categories);
  const currentPage = useSelector((state) => state.currentPage);
  const search = useSelector((state) => state.search);
  const [orden, setOrden] = useState("");
  const [productPerPage] = useState(6);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  // Cálculo de índices para paginación
  const indexLastProduct = currentPage * productPerPage;
  const indexFirstProduct = indexLastProduct - productPerPage;

  // Función para cambiar de página
  const paginado = (pageNumber) => {
    dispatch(setCurrentPageGlobal(pageNumber));
  };

  // Cargar recetas según la búsqueda
  useEffect(() => {
    if (search) {
      dispatch(getProductByName(search));
      dispatch(getCategories());
    } else {
      dispatch(addProduct());
    }
  }, [dispatch, search]);

  const handleOrderChange = (e) => {
    setOrden(e.target.value);
  };

  const handleApplyOrder = () => {
    dispatch(orderByPrice(orden));
  };


  // Función para filtrar por categoría
  const filteredByCategory = (categoryId) => {
    if (categoryId === "all") {
      setFilteredProducts(catalog);
    } else {

      const filtered = catalog.filter(
        (product) => product.categoryId === categoryId
      );
      setFilteredProducts(filtered);
    }
  };


  // Función para ordenar por precio
  const orderByPrice = (order) => {
    const sorted = [...filteredProducts].sort((a, b) => {
      if (order === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setSortedProducts(sorted);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Ajusta la cantidad de tarjetas mostradas
    slidesToScroll: 1,
  };
  return (

    <div className={style.container}>
      <div className={style.ContainerBanner}>
        <div className={style.Banner}>

          <h2>
            Ofertas fuera <br></br>de órbita
          </h2>
        </div>

        {/* Productos descuento */}
        <div className={styles.ContainerCenter}>
          {/* Aquí van las card con descuento */}
          <button className={styles.button}>Ver más</button>
        </div>
      </div>


          <div className={style.navItem}>
            <label>Ordenar por:</label>
            <select onChange={handleOrderChange}>
              <option value="asc">Precio ascendente</option>
              <option value="desc">Precio descendente</option>

            </select>
            <button className={style.buttonapply} onClick={handleApplyOrder}>
              Aplicar
            </button>
          </div>

          {/* Filtro por Orden de Precio */}
          <div className={styles.filter}>
            <h3>Ordenar por Precio:</h3>
            <select
              className={styles.select}
              onChange={(e) => orderByPrice(e.target.value)}
            >
              <option value="asc">Menor a Mayor</option>
              <option value="desc">Mayor a Menor</option>
            </select>
          </div>
        </div>
      </aside>


          <div className={style.navItem}>
            <label style={{ fontWeight: "bold", fontSize: "18px" }}>52</label>
            <label>resultados encontrados</label>
          </div>

        </div>


      <aside className={style.containerhome}>
        <div className={style.filters}>
          {/* Filtro por Categoría */}
          <div className={style.filter}>
            <label>Filtrar por Categoría:</label>
            <select
              className={style.select}
              onChange={(e) => filteredByCategory(e.target.value)}
            >
              <option value="all">Todas las categorías</option>
              {categories && categories.length > 0
                ? categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.title}
                    </option>
                  ))
                : null}
            </select>
          </div>

          {/* Filtro por Orden de Precio */}
          <div className={style.filter}>
            <label>Ordenar por Precio:</label>
            <select
              className={style.select}
              onChange={(e) => orderByPrice(e.target.value)}
            >
              <option value="asc">Menor a Mayor</option>
              <option value="desc">Mayor a Menor</option>
            </select>
          </div>

        </div>



      <article className={style.article}>
{/* AQUI VA EL CATALGO */}
     
      </article>

 

    </div>
  );
}