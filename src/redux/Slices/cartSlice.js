import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: {},
    totalPrice: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            if(!state.items[action.payload.id]) {
                state.items[action.payload.id] = action.payload
                state.totalPrice += action.payload.price
                state.tax += Math.round(action.payload.price / 20)
            }
        },
        removeFromCart(state, action) {
            state.totalPrice -= state.items[action.payload].price
            delete state.items[action.payload]
        },
        removeAllFromCart(state, action) {
            state.items = {}
            state.totalPrice = 0
        }
    }
})


export const {addToCart, removeFromCart, removeAllFromCart} = cartSlice.actions
export default cartSlice.reducer