"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PaymentSuccess() {
  const successAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="p-10 min-h-screen bg-[#1C1C1C] flex flex-col justify-center items-center text-center">
      <motion.div
        className="bg-[#282828] text-white p-16 rounded-lg shadow-lg max-w-3xl w-full"
        initial="hidden"
        animate="visible"
        variants={successAnimation}
      >
        <motion.h1
          className="text-5xl font-bold text-[#3fcf2c] mb-6"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Payment Successful!
        </motion.h1>
        <p className="text-2xl mb-6">
          Thank you for your order! Your payment has been processed.
        </p>
        <p className="text-lg mb-8">Your order will be delivered on:</p>
        <motion.p
          className="text-4xl font-semibold text-[#3fcf2c] mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          October 30, 2024
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <p className="mb-4">
            Estimated Delivery Time:{" "}
            <span className="font-semibold">Between 10 AM - 3 PM</span>
          </p>
          <p className="mb-8">
            Order Number: <span className="font-semibold">#123456789</span>
          </p>
        </motion.div>

        <Link href="/">
          <motion.button
            className="px-8 py-4 bg-[#3fcf2c] text-white rounded-lg hover:bg-[#32b127] shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Continue Shopping
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
