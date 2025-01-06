import React from "react"
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { Archivo_Black } from "next/font/google";
import { HiMenu } from "react-icons/hi";


const archivo = Archivo_Black ({
    weight: '400', 
    subsets: ['latin'],
    display: 'swap',
})

const poppins = Poppins ({
    weight: '900', 
    subsets: ['latin'],
    display: 'swap',
})

export default function Navbar() {
    return (
        <header className="bg-white sm:flex-col md:flex-row mx-auto">
            <div className="bg-black text-white py-1 md:py-2 text-[10px] md:text-sm flex justify-center items-center sm:px-0 md:px-8 sm:w-auto">
                <div className="text-center flex-1">
                Sign up and get 20% off to your first order.
                <a href="" className="underline hover-text-slate-300">Sign Up Now</a>
                </div>
                <RxCross1  className="text-white hidden md:block  md:text-sm md:mr-5 lg:mr-7 sm:hidden"/>
            </div>

            {/* Main Navigation */}

            <div className="flex justify-between w-auto md:flex md:justify-between items-center py-0 md:py-3 px-0 md:px-8 m-3 md:m-4">
                <HiMenu className="sm:text-sm sm:font-bold sm:hidden md:hidden lg:hidden"/>
                <Link href={"/"}><div className="text-xl md:text-4xl lg:text-4xl pr-10 md:pr-0 lg:pr-0 font-black text-black tracking-tighter"><h1 className={archivo.className}> SHOP.CO </h1></div></Link>
                
                <nav className='hidden md:flex space-x-8 items-center'>
                    <Link href="/productdetail" className='flex justify-evenly items-center text-slate-600 hover:text-black'>Shop <IoIosArrowDown /></ Link>
                    <a href="" className='text-slate-600 hover:text-black'>On Sale</a>
                    <Link href={"/casual"} className='text-slate-600 hover:text-black'>New Arrivals</Link>
                    <a href="" className='text-slate-600 hover:text-black'>Brands</a>     
                </nav>        

                {/* Search Icons and input */}

                <div className="flex items-center space-x-6">
                    <div className="relative  hidden md:flex items-center text-gray-500 focus-within:text-gray-600">
                        <input type="text" 
                        placeholder="Search for Products.."
                        className="hidden md:flex w-[500px] pr-3 pl-10 py-1 font-semibold placeholder-gray-500 text-black rounded-full border-none ring-2 ring-gray-300 focus:ring-gray-500 bg-gray-100 focus:ring-2 "/>
                        <CiSearch className="w-5 h-5 absolute ml-3 pointer-events-none"/>
                    </div>
                    <Link href={"/cart"}><LuShoppingCart className="text-xl hidden md:flex lg:flex"/></Link>
                    <CgProfile className="text-xl hidden md:flex lg:flex"/>

                    <div className="flex justify-center items-center gap-3 md:hidden lg:hidden ">
                        <CiSearch className="text-xl font-black pointer-events-none"/>
                        <LuShoppingCart className="text-xl"/>
                        <CgProfile className="text-xl mr-4"/>
                    </div>
                    
                    
                </div>     
            </div>

        </header>
    )
}