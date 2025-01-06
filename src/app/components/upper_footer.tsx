import { Poppins } from "next/font/google"
import React from "react"
import { FaStar } from "react-icons/fa6"
import { FaCheckCircle } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { Button } from "@/components/ui/button";
import { FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { PiInstagramLogoLight } from "react-icons/pi";
import { FaGithub } from "react-icons/fa6";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { RiVisaLine } from "react-icons/ri";
import Image from "next/image"


const poppins = Poppins ({
    weight: '900',
    subsets: ['latin'],
    display: 'swap',
})


export default function Upperfooter() {
    return (
        <div className="flex flex-col">
            <div className="text-[22px] md:text-[40px] pt-8 mb-4 md:mb-6 -tracking-normal leading-6 md:leading-none px-8 md:px-0 ml-0 md:ml-28 font-black">
                <h1 className={poppins.className}>OUR HAPPY CUSTOMERS</h1>
            </div>
            <div className="ml-5 md:ml-10 flex justify-evenly items-center">
                <div className="hidden md:block w-[350px] h-auto mb-6 border-solid p-4 border-gray-200 border-[1px] rounded-xl">
                    <div className="ml-2 flex mb-2">
                        <FaStar className="text-yellow-400"/>
                        <FaStar className="text-yellow-400 ml-2"/>
                        <FaStar className="text-yellow-400 ml-2"/>
                        <FaStar className="text-yellow-400 ml-2"/>
                        <FaStar className="text-yellow-400 ml-2"/>
                    </div>
                    <h4 className="font-sans font-semibold ml-2 flex items-center gap-2">Sarah M.<FaCheckCircle className="text-green-600 text-xl"/></h4>
                    <p className="text-sm text-gray-500 ml-2 mt-2 tracking-tight">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.</p>
                </div>
                <div className="hidden md:block w-[350px] h-auto mb-6 border-solid p-4 border-gray-200 border-[1px] rounded-xl">
                    <div className="ml-2 flex mb-2">
                        <FaStar className="text-yellow-400"/>
                        <FaStar className="text-yellow-400 ml-2"/>
                        <FaStar className="text-yellow-400 ml-2"/>
                        <FaStar className="text-yellow-400 ml-2"/>
                        <FaStar className="text-yellow-400 ml-2"/>
                    </div>
                    <h4 className="font-sans font-semibold ml-2 flex items-center gap-2">Sarah M.<FaCheckCircle className="text-green-600 text-xl"/></h4>
                    <p className="text-sm text-gray-500 ml-2 mt-2 tracking-tight">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.</p>
                </div>
                <div className="w-auto md:w-[350px] h-auto mb-6 border-solid p-4 border-gray-200 border-[1px] rounded-xl">
                    <div className="ml-2 flex mb-2">
                        <FaStar className="text-yellow-400"/>
                        <FaStar className="text-yellow-400 ml-2"/>
                        <FaStar className="text-yellow-400 ml-2"/>
                        <FaStar className="text-yellow-400 ml-2"/>
                        <FaStar className="text-yellow-400 ml-2"/>
                    </div>
                    <h4 className="font-sans text-sm md:text-[16px] font-semibold ml-2 flex items-center gap-2">Sarah M.<FaCheckCircle className="text-green-600 text-xl"/></h4>
                    <p className="text-sm text-gray-500 ml-2 mt-2 tracking-tight mb-2">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.</p>
                </div>
            </div>

            <div className="hidden justify-between bg-black w-[1100px] h-[70px] ml-28 rounded-t-3xl mt-14">
                <div className="flex justify-between item-center text-white ml-24 mt-9 text-3xl tracking-tighter">
                    <h2 className={poppins.className}>STAY UPTO DATE ABOUT</h2>
                </div>
                <div className="relative flex items-center text-gray-500 focus-within:text-gray-600 mr-24 mt-9">
                        <input type="text" 
                        placeholder="Enter your Email.."
                        className="w-[310px] pr-3 pl-10 py-1 font-semibold placeholder-gray-400 text-black rounded-full border-none ring-2 ring-gray-300 focus:ring-gray-500 bg-gray-100 focus:ring-2 touch-none"/>
                        <TfiEmail className="w-5 h-5 absolute ml-3 pointer-events-none"/>
                    </div>
            </div>

            {/**/}
            <div className="hidden bg-[#F0EEED] w-full h-[470px]">
                <div className="flex justify-between items-center bg-black w-[1100px] h-[70px] ml-28 rounded-b-3xl">
                    <div className="flex justify-between item-center text-white ml-24 mb-9 text-3xl tracking-tighter">
                    <h2 className={poppins.className}>OUR LATEST OFFERS</h2>
                    </div>

                    <Button className="rounded-full text-black bg-gray-100 hover:text-white pl-20 pr-20 mr-24 mb-5">Subscribe to Newsletter</Button>
                </div>
                <div className="flex mt-6 justify-evenly items-center">
                    <div className="flex flex-col">
                        <div>
                            <a href="/"><h1 className="text-1xl sm:text-4xl font-black text-black tracking-tighter"> SHOP.CO </h1></a>
                            <p className="text-[15px] text-gray-900 w-64 mt-3 leading-snug">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                            
                            <div className="pt-6 flex items-center">
                                <a href=""><FaTwitter className="border rounded-[50%] bg-white p-2 text-[32px]"/></a>
                                <a href=""><IoLogoFacebook className="text-3xl ml-[16px]"/></a>
                                <a href=""><PiInstagramLogoLight className="text-3xl ml-[16px]"/></a>
                                <a href=""><FaGithub className="text-3xl ml-[16px]"/></a>
                            </div>
                        </div>
                    </div>    
                

                    <div>
                    <h3 className="text-black mt-4 font-sans tracking-widest">COMPANY</h3>
                    <ul className="list-none text-gray-600 gap-y-72 text-sm mt-3">
                        <a href=""><li className="pb-3 hover:underline">About</li></a>
                        <a href=""><li className="pb-3 hover:underline">Features</li></a>
                        <a href=""><li className="pb-3 hover:underline">Works</li></a>
                        <a href=""><li className="pb-3 hover:underline">Career</li></a>
                    </ul>
                    </div>

                    <div>
                    <h3 className="text-black mt-4 font-sans tracking-widest">HELP</h3>
                    <ul className="list-none text-gray-600 gap-y-72 text-sm mt-3">
                        <a href=""><li className="pb-3 hover:underline">Customer Support</li></a>
                        <a href=""><li className="pb-3 hover:underline">Delivery Details</li></a>
                        <a href=""><li className="pb-3 hover:underline">Terms & Condition</li></a>
                        <a href=""><li className="pb-3 hover:underline">Privacy Policy</li></a>
                    </ul>
                    </div>

                    <div>
                    <h3 className="text-black mt-4 font-sans tracking-widest">FAQ</h3>
                    <ul className="list-none text-gray-600 gap-y-72 text-sm mt-3">
                        <a href=""><li className="pb-3 hover:underline">Account</li></a>
                        <a href=""><li className="pb-3 hover:underline">Manage Deliveries</li></a>
                        <a href=""><li className="pb-3 hover:underline">Orders</li></a>
                        <a href=""><li className="pb-3 hover:underline">Payments</li></a>
                    </ul>
                    </div>

                    <div>
                    <h3 className="text-black mt-4 font-sans tracking-widest">RESOURCES</h3>
                    <ul className="list-none text-gray-600 gap-y-72 text-sm mt-3">
                        <a href=""><li className="pb-3 hover:underline">Free eBooks</li></a>
                        <a href=""><li className="pb-3 hover:underline">Development Tutoriel</li></a>
                        <a href=""><li className="pb-3 hover:underline">How to - Blog</li></a>
                        <a href=""><li className="pb-3 hover:underline">Youtube Playlist</li></a>
                    </ul>
                    </div>
                </div>
                
                <div className="border-[1px] ml-[95px] border-gray-300 mt-12 w-[85%]"></div>
                
                <div className="ml-[100px] flex justify-between mt-10">
                    <div className="text-gray-500 text-sm flex justify-start"><span>Shop.co</span><AiOutlineCopyrightCircle className="mx-[3px] mt-[2px] text-[16px]"/><span>2000.2023.All Rights Reserved</span></div>
                    <div className="mr-[100px] flex justify-center items-center">
                        <a href=""><RiVisaLine className="text-3xl bg-white text-blue-900 w-[40px]"/></a>
                        <div className="border-none flex justify-center items-center bg-white ml-4 h-[28px] w-[42px]">
                            <a href=""><Image src={"/money.png"} alt="image" width={100} height={100} /></a>                           
                        </div>
                        <div className="border-none flex justify-center items-center bg-white ml-4 h-[28px] w-[42px]">
                            <a href=""><Image src={"/paypal.png"} alt="image" width={100} height={100} /></a>                            
                        </div>
                        <div className="border-none flex justify-center items-center bg-white ml-4 h-[28px] w-[42px]">
                            <a href=""><Image src={"/search.png"} alt="image" width={20} height={20} /></a>                          
                        </div>

                    </div>
                </div>
                
            </div>
        </div>
    )
}