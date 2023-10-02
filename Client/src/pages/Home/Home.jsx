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
import Carrousel from "../../components/Carrousel/Carrousel";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../../components/Card/Card";
import styles from "./home.module.css";
import Paginado from "../../components/Paginado/Paginado";
import Cardcategory from "../../components/Card-Category/Cardcategory";
import CardCarousel from "../../components/crouselflecha/CardCarousel";

export default function Shop() {
  const dispatch = useDispatch();
  const catalog = useSelector((state) => state.reducer.totalproducts);
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
  // useEffect(() => {
  //   if (search) {
  //     dispatch(getProductByName(search));

  //   } else {
  //     dispatch(addProduct());
  //   }
  // }, [dispatch]);
  useEffect(() => {
    dispatch(addProduct());
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
      <div className={styles.carouselBannerContainer}>
        <Carrousel />
        <p>Henry Fans</p>
        <button className={styles.botonInicio}>Ver Coleccion</button>
      </div>
      <div className={styles.nuevasContainer}>
        <div className={styles.tituloCardsNuevas}>
          <h3>Nuevos Agregados</h3>
          <p>Lorem ipsum dolor sit amet consectetur</p>
          <CardCarousel products={catalog} />
        </div>
        <div className={styles.cardsNuevasContainer}>
          <button>Ver mas</button>
        </div>
      </div>
      <div className={styles.bannerOfertasContainer}>
        <img
          src="https://s3-alpha-sig.figma.com/img/83cc/5166/20ea1d562a5624a02b00cf9cd66ef9be?Expires=1696809600&Signature=X7h6KzprpJSiSgazogHXmkluLaHKe96wsc1VOBY5fyhQYK2rBIxBiv9SBZ3FYm5DxyoDxFEJtskIWp-Kroy0wYBbP5c7GAJHmNwnDbFqisvkRjLm1Z62dN9y91va8Bw1z3xs5kaU6N59HIX3k8hUU6QH0xPTcvWwUx8AEW1U5-H5opCvWToRH3SsO8TjrV5r9E9uIKWCirzGewOvFbUBdt1fR2mBqqPGIU2wOmrNDpx5rtVA9flJ7kGtUglRYYLSP2NpsiH5g5T6USOUxn1dzczO0e3qXQBLYh2yO-S9beIHekhWaCLWr2QtLyM2x0t-PdPCkN4Vfsu11qtKULlxWg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="slide"
        />
        <p>Ofertas fuera de orbita</p>
      </div>
      <div className={styles.cardsOfertasContainer}>
        {/* aca van las card con descuento*/}
        <button>Ver mas</button>
      </div>
      <div className={styles.categoriasContainer}>
        <div className={styles.titulosCategoria}>
          <h3>Categorias</h3>
          <p>Lorem ipsum dolor sit amet consectetur ad</p>
        </div>

        <div className={styles.cardscategories}>
          {categories && categories.length > 0 ? (
            categories.map((e) => (
              <Link to={`/Shop/${e.id}`} key={e.id}>
                <h3>{e.title}</h3>
              </Link>
            ))
          ) : (
            <h2>No hay categorias disponibles.</h2>
          )}
        </div>
      </div>
      <div className={styles.bannerBuscadosContainer}>
        <p>Los mas buscados</p>
        <img
          src="https://s3-alpha-sig.figma.com/img/83cc/5166/20ea1d562a5624a02b00cf9cd66ef9be?Expires=1696809600&Signature=X7h6KzprpJSiSgazogHXmkluLaHKe96wsc1VOBY5fyhQYK2rBIxBiv9SBZ3FYm5DxyoDxFEJtskIWp-Kroy0wYBbP5c7GAJHmNwnDbFqisvkRjLm1Z62dN9y91va8Bw1z3xs5kaU6N59HIX3k8hUU6QH0xPTcvWwUx8AEW1U5-H5opCvWToRH3SsO8TjrV5r9E9uIKWCirzGewOvFbUBdt1fR2mBqqPGIU2wOmrNDpx5rtVA9flJ7kGtUglRYYLSP2NpsiH5g5T6USOUxn1dzczO0e3qXQBLYh2yO-S9beIHekhWaCLWr2QtLyM2x0t-PdPCkN4Vfsu11qtKULlxWg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="slide"
        />
      </div>
      <div className={styles.cardsProductContainer}>
        <CardCarousel products={catalog} />
      </div>
        
    </main>
  );
}
