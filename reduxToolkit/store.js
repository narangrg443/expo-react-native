import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';  // Update this path

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // Add other reducers here if you have more slices
  },
});

export default store;
