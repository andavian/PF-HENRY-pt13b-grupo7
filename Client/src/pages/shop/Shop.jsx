import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts,getProductByName,filteredByCategory,orderByPrice } from "../../redux/actions";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from "../../components/Card/Card";
import styles from "./shop.module.css";
import Paginado from "../../components/Paginado/Paginado";
import Navbar from "../../components/Navbar/Navbar";
import Cardcategory from "../../components/Card-Category/Cardcategory"

export default function Shop() {
  const dispatch = useDispatch();
  const catalog = useSelector((state) => state.catalog);
  const categories = useSelector((state)=> state.categories);
  const [search, setSearch] = useState("");
  const [orden, setOrden] = useState("");
  const [order, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(6);

  // Cálculo de índices para paginación
  const indexLastProduct = currentPage * productPerPage;
  const indexFirstProduct = indexLastProduct - productPerPage;

  // Función para cambiar de página
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
//cargar recetas según la búsqueda
useEffect(() => {
  if (search) {
    dispatch(getProductByName(search));
  } else {
    dispatch(addProducts());
  }
}, [dispatch, search]);

// Función para manejar el envío del formulario de búsqueda
const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(getProductByName(search));
  // No restablecemos currentPage aquí
};
// Función para manejar cambios en el campo de búsqueda
const handleInputName = (e) => {
  setSearch(e.target.value);
};
 // Restablecer currentPage a 1 cuando se cambia el filtro de ordenación
 const handleFilterCategory = (event) => {
  setCurrentPage(1);
  dispatch(filteredByCategory(event.target.value));
};
const handleSortByprice = (e) => {
  setCurrentPage(1);
  dispatch(orderByPrice(e.target.value));
  setOrden(`Ordenado ${e.target.value}`);
};
const handleRefreshRecipes = (e) => {
  e.preventDefault();
  dispatch(addProducts());
};

  return (
    <main>
      <h1>Catálogo</h1>
      <Navbar
        setSearch={setSearch}
        handleSubmitSearch={handleSubmit}
        handleFilterCategory={handleFilterCategory}
        handleSortByprice={handleSortByprice}      
      />

      <Carousel showThumbs={false}>
        <div>
          <img src="ruta-de-tu-imagen-1.jpg" alt="Imagen 1" />
        </div>
        <div>
          <img src="ruta-de-tu-imagen-2.jpg" alt="Imagen 2" />
        </div>
         {   /* Agrega más imágenes aquí */}
      </Carousel>
      <h3>Productos</h3>
      <section className={styles.container}>
        {catalog.map((prod) => (
          <Card key={prod.id} product={prod} />
        ))}
      </section>

      <Paginado
          productPerPage={productPerPage}
          catalog={catalog ? catalog.length : 0}
          paginado={paginado}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage} 
      />
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
