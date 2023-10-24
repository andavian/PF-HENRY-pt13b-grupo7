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
  sendMail,
} from "./productSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

// GET PRODUCTS
export const addProduct = createAsyncThunk(
  "reducerProducts/addProduct",
  async () => {
    try {
      const response = await axios("/products");
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
      const response = await axios(`/products/${id}`);
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
      const response = await axios("/categories");
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
      const response = await axios(`/products/search?name=${encodedName}`);
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
      const response = await axios("/categories");
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
    console.log(category);
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
// POST PRODUCT
export const postProduct = createAsyncThunk(
  "reducerProducts/postProduct",
  async (product) => {
    try {
      const response = await axios.post("/products", product); // Pasa el producto como segundo argumento
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return {};
    }
  }
);

// GET CLIENTS
export const getClients = createAsyncThunk(
  "reducerProducts/getClients",
  async () => {
    try {
      const response = await axios("/clients");
      console.log("clients", response.data);
      return response.data;
    } catch (error) {
      return [];
    }
  }
);
// POST CLIENT
export const postClient = createAsyncThunk(
  "reducerProducts/postClient",
  async (client) => {
    try {
      console.log("Contenido de 'client' en postClient:", client); // Agrega este console.log

      const response = await axios.post("/clients", client);
      console.log("Respuesta del servidor:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error en postClient:", error);
      return [];
    }
  }
);

//SEND MAIL AFTER REGISTRATION
export const sendMailReg = createAsyncThunk(
  "reducerProducts/sendMail",
  async (data) => {
    try {
      const response = await axios.post("http://localhost:3001/mail", data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return {};
    }
  }
);