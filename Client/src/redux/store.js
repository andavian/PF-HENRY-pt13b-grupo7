// funcion para crear el store.
import {configureStore} from "@reduxjs/toolkit";
import { productSlice } from "./productSlice"


export default configureStore({
  reducer: {
    reducerone: productSlice
  },
})