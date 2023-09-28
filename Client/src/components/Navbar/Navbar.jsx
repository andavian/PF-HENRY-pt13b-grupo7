import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Catálogo</Link>
        </li>
        <li>
          <Link to="/cart">Carrito</Link>
        </li>
        <li>
          <Link to="/admin">Form</Link>
        </li>
      </ul>
    </nav>
  );
}
