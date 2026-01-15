import { createSlice } from "@reduxjs/toolkit";


const initialState = {


    cart:[{
        pizzaId:12, 
        name:'ABcs', 
        quantity:0, 
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
            // pizzaId , full object , 
            state.cart.push(action.payload);
        },
        increaseQty(state,action){

            const item = state.cart.find((item) => (item.pizzaId === action.payload));
            item.quantity ++;
            item.totalPrice = item.unitPrice * item.quantity
    

        },
        decreaseQty(state,action){

                
            const item = state.cart.find((item) => item.pizzaId === action.payload);

            if (!item) return;

            item.quantity--;

            if (item.quantity === 0) {
            state.cart = state.cart.filter(
                (pizza) => pizza.pizzaId !== action.payload
            );
            } else {
            item.totalPrice = item.unitPrice * item.quantity;
            }

    
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


export const getQtyById = (id) => (state) => state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;



export const {addItem,clearCart,removeItem,increaseQty,decreaseQty} = cartSlice.actions;
export default cartSlice.reducer;