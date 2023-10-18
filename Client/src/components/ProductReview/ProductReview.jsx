import React, { useState, useEffect } from "react";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import styles from "./ProductReview.module.css";

const ProductReview = ({ product }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    if (product && product.rating) {
      setRating(product.rating); // Si existe un rating en el producto, establece el valor de rating
    }
  }, [product]);

  return (
    <div>
      <div className={styles.inputContainer}>
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <label key={index}>
              <input
                className={styles.button}
                type="radio"
                name="rating"
                value={ratingValue}
                checked={rating === ratingValue}
                onChange={() => {
                  setRating(ratingValue);
                }}
              />
              <BsFillRocketTakeoffFill
                className={styles.icon}
                size={20}
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                onMouseEnter={() => {
                  setHover(ratingValue);
                }}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
      {rating != null && (
        <p className={styles.ratingText}>Puntuación: {rating}</p>
      )}
    </div>
  );
};

export default ProductReview;
