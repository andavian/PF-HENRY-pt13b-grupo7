import { useSelector, useDispatch } from "react-redux";
import {
  setSearchGlobal,
  setCurrentPageGlobal,
  filteredByCategory,
  orderByPrice,
} from "../../redux/actions";
import Card from "../Card/Card";
import styles from "./cards.module.css";

import Paginado from "../Paginado/Paginado";

const Cards = () => {
  const dispatch = useDispatch();
  const catalog = useSelector((state) => state.totalproducts);
  const categories = useSelector((state) => state.categories);
  const currentPage = useSelector((state) => state.currentPage);

  const handlePageChange = (newPage) => {
    dispatch(setCurrentPageGlobal(newPage));
  };

  const paginatedItems = catalog.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const paginatedFilter = catalog.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handleFilterByCategory = (type) => {
    dispatch(filteredByCategory(type));
    handlePageChange(1);
  };

  const listAllProducts = paginatedItems.map((product) => (
    <li className={styles.item} key={pokemon.id}>
      <Card product={product} />
    </li>
  ));

  const listCatalog = paginatedFilter.map((pokemon) => (
    <li className={styles.item} key={pokemon.id}>
      <Card pokemon={pokemon} types={pokemonTypes} />
    </li>
  ));

  return (
    <div className={styles.container}>
      <SideBar
        className={styles.sidebar}
        handleFilterById={handleFilterById}
        handleFilterByType={handleFilterByType}
        handleOrder={handleOrder}
      />
      <main>
        <Pagination
          className={styles.pagination}
          handlePageChange={handlePageChange}
        />
        <ul className={styles.content}>
          {!filtering ? listAllPokemons : listMyPokemons}
        </ul>
        <Pagination
          className={styles.pagination}
          handlePageChange={handlePageChange}
        />
      </main>
    </div>
  );
};

export default Cards;
