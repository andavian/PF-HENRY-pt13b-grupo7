import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  addProduct,
  getProductByName,
  setCurrentPageGlobal,
  orderByPrice,
  filteredByCategory,
} from "../../redux/actions";

import Card from "../../components/Card/Card";
import style from "../Store/Store.module.css";
import Paginado from "../../components/Paginado/Paginado";
import SearchBar from "../../components/SearchBar/SearchBar";
import Cardcategory from "../../components/Card-Category/Cardcategory";
import Footer from "../../components/Footer/Footer";
import { Link, useParams } from "react-router-dom";

export default function Shop() {
  const dispatch = useDispatch();
  const catalog = useSelector((state) => state.reducer.catalog);
  const categories = useSelector((state) => state.reducer.categories);
  const currentPage = useSelector((state) => state.reducer.currentPage);
  const search = useSelector((state) => state.reducer.search);
  const [productPerPage] = useState(10); // Cambiado a 10 productos por página

  // Cálculo de índices para paginación
  const indexLastProduct = currentPage * productPerPage;
  const indexFirstProduct = indexLastProduct - productPerPage;
  
   // Obtén el valor de la categoría de los parámetros de la URL
   const { category } = useParams();

   // Cargar recetas según la búsqueda y la categoría
   useEffect(() => {
     if (search) {
       dispatch(getProductByName(search));
       dispatch(getCategories());
     } else if (category) {
       // Si hay un parámetro de categoría en la URL, aplicar el filtro de categoría
       dispatch(filteredByCategory(category));
     } else {
       dispatch(addProduct());
       dispatch(getCategories());
       console.log("acaa", catalog);
     }
   }, [dispatch, search, category]);
 
  // Función para cambiar de página
  const handlePageChange = (pageNumber) => {
    dispatch(setCurrentPageGlobal(pageNumber));
  };
  
  //ordenar por precio
  const handleOrderChange = (e) => {
    dispatch(orderByPrice(e.target.value));
  };
  // Función para filtrar por categoría
  const filtercategory = (e) => {
    dispatch(filteredByCategory(e));
  };
  const handleReload = () => {
    window.location.href = "/store";
  };

  // Calcula la cantidad total de páginas
  const totalPages = Math.ceil(catalog.length / productPerPage);

  // Obtiene los productos correspondientes a la página actual
  const currentProducts = catalog.slice(indexFirstProduct, indexLastProduct);

  return (
    <div className={style.container}>
      <div className={style.ContainerBanner}>
        <div className={style.Banner}>
          <h2>
            Henry <br></br>
            Banner
          </h2>
        </div>
      </div>
      
      {/* Barra de filtado por orden de agregados */}
      <div className={style.navbarContainer}>
        <div className={style.navBar}>
          <div className={style.navItem}>
            <button onClick={handleReload} className={style.button}>
              Limpiar busqueda
            </button>
          </div>

          <div className={style.navItem}>
            <SearchBar />
          </div>

          <div className={style.navItem}>
            <select
              className={style.select}
              onChange={(e) => filtercategory(e.target.value)}
            >
              <option value="all">Todas las categorías</option>
              {categories && categories.length > 0
                ? categories.map((category) => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))
                : null}
            </select>
          </div>

          <div className={style.navItem}>
            <select className={style.select} onChange={handleOrderChange}>
              <option value="asc">Menor a Mayor</option>
              <option value="desc">Mayor a Menor</option>
            </select>
          </div>

          {/* <div className={style.navItem}>
            <label style={{ fontWeight: "bold", fontSize: "18px" }}>52</label>
            <label>resultados encontrados</label>
          </div> */}

          <div className={style.navtool}>
            <div className={style.navItem}>
              {/* Fav */}
              <div className={style.navItem}>
                <Link
                  to="/favorites"
                  className={style.navLink}
                  onClick={() => setCurrentPage("shop")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                    />
                  </svg>
                </Link>
              </div>

              {/* carrito */}
              <div className={style.navItem}>
                <Link
                  to="/cart"
                  className={style.navLink}
                  onClick={() => setCurrentPage("shop")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-cart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <article className={style.article}>
        {currentProducts && currentProducts.length ? (
          currentProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))
        ) : (
          <div className={style.messageBox}>
            {/* <img src={plato} alt="img" className={style} /> */}

            <h3>
              {" "}
              <span>Ouch!</span> <br></br>
              Buscamos, pero no encontramos nada.
            </h3>
          </div>
        )}
      </article>

      <Paginado
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
