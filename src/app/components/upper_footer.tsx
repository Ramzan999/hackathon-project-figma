import { Poppins } from "next/font/google"
import React from "react"
import { FaStar } from "react-icons/fa6"
import { FaCheckCircle } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { Button } from "@/components/ui/button";


const poppins = Poppins ({
    weight: '900',
    subsets: ['latin'],
    display: 'swap',
})


export default function Upperfooter() {
    return (
        <div className="flex flex-col">
            <div className="text-[40px] pt-8 mb-4 tracking-tighter ml-32 font-black">
                <h1 className={poppins.className}>OUR HAPPY CUSTOMERS</h1>
            </div>
            <div className="ml-10 flex justify-evenly items-center">
                <div className="w-80 h-40 mb-6 border-solid border-gray-200 border-[1px] rounded-xl">
                    <div className="ml-2 flex pt-2">
                        <FaStar className="text-yellow-400"/>
                        <FaStar className="text-yellow-400"/>
                        <FaStar className="text-yellow-400"/>
                        <FaStar className="text-yellow-400"/>
                        <FaStar className="text-yellow-400"/>
                    </div>
                    <h4 className="font-sans font-semibold ml-2 flex items-center gap-2">Sarah M.<FaCheckCircle className="text-green-600 text-xl"/></h4>
                    <p className="text-sm text-gray-500 ml-2 mt-2 tracking-tight">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.</p>
                </div>
                <div className="w-80 h-40 mb-6 border-solid border-gray-200 border-[1px] rounded-xl">
                    <div className="ml-2 flex pt-2">
                        <FaStar className="text-yellow-400"/>
                        <FaStar className="text-yellow-400"/>
                        <FaStar className="text-yellow-400"/>
                        <FaStar className="text-yellow-400"/>
                        <FaStar className="text-yellow-400"/>
                    </div>
                    <h4 className="font-sans font-semibold ml-2 flex items-center gap-2">Sarah M.<FaCheckCircle className="text-green-600 text-xl"/></h4>
                    <p className="text-sm text-gray-500 ml-2 mt-2 tracking-tight">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.</p>
                </div>
                <div className="w-80 h-40 mb-6 border-solid border-gray-200 border-[1px] rounded-xl">
                    <div className="ml-2 flex pt-2">
                        <FaStar className="text-yellow-400"/>
                        <FaStar className="text-yellow-400"/>
                        <FaStar className="text-yellow-400"/>
                        <FaStar className="text-yellow-400"/>
                        <FaStar className="text-yellow-400"/>
                    </div>
                    <h4 className="font-sans font-semibold ml-2 flex items-center gap-2">Sarah M.<FaCheckCircle className="text-green-600 text-xl"/></h4>
                    <p className="text-sm text-gray-500 ml-2 mt-2 tracking-tight">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.</p>
                </div>
            </div>

            <div className="flex justify-between bg-black w-[1100px] h-[70px] ml-28 rounded-t-3xl mt-20">
                <div className="flex justify-between item-center text-white ml-24 mt-9 text-3xl tracking-tighter">
                    <h2 className={poppins.className}>STAY UPTO DATE ABOUT</h2>
                </div>
                <div className="relative flex items-center text-gray-500 focus-within:text-gray-600 mr-24 mt-9">
                        <input type="text" 
                        placeholder="Enter your Email.."
                        className="w-[310px] pr-3 pl-10 py-1 font-semibold placeholder-gray-400 text-black rounded-full border-none ring-2 ring-gray-300 focus:ring-gray-500 bg-gray-100 focus:ring-2 "/>
                        <TfiEmail className="w-5 h-5 absolute ml-3 pointer-events-none"/>
                    </div>
            </div>
            


            <div className="bg-[#F0EEED] w-full h-[499px]">
                <div className="flex justify-between items-center bg-black w-[1100px] h-[70px] ml-28 rounded-b-3xl">
                    <div className="flex justify-between item-center text-white ml-24 mb-9 text-3xl tracking-tighter">
                    <h2 className={poppins.className}>OUR LATEST OFFERS</h2>
                    </div>

                    <Button className="rounded-full text-black bg-gray-100 hover:text-white pl-20 pr-20 mr-24 mb-5">Subscribe to Newsletter</Button>

                </div>
            </div>
        </div>
    )
}