import { RiVisaLine } from "react-icons/ri";
import Image from "next/image"
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google"
import React from "react"
import { TfiEmail } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { PiInstagramLogoLight } from "react-icons/pi";
import { FaGithub } from "react-icons/fa6";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaApplePay } from "react-icons/fa6";




const poppins = Poppins ({
    weight: '900',
    subsets: ['latin'],
    display: 'swap',
})



export default function FooterOnly() {
    return(
        <div>
            <div className="flex justify-between bg-black w-[285px] md:w-[1100px] h-auto md:h-[70px] pl-6 md:pl-4 pr-2 md:pr-0 ml-4 md:ml-28 rounded-t-[16px] md:rounded-t-3xl mt-10 md:mt-14">
                <div className="hidden md:flex md:justify-between md:item-center text-white ml-24 mt-9 text-3xl tracking-tight">
                    <h2 className={poppins.className}>STAY UPTO DATE ABOUT</h2>
                </div>
                <div className="flex items-end md:hidden lg:hidden text-white mt-9 text-[26px] tracking-wide leading-[26px]">
                    <h2 className={poppins.className}>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
                </div>
                <div className="relative hidden md:flex items-center text-gray-500 focus-within:text-gray-600 mr-24 mt-9">
                    <input type="text" 
                    placeholder="Enter your Email.."
                    className="w-[310px] pr-3 pl-10 py-1 font-semibold placeholder-gray-400 text-black rounded-full border-none ring-2 ring-gray-300 focus:ring-gray-500 bg-gray-100 focus:ring-2 touch-none"/>
                    <TfiEmail className="w-5 h-5 absolute ml-3 pointer-events-none"/>
                </div>
            </div>

            {/**/}
            <div className="bg-[#F0EEED] w-full h-auto md:h-[470px]">
                <div className="flex flex-wrap gap-y-2 md:gap-y-0 md:flex justify-between items-center bg-black w-[285px] md:w-[1100px] h-[120px] md:h-[70px] pr-4 md:pr-4 pl-4 md:pl-4 ml-4 md:ml-28 rounded-b-[16px] md:rounded-b-3xl">
                    <div className="hidden md:flex justify-between item-center text-white ml-24 mb-9 text-3xl tracking-tight">
                    <h2 className={poppins.className}>OUR LATEST OFFERS</h2>
                    </div>
                    
                    <div className="relative block mt-7 md:mt-0 md:hidden lg:hidden text-gray-500 focus-within:text-gray-600">
                        <input type="text" 
                        placeholder="Enter your Email.."
                        className="w-[250px] pr-3 relative pl-10 py-1 font-semibold placeholder-gray-400 text-black rounded-full border-none ring-2 ring-gray-300 focus:ring-gray-500 bg-gray-100 focus:ring-2 touch-none"/>
                        <TfiEmail className="absolute w-4 h-4 top-2 ml-3 pointer-events-none"/>
                    </div>
                    <Button className="w-[250px] md:w-[310px] rounded-full text-black font-sans text-[14px] bg-gray-100 hover:text-white pl-20 pr-20 mr-20 mb-5">Subscribe to Newsletter</Button>

                </div>
                <div className="flex flex-wrap md:flex justify-evenly items-center mt-4 md:mt-6 mr-5 md:mr-0">
                    <div className="flex flex-col">
                        <div>
                            <a href="/"><h1 className="text-2xl md:text-4xl font-black tracking-tighter"> SHOP.CO </h1></a>
                            <p className="text-[12px] md:text-[15px] text-gray-500 md:text-gray-900 w-64 mt-[6px] md:mt-3 leading-snug">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                            
                            <div className="pt-3 md:pt-6 flex items-center">
                                <a href=""><FaTwitter className="border rounded-[50%] bg-white p-2 text-[28px] md:text-[32px]"/></a>
                                <a href=""><IoLogoFacebook className="text-[26px] md:text-3xl ml-[8px] md:ml-[16px]"/></a>
                                <a href=""><PiInstagramLogoLight className="border rounded-[50%] bg-white p-[5px] text-[28px] md:text-[32px] ml-[8px] md:ml-[16px]"/></a>
                                <a href=""><FaGithub className="border rounded-[50%] bg-white p-[5px] text-[28px] md:text-[32px] ml-[8px] md:ml-[16px]"/></a>
                            </div>
                        </div>
                    </div>    
                

                    <div className="mr-2 md:mr-0">
                    <h3 className="text-black  mt-4 font-normal font-sans tracking-widest">COMPANY</h3>
                    <ul className="list-none text-gray-500 md:text-gray-600 gap-y-72 text-[13px] md:text-sm mt-3">
                        <a href=""><li className="pb-2 md:pb-3 hover:underline">About</li></a>
                        <a href=""><li className="pb-2 md:pb-3 hover:underline">Features</li></a>
                        <a href=""><li className="pb-2 md:pb-3 hover:underline">Works</li></a>
                        <a href=""><li className="pb-2 md:pb-3 hover:underline">Career</li></a>
                    </ul>
                    </div>

                    <div className="ml-10 md:ml-0">
                    <h3 className="text-black mt-4 font-normal font-sans tracking-widest">HELP</h3>
                    <ul className="list-none text-gray-500 md:text-gray-600 gap-y-72 text-[13px] md:text-sm mt-3">
                        <a href=""><li className="pb-2 md:pb-3 hover:underline">Customer Support</li></a>
                        <a href=""><li className="pb-2 md:pb-3 hover:underline">Delivery Details</li></a>
                        <a href=""><li className="pb-2 md:pb-3 hover:underline">Terms & Condition</li></a>
                        <a href=""><li className="pb-2 md:pb-3 hover:underline">Privacy Policy</li></a>
                    </ul>
                    </div>

                    <div className="ml-[10px] md:ml-0">
                    <h3 className="text-black mt-4 font-normal font-sans tracking-widest">FAQ</h3>
                    <ul className="list-none text-gray-500 md:text-gray-600 gap-y-72 text-[13px] md:text-sm mt-3">
                        <a href=""><li className="pb-2 md:pb-3 hover:underline">Account</li></a>
                        <a href=""><li className="pb-2 md:pb-3 hover:underline">Manage Deliveries</li></a>
                        <a href=""><li className="pb-2 md:pb-3 hover:underline">Orders</li></a>
                        <a href=""><li className="pb-2 md:pb-3 hover:underline">Payments</li></a>
                    </ul>
                    </div>

                    <div className="ml-10 md:ml-0">
                    <h3 className="text-black mt-4 font-normal font-sans tracking-widest">RESOURCES</h3>
                    <ul className="list-none text-gray-500 md:text-gray-600 gap-y-72 text-[13px] md:text-sm mt-3">
                        <a href=""><li className="pb-2 md:pb-3 hover:underline">Free eBooks</li></a>
                        <a href=""><li className="pb-2 md:pb-3 hover:underline">Development Tutoriel</li></a>
                        <a href=""><li className="pb-2 md:pb-3 hover:underline">How to - Blog</li></a>
                        <a href=""><li className="pb-2 md:pb-3 hover:underline">Youtube Playlist</li></a>
                    </ul>
                    </div>
                </div>
                
                <div className="border-[1px] ml-4 md:ml-[95px] border-gray-300 mt-6 md:mt-12 w-[90%] md:w-[85%]"></div>
                
                <div className="ml-10 md:ml-[100px] flex flex-wrap md:flex md:justify-between pb-20 md:pb-0 mt-3 md:mt-6">
                    <div className="text-gray-500 text-[12px] md:text-sm flex justify-center items-center md:flex md:justify-start"><span>Shop.co</span><AiOutlineCopyrightCircle className="mx-[3px] mt-[2px] text-[16px]"/><span>2000.2023.All Rights Reserved</span></div>
                    <div className="mr-[100px] ml-3 md:ml-0 flex justify-center mt-3 md:mt-0 items-center">
                        <a href=""><RiVisaLine className="text-2xl md:text-3xl bg-white text-blue-900 w-[35px] md:w-[40px]"/></a>
                        <div className="border-none flex justify-center items-center bg-white ml-2 md:ml-4 p-1 md:p-0 h-[24px] md:h-[28px] w-[35px] md:w-[42px]">
                            <a href=""><Image src={"/money.png"} alt="image" width={100} height={100} /></a>                           
                        </div>
                        <div className="border-none flex justify-center items-center bg-white ml-2 md:ml-4 p-1 md:p-[2px] h-[24px] md:h-[28px] w-[35px] md:w-[42px]">
                            <a href=""><Image src={"/paypal.png"} alt="image" width={100} height={100} /></a>                            
                        </div>
                        <a href=""><FaApplePay className="text-2xl md:text-3xl bg-white ml-2 md:ml-4 p-[2px] w-[35px] md:w-[40px]"/></a>
                        <div className="border-none flex justify-center items-center bg-white ml-2 md:ml-4 p-[11px] md:p-[12px] h-[24px] md:h-[28px] w-[35px] md:w-[42px]">
                            <a href=""><Image src={"/search.png"} alt="image" width={20} height={20} /></a>                          
                        </div>
                    </div>
                </div>               
            </div>
        </div>
    );
}