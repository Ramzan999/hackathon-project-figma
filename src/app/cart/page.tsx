import React from "react";
import Navbar from "../components/navbar";
import { FaChevronRight } from "react-icons/fa6";
import { Archivo_Black } from "next/font/google";
import FooterOnly from "../components/footer";
import { Roboto } from "next/font/google"; 
import { Lato } from "next/font/google";
import { RiDeleteBinFill } from "react-icons/ri";
import { GoTag } from "react-icons/go";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";

const lato = Lato ({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
})

const roboto = Roboto ({
    weight: '500',
    subsets: ['latin'],
    display: 'swap',
})

const archivo = Archivo_Black ({
    weight: '400', 
    subsets: ['latin'],
    display: 'swap',
})



export default function AddToCart () {
    return (
        <div>
            <Navbar />

            <div className="border-[1px] w-[full] mx-[80px] border-gray-100"></div>
            
            <div className="px-[90px]">
                <div className="mt-5 flex ">
                    <a href="/" className="flex justify-center text-sm text-gray-600 hover:text-gray-800 hover:underline">Home<FaChevronRight className="text-[12px] mt-[4px] ml-[2px]"/></a>
                    <a href="" className="flex justify-center ml-4 text-sm text-gray-600 hover:text-gray-800 hover:underline">Cart</a>
                </div>

                <div className="mt-4 text-4xl tracking-tighter">
                    <h1 className={archivo.className}>YOUR CART</h1>
                </div>

                <div className="mb-20 flex justify-between">

                    <div className="container border-[1px] border-gray-200 h-auto ml-1 w-[680px] rounded-[16px] mt-5 ">
                        <div className="p-5 flex">
                            <img src="image14.png" alt="imagecart" className="w-[120px] h-[130px] rounded-[8px]"/>
                            <div className="ml-3">
                                <div className="mt-[2px] text-[17px] tracking-normal flex justify-between items-start">
                                    <h2 className={roboto.className}>Gradient Graphic T-shirt</h2>
                                    <RiDeleteBinFill className=" text-red-500"/>
                                </div>
                                <div>
                                    <h3 className="flex text-gray-800 text-[14px] mt-[5px] tracking-wide font-sans">Size: <p className="ml-1 text-gray-400 font-sans">Large</p></h3>
                                    <h3 className="flex text-gray-800 text-[14px] tracking-wide font-sans">Color: <p className="ml-1 text-gray-400 font-sans">White</p></h3>
                                </div>
                                <div className="mt-[24px] text-[19px] flex">
                                    <h1 className={lato.className}>$145</h1>
                                    <div className="bg-[#F0EEED] ml-[370px]  w-[90px] h-[32px] rounded-full flex items-center justify-between px-3"> <p className="font-bold text-[17px] mb-3">_</p> <p className="text-[12px]">1</p> <p className="text-[20px]">+</p> </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-[1px] w-[full] mx-[23px] border-gray-100"></div>

                        <div className="p-5 flex">
                            <img src="image3.png" alt="imagecart" className="w-[120px] h-[130px] rounded-[8px]"/>
                            <div className="ml-3">
                                <div className="mt-[2px] text-[17px] tracking-normal flex justify-between items-start">
                                    <h2 className={roboto.className}>Checkered Shirt</h2>
                                    <RiDeleteBinFill className=" text-red-500 "/>
                                </div>
                                <div>
                                    <h3 className="flex text-gray-800 text-[14px] mt-[5px] tracking-wide font-sans">Size: <p className="ml-1 text-gray-400 font-sans">Medium</p></h3>
                                    <h3 className="flex text-gray-800 text-[14px] tracking-wide font-sans">Color: <p className="ml-1 text-gray-400 font-sans">Red</p></h3>
                                </div>
                                <div className="mt-[24px] text-[19px] flex">
                                    <h1 className={lato.className}>$180</h1>
                                    <div className="bg-[#F0EEED] ml-[370px]  w-[90px] h-[32px] rounded-full flex items-center justify-between px-3"> <p className="font-bold text-[17px] mb-3">_</p> <p className="text-[12px]">1</p> <p className="text-[20px]">+</p> </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-[1px] w-[full] mx-[23px] border-gray-100"></div>

                        <div className="p-5 flex">
                            <img src="image2.png" alt="imagecart" className="w-[120px] h-[130px] rounded-[8px]"/>
                            <div className="ml-3">
                                <div className="mt-[2px] text-[17px] tracking-normal flex justify-between items-start">
                                    <h2 className={roboto.className}>Skinny Fit Jeans</h2>
                                    <RiDeleteBinFill className=" text-red-500"/>
                                </div>
                                <div>
                                    <h3 className="flex text-gray-800 text-[14px] mt-[5px] tracking-wide font-sans">Size: <p className="ml-1 text-gray-400 font-sans">Large</p></h3>
                                    <h3 className="flex text-gray-800 text-[14px] tracking-wide font-sans">Color: <p className="ml-1 text-gray-400 font-sans">Blue</p></h3>
                                </div>
                                <div className="mt-[24px] text-[19px] flex">
                                    <h1 className={lato.className}>$240</h1>
                                    <div className="bg-[#F0EEED] ml-[370px]  w-[90px] h-[32px] rounded-full flex items-center justify-between px-3"> <p className="font-bold text-[17px] mb-3">_</p> <p className="text-[12px]">1</p> <p className="text-[20px]">+</p> </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-[1px] w-[full] mx-[23px] border-gray-100"></div>
                    </div>



                    <div className="container border-[1px] p-5 border-gray-200 h-[360px] w-[430px] rounded-[16px] mt-5 ">
                        <div className="font-bold text-[18px] tracking-normal">
                            <h2 className={lato.className}>Order Summary</h2>
                        </div>
                        <div className="flex justify-between items-center mt-5">
                            <p className=" text-gray-500 text-[14px]">Subtotal</p>
                            <h2 className={lato.className}>$565</h2>
                        </div>
                        <div className="flex justify-between items-center mt-3">
                            <p className=" text-gray-500 text-[14px]">Discount(-20%)</p>
                            <div className="text-red-500"><h2 className={lato.className}>-$113</h2></div>
                        </div>
                        <div className="flex justify-between items-center mt-3">
                            <p className=" text-gray-500 text-[14px]">Delivery Fee</p>
                            <h2 className={lato.className}>$15</h2>
                        </div>
                        <div className="border-[1px] w-[full] mt-4 border-gray-100"></div>

                        <div className="flex justify-between mt-3 items-center">
                            <p className="text-gray-800 text-[15px] font-sans">Total</p>
                            <h2 className={lato.className}>$467</h2>
                        </div>
                        
                        <div className="flex mt-5">
                            <div className="relative">
                                <input type="text" placeholder="Add promo code" className="w-[290px] bg-[#F0EEED] placeholder:text-sm placeholder:tracking-normal placeholder:font-sans text-gray-700 py-[7px] pl-10 rounded-full  touch-none"/>
                                <GoTag className="absolute bottom-[10px] ml-[14px] text-[17px] text-gray-500"/>   
                            </div>
                            <Button className="w-[100px] ml-3 rounded-full text-gray-100">Apply</Button>
                        </div>
                        <Button className="w-full h-[42px] mt-5 rounded-full font-light font-sans text-gray-100">Go to Checkout <FaArrowRight className="ml-1 mt-[2px] "/></Button>

                        
                    </div>

                </div>
            </div> 



            <FooterOnly />
        </div>
    )
}