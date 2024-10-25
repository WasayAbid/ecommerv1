import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// Define a type for the slice state

export interface CartItem {
  name: string;
  price: number;
  image: string;
}

// Define the initial state using that type
export interface cartState {
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
    removeItem: (state, action) => {
      // Filter out the item to be removed
      state.items = state.items.filter((_, index) => index !== action.payload);
    },
  },
});

export const { add, removeItem } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default cartSlice.reducer;
