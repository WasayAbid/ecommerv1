"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";
export const revalidate = 60;

export default function Homepage() {
  const accessories = [
    { id: "GamingPC", name: "Gaming PC", image: "/images/gaming pc2.jpg" },
    {
      id: "GamingLaptop",
      name: "Gaming Laptop",
      image: "/images/purplelap.jpg",
    },
    {
      id: "GamingMonitor",
      name: "Gaming Monitor",
      image: "/images/monitor6.jpg",
    },
    {
      id: "GamingKeyboard",
      name: "Gaming Keyboard",
      image: "/images/keyboard.jpg",
    },
    { id: "Mouse", name: "Gaming Mouse", image: "/images/gloriousmodelO.jpg" },
    {
      id: "GamingMousepad",
      name: "Gaming MousePad",
      image: "/images/mousepad.jpg",
    },
    {
      id: "otheracc",
      name: "Shop Other Accessories",
      image: "/images/otheracc.jpg",
    },
  ];

  // Stats section spring animation
  const statsAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 200,
  });

  // Parallax scroll effect for sections
  const scrollAnimation = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div className="p-10 min-h-screen bg-[#1C1C1C] flex flex-col justify-center items-center relative">
      {/* Video Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.5 } }}
        className="container mx-auto text-center mb-20"
      >
        <h1 className="text-6xl font-extrabold text-white tracking-wider drop-shadow-lg">
          Explore the Future of Gaming!
        </h1>
        <motion.div
          className="w-[80%] h-[50vh] max-w-[1200px] mx-auto mt-10 rounded-xl overflow-hidden shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <video
            src="/images/hypervid.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Customer Reviews Section - After the video */}
      <motion.div
        className="bg-[#3fcf2c2c] text-white py-16 mb-20 w-full"
        initial="hidden"
        whileInView="visible"
        variants={scrollAnimation}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl text-center font-bold mb-12">
          What Gamers Are Saying
        </h2>
        <div className="flex justify-center gap-8 flex-wrap w-full">
          <motion.div
            className="bg-[#282828] rounded-lg p-6 max-w-sm shadow-lg flex-1 m-2 w-[90%] sm:w-[45%]"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="italic">
              "This gaming PC is incredible! The performance is top-notch!"
            </p>
            <p className="mt-4 text-right">— Alex</p>
          </motion.div>
          <motion.div
            className="bg-[#282828] rounded-lg p-6 max-w-sm shadow-lg flex-1 m-2 w-[90%] sm:w-[45%]"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="italic">
              "I love the gaming mouse, it's so responsive and lightweight!"
            </p>
            <p className="mt-4 text-right">— Sarah</p>
          </motion.div>
        </div>
      </motion.div>

      {/* All Products */}
      <motion.div
        className="container mx-auto text-center mb-12"
        initial="hidden"
        whileInView="visible"
        variants={scrollAnimation}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl font-extrabold mb-12 text-white tracking-wider drop-shadow-lg">
          All Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-center">
          {accessories.map((accessory, index) => (
            <motion.div
              key={index}
              className="text-white bg-[#282828] rounded-lg overflow-hidden p-6 hover:scale-105 transition-transform duration-300 ease-out shadow-xl hover:shadow-[#3fcf2c]/50"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/Products/${accessory.id}`}>
                <div className="overflow-hidden rounded-lg border border-[#494949] hover:border-[#3fcf2c] transition-all duration-300 shadow-lg">
                  <Image
                    src={accessory.image}
                    alt={accessory.name}
                    width={1100}
                    height={400}
                    className="rounded-lg object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <motion.div
                  className="mt-4 text-lg font-semibold tracking-wide text-[#3fcf2c]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  {accessory.name}
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Animated Stats Section */}
      <animated.div
        style={statsAnimation}
        className="bg-[#1a1a1a] text-white py-16 w-full text-center"
      >
        <div className="container mx-auto flex justify-around">
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <h3 className="text-5xl font-bold">10K+</h3>
            <p>Products Available</p>
          </motion.div>
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.1, rotate: -5 }}
          >
            <h3 className="text-5xl font-bold">10K+</h3>
            <p>Satisfied Gamers</p>
          </motion.div>
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.1, rotate: 3 }}
          >
            <h3 className="text-5xl font-bold">500+</h3>
            <p>5-Star Reviews</p>
          </motion.div>
        </div>
      </animated.div>

      {/* Newsletter Sign-Up Section */}
      <motion.div
        className="bg-[#282828] p-16 text-center w-full rounded-lg shadow-md mb-20"
        initial="hidden"
        whileInView="visible"
        variants={scrollAnimation}
        viewport={{ once: true }}
      >
        <h3 className="text-4xl font-bold text-white mb-8">
          Join Our Newsletter
        </h3>
        <p className="text-white mb-6">
          Get the latest gaming updates and exclusive deals.
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            className="px-4 py-2 text-black rounded-l-lg w-[300px]"
            placeholder="Enter your email"
          />
          <motion.button
            className="px-6 py-2 bg-[#3fcf2c] hover:bg-[#32b127] rounded-r-lg text-white"
            whileHover={{ scale: 1.05 }}
          >
            Subscribe
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
