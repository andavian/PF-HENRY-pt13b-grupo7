import React from "react";
import { useSelector } from "react-redux";
import styles from "./cardcategory.module.css";
import { Link } from "react-router-dom";

const CardCategory = ({ product }) => {
  return (
    <Link to={`/store/${product.name}`} className={styles.link}>
      <div className="card text-bg-dark">
        <img src={product.thumbnail} className="card-img" alt="slice" />
        <div className="card-img-overlay">
          <h5 className="card-title">{product.name}</h5>
        </div>
      </div>
    </Link>
  );
};


export default CardCategory;

