import { createSlice } from "@reduxjs/toolkit";


const initialState = {


    cart:[{
        pizzaId:12, 
        name:'ABcs', 
        quantity:2, 
        unitPrice:3,
        totalPrice:6, 
    },
    {

        pizzaId:13, 
        name:'ABcsXTYXT', 
        quantity:5,     
        unitPrice:3,
        totalPrice:15, 
    }


    ],
}


const cartSlice = createSlice({

    name:"cart",
    initialState,

    reducers:{
        addItem(state,action){
            // pizzaId, 
            state.cart.push(action.payload);
        },
        clearCart(state){
            state.cart = [];
        },
        removeItem(state,action){
           // action.playload 
             state.cart =  state.cart.filter((pizza)=>(pizza.pizzaId !== action.payload ));
        }
    }
});


export const getTotalQuantity = (state) =>
  state.cart.cart.reduce((sum, p) => sum + p.quantity, 0);
export const getTotalPrice = (state) =>
  state.cart.cart.reduce((sum, p) => sum + p.totalPrice, 0);

// export const  getTotalQuantity = function(state){

//    return state.cart.cart.reduce((sum,p) => ( sum + p.quantity),0)
// }


//   const getTotalQuantity = cart.reduce((sum,p) => ( sum + p.quantity),0);
//   const getTotalPrice = cart.reduce((sum,p) => ( sum + p.totalPrice),0);
  

export const {addItem,clearCart,removeItem} = cartSlice.actions;
export default cartSlice.reducer;