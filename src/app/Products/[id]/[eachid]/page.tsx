import React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import ProductAction from "@/components/ProductAction/ProductAction";

const getProduct = async (singleproduct: string) => {
  return client.fetch(`*[name=="${singleproduct}"]`);
};

const getExtraProduct = async (category: string) => {
  return client.fetch(`*[_type=="${category}"]`);
};

export const revalidate = 60;

async function Page({ params }: any) {
  const singleproduct = decodeURIComponent(params.eachid);
  const products = await getProduct(singleproduct);
  const product = products[0]; // Access the first product in the array

  const extraProduct = decodeURIComponent(params.id);
  const extraProducts = await getExtraProduct(extraProduct);
  const category = params.id;
  const imageUrl = urlFor(product.image).url(); // Get the image URL string

  return (
    <div className="min-h-screen bg-[#232323] py-10 text-white">
      <div className="container mx-auto p-4">
        {/* Main Product Display */}
        <div className="flex flex-col lg:flex-row bg-[#282828] shadow-lg rounded-lg overflow-hidden mb-8">
          {/* Product Image */}
          <div className="lg:w-1/2 p-4 flex justify-center items-center bg-[#1C1C1C]">
            <Image
              src={imageUrl}
              width={300}
              height={300}
              alt={product.name}
              className="object-contain rounded-lg"
            />
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-300 text-base mb-4">
                {product.description}
              </p>
              <p className="text-lg  mb-3 font-bold">Price: ${product.price}</p>
              {/* Rating */}
              <div className="text-base text-yellow-400 mb-4 flex items-center">
                <span className="mr-2">{product.rating}</span> ★
              </div>
              {/* Product Actions (Client-side) */}
              <ProductAction product={product} /> {/* Use Client Component */}
            </div>

            {/* Additional Features */}
            <div className="mt-6">
              <h3 className="text-lg  font-bold mb-2">
                Features: This is a great product
                <div>
                  You Should definitely buy it
                  <span className="text-2xl">👍</span> {/* Thumbs-up emoji */}
                </div>
              </h3>
            </div>
          </div>
        </div>

        {/* You May Also Like Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6 text-center ">
            You may also like
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {extraProducts.map((extraProduct: any) => {
              const extraImageUrl = urlFor(extraProduct.image).url(); // Get the image URL for each extra product

              return (
                <Link href={`/`} key={params.id}>
                  <div className="bg-[#1C1C1C] rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
                    <Image
                      src={extraImageUrl}
                      width={200}
                      height={200}
                      alt={extraProduct.name}
                      className="object-contain rounded-lg mb-3"
                    />
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {extraProduct.name}
                    </h3>
                    <p className="text-[#3fcf2c] font-bold">
                      Price: ${extraProduct.price}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
