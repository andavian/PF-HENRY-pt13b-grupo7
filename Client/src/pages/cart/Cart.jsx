import React, { useState, useEffect } from "react";
import axios from "axios";
import CardCart from "../../components/CardCart/CardCart"; // Importa el componente CardCart
import { useAuth0 } from "@auth0/auth0-react";
import style from "./cart.module.css";
import { Link } from "react-router-dom";
import Pago from "../../assets/iconos/pago-paypal-seguro.png";
import { sendMailPay } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Cart = () => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const [cart, setCart] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    return savedCart;
  });
  const userStorage = JSON.parse(localStorage.getItem("userData"))
  const dispatch = useDispatch();
  
  useEffect(() => {
    console.log(userStorage);
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
    let mailer = {
      email: user.email,
    };
    console.log("Contenido de mailer antes de enviar:", mailer);

    try {
      if (userStorage.billingaddress) {
        dispatch(sendMailPay(mailer));
        const order = {
          value: calculateTotal(),
        };
        const { data } = await axios.post("/payment/create-order", order);
        console.log("datos", data);
        return data.links[1];
      } else {
        loginWithRedirect();
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
      throw error;
    }
  };

  return (
    <div className={style.container}>
      <div className={style.productContainer}>
        <h5>Carrito de Compras</h5>
      </div>

      <div className={`${style.productContainer}`}>
        {cart.length === 0 ? (
          <div className={`${style.productContainer}`}>
            <div className={style.centeredContainer}>
              <h3 className={style.emptyCartMessage}>Tu carrito está vacío.</h3>

              <Link className={style.button} to="/store">
                Descubre nuestros productos
              </Link>
            </div>
          </div>
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

                  <button
                    className={style.buttonText}
                    onClick={() =>
                      removeFromCart(product.id || product.reviewProduct.id)
                    }
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={style.infoContainer}>
        <div className={style.container}>
          <div className={style.productcheck}>
            {/* Utilizando una tabla para el resumen de compra */}
            <table className={style.summaryTable}>
              <thead>
                <tr>
                  <th colSpan="2" className={style.title}>
                    Resumen de compra
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={style.title}>Total de productos:</td>
                  <td className={style.title}>{calculateTotalQuantity()}</td>
                </tr>
                <tr>
                  <td className={style.titlebold}>Total</td>
                  <td className={style.titlebold}>${calculateTotal()}</td>
                </tr>
              </tbody>
            </table>

            <button className={style.buttonCompra} onClick={handlePay}>
              Continuar compra
            </button>

            <a className={style.buttonText} onClick={() => setCart([])}>
              Vaciar Carrito
            </a>

            {/* <Link className={style.buttonText} to="/saved">
              Ver Guardado para más tarde
            </Link> */}

            <div className={style.discalamer}>
              <h6>
                La disponibilidad y el precio de los artículos no están
                garantizados hasta que se finalice el pago.
              </h6>

              <h6>
                <svg
                  className={style.svg}
                  xmlns="http://www.w3.org/2000/svg"
                  class="bi bi-lock"
                  viewBox="0 0 16 16"
                  width="1em"
                  height="1em"
                  fill="#0a8800"
                >
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                </svg>
                No se te cobrará hasta que revises este pedido en la página
                siguiente.
              </h6>

              <h6>
                <svg
                  className={style.svg}
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 1024 1024"
                  width="1em"
                  height="1em"
                  fill="#0a8800"
                >
                  <path d="M459.5 24c29.3-11.5 61.9-11.8 91.3-0.6l344.9 131c35.8 13.6 59 48.6 57.5 86.9l-9.1 229c-6.4 161.4-88.1 310.4-220.7 402.5l-102.4 71.1c-68.4 47.5-159 47.5-227.4 0l-101.7-70.6c-132.1-91.7-212.6-240.9-216.7-401.6l-5.9-230.9c-1-37.5 21.6-71.5 56.4-85.2z m67.1 63.3c-13.6-5.1-28.5-5.1-42 0.2l-333.8 131.6c-8.2 3.2-13.5 11.2-13.3 20l5.9 230.9c3.6 139 73.2 268 187.4 347.3l101.7 70.6c45 31.2 104.6 31.2 149.6 0l102.4-71.2c115.1-79.9 185.9-209.2 191.4-349.1l9.1-229c0.4-9-5.1-17.2-13.5-20.4z m-114.6 552.6c23.6 0 42.7 19.1 42.7 42.7 0 23.6-19.1 42.7-42.7 42.7-23.6 0-42.7-19.1-42.8-42.7 0-23.6 19.1-42.7 42.8-42.7z m231.5 0c23.6 0 42.7 19.1 42.7 42.7 0 23.6-19.1 42.7-42.7 42.7-23.6 0-42.7-19.1-42.7-42.7 0-23.6 19.1-42.7 42.7-42.7z m-335.4-386c25.6 0 47.6 18.3 52.3 43.5l5.4 29.7 313.2 0c32.5 0 59.2 24.8 62.2 56.5l0.3 6c0 3.5-0.3 6.9-0.9 10.3l-26.6 158.8c-5 30.1-31.1 52.2-61.6 52.1l-249.9 0c-30.4 0-56.4-21.9-61.5-51.9l-33.4-194.4-8.6-46.6-60.1 0c-16.2 0-29.6-12-31.7-27.7l-0.3-4.3c0-17.7 14.3-32 32-32l69.2 0z m369.1 137.2l-300.1 0 26.7 155.7 247.3 0 26.1-155.7z"></path>
                </svg>
                Protección de compras en Henry Shop
              </h6>
              <p>
                Compra con confianza en Henry Shop sabiendo que si algo sale
                mal, siempre te protegeremos.
              </p>
              <p>Consulta los términos del programa</p>

              <h6>
                <svg
                  className={style.svg}
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 1024 1024"
                  width="1em"
                  height="1em"
                  role="img"
                  fill="#0a8800"
                >
                  <path d="M750.1 54l6.8 12.3 7.9 15.2 8.8 17.8 14.7 31.1c24.2 53.6 45.6 110.7 61.8 169.4 46.6 167.9 43.7 318-29.6 434.3-72.2 114.5-205.8 181.6-395.2 201l-19.8 1.9c-20.7 2.1-37.4 1.9-50-0.6-12.6-2.5-29-11.2-49.3-26.2-17.4-13.4-34.2-27.8-50.2-43.6-107.3-105.6-144.3-230.5-62.7-367 56.3-94.2 130.1-155.3 249.3-222l57.6-31.8 25-14.6c82.5-49.7 119.7-89.8 135.8-153.7l2.3-10.3c3.4-18.6 19.2-32.8 39-35.7 19.7-2.7 38.7 6.3 47.8 22.5z m-37.7 48.8l-2.5 8.2c-22.4 68.4-68.4 116-156.3 168.9l-26.1 15.2-57.4 31.7c-116.9 65.4-180.1 120.8-228.5 201.8-62.9 105.3-43.3 202.3 53.9 297.9 12.2 12 25.2 23.4 38.5 34l-3.3 19.3c21.3-134.8 62.2-243.5 122.8-326 60.6-82.5 158.3-146.5 293-191.8-113.3 71.8-195.3 148.1-245.9 228.9-47.8 76.2-81.6 172.9-101.3 290l1.5-0.1c184.7-15.5 308.3-75.7 372-176.7 60.7-96.3 68-227.1 23.1-389.3-14.9-53.6-34.8-107.8-58.7-160.5l-14-30-10.8-21.5z"></path>
                </svg>
                Sostenibilidad en Henry Shop
              </h6>

              <h6>
                <svg
                  className={style.svg}
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  role="img"
                  fill="#0a8800"
                >
                  <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                  <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                </svg>
                Opciones de pago seguro
              </h6>
              <p>
                Tu información de pago está segura con nosotros. Henry Shop no
                comparte tu información con los vendedores.
              </p>

              <h6>Métodos de pago</h6>
              <img
                src={Pago}
                alt="Métodos de pago"
                className={style.paymentImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
