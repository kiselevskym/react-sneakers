import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import api from "../../api";

const initialState = {
    items: [],
    isLoaded: false
}

export const fetchItems = createAsyncThunk('products/fetchItems',
    async (_, thunkAPI) => {
        const response = await api.fetchItems()
        return response.data
    })

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchItems.fulfilled, (state, action) => {
            state.items = action.payload
            state.isLoaded = true
        })
    }
})

export const {} = productsSlice.actions
export default productsSlice.reducer
