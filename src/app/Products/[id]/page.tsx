import React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

const getProduct = async (category: string) => {
  return client.fetch(`*[_type=="${category}"]`);
};

export const revalidate = 60;

async function page({ params }: { params: { id: string } }) {
  const category = params.id;

  const product = await getProduct(category);
  const randomIndex = Math.floor(Math.random() * product.length);

  return (
    <div className="min-h-screen bg-[#1C1C1C] py-20">
      <div className="container mx-auto p-5 text-center">
        <h1 className="text-5xl font-extrabold mb-12 text-white tracking-widest drop-shadow-lg">
          Explore {category} Products!
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {product.map(
            (eachproduct: (typeof product)[number], index: number) => {
              // Get the image URL string
              const imageUrl = urlFor(eachproduct.image).url();
              return (
                <Link
                  href={`/Products/${category}/${encodeURIComponent(eachproduct.name)}`}
                  key={eachproduct.name}
                >
                  <div
                    className="relative border border-[#494949] rounded-lg bg-[#282828] p-8 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-[#3fcf2c]/50"
                    style={{
                      minHeight: "400px",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* Conditionally show the Best Seller label only for the first product */}
                    {index === randomIndex && (
                      <div className="absolute top-0 left-0 bg-[#3fcf2c] text-xs px-2 py-1 rounded-bl-lg rounded-tr-lg shadow-lg z-10">
                        Best Seller
                      </div>
                    )}
                    <div>
                      {/* Display the image */}
                      <div className="overflow-hidden rounded-lg mb-4">
                        <Image
                          src={imageUrl}
                          width={200}
                          height={200}
                          alt={eachproduct.name}
                          className="object-contain"
                          style={{ height: "200px" }}
                        />
                      </div>
                      <h2 className="text-xl font-bold text-[#3fcf2c] mb-2">
                        {eachproduct.name}
                      </h2>
                      <p className="text-gray-400 text-sm">
                        {eachproduct.description}
                      </p>
                    </div>
                    <div className="mt-4">
                      <p className="text-lg font-bold text-white">
                        Price: ${eachproduct.price}
                      </p>
                      <div className="flex justify-between items-center mt-4">
                        <div className="text-[#3fcf2c] text-sm flex items-center">
                          <span className="mr-1">{eachproduct.rating}</span>
                          <span>★</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default page;
