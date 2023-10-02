import { Link } from "react-router-dom";
import logoshop from "../../images/logoshop.svg";
import { useDispatch } from "react-redux";
import {
  setSearchGlobal,
  setCurrentPageGlobal,
  filteredByCategory,
  orderByPrice,
} from "../../redux/actions";
import React from "react";

export default function Navbar() {
  const dispatch = useDispatch();

  function handleSearch(e) {
    const search = e.target.value;
    dispatch(setSearchGlobal(search));
  }
  const handleProducts = (e) => {
    dispatch(setCurrentPageGlobal(1));
    dispatch(filteredByCategory(e.target.value));
  };
  const handlePrice = (e) => {
    dispatch(setCurrentPageGlobal(1));
    dispatch(orderByPrice(e.target.value));
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logoshop} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/store">
                Tienda
              </Link>
            </li>
            <li className="nav-item">
              <select className="form-select" onChange={handleProducts}>
                <option value="Producto">Productos</option>
                <option value="Camisetas">Camisetas</option>
                <option value="Pantalones">Pantalones</option>
                <option value="Gorras">Gorras</option>
                <option value="Mousepad">Mousepad</option>
                <option value="Teclados">Teclados</option>
                <option value="Cascos">Cascos</option>
                <option value="Pines">Pines</option>
                <option value="Accesorios">Accesorios</option>
              </select>
            </li>
            <li className="nav-item">
              <select className="form-select" onChange={handlePrice}>
                <option value="asc">Mayor a Menor Precio</option>
                <option value="des">Menor a Mayor Precio</option>
              </select>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link active" to="/Register">
                Crear una cuenta
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/Login">
                Iniciar sesion
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link active" to="/Cart">
                Carrito
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/admin">
                Administrar
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleSearch}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
