"use client";
import Link from "next/link";
import CartItems from "./CartItems";

export default function TopNav() {
  return (
    <nav className="relative py-5 bg-[#232323] shadow-lg">
      {/* Top and bottom green glow */}
      <div className="absolute inset-0">
        {/* Top glow */}
        <div className="h-2 w-full absolute top-0 left-0 right-0 bg-[#3fcf2c] shadow-[0px_4px_20px_4px_rgba(63,207,44,0.8)] z-0" />
        {/* Bottom glow */}
        <div className="h-2 w-full absolute bottom-0 left-0 right-0 bg-[#3fcf2c] shadow-[0px_4px_20px_4px_rgba(63,207,44,0.8)] z-0" />
      </div>
      <div className="container mx-auto flex justify-between items-center relative z-10">
        {/* Logo */}
        <div className="text-[#f5f5f5] text-4xl font-bold flex items-center space-x-3">
          <Link href="/">
            <span className="ml-2 text-3xl tracking-wider">TheGamerVault</span>
          </Link>
        </div>

        {/* Navigation Links and Search Bar */}
        <div className="flex items-center space-x-8">
          {/* About Us */}

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="px-6 py-3 w-[450px] bg-[#1e1e1e] text-white rounded-full border border-[#494949] focus:outline-none focus:border-[#3fcf2c] transition-colors duration-300"
            />
            <button className="absolute right-0 top-0 bottom-0 bg-[#3fcf2c] hover:bg-[#32b127] text-white px-6 py-3 rounded-full">
              Search
            </button>
          </div>
        </div>

        <Link href="/about">
          <h1 className="text-[#f5f5f5] hover:text-[#3fcf2c] px-3 py-2 rounded-md text-2xl font-extrabold transition-colors duration-300">
            About
          </h1>
        </Link>

        {/* Cart Button */}
        <div>
          <CartItems />
        </div>
      </div>
    </nav>
  );
}
