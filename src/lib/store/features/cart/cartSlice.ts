import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

// Define a type for the slice state
export interface CartItem {
  name: string;
  price: number;
  image: string;
}

// Define the initial state using that type
export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      // Expecting the index as payload
      // Filter out the item to be removed
      state.items = state.items.filter((_, index) => index !== action.payload);
    },
  },
});

export const { add, removeItem } = cartSlice.actions;

// Selector to get all cart items
export const selectCartItems = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
