"use client";
import PaymentButton from "@/components/PaymentButton/PaymentButton";
import { removeItem } from "@/lib/store/features/cart/cartSlice";
import { useAppSelector, useAppDispatch } from "@/lib/store/hooks";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React, { useState } from "react";

function CartPage() {
  const items = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch(); // Initialize useDispatch

  // State to track quantity for each item
  const [quantities, setQuantities] = useState(
    items.map(() => 1) // Initialize all quantities to 1
  );

  // Update quantity for an item
  const handleQuantityChange = (index, newQuantity) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = newQuantity;
    setQuantities(updatedQuantities);
  };

  // Delete item from the cart
  const handleDelete = (index) => {
    dispatch(removeItem(index)); // Dispatch the removeItem action with the item's index
  };

  // Calculate total price based on quantities
  const total = items.reduce(
    (acc, item, index) => acc + item.price * quantities[index],
    0
  );

  return (
    <div className="min-h-screen bg-[#232323] text-white py-10">
      <div className="container mx-auto px-5">
        <h1 className="text-4xl font-bold mb-8 text-center ">Shopping Cart</h1>

        {/* Cart Items */}
        {items.length > 0 ? (
          <div className="bg-[#1c1c1c] p-6 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left side: Cart items */}
              <div className="lg:col-span-2">
                {items.map((item, index) => {
                  const imageUrl = urlFor(item.image).url();
                  const itemQuantity = quantities[index];

                  return (
                    <div
                      key={index}
                      className="bg-[#282828] p-4 rounded-lg flex items-center justify-between space-x-4 mb-4"
                    >
                      {/* Product Image */}
                      <Image
                        src={imageUrl}
                        alt={item.name}
                        width={120}
                        height={120}
                        className="object-cover rounded-md"
                      />

                      {/* Product Details */}
                      <div className="flex-grow">
                        <h2 className="text-2xl font-bold ">{item.name}</h2>
                        <p className="text-sm text-gray-400">
                          In Stock • Sold by{" Abdul Wasay"}
                          <span className="text-[#3fcf2c]">{item.seller}</span>
                        </p>
                        <div className="flex space-x-3 mt-2">
                          {/* Quantity Selector */}
                          <select
                            className=" text-white bg-[#232323] px-3 py-1 rounded"
                            value={itemQuantity}
                            onChange={(e) =>
                              handleQuantityChange(
                                index,
                                parseInt(e.target.value)
                              )
                            }
                          >
                            <option value="1">Qty: 1</option>
                            <option value="2">Qty: 2</option>
                            <option value="3">Qty: 3</option>
                            <option value="4">Qty: 4</option>
                            <option value="5">Qty: 5</option>
                          </select>
                          {/* Action Buttons */}
                          <button
                            className="text-[#3fcf2c] underline"
                            onClick={() => handleDelete(index)} // Handle delete
                          >
                            Delete
                          </button>
                          <button className="text-[#3fcf2c] underline">
                            Save for later
                          </button>
                          <button className="text-[#3fcf2c] underline">
                            Share
                          </button>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="text-lg font-bold text-right">
                        ${(item.price * itemQuantity).toFixed(2)}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right side: Subtotal and Proceed to Checkout */}
              <div className="bg-gradient-to-br from-[#232323] to-[#1a1a1a] p-8 rounded-lg shadow-lg">
                <div className="text-2xl font-semibold mb-4 text-center text-white">
                  Subtotal ({items.length} item{items.length > 1 ? "s" : ""}):
                  <span className="text-[#3fcf2c]"> ${total.toFixed(2)}</span>
                </div>

                {/* Visual separator */}
                <div className="h-px bg-[#3fcf2c] my-4"></div>

                <div className="flex justify-center">
                  {/* Pass total and items to the PaymentButton component */}
                  <PaymentButton
                    total={total}
                    items={items}
                    className="bg-[#3fcf2c] hover:bg-[#32b127] text-black font-bold py-3 px-8 text-lg rounded-full transition-transform transform hover:scale-105 duration-300 shadow-md hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#32b127]/50"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-xl">Your cart is empty.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
