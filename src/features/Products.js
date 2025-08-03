import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
export const productFetch = createAsyncThunk(
    "productSlice/productFetch",
    async (skip=0, { rejectWithValue }) => {
        try {
            const products = await axios.get(`https://dummyjson.com/products?limit=10&skip=${skip}`);
            // console.log("fardeen")
            return products.data;
        } catch (err) {
            // console.log("Product fetch error",err.message);
            return rejectWithValue(err.message)
        }
    }
)
let initialState = {
    items: [],
    status: '',
    error: '',
    step:0

}
const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        // addproduct(state,action){
        //     const ind=state.items.findIndex((item)=>item.id==action.payload.id)
        //         if(ind>=0){
                    
        //             state.items[ind].cartQuantity=1;
        //             console.log("Item added to cart",state.items[ind].cartQuantity)
        //         }
        // },
        // removeproduct(state,action){
        //     const ind=state.items.findIndex((item)=>item.id==action.payload.id)
        //     if(ind>=0){
        //          state.items[ind].cartQuantity=0;
        //          console.log("Item removed from cart",state.items[ind].cartQuantity)
        //     }
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(productFetch.pending, (state, action) => {
            state.status = "pending"
        })
            , builder.addCase(productFetch.fulfilled, (state, action) => {
                if (action.payload) {
                    state.status="fulfilled",
                     state.items=[...state.items,...action.payload.products]
                     state.step=state.step+10
                    console.log("state",state.items.length)
                }
            }),
            builder.addCase(productFetch.rejected,(state,action)=>{
                state.status="rejected";
                state.error=action.payload
                
                console.log(state.error)
            })
    }
})
export default productSlice.reducer;
export const { } = productSlice.actions;