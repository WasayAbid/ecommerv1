"use client";
import { AppStore, makeStore } from "@/lib/store/store";
import { Provider } from "react-redux"; // Correct import
import React, { ReactNode, useRef } from "react";
import { add } from "@/lib/store/features/cart/cartSlice";

const StoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
