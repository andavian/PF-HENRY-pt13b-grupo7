import React from "react";
import { useSelector } from "react-redux";
import styles from "./cardcategory.module.css";
import { Link } from "react-router-dom";

const CardCategory = ({ product }) => {
  return (
    <Link to={`/store/${product.name}`} className={styles.link}>
      <div className={styles.card}>
        <img src={product.thumbnail} className={styles.cardImg} alt="slice" />
        <div className={styles.cardImgOverlay}>
          <h5 className={styles.cardTitle}>{product.name}</h5>
        </div>
      </div>
    </Link>
  );
};

export default CardCategory;
