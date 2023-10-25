import React, { useState, useEffect } from "react";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import styles from "./ProductReview.module.css";

const ProductReview = ({ onAddReview }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [reviewText, setReviewText] = useState("");

  const handleAddReview = () => {
    if (onAddReview && rating != null) {
      const review = {
        rating: rating,
        reviewText: reviewText,
        // Otros campos de la reseña, como comentario, usuario, etc.
      };

      onAddReview(review);
      setRating(null);
      setReviewText(""); // Limpiar el campo de texto después de enviar la reseña
    }
  };

  useEffect(() => {
    // Puedes realizar acciones adicionales cuando cambia la puntuación si es necesario
  }, [rating]);

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

      <textarea
        className={styles.reviewTextarea}
        placeholder="Escribe tu reseña..."
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      />

      {rating != null && (
        <button className={styles.submitButton} onClick={handleAddReview}>
          Enviar reseña
        </button>
      )}
    </div>
  );
};

export default ProductReview;
