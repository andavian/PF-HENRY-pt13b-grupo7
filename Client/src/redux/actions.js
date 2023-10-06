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
import { createAsyncThunk } from "@reduxjs/toolkit";

// GET PRODUCTS
export const addProduct = createAsyncThunk(
  "reducerProducts/addProduct",
  async () => {
    try {
      const response = await axios("http://localhost:3001/products");
      console.log("ejecutando", response.data);
      return response.data;
    } catch (error) {
      return [];
    }
  }
);
// GET PRODUCT BY ID
export const getProductById = createAsyncThunk(
  "reducerProducts/getProductById",
  async (id) => {
    try {
      const response = await axios(`http://localhost:3001/products/${id}`);
      console.log("ejecutando", response.data);
      return response.data;
    } catch (error) {
      return [];
    }
  }
);
// GET PRODUCTS BY CATEGORIES
export const getProductsCategories = createAsyncThunk(
  "reducerProducts/getProductsCategories",
  async (name) => {
    try {
      // Codifica el nombre de la categoría antes de agregarlo a la URL
      const encodedName = encodeURIComponent(name);
      
      // Utiliza el nombre codificado en la URL
      const response = await axios('https://fakestoreapi.com/products/category/jewelery');
      console.log("ejecutando", response.data);
      return response.data;
    } catch (error) {
      return [];
    }
  }
);
//GET PRODUCTS BY NAME
export const getProductByName = createAsyncThunk(
  "reducerProducts/getProductByName",
  async (name) => {
    try {
      // Codifica el nombre de la categoría antes de agregarlo a la URL
      const encodedName = encodeURIComponent(name);
      
      // Utiliza el nombre codificado en la URL
      const response = await axios(`http://localhost:3001/products/search?name=${encodedName}`);
      console.log("ejecutando search", response.data);
      return response.data;
    } catch (error) {
      return [];
    }
  }
);
//GET CATEGORIES
export const getCategories = createAsyncThunk(
  "reducerProducts/getCategories",
  async (id) => {
    try {
      const response = await axios("http://localhost:3001/categories");
      console.log("categories", response.data);
      return response.data;
    } catch (error) {
      return [];
    }
  }
);



// ORDER PRODUCTS BY PRICE
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
