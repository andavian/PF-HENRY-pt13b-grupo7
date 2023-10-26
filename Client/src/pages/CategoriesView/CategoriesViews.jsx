import React, { useEffect } from "react";
import Card from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { filteredByCategory, getProductsCategories } from "../../redux/actions";
import { useParams } from "react-router-dom";

export default function CategoriesViews(){
    const productsCategories = useSelector((state)=> state.reducer.catalog)
    const dispatch =useDispatch()
    const {name} = useParams()

 useEffect(()=>{
dispatch(filteredByCategory(name))
 },[dispatch,name])
    return(
        <div>
        {productsCategories && productsCategories.length > 0 ? (
            productsCategories.map((e, index) => (
              <div key={index}>
                <Card product={e} />
              </div>
            ))
          ) : (
            <h2>No hay productos disponibles.</h2>
          )}
          </div>
    )
}