import React, { useEffect, useState } from "react";
import CardCart from "../../components/CardCart/CardCart";


export default function Favorites (){
    const [favorites,setFavorites] = useState(() => {
        const savedFav = JSON.parse(localStorage.getItem("favorites")) || [];
        return savedFav;
      });
      const removeFromFavorites = (id) => {
        // Filtra favoritos para eliminar el producto con el ID proporcionado
        const updatedFavorite = favorites.filter((product) => product.id !== id);
        
        // Actualiza el estado de favoritos
        setFavorites(updatedFavorite);
      };
      useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
        console.log("favo",favorites);
      }, [favorites]);
    return(
        <div> 
            {favorites && (
                favorites.map((fav)=>{
                    return (
                    <div>
                    <CardCart key={fav.id} product={fav}/>
                    <button onClick={()=>{removeFromFavorites(fav.id)}}>Eliminar</button>
                    </div>
                    )
                })
            )}
            
        </div>
    )
}