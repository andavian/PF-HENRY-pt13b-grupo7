import React from "react";
import styles from "./Footer.module.css"; // Importa los estilos CSS Module
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles["footer-container"]}>
      <div className={styles["footer-images"]}>
        <img src="https://s3-alpha-sig.figma.com/img/a0e8/20d0/02be4957346ee0fe8c92067e25f47eae?Expires=1696809600&Signature=PJs28yDNhFRw82ytaTbsKqJmw9MW5xExGZu6GNHEAUMip1qYZ~R1wuhfhZBuyPu69xEIUzzwA0p52elkPLamlefc~OiTkBEI1GZSkVpn2DHD4AN6FkFkXSH-0nJxhyEyq2UK-Sy72vFOgN3cohLwkn086mEfuJox0UjXazKPMfF-fRdlWaQcGjk11PboJOHrphoqEP252J9SRgaEVcVMqncOjnSdiPJ~yNxUm0huODeez7wfeg79Vo9a-j1YE~no-tbkhzRB8yg7z0vX3Xz6GhKqAKnWCM5YBPmP6MxSJ8Tmjhh-1K3MWl5TfpS9O8-Dp5jm6oKi1JMneYEzWTNoHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Imagen 1" />
        <img src="https://s3-alpha-sig.figma.com/img/c83c/63ae/ea52266ea9abea135b0a7525d025a193?Expires=1696809600&Signature=nTjh2buBAPyGIoZPpg0fJwPQ-je9D6ND7~86Xk4rsu7IazWkBXX2xeD9sQa1WxP237dXIabWDS6JypfkOGgV3rR3B1BJN9Xk8qTw5DmHLcypQwJhGJahqbHJRuGaLyZvGgCbdkKKrDmrUNoN-cszqGjBqAxwOAp1h~mWPbwxYEZ3iwr2ro49lx6f7fwNUT4wPu~RWLDHN0xHWCztE0neqxhdxYXjiO-oZHkdx3zznqL52bFCSBZTO8xmmeqYCbINF-Uabw~p93hfTt5b0bXj4YuoYMUH-V1CepiB48SMChjKNS-pG913DvPPzp5tW0a7KjXcpLU4jPsnkeXmUi--rA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Imagen 2" />
      </div>
      <div className={styles["footer-columns"]}>
        <div className={styles["footer-column"]}>
          <h4>Menu</h4>
          <ul>
            <li>
            <Link className={styles.links}>Productos</Link>
            </li>
            <li>
            <Link className={styles.links}>Tienda</Link>
            </li>
            <li>
            <Link className={styles.links}>Diseños</Link>
            </li>
            <li>
            <Link className={styles.links}>Sobre Henry Shop</Link>
            </li>
            <li>
            <Link className={styles.links}>Contacto</Link>
            </li>
          </ul>
        </div>
        <div className={styles["footer-column"]}>
          <h4>Ayuda</h4>
          <ul>
           <li>
            <Link className={styles.links}>Preguntas Frecuentes</Link>
          </li>
          </ul>
        </div>
        <div className={styles["footer-column"]}>
          <h4>Conoce SoyHenry</h4>
          <ul>
           <li>
            <Link className={styles.links}>Nosotros</Link>
          </li>
          <li>
            <Link className={styles.links}>Prensa</Link>
          </li>
          <li>
            <Link className={styles.links}>Blog</Link>
          </li>
          <li>
            <Link className={styles.links}>Eventos</Link>
          </li>
          <li>
            <Link className={styles.links}>Muro del Amor</Link>
          </li>
          <li>
            <Link className={styles.links}>Trabaja en Henry</Link>
          </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
