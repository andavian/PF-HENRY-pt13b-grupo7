import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  getProductByName,
  filteredByCategory,
  orderByPrice,
  setCurrentPageGlobal,
} from "../../redux/actions";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../../components/Card/Card";
import styles from "./shop.module.css";
import Paginado from "../../components/Paginado/Paginado";
import Cardcategory from "../../components/Card-Category/Cardcategory";

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Shop() {
  const dispatch = useDispatch();
  const catalog = useSelector((state) => state.catalog);
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
    <main className={`container ${styles.container}`}>
      <div className={`carouselBannerContainer ${styles.carouselBannerContainer}`}>
        <h2>CELEBRA EL DÍA 253</h2>
        <Carousel />
        <button className="btn btn-primary">Ver Coleccion</button>
      </div>

      {/* ... other sections ... */}

      <div className={`bannerBuscadosContainer ${styles.bannerBuscadosContainer}`}>
        <h3>Los mas buscados</h3>
        <img src="" alt="" />
      </div>

      <div className={`cardsProductContainer ${styles.cardsProductContainer}`}>
        <Slider {...settings}>
          {catalog && catalog.length > 0 ? (
            catalog.map((e) => (
              <Link to={`/Shop/${e.id}`} key={e.id}>
                <Card prod={e} />
              </Link>
            ))
          ) : (
            <h2>no hay cards</h2>
          )}
        </Slider>
      </div>
    </main>
  );
}