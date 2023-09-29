import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { addProductToCart, removeProductFromCart } from "../../redux/actions";
import styles from "./card.module.css";

export default function Card({ product }) {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const handleClick = () => {
    if (pathname === "/") {
      dispatch(addProductToCart(product.id));
    } else {
      dispatch(removeProductFromCart(product.id));
    }
  };

  return (
    <div>
      <p>{product.title}</p>
    </div>
  );
}
