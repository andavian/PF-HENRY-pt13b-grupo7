import React, { useState, useEffect } from "react";
import axios from "axios";
import CardCart from "../../components/CardCart/CardCart"; // Importa el componente CardCart
import { useNavigate } from "react-router-dom";
import style from "./cart.module.css";

const Cart = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    return savedCart;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((product) => {
      if (product.reviewProduct) {
        return product.reviewProduct.id !== id;
      } else {
        return product.id !== id;
      }
    });
    setCart(updatedCart);
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((product) => {
      if (
        (product.reviewProduct && product.reviewProduct.id === id) ||
        product.id === id
      ) {
        return {
          ...product,
          quantity: (product.quantity || 1) + 1,
        };
      }
      return product;
    });
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((product) => {
      if (
        (product.reviewProduct && product.reviewProduct.id === id) ||
        product.id === id
      ) {
        return {
          ...product,
          quantity: Math.max((product.quantity || 1) - 1, 1),
        };
      }
      return product;
    });
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => {
      const productToUse = product.reviewProduct || product;
      const price = productToUse.price || 0;
      const quantity = productToUse.quantity || 1;
      return total + price * quantity;
    }, 0);
  };

  const calculateTotalQuantity = () => {
    return cart.reduce((total, product) => {
      const productToUse = product.reviewProduct || product;
      const quantity = productToUse.quantity || 1;
      return total + quantity;
    }, 0);
  };

  const handlePay = async () => {
    try {
      const order = {
        value: calculateTotal(),
      };
      const { data } = await axios.post(
        "http://localhost:3001/payment/create-order",
        order
      );
      console.log("datos", data);
      return data.links[1];
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
      throw error;
    }
  };

  const startPay = async () => {
    try {
      const linkPayPal = await handlePay();
      console.log("Link de PayPal:", linkPayPal);
      window.location.href = linkPayPal.href;
      setCart([]);
    } catch (error) {
      alert("Error al iniciar el pago:", error);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.productContainer}>
        <h2>Carrito de Compras</h2>
        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <ul className={style.productList}>
            {cart.map((product) => (
              <li
                key={product.id || product.reviewProduct.id}
                className={style.productItem}
              >
                {/* Utiliza el componente CardCart aquí */}
                <CardCart
                  product={product.reviewProduct || product}
                  quantity={product.quantity}
                />
                <div className={style.quantityContainer}>
                  <button
                    className={style.button}
                    onClick={() =>
                      decreaseQuantity(product.id || product.reviewProduct.id)
                    }
                  >
                    -
                  </button>
                  <input
                    type="text"
                    className={style.quantityInput}
                    value={product.quantity || 1}
                    readOnly
                  />
                  <button
                    className={style.button}
                    onClick={() =>
                      increaseQuantity(product.id || product.reviewProduct.id)
                    }
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={style.infoContainer}>
        <h2>Total de productos: {calculateTotalQuantity()}</h2>
        <h3>Total monetario: ${calculateTotal()}</h3>
        
        <button onClick={startPay}>Pagar</button>
        <br></br>
        <button onClick={() => setCart([])}>Vaciar Carrito</button>
  
      </div>
    </div>
  );
};

export default Cart;
