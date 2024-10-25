/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/**", // Allow all images from this path
      },
    ],
  },
  env: {
    STRIPE_SECRET: process.env.STRIPE_SECRET, // Expose STRIPE_SECRET for API routes
  },
};

export default nextConfig;
