"use client";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";

// Define the type for items
type PaymentButtonProps = {
  total: number;
  items: { name: string; price: number; quantity: number }[];
};

const PaymentButton: React.FC<PaymentButtonProps> = ({ total, items }) => {
  // Function to handle the payment process
  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51QDCuVDCQ9A20ePFtTmNER53nQWfqQwQ684lN3PAOn7OIqs5vwXsk37psjDK7BLlwocaquG0EBajhvPUHy5Cp9Hl00RAPKaghP"
    );

    const body = {
      totalPrice: total,
      products: items.map((item) => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
    };

    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });

      // Check if the response is OK
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error creating checkout session:", errorData);
        return;
      }

      const session = await response.json();

      // Redirect to checkout
      const result = await stripe?.redirectToCheckout({
        sessionId: session.id,
      });

      // Handle potential errors during redirection
      if (result && result.error) {
        console.error("Error redirecting to checkout:", result.error.message);
      }
    } catch (error) {
      // Handle unexpected errors
      console.error("Error during payment process:", error);
    }
  };

  return (
    <div className="relative flex justify-center mt-10">
      <div className="absolute inset-0 bg-gradient-to-r from-[#3fcf2c] to-[#32b127] rounded-lg blur-md opacity-30"></div>
      <button
        className="relative bg-[#232323] hover:bg-[#32b127] text-white py-4 px-12 text-xl font-semibold rounded-full transition-transform transform hover:scale-110 duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#32b127]/50"
        onClick={makePayment}
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default PaymentButton;
