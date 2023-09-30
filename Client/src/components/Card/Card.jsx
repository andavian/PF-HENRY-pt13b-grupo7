import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { addProductToCart, removeProductFromCart } from '../../redux/actions';
import styles from './card.module.css';

export default function Card({ product }) {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  // Trunca el título a un máximo de 30 caracteres
  const truncatedTitle = product.title.length > 30 ? product.title.substring(0, 30) + '...' : product.title;

  const handleClick = () => {
    if (pathname === '/') {
      dispatch(addProductToCart(product.id));
    } else {
      dispatch(removeProductFromCart(product.id));
    }
  };

  return (
    <article className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />

      <p className={styles.heading}>{truncatedTitle}</p>

      <p className={styles.para}>$ {product.price}</p>
      <Link to="/Detail">
        <div className={styles.overlay}></div>
      </Link>
      <button className={styles.cardBtn} onClick={handleClick}>
        {pathname === '/Home' ? ' Agregar al carrito' : 'Quitar del carrito'}
      </button>
      
      
    </article>
  );
}

