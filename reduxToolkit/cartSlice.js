import { createSlice } from '@reduxjs/toolkit';

const initialState = 0;

const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state) => {
      return state + 1;
    },
    removeCartItem: (state) => {
      if (state > 0) {
        return state - 1;
      }
      return state;
    },
  },
});

export const { addCartItem, removeCartItem } = cartReducer.actions;

export default cartReducer.reducer;
