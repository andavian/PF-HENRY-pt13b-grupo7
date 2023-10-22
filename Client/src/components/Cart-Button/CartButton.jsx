import React from "react";
import styles from "./CartButton.module.css"; // Importa los estilos CSS Modules
import { Link } from "react-router-dom";

const CartButton = () => {
  return (
    <button className={`${styles["cart-button"]} ${styles["fixed"]}`}>
      {/* Ícono de carrito de compras */}
      <Link to="/cart" className={styles.links}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"  // Cambia el ancho a 32 para hacerlo más grande
        height="32" // Cambia la altura a 32 para hacerlo más grande
        fill="currentColor"
        className="bi bi-cart-fill"
        viewBox="0 0 16 16"
      >
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      </svg>
      </Link>
    </button>
  );
};

export default CartButton;


