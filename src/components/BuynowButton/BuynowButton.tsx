"use client";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const BuyNowButton: React.FC<{ product: { name: string; price: number } }> = ({
  product,
}) => {
  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51QDCuVDCQ9A20ePFtTmNER53nQWfqQwQ684lN3PAOn7OIqs5vwXsk37psjDK7BLlwocaquG0EBajhvPUHy5Cp9Hl00RAPKaghP"
    );

    const body = {
      totalPrice: product.price,
      products: [
        {
          name: product.name,
          price: product.price,
          quantity: 1, // For Buy Now, we're assuming a quantity of 1
        },
      ],
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

      // If redirection fails, handle the error
      if (result && result.error) {
        console.error("Error redirecting to checkout:", result.error.message);
      }
    } catch (error) {
      // Handle unexpected errors
      console.error("Error during payment process:", error);
    }
  };

  return (
    <button
      className="bg-[#3fcf2c] hover:bg-[#32b127] text-white py-3 px-6 text-lg rounded-lg transition-colors duration-300"
      onClick={makePayment}
    >
      Buy Now
    </button>
  );
};

export default BuyNowButton;
