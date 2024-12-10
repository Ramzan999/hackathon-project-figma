import React from "react"
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";


export default function Navbar() {
    return (
        <header className="bg-white shadow-sm border-b mx-auto flex flex-col">
            <div className="bg-black text-white py-2 text-ms flex justify-evenly items-center px-8 w-full">
                <div className="text-center flex-1">
                Sign up and get 20% off to your first order.
                <a href="" className="underline hover-text-slate-300">Sign Up Now</a>
                </div>

                <div className="flex items-center gap-[2px]">
                    <div className="text-white text-5m font-normal leading-[21px]">
                    <RxCross1 />
                    </div>
                </div>
            </div>

            {/* Main Navigation */}

            <div className="flex justify-between items-center px-8 m-6">
                <h1 className="text-4xl font-black text-black tracking-tighter"> SHOP.CO </h1>
                
                <nav className='hidden md:flex space-x-8 items-center'>
                    <a href="" className='flex justify-evenly items-center text-slate-600 hover:text-black'>Shop <IoIosArrowDown /></a>
                    <a href="" className='text-slate-600    hover:text-black'>On Sale</a>
                    <a href="" className='text-slate-600    hover:text-black'>New Arrivals</a>
                    <a href="" className='text-slate-600    hover:text-black'>Brands</a>     
                </nav>        

                {/* Search Icons and input */}

                <div className="flex items-center space-x-6">
                    <div className="relative flex items-center text-gray-500 focus-within:text-gray-600">
                        <input type="text" 
                        placeholder="Search for Products.."
                        className="w-[500px] pr-3 pl-10 py-1 font-semibold placeholder-gray-500 text-black rounded-full border-none ring-2 ring-gray-300 focus:ring-gray-500 bg-gray-100 focus:ring-2 "/>
                        <CiSearch className="w-5 h-5 absolute ml-3 pointer-events-none"/>
                    </div>
                    <LuShoppingCart className="text-xl"/>
                    <CgProfile className="text-xl"/>
                </div>     
            </div>

        </header>
    )
}