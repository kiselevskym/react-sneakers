import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    items: {}
}

const markedSlice = createSlice({
    name: "marked",
    initialState,
    reducers: {
        toggleMarked(state, action) {
            state.items[action.payload] ? delete state.items[action.payload] :
            state.items[action.payload] = true
        }
    }
})


export const {toggleMarked} = markedSlice.actions

export default markedSlice.reducer