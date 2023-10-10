import React, { useState, useEffect } from "react";
import axios from "axios";
import CardCart from "../../components/CardCart/CardCart";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  // Inicializa el estado del carrito desde localStorage o un array vacío
  const [cart, setCart] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    return savedCart;
  });

  // Actualiza localStorage cada vez que cambie el estado del carrito
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
  }, [cart]);

  const removeFromCart = (id) => {
    // Filtra el carrito para eliminar el producto con el ID proporcionado
    const updatedCart = cart.filter((product) => {
      if (product.reviewProduct) {
        return product.reviewProduct.id !== id;
      } else {
        return product.id !== id;
      }
    });

    // Actualiza el estado del carrito
    setCart(updatedCart);
  };

  // Calcula el total de la compra monetario
  const calculateTotal = () => {
    return cart.reduce((total, product) => {
      const productToUse = product.reviewProduct || product;
      const price = productToUse.price || 0;
      const quantity = productToUse.quantity || 1;
      return total + price * quantity;
    }, 0);
  };

  // Calcula el total de la cantidad de productos en el carrito
  const calculateTotalQuantity = () => {
    return cart.reduce((total, product) => {
      const productToUse = product.reviewProduct || product;
      const quantity = productToUse.quantity || 1;
      return total + quantity;
    }, 0);
  };

  const handlePay = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:3001/payment/create-order"
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
      const linkPayPal = await handlePay(); // Llama a handlePay para obtener el objeto de enlace de PayPal
      console.log("Link de PayPal:", linkPayPal);

      // Realiza la redirección a la URL de PayPal
      window.location.href = linkPayPal.href; // Utiliza window.location.href para redirigir
      setCart([]);
    } catch (error) {
      alert("Error al iniciar el pago:", error);
    }
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li
              key={
                product.reviewProduct ? product.reviewProduct.id : product.id
              }
            >
              <CardCart product={product.reviewProduct || product} />
              <button
                onClick={() =>
                  removeFromCart(
                    product.reviewProduct
                      ? product.reviewProduct.id
                      : product.id
                  )
                }
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
      <p>Total de productos: {calculateTotalQuantity()}</p>
      <p>Total monetario: ${calculateTotal()}</p>
      <button onClick={() => setCart([])}>Vaciar Carrito</button>
      <button onClick={startPay}>Pagar</button>
    </div>
  );
};

export default Cart;
