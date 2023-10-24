import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { addProduct, getCategories, getProductById,getProductsCategories,getProductByName,postProduct, getClients, postClient ,deleteProduct} from "./actions";

//const ADD_PRODUCTS = createAction("ADD_PRODUCTS");
//const ADD_PRODUCT_TO_CART =createAction("ADD_PRODUCT_TO_CART");
//const REMOVE_PRODUCT_FROM_CART =createAction("REMOVE_PRODUCT_FROM_CART");
//const ORDER_BY_NAME=createAction("ORDER_BY_NAME");
//const GET_BY_NAME=createAction("GET_BY_NAME");
//const GET_BY_ID=createAction("GET_BY_ID");
//const FILTER_BY_CATEGORY=createAction("FILTER_BY_CATEGORY");

export const productSlice = createSlice({
  name: "reducerProducts",
  initialState: {
    totalproducts: [],
    catalog: [],
    cart: [],
    details: {},
    favorites: [],
    categories: [],
    currentPage: 1,
    search: "",
    users: [],
    clients:[],
    registration:"",
    edit:{},
  },
  reducers: {
    orderPrice: (state, action) => {
      const { payload } = action;
      const catalogCopy = [...state.catalog]; // Crear una copia del catálogo
    
      if (payload === "asc") {
        catalogCopy.sort((a, b) => a.price - b.price);
      } else {
        catalogCopy.sort((a, b) => b.price - a.price);
      }
    
      return {
        ...state,
        catalog: catalogCopy,
      };
    },
    

    filteredCategory: (state, action) => {
      const allProducts = state.totalproducts;
      const selectedCategory = action.payload;
      if (selectedCategory === "all") {
        return {
          ...state,
          catalog: allProducts, // Corregir la asignación aquí
        };
      } else {
        const filteredProducts = allProducts.filter(
          (product) => product.Category.name === selectedCategory
        );
        return {
          ...state,
          catalog: filteredProducts,
        };
      }
    },
    
    setPage: (state, action) => {
      return {
        ...state,
        currentPage: action.payload,
      };
    },
    setSearch: (state, action) => {
      return {
        ...state,
        search: action.payload,
      };
    },
    addUsers: (state, action) => {
      return {
        ...state,
        users: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.fulfilled, (state, { payload }) => {
        // Realiza lo que necesitas hacer con addProduct.fulfilled
        state.totalproducts = payload;
        state.catalog = payload
      })
      .addCase(getProductById.fulfilled, (state, { payload }) => {
        // Realiza lo que necesitas hacer con getProductById.fulfilled
        state.details = payload;
      })
      .addCase(getCategories.fulfilled,(state, { payload })=> {
        state.categories = payload;
      })
      .addCase(getProductByName.fulfilled,(state, { payload })=> {
        state.catalog = payload;
      })
      .addCase(postProduct.fulfilled, (state, { payload }) => {
        state.catalog.unshift(payload);
      })
      .addCase(getClients.fulfilled, (state, { payload }) => {
        state.clients = payload;
      })
      .addCase(postClient.fulfilled, (state, { payload }) => {
        state.registration = payload;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
     console.log("hola");
      })
  },
});
//createasyncthunk redux toolkit

export const {
  addProdToCart,
  removeProdFromCart,
  getProdById,
  getProdByName,
  orderPrice,
  filteredCategory,
  addCategory,
  setPage,
  setSearch,
} = productSlice.actions;

export default productSlice.reducer;
