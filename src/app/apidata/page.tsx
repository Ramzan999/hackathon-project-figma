import React from "react";
import { client } from '@/sanity/lib/client'
import ProductListing from "../components/productListing";
import Navbar from "../components/navbar";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../../../type";
import { FaChevronRight } from "react-icons/fa6";

async function fetchProducts(): Promise<Product[]> {
    const query = `
    *[_type=="products"]{
    name,
    price,
    description,
    discountPercent,
    "imageUrl":image.asset->url,
    slug,
}`;
   

const products = await client.fetch(query)
    return products;
}

const Shop = async () => {
    const products = await fetchProducts();

    return (
        <div>
        <div className="bg-[#faf4f4]">
        <Navbar />
      </div>

      {/* Banner Section */}
        <div className="relative text-black">
            <div className="relative flex shadow-md bg-gray-100">
                <div className="absolute ml-20 transform -translate-x-1/2 translate-y-1/2">
                    <p className="flex text-gray-700 text-[10px] md:text-[16px]">
                        <Link href={"/"} className="hover:underline">
                            Home
                        </Link>
                        <FaChevronRight className="text-[11px] mt-[7px] mr-7 ml-[2px]"/>
                        <Link href="/shop" className=" hover:underline">
                            Shop
                        </Link>
                    </p>
                </div>
                <Image 
                src="/imgban.png" 
                alt="Main banner"
                height={200}
                width={200}
                unoptimized
                className="w-auto im h-[600px] object-cover"
                />
                <h1 className=" transform -translate-x-1/2 translate-y-1/2">
                Shop
                </h1>
                <Image 
                src="/imgban1.png"
                alt="Main banner"
                height={200}
                width={200}
                unoptimized
                className="w-auto h-[600px] object-cover"
                />
            </div>
            
        </div>
          <div className="flex mt-10 flex-wrap justify-center ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-20 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                <ProductListing product={product} key={product.name}/>
                ))};
            </div>
          </div>
        </div>
    );
}
export default Shop