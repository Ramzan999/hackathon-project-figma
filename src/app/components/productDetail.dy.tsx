import React from 'react'
import Navbar from "../components/navbar";
import { FaChevronRight } from "react-icons/fa6";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { IoStar } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { TbDots } from "react-icons/tb";
import Link from "next/link"
import { LiaStarHalfSolid } from "react-icons/lia";
import { Button } from "@/components/ui/button";
import Products3 from "../components/productDetail";
import FooterOnly from "../components/footer";
import { Product } from '../../../type';



const poppins = Poppins ({
    weight: '900', 
    subsets: ['latin'],
    display: 'swap',
})

const poppins2 = Poppins ({
    weight: '400', 
    subsets: ['latin'],
    display: 'swap',
})


const ProductDetail = ({product}:{product:Product}) => {
  return (
    <div>
      <Navbar />
      <div className="border-[1px] w-[full] mx-[45px] border-gray-100"></div>

      <div className="px-[90px]">
          
        <div className="mt-5 flex ">
            <a href="/" className="flex justify-center text-sm text-gray-600 hover:text-gray-800 hover:underline">Home<FaChevronRight className="text-[12px] mt-[4px] ml-[2px]"/></a>
            <a href="" className="flex justify-center ml-4 text-sm text-gray-600 hover:text-gray-800 hover:underline">Shop<FaChevronRight className="text-[12px] mt-[4px] ml-[2px]"/></a>
            <a href="" className="flex justify-center ml-4 text-sm text-gray-600 hover:text-gray-800 hover:underline">Men's<FaChevronRight className="text-[12px] mt-[4px] ml-[2px]"/></a>
            <a href="" className="flex justify-center ml-4 text-sm text-gray-600 hover:text-gray-800">T-shirt</a>
        </div>
          
        <div className="flex justify-between">
            
        <div className="flex w-[50%]">
          <div className="flex flex-col gap-x-4 mt-8">
              <Image src={"/pimage2.png"} alt="pimage2" width={130} height={130} className="border-none"/>
              <Image src={"/pimage5.png"} alt="pimage2" width={130} height={130} className="mt-3"/>
              <Image src={"/pimage6.png"} alt="pimage2" width={130} height={130} className="mt-3"/>
          </div>
          <div className="mt-8 ml-3">
          <Image key={product.name} src={product.imageUrl} alt={product.name} width={380} height={380} className=""/>
          </div>
        </div>

        <div className="flex flex-col w-[50%]">
          <div className="flex justify-center font-bold mt-14 -tracking-tight leading-3 items-center text-4xl ">
              <h1 className={poppins.className}>{product.name}</h1>
          </div>

          <div className="">
            <div className="flex mt-5 ml-7">
                <IoStar className="text-yellow-400 text-[16px]"/>
                <IoStar className="text-yellow-400 ml-1 text-[16px]"/>
                <IoStar className="text-yellow-400 ml-1 text-[16px]"/>
                <IoStar className="text-yellow-400 ml-1 text-[16px]"/>
                <IoStar className="text-yellow-400 ml-1 text-[16px]"/>
                <h3 className="text-gray-700 text-sm ml-2 tracking-tighter">4.5 <span className="text-gray-500">/5</span></h3>
            </div>
            <div className="flex ml-7 mt-[3px]">
                <h2 className="text-2xl text-black font-bold ">${product.price}</h2>
                <h2 className="text-2xl text-gray-400 font-semibold ml-3 line-through">${product.discountPercent}</h2>
                <h4 className="bg-red-100 ml-3 border-none rounded-full mt-1 w-14 h-6 flex justify-center items-center text-red-700 text-[12px]">-40%</h4>
            </div>
            
            <div className="text-[14px] leading-snug mt-3 text-gray-400 ml-7">
                <p className={poppins2.className}>{product.description}</p>
            </div>
            <div className="border-[1px] mt-5 ml-7 border-gray-100"></div>

            <div className="">
              <div className="text-[14px] tracking-tighter font-semibold leading-snug mt-3 text-gray-500 ml-7">
                  <h2 className={poppins2.className}>Select Colors</h2>
              </div>
              <div className="flex">
                <a href="" className=""><div className="w-8 h-8 bg-[#4F4631] rounded-[50%] mt-2 ml-7 hover:border-black border-[1px] flex justify-center items-center"><FaCheck className="text-white text-[14px] border-[0px] border-black"/></div></a>
                <a href="" className=""><div className="w-8 h-8  rounded-[50%] mt-2 ml-4 hover:border-black border-[1px]">{product.colors}</div></a>
                <a href="" className=""><div className="w-8 h-8  rounded-[50%] mt-2 ml-4 hover:border-black border-[1px]">{product.colors}</div></a>
              </div>
            </div>
            <div className="border-[1px] mt-5 ml-7 border-gray-100"></div>

            <div>
              <div className="text-[14px] tracking-tighter font-semibold leading-snug mt-3 text-gray-500 ml-7">
                <h2 className={poppins2.className}>Choose Size</h2>
              </div>
              <div className="mt-3 ml-7 flex">
                <a href=""><div className="flex justify-center items-center bg-[#F0F0F0] text-[14px] text-gray-600 w-[70px] h-10 rounded-full hover:bg-gray-600 hover:text-gray-200">Small</div></a>
                <a href=""><div className="flex justify-center items-center bg-[#F0F0F0] text-[14px] text-gray-600 w-[90px] h-10 rounded-full hover:bg-gray-600 hover:text-gray-200 ml-3">Medium</div></a>
                <a href=""><div className="flex justify-center items-center bg-[#F0F0F0] text-[14px] text-gray-600 w-[70px] h-10 rounded-full hover:bg-gray-600 hover:text-gray-200 ml-3">{product.sizes}</div></a>
                <a href=""><div className="flex justify-center items-center bg-[#F0F0F0] text-[14px] text-gray-600 w-[90px] h-10 rounded-full hover:bg-gray-600 hover:text-gray-200 ml-3">X-Large</div></a>
              </div>
              </div>
              <div className="border-[1px] mt-5 ml-7 border-gray-100"></div>

            <div className="flex mt-3 ml-7">
              <div className="flex justify-evenly items-center bg-[#F0F0F0] text-[14px] text-gray-600 w-[180px] h-10 rounded-full">
                <a href=""><span className="text-4xl font-extralight ">-</span></a>
                <a href=""><span className="text-sm">1</span></a>
                <a href=""><span className="text-2xl">+</span></a>
              </div>
              <a href=""><div className="flex justify-center items-center bg-[#F0F0F0] text-[14px] text-gray-600 w-[300px] h-10 rounded-full hover:bg-gray-600 hover:text-gray-200 ml-3">Add to Cart</div></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <Products3 />
    <FooterOnly />
  </div>
)
}

export default ProductDetail
