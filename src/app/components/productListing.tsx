import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "../../../type";

const ProductListing = ({ product }: { product: Product }) => {
  if (!product || !product.slug || !product.slug.current) {
    return <div>Product data is incomplete</div>;
  }

  return (
   
    <div className="max-w-screen-2xl container mx-auto pb-8">
      {/* Link to Product */}
      <Link href={`/Product/${product.slug.current}`}>
        {product.imageUrl && (
          <Image
            src={product.imageUrl}
            alt={product.name || "Product image"}
            height={220}
            width={240}
            className="group shadow-md bg-[#F0EEED] rounded-md w-[160px] md:w-[240px] h-[170px] md:h-[260px] flex justify-center items-center relative cursor-pointer object.cover"
          />
        )}
      </Link>

      {/* Product Name */}
      <p className="text-sm font-medium">{product.name || "Unnamed Product"}</p>
      {/* Product Price */}
      <h3 className="text-gray-800 font-bold">${product.price || "0.00"}</h3>
    </div>
  
  );
}

export default ProductListing;