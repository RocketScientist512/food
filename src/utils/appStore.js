import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"


const appStore = configureStore({
        reducer:{
            cart: cartReducer,
        },
}); //gives us the store of our react application

export default appStore;