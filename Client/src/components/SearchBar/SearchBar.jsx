import React, { useEffect, useState } from "react";
import style from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { setSearchGlobal } from "../../redux/actions";

const SearchBar = ({ setCurrentPage }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSearch(value);
    setCurrentPage(1);
  };

  // Realizar la búsqueda cuando el usuario deja de escribir durante 500 ms
  useEffect(() => {
    const searchTimeout = setTimeout(() => {
      dispatch(setSearchGlobal(search));
    }, 500);
    return () => clearTimeout(searchTimeout);
  }, [search, dispatch]);

  return (
    <div className={style.search}>
      <input
        type="text"
        placeholder="Busca una receta"
        value={search}
        onChange={handleChange}
        className={style.searchinput}
      />
    </div>
  );
};

export default SearchBar;
