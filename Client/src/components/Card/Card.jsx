import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { addProductToCart, removeProductFromCart } from "../../redux/actions";
import styles from "./card.module.css";
import { useState } from "react";


export default function Card({ product }) {  
  const { pathname } = useLocation();
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = () => {
    const savedCart = localStorage.getItem("cart");
    const cart = savedCart ? JSON.parse(savedCart) : [];

    if (!isInCart) {
      cart.push(product);
    } else {
      const updatedCart = cart.filter((item) => item.id !== product.id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setIsInCart(!isInCart);
  };

  // Trunca el título a un máximo de 30 caracteres
  const truncatedTitle =
    product.title.length > 30
      ? product.title.substring(0, 30) + "..."
      : product.title;

  return (
    <article className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />

      <p className={styles.heading}>{truncatedTitle}</p>

      <p className={styles.para}>$ {product.price}</p>

      <div className={styles.overlay}></div>

      <button className={styles.cardBtn} onClick={handleAddToCart}>
        {isInCart ? "Quitar del carrito" : "Agregar al carrito"}
      </button>
    </article>
  );
}
