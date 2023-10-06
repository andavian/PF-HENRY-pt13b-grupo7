import React from "react";
import styles from "./Paginado.module.css";

const Paginado = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={styles.ul}>
        {pageNumbers.map((page) => (
          <li
            key={page}
            className={`page-item ${currentPage === page ? styles.highlighted : ""}`}
          >
            <button
              className={styles.container}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginado;

