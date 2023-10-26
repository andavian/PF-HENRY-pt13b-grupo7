// DashHome.js
import React from "react";
import { Link } from "react-router-dom";
import { FcSalesPerformance, FcBiohazard, FcManager, FcFeedback, FcImport } from "react-icons/fc";
import {TbShirtFilled , TbCategoryFilled} from "react-icons/tb";
import {BsFillClipboard2PlusFill} from "react-icons/bs";
import logo from "../../../images/logoshop.svg";
import styles from "./DashHome.module.css";

export default function DashHome() {
  return (
    <nav>
    <div className={styles.sidebar}>
      <img src={logo} alt="1" />
      <ul>
        <li className={styles.linkItem}>
          <Link to="/dashpage">
      
            <span>Dashboard</span>
          </Link>
        </li>
        <li className={styles.linkItem}>
          <Link to="/dashclients">
            <FcManager className={styles.icon} />
            <span>Clientes</span>
          </Link>
        </li>
        <li className={styles.linkItem}>
          <Link to="/dashproducts">
            <TbShirtFilled className={styles.icon} />
            <span>Products</span>
          </Link>
        </li>
        <li className={styles.linkItem}>
          <Link to="/dashcategories">
            <TbCategoryFilled className={styles.icon} />
            <span>Categories</span>
          </Link>
          </li>
        <li className={styles.linkItem}>
          <Link to="/dashaddproduct">
            <BsFillClipboard2PlusFill className={styles.icon} />
            <span>Enter Product</span>
          </Link>
        </li>       
          <li className={styles.linkItem}>
          <Link to="/dashaddcategory">
            <BsFillClipboard2PlusFill className={styles.icon} />
            <span>Enter Category</span>
          </Link>
        </li>  
        <li className={styles.linkItem}>
          <Link to="/home">
            <FcImport className={styles.icon} />
            <span>Log Out</span>
          </Link>
        </li>
      </ul>
    </div>
    </nav>
  );
}
