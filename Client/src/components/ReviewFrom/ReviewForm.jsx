import React, { useState } from "react";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import styles from "./ReviewForm.module.css"
const ReviewForm = ({ productId, onSubmitReview }) => {
    const [rating, setRating] = useState(null);
  const [review, setReview] = useState("");
  const [hover,setHover]=useState(null)


  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const submitReview = () => {
     
    setReview("");
    setRating(0);
  };
 
  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <div>
      <h3>Deja una reseña</h3>
      {/* Calificación */}
      <div className="rating">
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
      </div>
      {/* Textarea para la reseña */}
      <textarea
        placeholder="Escribe tu reseña aquí"
        value={review}
        onChange={handleReviewChange}
      />
      <button onClick={submitReview}>Enviar reseña</button>
    </div>
  );
};

export default ReviewForm;

