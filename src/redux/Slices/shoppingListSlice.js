import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    items: {}
}


const shoppingListSlice = createSlice({
    name: "shoppingList",
    initialState,
    reducers: {
        addToShoppingList(state, action) {
            Object.assign(state.items, action.payload)
        }
    }
})

export const {addToShoppingList} = shoppingListSlice.actions
export default shoppingListSlice.reducer