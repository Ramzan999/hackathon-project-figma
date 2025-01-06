import React from "react"
import Navbar from "../components/navbar"
import { FaChevronRight } from "react-icons/fa6";
import { Poppins } from "next/font/google";
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowUp } from "react-icons/io";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Products_Casual from "../components/product_casual";
import FooterOnly from "../components/footer";
import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";



const poppins = Poppins ({
    weight: '600', 
    subsets: ['latin'],
    display: 'swap',
})



export default function Casual () {
    return(
        <div>
            <Navbar />
            <div className="border-[1px] w-[full] mx-[80px] border-gray-100"></div>

            <div className="px-[90px]">
               
                <div className="mt-5 flex ">
                    <a href="/" className="flex justify-center text-sm text-gray-600 hover:text-gray-800 hover:underline">Home<FaChevronRight className="text-[12px] mt-[4px] ml-[2px]"/></a>
                    <a href="" className="flex justify-center ml-4 text-sm text-gray-600 hover:text-gray-800 hover:underline">Casual</a>
                </div>

                <div className="flex mt-4">
                    <div className="w-[25%] flex flex-col p-6 h-[1020px] rounded-[20px] border border-gray-200 shadow-sm">
                        
                        {/* Filters */}
                        <div className="flex justify-between">
                            <div className="text-gray-900 font-semibold">Filters</div>
                            <div className="text-gray-500 text-2xl">
                                <a href=""><HiOutlineAdjustmentsVertical /></a>
                            </div>
                        </div>

                        <div className="border-[1px] border-gray-100 mt-3"></div>
                        
                        <div className="mt-3">
                            <div className="flex justify-between">
                                <div className="text-gray-500 flex text-sm tracking-wide font-sans">T-shirt</div>
                                <IoIosArrowForward className="text-gray-500 mt-[3px]"/>
                            </div>
                            <div className="flex justify-between mt-[10px]">
                                <div className="text-gray-500 flex text-sm tracking-wide font-sans">Shorts</div>
                                <IoIosArrowForward className="text-gray-500 mt-[3px]"/>
                            </div>
                            <div className="flex justify-between mt-[10px]">
                                <div className="text-gray-500 flex text-sm tracking-wide font-sans">Shirts</div>
                                <IoIosArrowForward className="text-gray-500 mt-[3px]"/>
                            </div>
                            <div className="flex justify-between mt-[10px]">
                                <div className="text-gray-500 flex text-sm tracking-wide font-sans">Hoodies</div>
                                <IoIosArrowForward className="text-gray-500 mt-[3px]"/>
                            </div>
                            <div className="flex justify-between mt-[10px]">
                                <div className="text-gray-500 flex text-sm tracking-wide font-sans">Jeans</div>
                                <IoIosArrowForward className="text-gray-500 mt-[3px]"/>
                            </div>
                        </div>

                        <div className="border-[1px] border-gray-100 mt-4"></div>

                        {/* Price volume section */}
                        <div className="flex justify-between mt-4">
                            <div className="text-gray-900 font-semibold">Price</div>
                            <div className="text-gray-900 text-2xl">
                                <a href=""><IoIosArrowUp className="text-[18px] mt-[2px]"/></a>
                            </div>
                        </div>
                        <div className="mt-6">
                            <div className="h-[5px] rounded-[5px] bg-gray-400 relative">
                                <div className="h-[5px] left-[25%] right-[25%] absolute rounded-[5px] bg-black"></div> 
                            </div>
                            <div className="relative">
                                <input type="range" min={"0"} max={"$10000"} value={"$50"} className="absolute top-[-5px] h-[5px] w-[100%]"/>
                                <input type="range" min={"0"} max={"$10000"} value={"$50"} className="absolute top-[-5px] h-[5px] w-[]"/>
                            </div>
                        </div>

                        <div className="border-[1px] border-gray-100 mt-8"></div>

                        {/* Colors section */}
                        <div className="flex justify-between mt-4">
                            <div className="text-gray-900 font-semibold">Colors</div>
                            <div className="text-gray-900 text-2xl">
                                <a href=""><IoIosArrowUp className="text-[18px] mt-[2px]"/></a>
                            </div>
                        </div>

                        <div className="flex mt-3 ml-1">
                            <a href="" className=""><div className="w-8 h-8 bg-green-600 rounded-[50%] hover:border-black border-[1px]"></div></a>
                            <a href="" className=""><div className="w-8 h-8 bg-red-600 rounded-[50%]  ml-3 hover:border-black border-[1px]"></div></a>
                            <a href="" className=""><div className="w-8 h-8 bg-yellow-600 rounded-[50%]  ml-3 hover:border-black border-[1px]"></div></a>
                            <a href="" className=""><div className="w-8 h-8 bg-orange-600 rounded-[50%]  ml-3 hover:border-black border-[1px]"></div></a>
                            <a href="" className=""><div className="w-8 h-8 bg-blue-500 rounded-[50%]  ml-3 hover:border-black border-[1px]"></div></a>
                        </div>
                        <div className="flex mt-2 ml-1">
                            <a href="" className=""><div className="w-8 h-8 bg-blue-800 rounded-[50%] hover:border-black border-[1px] flex justify-center items-center"><FaCheck className=" text-white text-[14px] border-[0px] border-black"/></div></a>
                            <a href="" className=""><div className="w-8 h-8 bg-purple-600 rounded-[50%]  ml-3 hover:border-black border-[1px]"></div></a>
                            <a href="" className=""><div className="w-8 h-8 bg-pink-700 rounded-[50%]  ml-3 hover:border-black border-[1px]"></div></a>
                            <a href="" className=""><div className="w-8 h-8 bg-white rounded-[50%]  ml-3 hover:border-black border-[1px]"></div></a>
                            <a href="" className=""><div className="w-8 h-8 bg-black rounded-[50%]  ml-3 hover:border-black border-[1px]"></div></a>
                        </div>

                        <div className="border-[1px] border-gray-100 mt-6"></div>
                        
                        {/* Size section */}
                        <div className="flex justify-between mt-3">
                            <div className="text-gray-900 font-semibold">Size</div>
                            <div className="text-gray-900 text-2xl">
                                <a href=""><IoIosArrowUp className="text-[18px] mt-[2px]"/></a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="flex ">
                                <div className="bg-[#F0EEED] hover:bg-gray-800 border-[1px] rounded-full w-[85px] h-[36px] text-[13px] text-gray-500 hover:text-gray-100 mt-[6px] flex justify-center items-center hover:cursor-pointer">XX-Small</div>
                                <div className="bg-[#F0EEED] ml-[8px] hover:bg-gray-800 border-[1px] rounded-full w-[80px] h-[36px] text-[13px] text-gray-500 hover:text-gray-100 mt-[6px] flex justify-center items-center hover:cursor-pointer">X-Small</div>
                            </div>
                            <div className="flex">
                                <div className="bg-[#F0EEED] hover:bg-gray-800 border-[1px] rounded-full w-[65px] h-[36px] text-[13px] text-gray-500 hover:text-gray-100 mt-[6px] flex justify-center items-center hover:cursor-pointer">Small</div>
                                <div className="bg-[#F0EEED] ml-[8px] hover:bg-gray-800 border-[1px] rounded-full w-[85px] h-[36px] text-[13px] text-gray-500 hover:text-gray-100 mt-[6px] flex justify-center items-center hover:cursor-pointer">Medium</div>
                            </div>
                            <div className="flex">
                                <div className="bg-[#F0EEED] hover:bg-gray-800 border-[1px] rounded-full w-[65px] h-[36px] text-[13px] text-gray-500 hover:text-gray-100 mt-[6px] flex justify-center items-center hover:cursor-pointer">Large</div>
                                <div className="bg-[#F0EEED] ml-[8px] hover:bg-gray-800 border-[1px] rounded-full w-[85px] h-[36px] text-[13px] text-gray-500 hover:text-gray-100 mt-[6px] flex justify-center items-center hover:cursor-pointer">X-Large</div>
                            </div>
                            <div className="flex">
                                <div className="bg-[#F0EEED] hover:bg-gray-800 border-[1px] rounded-full w-[85px] h-[36px] text-[13px] text-gray-500 hover:text-gray-100 mt-[6px] flex justify-center items-center hover:cursor-pointer">XX-Large</div>
                                <div className="bg-[#F0EEED] ml-[8px] hover:bg-gray-800 border-[1px] rounded-full w-[85px] h-[36px] text-[13px] text-gray-500 hover:text-gray-100 mt-[6px] flex justify-center items-center hover:cursor-pointer">3X-Large</div>
                            </div>
                            <div className="flex">
                                <div className="bg-[#F0EEED] hover:bg-gray-800 border-[1px] rounded-full w-[85px] h-[36px] text-[13px] text-gray-500 hover:text-gray-100 mt-[6px] flex justify-center items-center hover:cursor-pointer">4X-Large</div>
                            </div>
                        </div>

                        <div className="border-[1px] border-gray-100 mt-6"></div>

                        {/* Dress Style section */}
                        <div className="flex justify-between mt-4">
                            <div className="text-gray-900 font-semibold">Dress Style</div>
                            <div className="text-gray-900 text-2xl">
                                <a href=""><IoIosArrowUp className="text-[18px] mt-[2px]"/></a>
                            </div>
                        </div>
                        <div className="mt-4 mb-">
                            <div className="flex justify-between">
                                <div className="text-gray-500 flex text-sm tracking-wide font-sans">Casual</div>
                                <IoIosArrowForward className="text-gray-500 mt-[3px]"/>
                            </div>
                            <div className="flex justify-between mt-[10px]">
                                <div className="text-gray-500 flex text-sm tracking-wide font-sans">Formal</div>
                                <IoIosArrowForward className="text-gray-500 mt-[3px]"/>
                            </div>
                            <div className="flex justify-between mt-[10px]">
                                <div className="text-gray-500 flex text-sm tracking-wide font-sans">Party</div>
                                <IoIosArrowForward className="text-gray-500 mt-[3px]"/>
                            </div>
                            <div className="flex justify-between mt-[10px]">
                                <div className="text-gray-500 flex text-sm tracking-wide font-sans">Gym</div>
                                <IoIosArrowForward className="text-gray-500 mt-[3px]"/>
                            </div>
                            
                            <Button className="rounded-full mt-4 tracking-tight w-full h-[40px] font-thin flex justify-center items-center hover:text-gray-900 hover:bg-[#F0EEED] hover:shadow-slate-800 hover:cursor-pointer">Apply Filter</Button>
                        </div>
                    </div>  


                    {/*        Right side Casual section code           */}

                    <div className="ml-5 flex flex-col">
                        <div className="flex text-2xl font-serif tracking-tight">
                            <h1 className={poppins.className}>Casual</h1>
                            <h4 className="ml-[365px] text-gray-500 text-[14px] flex  font-mono tracking-tight">Showing 1-10 of 100 Products Sort by:<span className="flex tracking-tighter text-gray-900">Most Popular<IoIosArrowDown className="ml-[5px] mt-[8px]"/></span></h4>
                            
                        </div>
                        <div className="mt-6">
                            <Products_Casual />
                        </div>

                        <div className="border-[1px] w-[97%] border-gray-100 mt-4"></div>

                        <div className="flex justify-between">
                            <Button className="mt-5 border-[1px] gap-2 bg-white w-[90px] text-black text-[12px] felx items-start hover:bg-neutral-600 hover:text-neutral-100 hover:cursor-pointer" ><MdOutlineArrowBack />Previous</Button>
                            <div>
                                <a href="/casual"><Button className="bg-white shadow-none border-none text-gray-400 text-[12px] mt-5 hover:text-gray-900 hover:bg-[#F0EEED]" >1</Button></a>
                                <a href="/productdetail"><Button className="bg-white shadow-none border-none text-gray-400 text-[12px] mt-5 hover:text-gray-900 hover:bg-[#F0EEED]" >2</Button></a>
                                <a href="/"><Button className="bg-white shadow-none border-none text-gray-400 text-[12px] mt-5 hover:text-gray-900 hover:bg-[#F0EEED]" >3</Button></a>
                                <Button className="bg-white shadow-none border-none text-gray-400 text-[12px] mt-5 hover:text-gray-900 hover:bg-[#F0EEED]" >...</Button>
                                <Button className="bg-white shadow-none border-none text-gray-400 text-[12px] mt-5 hover:text-gray-900 hover:bg-[#F0EEED]" >8</Button>
                                <Button className="bg-white shadow-none border-none text-gray-400 text-[12px] mt-5 hover:text-gray-900 hover:bg-[#F0EEED]" >9</Button>
                                <Button className="bg-white shadow-none border-none text-gray-400 text-[12px] mt-5 hover:text-gray-900 hover:bg-[#F0EEED]" >10</Button>
                            </div>
                            <Button className="mt-5 border-[1px] gap-2 bg-white w-[70px] mr-7 text-black text-[12px] felx items-start hover:bg-neutral-600 hover:text-neutral-100 hover:cursor-pointer" >Next<MdOutlineArrowForward /></Button>

                        </div>

                    </div>
                </div>
            </div>
            <div className="mt-4">
                <FooterOnly />
            </div>
        </div>
    )
}