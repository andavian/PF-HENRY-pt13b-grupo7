import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { addProduct, getProductById } from "./actions";

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
    categories:[],
    currentPage:1,
    search:"",
    users:[]
  },
  reducers: {
    
    addProdToCart: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.catalog.find((prod) => prod.id === id);
    
      // Verifica si el producto ya está en el carrito
      const existingProductIndex = state.cart.findIndex((prod) => prod.id === id);
    
      if (existingProductIndex !== -1) {
        // Si el producto ya está en el carrito, actualiza la cantidad
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex].quantity += quantity;
    
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        // Si el producto no está en el carrito, agrégalo con la cantidad
        product.quantity = quantity;
        return {
          ...state,
          cart: [...state.cart, product],
        };
      }
    },
    
    removeProdFromCart: (state, action) => {
      const id = action.payload;
      console.log(state.cart);

      return {
        ...state,
        cart: state.cart.filter((prod) => prod.id !== id),
      };
    },
    
    getProdByName: (state, action) => {
      if (typeof action.payload === "string") {
        return {
          ...state,
          errors: action.payload,
        };
      } else {
        return {
          ...state,
          catalog: action.payload,
        };
      }
    },
    orderPrice: (state, action) => {
      let order =
        action.payload === "asc"
          ? state.catalog.sort((a, b) => a.price - b.price)
          : state.catalog.sort((a, b) => b.price - a.price);

      return {
        ...state,
        catalog: order,
      };
    },

    filteredCategory: (state, action) => {
      const allProducts = state.totalproducts;
      const selectedCategory = action.payload;
      if (selectedCategory === "All") {
        return {
          ...state,
          catalog: allProducts,
        };
      } else {
        const filteredProducts = allProducts.filter(
          (product) => product.category === selectedCategory
        );
        return {
          ...state,
          catalog: filteredProducts,
        };
      }
    },
    addCategory:(state,action)=>{
      return{
        ...state,
        categories: action.payload
      }
    },
    setPage:(state,action)=>{
      return{
        ...state,
        currentPage: action.payload
      }
    },
    setSearch:(state,action)=>{
      return{
        ...state,
        search: action.payload
      }
    },
    addUsers:(state,action)=>{
      return{
        ...state,
        users: action.payload
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.fulfilled, (state, { payload }) => {
        // Realiza lo que necesitas hacer con addProduct.fulfilled
        state.totalproducts = payload;
      })
      .addCase(getProductById.fulfilled, (state, { payload }) => {
        // Realiza lo que necesitas hacer con getProductById.fulfilled
        state.details = payload;
      });
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
  setSearch
} = productSlice.actions;

export default productSlice.reducer;
