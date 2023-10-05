import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  addProduct,
  getProductByName,
  setCurrentPageGlobal,
} from "../../redux/actions";
import Carousel from "../../components/Carrousel/Carrousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../../components/Card/Card";
import styles from "../Store/Store.module.css";
import Paginado from "../../components/Paginado/Paginado";
import Cardcategory from "../../components/Card-Category/Cardcategory";

export default function Shop() {
  const dispatch = useDispatch();
  const catalog = useSelector((state) => state.totalproducts);
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

  // Función para filtrar por categoría
  const filteredByCategory = (categoryId) => {
    if (categoryId === "all") {
      setFilteredProducts(catalog);
    } else {
      const filtered = catalog.filter((product) => product.categoryId === categoryId);
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
    <div className={styles.container}>
      {/* BANNER */}
      <div className={styles.carouselBannerContainer}>
        <Carousel />
        <p>
          CELEBRA <br></br>
          EL DÍA 253
        </p>
        <button className={styles.boton}>Ver Colección</button>
      </div>

      {/* Nuevos Agregados */}
      <div className={styles.ContainerCenter}>
        <div className={styles.tituloCardsNuevas}>
          <h4>Nuevos Agregados</h4>
          <p>Consulta nuestras novedades</p>
        </div>
        <div>
          {/* Aquí van las card recién agregadas */}
          <button className={styles.button}>Ver más</button>
        </div>
      </div>

      {/* OFERTAS */}
      <div className={styles.ContainerBanner}>
        {/* Título */}
        <div className={styles.Banner}>
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

      {/* Filtros en la barra lateral izquierda */}
      <aside className={styles.sidebar}>
        {/* Filtros */}
        <div className={styles.filters}>
          {/* Filtro por Categoría */}
          <div className={styles.filter}>
            <h3>Filtrar por Categoría:</h3>
            <select
              className={styles.select}
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

      {/* Contenido principal */}
      <main className={styles.mainContent}>
        <div className={styles.products}>
          {/* Renderizar productos aquí */}
          {sortedProducts && sortedProducts.length > 0
            ? sortedProducts
                .slice(indexFirstProduct, indexLastProduct)
                .map((product) => <Card key={product.id} product={product} />)
            : filteredProducts && filteredProducts.length > 0
            ? filteredProducts
                .slice(indexFirstProduct, indexLastProduct)
                .map((product) => <Card key={product.id} product={product} />)
            : catalog && catalog.length > 0
            ? catalog
                .slice(indexFirstProduct, indexLastProduct)
                .map((product) => <Card key={product.id} product={product} />)
            : <h6>No hay productos disponibles.</h6>}
        </div>

        {/* Categorías */}
        <div className={styles.ContainerCenter}>
          <h4>Categorías</h4>
          <p>Encuentra lo que deseas</p>

          {/* Cards de categorías */}
          <div className={styles.cardscategories}>
            {categories && categories.length > 0 ? (
              categories.map((e) => (
                <Link to={`/Shop/${e.id}`} key={e.id}>
                  <h4>{e.title}</h4>
                </Link>
              ))
            ) : (
              <h2>No hay categorías disponibles.</h2>
            )}
          </div>

          <button className={styles.button}>Ver más</button>
        </div>

        {/* Los más buscados */}
        <div className={styles.ContainerBanner}>
          {/* Título */}
          <div className={styles.Banner}>
            <h2>
              Lo más buscado <br></br>de la galaxia
            </h2>
          </div>
        </div>

        <div className={styles.ContainerCenter}>
          {/* Aquí van las card con lo más buscado */}
          <button className={styles.button}>Ver más</button>
        </div>

        <div className={styles.ContainerCenter}>
          {catalog && catalog.length > 0 ? (
            catalog.map((e) => (
              <Link to={`/Shop/${e.id}`} key={e.id}>
                <h3>{e.title}</h3>
              </Link>
            ))
          ) : (
            <h6>No hay productos disponibles.</h6>
          )}
        </div>
      </main>
    </div>
  );
}