import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET as string, {
  apiVersion: "2022-11-15", // Valid API version
});

export async function POST(req: Request) {
  try {
    const { totalPrice } = await req.json();
    console.log("Received totalPrice:", totalPrice);

    if (!totalPrice || totalPrice <= 0) {
      throw new Error("Invalid total price provided");
    }

    // Get the origin from the request headers
    const origin = req.headers.get("origin") || "http://localhost:3000"; // Default to localhost if origin is null

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Total Purchase",
            },
            unit_amount: Math.round(totalPrice * 100), // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/success`, // Use the resolved origin
      cancel_url: `${origin}/cancel`, // Use the resolved origin
    });

    return NextResponse.json({ id: session.id });
  } catch (error) {
    console.error("Stripe API Error:", error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
