import React from "react";
import style from "./Paginado.module.css";
import Button from "../Paginado/Button/Button";

const Paginado = ({ 
  currentPage, 
  totalPages, 
  onPageChange 
}) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPages); i++) {
    pages.push(i);
  }

  const pagesPerBlock = 5;
  const currentBlock = Math.ceil(currentPage / pagesPerBlock);

  const startPage = (currentBlock - 1) * pagesPerBlock + 1;
  const endPage = Math.min(currentBlock * pagesPerBlock, pages.length);

  const handleNext = () => {
    if (currentPage < pages.length) {
      onPageChange(currentPage + 1);
    } else {
      alert("¡Oh, parece que hemos agotado todas las búsquedas disponibles!");
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    } else {
      alert("¡Oh, parece que hemos agotado todas las búsquedas disponibles!");
    }
  };

  const handleGoToStart = () => {
    onPageChange(1);
  };

  const handleGoToEnd = () => {
    onPageChange(pages.length);
  };

  const onSpecificPage = (n) => {
    onPageChange(n);
  };

  return (
    <div className={style.container}>
      {currentPage > 1 && (
        <>
          <Button display={true} text="<<" onClick={handleGoToStart} />
          <Button display={true} text="< anterior" onClick={handlePrevious} />
        </>
      )}
      
      <ul className={style.list}>
        {pages.slice(startPage - 1, endPage).map((nPage) => (
          <li key={nPage}>
            <button
              onClick={() => onSpecificPage(nPage)}
              className={currentPage === nPage ? style.isActive : style.noActive}
            >
              {nPage}
            </button>
          </li>
        ))}
        {endPage < pages.length && (
          <li>
            <span>...</span>
          </li>
        )}
      </ul>

      <Button display={true} text=" siguente >" onClick={handleNext} />
      {currentPage < pages.length && (
        <Button display={true} text=">>|" onClick={handleGoToEnd} />
      )}
    </div>
  );
};

export default Paginado;
