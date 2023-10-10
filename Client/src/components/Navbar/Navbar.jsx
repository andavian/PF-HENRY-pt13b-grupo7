import React from "react";
// import SearchBar from "../SearchBar/SearchBar";
import style from "../Navbar/Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../images/logoshop.svg";
import LoginButton from "../LoginButton/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../LogoutButton/LogoutButton";
import Profile from "../Profile/Profile";

const NavBar = ({ setCurrentPage }) => {
  const { isAuthenticated } = useAuth0();
  const handleReload = () => {
    window.location.href = "/home";
  };

  return (
    <nav className={style.navbarContainer}>
      <div className={style.navItemLogo}>
        <Link to="/home" className={style.logoContainer}>
          <img src={logo} alt="Logo" className={style.logoImage} />
        </Link>
      </div>

      <div className={style.navBar}>
        <div className={style.navItem}>
          <Link
            to="/home"
            className={style.navLink}
            onClick={() => setCurrentPage("Home")}
          >
            Home
          </Link>
        </div>

        <div className={style.navItem}>
          <Link
            to="/store"
            className={style.navLink}
            onClick={() => setCurrentPage("shop")}
          >
            Tienda
          </Link>
        </div>

        <div className={style.navItem}>
          <Link
            to="/mensaje"
            className={style.navLink}
            onClick={() => setCurrentPage("mensaje")}
          >
            Diseños
          </Link>
        </div>

        <div className={style.navItem}>
          <Link
            to="/mensaje"
            className={style.navLink}
            onClick={() => setCurrentPage("mensaje")}
          >
            Contacto
          </Link>
        </div>
      </div>

      <div className={style.navtool}>
      
        <div className={style.navItem}>
          <Link to="https://dev-rcyibz4rmsr34pyn.us.auth0.com/u/signup?state=hKFo2SBXSUlYWkJndkQ5RmZ4cG5CazRmMjBlcnNIMzlRUldzV6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIDJBT2lVYjl3WmhXNVU3RFNVNnR4VXBVNXVjajR0ZWpuo2NpZNkgemwxMXBNVnYxSmRyMTdodnM4OVMwSVNSTlRpOHA2c3o">
          <button className={style.button} >
            Crea una cuenta
          </button>
          </Link>
        </div>
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        
        {/* <div className={style.navItem}>
          <Link
            to="/favorites"
            className={style.navLink}
            onClick={() => setCurrentPage("shop")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
          </Link>
        </div> */}

        {/* carrito */}
        {/* <div className={style.navItem}>
          <Link
            to="/cart"
            className={style.navLink}
            onClick={() => setCurrentPage("shop")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-cart-fill"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </Link>
        </div> */}
      </div>
      <Profile/>
      {/* <div className={style.navBar}>
        <div className={style.navItem}>
          <SearchBar setCurrentPage={setCurrentPage} />
        </div>

        <div className={style.navItem}>
          <button onClick={handleReload} className={style.buttonblack}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="512"
              height="512"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="m153.654 18l52.57 134.734c1.698 3.994 4.05 5.83 7.243 6.977c3.2 1.15 7.36 1.2 11.058.17c3.698-1.03 6.71-3.146 7.996-4.915c1.288-1.77 1.634-2.564.505-5.24l-.046-.112L181.57 18h-27.916zm94.168 120.143l1.88 4.81l-.09-.223c3.346 7.937 1.828 16.822-2.532 22.82c-4.36 5.996-10.773 9.734-17.723 11.67c-6.95 1.937-14.653 2.065-21.98-.57c-7.327-2.634-14.155-8.447-17.742-16.923l-.05-.118l-1.757-4.5c-31.31 19.804-42.47 42.026-35.367 68.89c1.24 4.681 3.422 12.364 5.964 22.13c74.37-5.274 139.945-23.872 199.808-51.6c-10.297-13.867-22.5-25.83-38.232-34.53c-20.505-11.34-47.652-20.157-72.178-21.857zm120.557 71.52c-61.497 28.81-129.173 48.378-205.575 54.196c2.03 8.683 4.08 18.28 5.95 28.495c89.592-10.084 163.043-26.22 217.755-48.767c-5.743-11.72-11.593-23.19-18.13-33.924zm26.04 50.16c-57.093 23.772-131.99 40.087-222.73 50.322C180.697 371.423 179.614 446.752 128 480c16.27 0 31.892-.152 46.926-.45c17.84-25.554 31.27-66.222 32.08-86.146c8.27 16.793 3.297 59.32-5.36 85.434c2.735-.093 5.435-.193 8.127-.297c11.824-12.397 11.724-28.632 14.72-47.284c3.324 14.92 7 32.967 9.505 46.156c11.273-.616 22.152-1.34 32.606-2.183c16.38-20.358 21.65-49.604 18.63-85.48c4.226 29.1 9.116 62.138 11.873 82.55a771.724 771.724 0 0 0 27.807-3.614c5.04-18.787-4.1-48.444-2.072-69.54c11.123 43.113 22.247 55.45 33.37 64.043a456.166 456.166 0 0 0 15.733-3.526c-4.7-13.95 1.573-22.497 1.18-39.986c5.647 18.99 14.625 26.958 24.428 32.816c6.506-2.1 12.66-4.336 18.492-6.697c-10.538-6.57-10.113-26.374-12.38-42.926c5.954 21.703 14.413 32.418 24.083 37.816c29.124-13.8 48.69-31.534 60.398-53.657c-9.078-3.82-18.674-13.002-28.068-20.092c13.214 7.477 23.684 10.614 32.37 10.93a112.386 112.386 0 0 0 3.552-9.868c-56.326-19.528-80.07-64.018-101.58-108.178z"
              />
            </svg>
            Limpiar busqueda
          </button>
        </div>
      </div> */}
    </nav>
  );
};

export default NavBar;
