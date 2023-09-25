import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import styles from "./cart.module.css";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  return (
    <main>
      <h1>Tu carrito de compras</h1>
      <section className={styles.container}>
        {cart.map((prod) => {
          return <Card key={prod.id} product={prod} />;
        })}
      </section>
    </main>
  );
}
