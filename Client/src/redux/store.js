import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./productSlice";
import thunk from 'redux-thunk';
// const reducers =combineReducers({productSlice})

export default configureStore({
  reducer: productSlice,
  middleware: [thunk]
},

);
