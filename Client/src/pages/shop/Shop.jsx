import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProducts,
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
import Carousel from "../../components/Carrousel/Carrousel";


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
      dispatch(addProducts());
    }
  }, [dispatch, search]);

  // Restablecer currentPage a 1 cuando se cambia el filtro de ordenación
  const handleFilterCategory = (event) => {
    dispatch(setCurrentPageGlobal(1));
    dispatch(filteredByCategory(event.target.value));
  };
  const handleSortByprice = (e) => {
    dispatch(setCurrentPageGlobal(1));
    dispatch(orderByPrice(e.target.value));
    setOrden(`Ordenado ${e.target.value}`);
  };
  const handleRefreshRecipes = (e) => {
    e.preventDefault();
    dispatch(addProducts());
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Ajusta la cantidad de tarjetas mostradas
    slidesToScroll: 1,
  };

  return (
    <main>
      <h1>Catálogo</h1>
     <Carousel/>
      <h3>Productos</h3>
      <Slider {...settings}>
      {catalog && catalog.length > 0 ? (
          catalog
            .map((e) => (
              <Link to={`/Shop/${e.id}`} key={e.id}>
                <Card prod={e} />
              </Link>
            ))
        ) : (
          <h2 className={styles.erro}>
            El estado de recetas está vacío. Añade recetas o realiza una
            búsqueda.
          </h2>
        )}
      </Slider>
      
       {/* <Paginado
        productPerPage={productPerPage}
        catalog={catalog ? catalog.length : 0}
        paginado={paginado}
      />  */}
      <div>
        <img src="ruta-de-tu-imagen-1.jpg" alt="Imagen 1" />
      </div>
      <h3>Categorias</h3>
      <section className={styles.container}>
        {categories.map((category) => (
          <Cardcategory key={category.id} product={category} />
        ))}
      </section>
    </main>
  );
}
