import React from "react";
import { useSelector } from "react-redux";
import styles from "./cardcategory.module.css";




const CardCategory = ({product}) => {
  return (
    <div className="card text-bg-dark">
      <img src="https://tse4.mm.bing.net/th?id=OIP.aV3_1sg9QEdADlu5byNWbwAAAA&pid=Api&P=0&h=180" className="card-img" alt="slice" />
      <div className="card-img-overlay">
        <h5 className="card-title">{product}</h5>
      </div>
    </div>
  );
}

export default CardCategory;
