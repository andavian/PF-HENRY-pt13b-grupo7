import React, { useEffect, useState } from "react";
import style from "./SearchBar.module.css";

import { useDispatch, useSelector } from "react-redux";
import { setCurrentPageGlobal, setSearchGlobal } from "../../redux/actions";

const SearchBar = ({ setCurrentPage }) => {
  const search = useSelector((state) => state.reducer.search);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value;
    dispatch(setSearchGlobal(value));
    dispatch(setCurrentPageGlobal(1));
  };


  // Utilizar useEffect para imprimir el valor actualizado de search
  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <div className={style.search}>
      <input
        type="text"

        placeholder=" Buscar"
        onChange={handleChange}
        className={style.searchinput}
      />
    </div>
  );
};

export default SearchBar;

