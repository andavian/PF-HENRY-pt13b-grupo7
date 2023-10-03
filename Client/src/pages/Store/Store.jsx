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

  const handleRefreshRecipes = (e) => {
    e.preventDefault();
    dispatch(addProduct());
  };
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
      <div className={styles.carouselBannerContainer}>
        <Carousel />
        <p>
          CELEBRA <br></br>
          EL DÍA 253
        </p>
        <button className={styles.boton}>Ver Coleccion</button>
      </div>

      {/* Nuevos Agregados */}
      <div className={styles.ContainerCenter}>
        <div className={styles.tituloCardsNuevas}>
          <h4>Nuevos Agregados</h4>
          <p>Consulta nuestras novedades</p>
        </div>
        <div>
          {/* aca van las card recien agregadas*/}
          <button className={styles.button}>Ver mas</button>
        </div>
      </div>

      {/* OFERTAS */}
      <div className={styles.ContainerBanner}>
        {/* Titulo */}
        <div className={styles.Banner}>
          <h2>
            Ofertas fuera <br></br>de orbita
          </h2>
        </div>

        {/* Prductos descuento */}
        <div className={styles.ContainerCenter}>
          {/* aca van las card con descuento*/}

          <button className={styles.button}>Ver más</button>
        </div>
      </div>

          <button className={styles.button}>Ver más</button>
    


      {/*Categorias */}
      <div className={styles.ContainerCenter}>
          <h4>Categorias</h4>
          <p>Encuentra lo que deseas</p>

            {/* Cards */}
          <div className={styles.cardscategories}>
            {categories && categories.length > 0 ? (
              categories.map((e) => (
                <Link to={`/Shop/${e.id}`} key={e.id}>
                  <h4>{e.title}</h4>
                </Link>
              ))
            ) : (
              <h2>No hay categorias disponibles.</h2>
            )}
          </div>

          <button className={styles.button}>Ver más</button>
      </div>


      {/*Los mas buscados */}
      <div className={styles.ContainerBanner}>
        {/* Titulo */}
        <div className={styles.Banner}>
          <h2>
            Lo más buscado <br></br>de la galaxia
          </h2>
        </div>
        </div>


        <div className={styles.ContainerCenter}>
          {/* aca van las card con lo mas buscado*/}

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
  );
}
