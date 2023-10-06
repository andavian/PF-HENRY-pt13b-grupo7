import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  addProduct,
  getProductByName,
  setCurrentPageGlobal,
  orderByPrice
} from "../../redux/actions";

import Card from "../../components/Card/Card";
import style from "../Store/Store.module.css";
import Paginado from "../../components/Paginado/Paginado";
import SearchBar from "../../components/SearchBar/SearchBar";
import Cardcategory from "../../components/Card-Category/Cardcategory";

export default function Shop() {
  const dispatch = useDispatch();
  const catalog = useSelector((state) => state.reducer.catalog);
  const categories = useSelector((state) => state.reducer.categories);
  const currentPage = useSelector((state) => state.reducer.currentPage);
  const search = useSelector((state) => state.reducer.search);
  const [orden, setOrden] = useState("");
  const [productPerPage] = useState(10); // Cambiado a 10 productos por página
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
 // Cálculo de índices para paginación
 const indexLastProduct = currentPage * productPerPage;
 const indexFirstProduct = indexLastProduct - productPerPage;

 // Función para cambiar de página
 const handlePageChange = (pageNumber) => {
   dispatch(setCurrentPageGlobal(pageNumber));
 };
  // Cargar recetas según la búsqueda
  useEffect(() => {
    if (search) {
      dispatch(getProductByName(search));
      dispatch(getCategories());
    } else {
      dispatch(addProduct());
      dispatch(getCategories());
      console.log("acaa", catalog);
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
        dispatch( orderByPrice)
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

  // Calcula la cantidad total de páginas
  const totalPages = Math.ceil(catalog.length / productPerPage);

  // Obtiene los productos correspondientes a la página actual
  const currentProducts = catalog.slice(
    indexFirstProduct,
    indexLastProduct
  );

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
            <button className={style.button}>Limpiar busqueda</button>
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

          <div className={style.navItem}>
            <SearchBar />
          </div>

          <div className={style.navItem}>
            <label style={{ fontWeight: "bold", fontSize: "18px" }}>52</label>
            <label>resultados encontrados</label>
          </div>
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
                      {category.name}
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
      </aside>
      <Paginado
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <article className={style.article}>
        {currentProducts && currentProducts.length ? (
          currentProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))
        ) : (
          <h3 align="center">No hay resultados para esta búsqueda.</h3>
        )}
      </article>
    
      
    </div>
  );
}
