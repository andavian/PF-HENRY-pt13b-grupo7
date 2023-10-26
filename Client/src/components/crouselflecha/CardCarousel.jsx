import { useState } from "react";
import styles from "./ProductCarousel.module.css"; // Importa los estilos CSS Modules aquí
import Card from "../Card/Card"; // Asegúrate de importar tu componente Card
import Detail from "../../pages/Detail/Detail";
import Button from "../Paginado/Button/Button";

const ProductCarousel = ({ products }) => {
  const [startIndex, setStartIndex] = useState(0);

  const nextProduct = () => {
    setStartIndex((prevStartIndex) => (prevStartIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setStartIndex((prevStartIndex) =>
      prevStartIndex === 0 ? products.length - 1 : prevStartIndex - 1
    );
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalOpen(false);
  };

  // Calcula las tarjetas visibles en el carrusel
  const visibleCards = [];
  for (let i = 0; i < 5; i++) {
    const index = (startIndex + i) % products.length;
    visibleCards.push(products[index]);
  }

  return (
    <div className={styles["carousel-container"]}>

    




      <Button display={true} text="<" onClick={prevProduct} />
    

    

      <div className={styles["card-container"]}>
        {visibleCards.map((product, index) => (
          <div
            key={index}
            className={styles["card"]}
            onClick={() => openModal(product)}
          >
            {product && product.title ? (
              <Card product={product} />
            ) : (
              <p>Producto sin título</p>
            )}
          </div>
        ))}
      </div>

     

      <Button display={true} text=">" onClick={nextProduct}  />

      {modalOpen && selectedProduct && (
        <div className={styles["modal-overlay"]}>
          <Detail product={selectedProduct} onClose={closeModal} />
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;
