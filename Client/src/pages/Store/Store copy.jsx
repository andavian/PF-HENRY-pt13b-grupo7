import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  addProduct,
  getProductByName,
  filteredByCategory,
  orderByPrice,
  setCurrentPageGlobal,
} from "../../redux/actions";


import Card from "../../components/Card/Card";
import style from "../Store/Store.module.css";
import Paginado from "../../components/Paginado/Paginado";
import SearchBar from "../../components/SearchBar/SearchBar";
import Cardcategory from "../../components/Card-Category/Cardcategory";



export default function Shop() {
  const dispatch = useDispatch();
  const catalog = useSelector((state) => state.totalproducts);
  const categories = useSelector((state) => state.categories);
  const currentPage = useSelector((state) => state.currentPage);
  const search = useSelector((state) => state.search);
  const [orden, setOrden] = useState("");
  const [productPerPage] = useState(6);

  // Cálculo de índices para paginación
  const indexLastProduct = currentPage * productPerPage;
  const indexFirstProduct = indexLastProduct - productPerPage;

  // Función para cambiar de página
  const paginado = (pageNumber) => {
    dispatch(setCurrentPageGlobal(pageNumber));
  };


  //cargar recetas según la búsqueda
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
            <button className={style.buttonapply} onClick={handleApplyOrder}>Aplicar</button>
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
      
        {/* Filtros */}
        <div className={style.leftSide}>
          <label className={style.label}>Filtro 1</label>
          {/* Escribir por debajo de esta liena de codigo  */}

          <label className={style.label}>Filtro 2</label>
          {/* Escribir por debajo de esta liena de codigo  */}

          <label className={style.label}>Filtro 3</label>
          {/* Escribir por debajo de esta liena de codigo  */}
        </div>
      </aside>

      <article className={style.article}>
      <h2>cards</h2>
        {/* Escribir por debajo de esta liena de codigo  */}
        <card/>
      </article>

      {/* Escribir por debajo de esta liena de codigo  */}
    </div>
  );
}
