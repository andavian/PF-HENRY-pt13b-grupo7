import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./card.module.css";
import { useState } from "react";
import Detail from "../../pages/Detail/Detail";

export default function Card({ product }) {
  const { pathname } = useLocation();
  const [isInCart, setIsInCart] = useState(false);

  // modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalOpen(false);
  };

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
    <div className={styles.container}>
      <div className={styles.card}>
        <img
          src={product.primaryimage}
          alt={product.title}
          className={styles.image}
        />
        <button className={styles.cardBtn} onClick={handleAddToCart}>
          {isInCart ? (
            <>
              <div />{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart-dash-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM6.5 7h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z" />
              </svg>{" "}
              Quitar
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart-plus-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
              </svg>{" "}
              Agregar
            </>
          )}
        </button>

        <div className={styles.cardinfo}>
          <div className={styles.price}>$ {product.price}</div>

          <Link className={styles.link}>
            <div className={styles.title} onClick={() => openModal(product)}>
              {truncatedTitle}
            </div>
          </Link>

          {modalOpen && selectedProduct && (
            <div className={styles["modal-overlay"]}>
              <Detail product={selectedProduct} onClose={closeModal} />
            </div>
          )}

          <div className={styles.description}>{product.description}</div>
        </div>
      </div>
      </div>
  );
}
