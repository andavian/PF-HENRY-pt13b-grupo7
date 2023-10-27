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
// GET PRODUCTS ADMIN
export const addProductAdmin = createAsyncThunk(
  "reducerProducts/addProductAdmin",
  async () => {
    try {
      const response = await axios("/admin");
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
// DELETE PRODUCT
export const deleteProduct = createAsyncThunk(
  "reducerProducts/deleteProduct",
  async (id) => {
    try {
      console.log("iddelete", id);
      const response = await axios.delete(`/products/${id}`);
      console.log("deleteproduct", response.data);
      return response.data;
    } catch (error) {
      console.error("Error en deleteProduct:", error);
      return [];
    }
  }
);
// UPDATE PRODUCT
export const updateProduct = createAsyncThunk(
  "reducerProducts/updateProduct",
  async ({ id, product }) => {
    try {
      console.log("updateProduct", product);
      const response = await axios.patch(`/products/${id}`, product);
      console.log("updateProduct", response.data);
      return response.data;
    } catch (error) {
      console.error("Error en updateProduct:", error);
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
//POST CATEGORY
export const postCategory = createAsyncThunk(
  "reducerProducts/postCategory",
  async (category) => {
    try {
      const response = await axios.post("/categories", category);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return {};
    }
  }
);
//DELETE CATEGORY
export const deleteCategory = createAsyncThunk(
  "reducerProducts/deleteCategory",
  async (name) => {
    try {
      const response = await axios.delete(`/categories/delete?name=${name}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error en deleteCategory:", error);
      return {};
    }
  }
);

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
      const response = await axios("/users");
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

      const response = await axios.post("/users", client);
      console.log("Respuesta del servidor:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error en postClient:", error);
      return [];
    }
  }
);
//DELETE CLIENT
export const deleteClient = createAsyncThunk(
  "reducerClients/deleteClient",
  async (clientId) => {
    try {
      console.log("Contenido de 'clientId' en deleteClient:", clientId);

      const response = await axios.delete(`/users/${clientId}`);
      console.log("Respuesta del servidor:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error en deleteClient:", error);
      return [];
    }
  }
);

//SEND MAIL AFTER REGISTRATION - PAYMENT
export const sendMailReg = createAsyncThunk(
  "reducerProducts/sendMail",
  async (data) => {
    try {
      const response = await axios.post("/mail", data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return {};
    }
  }
);

export const sendMailPay = createAsyncThunk(
  "reducerProducts/sendMail",
  async (data) => {
    try {
      const response = await axios.post("/mailpay", data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return {};
    }
  }
);

// POST PROFILE 
export const postProfile = createAsyncThunk(
  "reducerProducts/postProfile",
  async (data) => {
    try {
      const response = await axios.post("/profiles", data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return {};
    }
  }
);

//POST REVIEW
export const postReview = createAsyncThunk(
  "reducerProducts/postReview",
  async (data) => {
    try {
      console.log("llega a post",data);
      const response = await axios.post(`/reviews?productId=${data.productId}`, data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return {};
    }
  }
);
// DELETE REVIEW
export const deleteReview = createAsyncThunk(
  "reducerProducts/deleteReview",
  async (id) => {
    try {
      console.log("llega a post",data);
      const response = await axios.delete(`/reviews?id=${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return {};
    }
  }
);
// GET USER BY EMAIL
export const getUserByEmail = createAsyncThunk(
  "reducerProducts/getUserByEmail",
  async (mail) => {
    try {
      console.log("llega a byemail",mail);
      const response = await axios(`/reviews/search?email=${mail}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return {};
    }
  }
);