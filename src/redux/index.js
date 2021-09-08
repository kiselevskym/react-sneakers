import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './Slices/productsSlice'
import cartReducer from './Slices/cartSlice'
import markedReducer from "./Slices/markedSlice";
import shoppingListReducer from "./Slices/shoppingListSlice";

export default configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        marked: markedReducer,
        shoppingList: shoppingListReducer
    },
})