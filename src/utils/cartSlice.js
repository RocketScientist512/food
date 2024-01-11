import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: { //actions in the cart can be add item, remove item, clear item
        addItem: (state, action) =>{ //this is our reducer function. state is the items: []
            state.items.push(action.payload);
            //we are mutating the state here
        },
        removeItem: (state) =>{
            state.items.pop();
        }, 
        clearCart: (state) =>{
            state.items.length= 0; 
        }
    }
}); 



export const{addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer; 