import { createSlice } from '@reduxjs/toolkit';

// Set initial state
const initialState = {
  cartItems: [],
  notification: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Reducer to add to cart
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
      state.notification = `${action.payload.name} added to cart`;
    },
    // Reducer to remove from cart
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
    },
    // Reducer to clear notification
    clearNotification: (state) => {
      state.notification = null;
    },
  },
});

export const { addToCart, removeFromCart, clearNotification } = cartSlice.actions;

export default cartSlice.reducer;
