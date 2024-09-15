import { combineReducers, createSlice, PayloadAction } from "@reduxjs/toolkit";
import CartItem, { cartItem } from "../../features/cart/CartItem";

const rootReducer = combineReducers({});
export type RootState = ReturnType<typeof rootReducer>;

interface cartState {
  cart: cartItem[],
}


const initialState : cartState = {
  cart: [],
};


export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state,action:PayloadAction<{pizza:cartItem}>){
      state.cart.push(action.payload.pizza)
    },
    deleteItem(state,action:PayloadAction<{id:string}>){
        state.cart = state.cart.filter(item => item.id !== action.payload.id)
    },
    increaseItemQuantity(state,action:PayloadAction<{id:string}>){
        const item = state.cart.find(item=> item.id === action.payload.id) as cartItem;
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice
    },
    decreaseItemQuantity(state,action:PayloadAction<{id:string}>){
        const item = state.cart.find(item=> item.id === action.payload.id) as cartItem;
        if (item.quantity === 0) {
            state.cart = state.cart.filter(item => item.id !== action.payload.id)
        }
        else {
            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice
            if(item.quantity === 0) cartSlice.caseReducers.deleteItem(state,action)
        }  
    },
    clearCart(state){
        state.cart = []
    }
}
});

export const { addItem, deleteItem, increaseItemQuantity,  decreaseItemQuantity, clearCart} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state : RootState ) =>
  state.cart.cart;

export const getTotalCartNumber = (state : RootState ) =>
  state.cart.cart.reduce((sum : number, item:cartItem) => sum + item.quantity, 0);

export const getTotalCartSum = (state : RootState ) =>
  state.cart.cart.reduce((sum : number, item:cartItem) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id :string) => (state:RootState) => {
   const item = state.cart.cart.find((item:cartItem) => item.id === id) as cartItem
   return (item ? item.quantity : 0)
  }