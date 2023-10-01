import axios from "axios";
import {
  addProd,
  addProdToCart,
  removeProdFromCart,
  getProdById,
  getProdByName,
  orderPrice,
  filteredCategory,
  addCategory,
  setPage,
  setSearch,
} from "./productSlice";
import { createAsyncThunk } from '@reduxjs/toolkit';

// GET PRODUCTS
export const addProduct = createAsyncThunk("reducerProducts/addProduct",async()=>{
  try {
    const response = await axios('https://fakestoreapi.com/products');
    console.log("ejecutando",response.data);
   return  response.data;
  } catch (error) {
  return []
  }

})
//ADD PRODUCT TO CART

export const addProductToCart = (id, quantity) => {
  return (dispatch) => {
    dispatch(addProdToCart({ id, quantity }));

  };
};

//DELETE PRODUCT FROM CART
export const removeProductFromCart = (id) => {
  return (dispatch) => {
    dispatch(removeProdFromCart(id));
  };
};
// GET PRODUCT BY ID
export const getProductById = createAsyncThunk("reducerProducts/getProductById", async (id) => {
  try {
    const response = await axios(`https://fakestoreapi.com/products/${id}`);
    console.log("ejecutando", response.data);
    return response.data;
  } catch (error) {
    return [];
  }
});

//GET PRODUCT BY NAME
export const getProductByName = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios(`http://localhost:3001/?name=${name}`);
      dispatch(getProdByName(response.data));
    } catch (error) {
      console.log(error.message);
    }

  }
}
// ORDER PRODUCTS BY PRICE
export const orderByPrice=(payload)=>{
  return(dispatch)=>{

    dispatch(orderPrice(payload));
  };
};
//FILTERED PRODUCTS BY CATEGORY
export const filteredByCategory = (category) => {
  return (dispatch) => {
    dispatch(filteredCategory(category));
  };
};
//GET CATEGORIES
export const getCategories = () => {
  return async function (dispatch) {
    try {
      const response = await axios("https://fakestoreapi.com/products/categories");
      console.log(response.data);
      dispatch(addCategory(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };
};
//CURRENT PAGE
export const setCurrentPageGlobal = (num) => {
  return (dispatch) => {
    dispatch(setPage(num));
  };
};
//SET SEARCH
export const setSearchGlobal = (payload) => {
  return (dispatch) => {
    dispatch(setSearch(payload));
  };
};

export const createCategory = (payload) => {
  return (dispatch) => {
    dispatch(addCategory(payload));
  };
};
