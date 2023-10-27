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
// import Carrousel from "../../components/Carrousel/Carrousel";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// // import Slider from "react-slick"; // Comenté la importación de Slider
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Card from "../../components/Card/Card";
import styles from "./home.module.css";
import Paginado from "../../components/Paginado/Paginado";
import CardCarousel from "../../components/crouselflecha/CardCarousel";
import CardCategory from "../../components/Card-Category/Cardcategory";

import bannerBackground from "../../images/Banner.jpg";

export default function Shop() {
  const dispatch = useDispatch();
  const catalog = useSelector((state) => state.reducer.catalog);
  const categories = useSelector((state) => state.reducer.categories);
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
    dispatch(addProduct());
    dispatch(getCategories());
  }, [dispatch]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Ajusta la cantidad de tarjetas mostradas
    slidesToScroll: 1,
  };

  return (
    <main className={styles.container}>
      {/* BANNER */}
      {/* <div className={styles.carouselBannerContainer}>
         <Carrousel /> 
        <p>
          CELEBRA <br></br>
          EL DÍA 253
        </p>
        <button className={styles.boton}>Ver Coleccion</button>
      </div> */}

      <div
        className={styles.bannerContainer}
        style={{ backgroundImage: `url(${bannerBackground})` }}
      >
        <div className={styles.container}>
          <div className={styles.titleBannerArea}>
            <h1 className={styles.titleBanner}>
              CELEBRA <br></br>
              EL DÍA 253
            </h1>

            <button className={styles.buttonBanner}>Ver mas</button>
          </div>
        </div>
      </div>

      {/* Nuevos Agregados */}
      <div className={styles.ContainerCenter}>
        <div className={styles.tituloCardsNuevas}>
          <h4>Nuevos Agregados</h4>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div>
          <CardCarousel products={catalog} />
          <button className={styles.button}>Ver mas</button>
        </div>
      </div>

      {/* OFERTAS */}
      <div className={styles.ContainerBanner}>
        {/* Titulo */}
        <div className={styles.Banner}>
          <h2>
            Ofertas fuera <br />
            de orbita
          </h2>
        </div>

        {/* Prductos descuento */}
        <div className={styles.ContainerCenter}>
          {/* aca van las card con descuento*/}
          <button className={styles.button}>Ver más</button>
        </div>
      </div>

      {/*Categorias */}
      <div className={styles.ContainerCenter}>
        <h4>Categorias</h4>

        {/* Cards */}
        <div className={styles.cardscategories}>
          {categories && categories.length > 0 ? (
            categories.map((e, index) => (
              <div key={index} className={styles.cardCategoryWrapper}>
                <CardCategory product={e} />
              </div>
            ))
          ) : (
            <h2>No hay categorías disponibles.</h2>
          )}
        </div>
      </div>

      {/*Los mas buscados */}
      <div className={styles.ContainerBanner}>
        {/* Titulo */}
        <div className={styles.Banner}>
          <h2>
            Lo más buscado <br />
            de la galaxia
          </h2>
        </div>

        <div className={styles.ContainerCenter}>
          <CardCarousel products={catalog} />
          <button className={styles.button}>Ver más</button>
        </div>
      </div>
    </main>
  );
}
