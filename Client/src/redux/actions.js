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

// GET PRODUCTS
export const addProduct = () => {
  return async function (dispatch) {
    try {
      const response = await axios("http://localhost:3001/shop");
      dispatch(addProd(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };
};
//ADD PRODUCT TO CART
export const addProductToCart = (id) => {
  return (dispatch) => {
    dispatch(addProdToCart(id));
  };
};
//DELETE PRODUCT FROM CART
export const removeProductFromCart = (id) => {
  return (dispatch) => {
    dispatch(removeProdFromCart(id));
  };
};
// GET PRODUCT BY ID
export const getProductById = (id) => {
  return async function (dispatch) {
    try {
      const product = await axios(`http://localhost:3001/shop/${id}`);
      return dispatch(getProdById(product.data));
    } catch (error) {
      console.log(error.message);
    }
  };
};
//GET PRODUCT BY NAME
export const getProductByName = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios(`http://localhost:3001/?name=${name}`);
      dispatch(getProdByName(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };
};
// ORDER PRODUCTS BY NAME
export const orderByPrice = (payload) => {
  return (dispatch) => {
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
      const response = await axios("http://localhost:3001/categories");
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
