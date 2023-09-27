import { createAction,createReducer, createSlice } from "@reduxjs/toolkit";

//const ADD_PRODUCTS = createAction("ADD_PRODUCTS");
//const ADD_PRODUCT_TO_CART =createAction("ADD_PRODUCT_TO_CART");
//const REMOVE_PRODUCT_FROM_CART =createAction("REMOVE_PRODUCT_FROM_CART");
//const ORDER_BY_NAME=createAction("ORDER_BY_NAME");
//const GET_BY_NAME=createAction("GET_BY_NAME");
//const GET_BY_ID=createAction("GET_BY_ID");
//const FILTER_BY_CATEGORY=createAction("FILTER_BY_CATEGORY");

export const productSlice = createSlice({
  name: "reducerProducts",
  initialState:{
    totalproducts:[],
    catalog: [],
    cart: [],
    details:{}
  },
  reducers:{
    addProd:(state,action)=>{
      return {
        ...state,
        totalproducts: action.payload,
        catalog: action.payload
      }
    },
    addProdToCart:(state,action)=>{
      const id = action.payload;
      const product = state.catalog.find((prod) => prod.id === id);

      return {
        ...state,
        cart: [...state.cart, product]
      }
    },
    removeProdFromCart:(state,action)=>{
      const id = action.payload;
      console.log(state.cart);

      return {
        ...state,
        cart: state.cart.filter(prod => prod.id !== id)
      }
    },
    getProdById:(state,action)=>{
      return {
        ...state,
        details: action.payload,
      };
    },
    getProdByName:(state,action)=>{
      if(typeof action.payload === "string"){
        return{
          ...state ,
          errors: action.payload
        }
      }else{
        return {
          ...state,
          catalog: action.payload,
        };
      }
    },
    orderName:(state,action)=>{
      let order =
        action.payload === "asc"
          ? state.catalog.sort(function (a, b) {
              if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1;
              }
              if (b.title.toLowerCase() > a.title.toLowerCase()) {
                return -1;
              }
              return 0;
            })
          : state.catalog.sort(function (a, b) {
              if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return -1;
              }
              if (b.title.toLowerCase() > a.title.toLowerCase()) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        catalog: order,
      };
    },
    filteredCategory:(state,action)=>{
      const allProducts = state.totalproducts;
      const selectedCategory = action.payload;
      if (selectedCategory === "All"){
        return {
          ...state,
          catalog: allProducts
        }
      }else{
        const filteredProducts = allProducts.filter(
          (product)=> product.category === selectedCategory);
          return {
            ...state,
            catalog: filteredProducts
          }
      }
    }
  }
})

export const {
  addProd,
  addProdToCart,
  removeProdFromCart,
  getProdById,
  getProdByName,
  orderName,
  filteredCategory 
}=productSlice.actions

export default productSlice.reducer

