"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PaymentCanceled() {
  const cancelAnimation = {
    hidden: { opacity: 0, y: -50 },
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
        variants={cancelAnimation}
      >
        <motion.h1
          className="text-5xl font-bold text-[#cf2c2c] mb-6"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Payment Canceled
        </motion.h1>
        <p className="text-2xl mb-6">
          Your payment was not completed. Please try again or contact support.
        </p>
        <p className="text-lg mb-8">
          Need help? Reach out to our customer service team for assistance.
        </p>

        <motion.div
          className="flex justify-center gap-4 mt-10"
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          <Link href="/CartPage">
            <motion.button
              className="px-8 py-4 bg-[#3fcf2c] text-white rounded-lg hover:bg-[#32b127] shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Try Again
            </motion.button>
          </Link>
          <Link href="/">
            <motion.button
              className="px-8 py-4 bg-[#282828] text-white border border-[#494949] hover:border-[#3fcf2c] rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Return to Shop
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
