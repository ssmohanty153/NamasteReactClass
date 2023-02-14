import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addCarts: (state, action) => {
      state.items.push(action.payload);
    },
    removeCarts: (state, action) => {
      state.items.splice(action.payload,1);
    },
    clearItem: (state) => {
      state.items = [];
    },
  },
});

export const { addCarts, removeCarts, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
