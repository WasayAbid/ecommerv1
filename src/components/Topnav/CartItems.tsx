"use client";
import { useAppSelector } from "@/lib/store/hooks";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function CartItems() {
  const [mounted, setMounted] = useState(false);
  const items = useAppSelector((state) => state.cart.items);

  // Ensure client-side rendering only
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder during SSR to avoid hydration issues
    return <span className="text-white">Loading...</span>;
  }

  return (
    <Link href="/CartPage">
      <div className="py-2 px-4 rounded-lg transition-colors duration-300 flex items-center">
        <Image
          src="/images/cart image2.jpg"
          alt="Cart"
          width={60}
          height={35}
          className="object-contain"
        />
        {/* Display the number of cart items */}
        <span className="absolute top-0 right-0 bg-[#3fcf2c] text-white text-xs font-bold px-2 py-1 rounded-full">
          {items.length}
        </span>
      </div>
    </Link>
  );
}

export default CartItems;
