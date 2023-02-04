import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  amount: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getProduct: (state, action) => {
      let productIsToBeUpdated = state.cart.find(
        (value) => value.id === action.payload.id
      );
      if (productIsToBeUpdated) {
        productIsToBeUpdated.amount += 1;
      } else {
        state.cart.push(action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeSingleProduct: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    totals: (state) => {
      let amount = 0;
      let total = 0;
      state.cart.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.item_Price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { getProduct, totals, removeSingleProduct } = cartSlice.actions;

export default cartSlice.reducer;
