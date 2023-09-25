import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../redux/actions";
import Card from "../../components/Card/Card";
import styles from "./shop.module.css";

export default function Shop() {
  const dispatch = useDispatch();
  const catalog = useSelector((state) => state.catalog);

  console.log(catalog);
  useEffect(() => {
    dispatch(addProducts());
  }, [dispatch]);

  return (
    <main>
      <h1>Catálogo</h1>
      <section className={styles.container}>
        {catalog.map((prod) => (
          <Card key={prod.id} product={prod} />
        ))}
      </section>
    </main>
  );
}
