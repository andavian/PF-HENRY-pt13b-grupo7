import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductById, addProductToCart } from '../../redux/actions';
import Carousel from '../../components/Carrousel/Carrousel';
import styles from './detail.module.css';

export default function Detail({ product, onClose }) {
  const detailState = useSelector((state) => state.reducer.details);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();
  

  useEffect(() => {
    dispatch(getProductById(product.id));
  }, [dispatch, id]);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      {detailState ? (
        <div className={styles['modal']}>
          
          <div className={styles.productImage}>
            <Carousel images={detailState.image}/>
          </div>
          <div className={styles.detailsContainer}>
          <div>
            <button onClick={onClose}>Cerrar</button>
          </div>
            <div className={styles.detailsContainer1}>
            <h2>{detailState.title}</h2>
            <p className={styles.productPrice}>${detailState.price}</p>
            </div>
            <p className={styles.productDescription}>{detailState.description}</p>
            {quantity > 0 ? (
              <div className={styles.quantityContainer}>
                <button onClick={decreaseQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity}>+</button>
              </div>
            ) : (
              <p>Producto agotado</p>
            )}
            <button
              className={styles.buttonContainer}
              onClick={() =>
                dispatch(addProductToCart({ id: detailState.id, quantity }))
              }
              disabled={detailState.stock === 0}
            >
              Agregar al carrito
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M5.66667 7.33333H3.16667L1.5 16.5H16.5L14.8333 7.33333H12.3333M5.66667 7.33333V4.83333C5.66667 2.99239 7.15905 1.5 9 1.5V1.5C10.8409 1.5 12.3333 2.99238 12.3333 4.83333V7.33333M5.66667 7.33333H12.3333M5.66667 7.33333V9.83333M12.3333 7.33333V9.83333"
                  stroke="white"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className={styles.healthContainer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.99967 17.5451C-6.66666 8.33333 4.99999 -1.66667 9.99967 4.65671C15 -1.66667 26.6666 8.33333 9.99967 17.5451Z"
                  stroke="#2C742F"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <span>{`Categorías: ${detailState.category}`}</span>
          </div>
        </div>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
}

