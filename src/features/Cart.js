import { configureStore, createSlice, current } from "@reduxjs/toolkit";
let initialState={
     cartItems:[],
    totalCartQuantity:0,
    totalCartAmount:0,
    // current:{}
}
const Cartslice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem(state,action){
            state.cartItems=[...state.cartItems,{...action.payload}];
            // console.log("CART",state.cartItems);
            console.log("reduces",action.payload)
            
        },
        removeItem(state,action){
            state.cartItems=state.cartItems.filter((item)=>item.id!==action.payload.id);
            // console.log("CART",state.cartItems);
            // checkItem(action.payload);
        },
         total(state,action){
            // async function getdata(ids){
            //     const data=await Promise.all(ids.map(id=>fetch(`https://dummyjson.com/products/${id}`)
            // .then(res=>res.json())))
            // }
            // const data=await getdata(state.cartItems);
            let sum=state.cartItems.reduce((total,item)=>{
                return total+item.price;
            },0);
            state.totalCartAmount=sum;
        }
        

        
    }
})
export const {addItem,removeItem,total}=Cartslice.actions;
export default Cartslice.reducer;
