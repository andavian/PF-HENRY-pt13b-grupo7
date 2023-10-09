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
      alert("¡Oh, parece que hemos agotado todas las busquedas disponibles!");
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    } else {
      alert("¡Oh, parece que hemos agotado todas las busquedas disponibles!");
    }
  };

  const onSpecificPage = (n) => {
    onPageChange(n);
  };

  return (
    <div className={style.container}>
      <Button display={true} text="<" onClick={handlePrevious} />
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
      </ul>
      <Button display={true} text=">" onClick={handleNext} />
    </div>
  );
};

export default Paginado;



// Paginado original

// const Paginado = ({ 
//   currentPage, 
//   totalPages, 
//   onPageChange 
//   }) => {
//     const pages = [];
//     for (let i = 1; i <= Math.ceil(totalPages); i++) {
//       pages.push(i);
//     }
  
//     const handleNext = () => {
//       if (currentPage < pages.length) {
//         onPageChange(currentPage + 1);
//       } else {
//         alert("¡Oh, parece que hemos agotado todas las busquedas disponibles!");
//       }
//     };
  
//     const handlePrevious = () => {
//       if (currentPage > 1) {
//         onPageChange(currentPage - 1);
//       } else {
//         alert("¡Oh, parece que hemos agotado todas las busquedas disponibles!");
//       }
//     };
  
//     const onSpecificPage = (n) => {
//       onPageChange(n);
//     };
  
//     return (
//       <div className={style.container}>
//         <Button display={true} text="<" onClick={handlePrevious} />
//         <ul className={style.list}>
//           {pages.map((nPage) => (
//             <li key={nPage}>
//               <button
//                 onClick={() => onSpecificPage(nPage)}
//                 className={currentPage === nPage ? style.isActive : style.noActive}
//               >
//                 {nPage}
//               </button>
//             </li>
//           ))}
//         </ul>
//         <Button display={true} text=">" onClick={handleNext} />
//       </div>
//     );
//   };
  
//   export default Paginado;