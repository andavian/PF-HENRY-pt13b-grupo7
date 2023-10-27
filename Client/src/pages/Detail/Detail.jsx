import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById, addProductToCart,postReview, getUserByEmail } from "../../redux/actions";
import Carousel from "../../components/Carrousel/Carrousel";
import styles from "./detail.module.css";
import ProductReview from "../../components/ProductReview/ProductReview";
import { useAuth0 } from "@auth0/auth0-react"

export default function Detail({ product, onClose }) {
  const detailState = useSelector((state) => state.reducer.details);
  const [isFav, setIsFav] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const userStorage = JSON.parse(localStorage.getItem("userData"));
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const profile = useSelector((state)=>state.reducer.registration)

  // Agregar un efecto para reiniciar el estado isFav al cambiar de producto
  // useEffect(() => {
  //   const currentFavorites =
  //     JSON.parse(localStorage.getItem("favorites")) || [];
  //   const isProductInFavorites = currentFavorites.some(
  //     (favoriteProduct) => favoriteProduct.id === product.id
  //   );
  //   setIsFav(isProductInFavorites);
  //   dispatch(getProductById(product.id));
  // }, [dispatch, id, product.id]);

  // const addToFavorites = (product) => {
  //   // Recupera la lista de favoritos del localStorage
  //   const currentFavorites =
  //     JSON.parse(localStorage.getItem("favorites")) || [];

  //   // Verifica si el producto ya está en la lista de favoritos
  //   const isProductInFavorites = currentFavorites.some(
  //     (favoriteProduct) => favoriteProduct.id === product.id
  //   );

  //   if (!isProductInFavorites) {
  //     // Si el producto no está en la lista, agrégalo
  //     currentFavorites.push(product);

  //     // Guarda la lista actualizada en el localStorage
  //     localStorage.setItem("favorites", JSON.stringify(currentFavorites));
  //     setIsFav(true); // Actualiza el estado para reflejar que el producto está en favoritos
  //   } else {
  //     // Si el producto ya está en favoritos, quítalo de la lista
  //     const updatedFavorites = currentFavorites.filter(
  //       (favoriteProduct) => favoriteProduct.id !== product.id
  //     );

  //     // Guarda la lista actualizada en el localStorage
  //     localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  //     setIsFav(false); // Actualiza el estado para reflejar que el producto ya no está en favoritos
  //   }
  // };

  useEffect(() => {
    dispatch(getProductById(product.id))
    dispatch(getUserByEmail(userStorage.email))
    fetch(`http://localhost:3001/reviews?productId=${product.id}`)
      .then((response) => response.json())
      .then((data) => {
        // Verifica si el objeto de respuesta contiene el promedio de reseñas
        if (data.averageRating !== undefined) {
          // Almacena el promedio de reseñas en el estado local
          console.log("acaa",data.averageRating);
          setAverageRating(data.averageRating);
        }
        console.log("reviews",data.reviews);
        // Almacena las reseñas en el estado local
        setReviews(data.reviews);
      })
      .catch((error) => {
        console.error("Error al obtener reseñas:", error);
      });
  }, [product.id]);

  const addToCart = (product, quantity) => {
    // Obtener el carrito actual desde Local Storage o inicializarlo como un array vacío
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Buscar si el producto ya está en el carrito
    const existingProductIndex = currentCart.findIndex(
      (cartItem) => cartItem.reviewProduct.id === product.id
    );

    if (existingProductIndex !== -1) {
      // Si el producto ya está en el carrito, sumar la cantidad
      currentCart[existingProductIndex].reviewProduct.quantity += quantity;
    } else {
      // Si el producto no está en el carrito, agregarlo con la cantidad proporcionada
      const reviewProduct = { ...product, quantity };
      currentCart.push({ reviewProduct });
    }

    // Guardar el carrito actualizado en Local Storage
    localStorage.setItem("cart", JSON.stringify(currentCart));

    // Opcional: Mostrar un mensaje de éxito o realizar cualquier otra acción necesaria
    alert("Producto agregado al carrito con éxito.");

    // Cerrar el detalle del producto o realizar cualquier otra acción necesaria
    onClose();
  };
const deleteReviewHandler =()=>{

}


 const onAddReview = (reviewText,rating)=>{
  const reviewdata ={
    productId: product.id,
    email: userStorage.email, 
    description: reviewText.reviewText,
    rating: reviewText.rating
  }
  console.log("storage",profile);
dispatch(postReview(reviewdata))

 }

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const images = [detailState.primaryimage];

  return (
    <div>
      {detailState ? (
        <div className={styles.modal}>
          <div className={styles.productImage}>
            <Carousel images={images} />
          </div>

          <button className={styles.buttonClose} onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-x-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
            </svg>
          </button>

          <div className={styles.detailsContainer}>
            <div className={styles.detailsContainer}>
              <h2 className={styles.title}>{detailState.title}</h2>
              <div className={styles.fav}>
                <button
                  className={styles.fav}
                  onClick={() =>
                    isFav
                      ? addToFavorites(detailState)
                      : addToFavorites(detailState)
                  }
                >
                  {isFav ? "❤️" : "🤍"}
                </button>
              </div>

              <p className={styles.price}>${detailState.price}</p>

              <p className={styles.description}>{detailState.description}</p>
            </div>

            {quantity > 0 ? (
              <div className={styles.quantityContainer}>
                <button className={styles.button} onClick={decreaseQuantity}>
                  -
                </button>
                <span>{quantity}</span>

                <button className={styles.button} onClick={increaseQuantity}>
                  +
                </button>
              </div>
            ) : (
              <p>Producto agotado</p>
            )}

            <button
              className={styles.buttonBlue}
              onClick={() => addToCart(detailState, quantity)}
              disabled={detailState.stock === 0}
            >
              Agregar al carrito
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M5.66667 7.33333H3.16667L1.5 16.5H16.5L14.8333 7.33333H12.3333M5.66667 7.33333V4.83333C5.66667 2.99239 7.15905 1.5 9 1.5V1.5C10.8409 1.5 12.3333 2.99238 12.3333 4.83333V7.33333M5.66667 7.33333H12.3333M5.66667 7.33333V9.83333M12.3333 7.33333V9.83333"
                  stroke="white"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {detailState ? (
              <span>{`Categorías: ${detailState.Category?.name}`}</span>
            ) : (
              <p>Indefinida</p>
            )}
          </div>
          <ProductReview onAddReview={onAddReview} />
          <div>
        <h2>Reseñas de Productos</h2>      
       {reviews && reviews.map((review) => (
        <div className={styles.review}>
        <h4>Rating: {review.rating}</h4>
        <p>Description: {review.description}</p>
        <p>Created At: {review.createdAt}</p>
        {userStorage.id === review.UserId ?
        <button onClick={()=>deleteReviewHandler(review.Id)}>Eliminar reseña</button>:null }
      </div>
      ))}
      </div>
        </div>
      ) : (
        <p>Producto no encontrado</p>
      )}
      
    </div>
  );
}
