import React from "react";
import { useSelector } from "react-redux";


export default function Cardcategory (){
    const category = useSelector((state)=> state.categories);

    return (
     <article>
        <div className={styles.imgConatiner}>
            <img src={category.image} alt={category.name} />
        </div>
        <div className={styles.nameContainer}>
            <h3>{category.name}</h3>
        </div>
     </article>
    );
}