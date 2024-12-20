"use client";
import { add } from "@/lib/store/features/cart/cartSlice";
import { useAppDispatch } from "@/lib/store/hooks";
import React from "react";
import BuyNowButton from "../BuynowButton/BuynowButton";

import { toast, Toaster } from "react-hot-toast";

const ProductActions = ({
  product,
}: {
  product: { name: string; price: number; image: string };
}) => {
  const dispatch = useAppDispatch();

  const notify = () => toast("Added to Cart Successfully");

  const handleAddToCart = (product: {
    name: string;
    price: number;
    image: string;
  }) => {
    // Dispatch the entire product object with name, price, and image
    dispatch(add(product));
    notify(); // Trigger toast notification
    console.log("🚀 ~ ProductActions ~ product:", product);
  };

  return (
    <div className="flex space-x-4">
      <BuyNowButton product={product} />

      <button
        className="bg-[#232323] hover:bg-[#32b127] text-white py-3 px-6 text-lg rounded-lg transition-colors duration-300 shadow-[0_0_10px_#3fcf2c] hover:shadow-[0_0_15px_#32b127]"
        onClick={() => handleAddToCart(product)}
      >
        Add to Cart
      </button>
      <Toaster />
    </div>
  );
};

export default ProductActions;
