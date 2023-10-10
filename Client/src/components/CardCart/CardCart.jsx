// CardCart.js

import React from "react";
import styles from "./CardCart.module.css";

const CardCart = ({ product, quantity }) => {
  const calculateTotal = () => {
    return product.price * (quantity || 1);
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img
          src={product.primaryimage}
          className={styles.imgFluid}
          alt={product.title}
        />
      </div>

      <div className={styles.textContainer}>
        <div>
          <h5>{product.title}</h5>
          <p>{product.description}</p>
          <p>
            Price: ${product.price.toFixed(2)} - Quantity: {quantity} - Total: $
            {calculateTotal().toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardCart;
