import React, { useState } from 'react';
import styles from './ProductCarousel.module.css'; // Importa los estilos CSS Modules aquí
import Card from '../Card/Card'; // Asegúrate de importar tu componente Card

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

  // Calcula las tarjetas visibles en el carrusel
  const visibleCards = [];
  for (let i = 0; i < 8; i++) {
    const index = (startIndex + i) % products.length;
    visibleCards.push(products[index]);
  }

  return (
    <div className={styles['carousel-container']}>
      <button onClick={prevProduct} className={styles['arrow-button']}>
        &#9664;
      </button>
      <div className={styles['card-container']}>
        {visibleCards.map((product, index) => (
          <div key={index} className={styles['card']}>
            {/* Agregar una verificación antes de renderizar el componente Card */}
            {product && product.title ? (
              <Card product={product} />
            ) : (
              <p>Producto sin título</p>
            )}
          </div>
        ))}
      </div>
      <button onClick={nextProduct} className={styles['arrow-button']}>
        &#9654;
      </button>
    </div>
  );
};

export default ProductCarousel;
