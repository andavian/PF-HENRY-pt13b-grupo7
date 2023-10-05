import React from "react";
import { useSelector } from "react-redux";
import styles from "./cardcategory.module.css";
import { Link } from "react-router-dom";




const CardCategory = ({product}) => {
  return (
    <div className="card text-bg-dark">
        <Link to={`/products/${product.name}`}>
      <img src={product.thumbnail} className="card-img" alt="slice" />
      <div className="card-img-overlay">
        <h5 className="card-title">{product.name}</h5>
      </div>
      </Link>
    </div>
  );
}

export default CardCategory;
