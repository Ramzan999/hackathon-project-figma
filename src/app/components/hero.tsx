import React from "react";
import { Anton , Poppins , Suez_One } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import { Cormorant_Garamond } from "next/font/google"
import { Button } from "@/components/ui/button"
import { Rubik } from "next/font/google"


const rubik = Rubik ({
    weight: '500',
    subsets: ['latin'],
    display: 'swap',
})

const suez_one = Suez_One ({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

const cormorant = Cormorant_Garamond ({
    weight: '300',
    subsets: ['latin'],
    display: 'swap',
})

const playfair_display = Playfair_Display ({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

const anton = Anton ({
    weight:  '400' ,
    subsets: ['latin'],
    display: 'swap',
});

const poppins = Poppins ({
    weight: '200', 
    subsets: ['latin'],
    display: 'swap',
})
export default function Hero() {
    return (
        <div>
            <section className="bg-[rgb(242,240,241)] flex flex-col md:flex-row sm:h-10 sm:w-10 lg:w-full md:h-[580px] lg:h-[580px]">
                <div className="sm:flex-col justify-center md:flex mt-8 md:mt-0 md:mb-56  leading-snug mr-5 md:mr-2 ml-5 md:ml-16 lg:ml-16">
                    <h1 className="text-3xl leading-7 md:text-5xl lg:text-5xl font-black tracking-tighter">
                        FIND CLOTHES <br />
                        <span className="">
                            THAT MATCHES
                            <br />
                            YOUR STYLE
                        </span>
                    </h1>
                    <p className="text-[10px] md:text-sm mr-5 md:mr-0 text-gray-500 tracking-normal mt-2 sm:mt-4 max-w-lg leading-snug">
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                    </p>
                    <Button className="rounded-full text-slate-300 w-full md:w-[200px] lg:w-[200px] mt-4">Shop Now</Button>
                    
                    <div className="flex justify-around">
                        <div className="sm:block md:hidden lg:hidden leading-[8px] ml-5">
                            <div className="text-black text-2xl tracking-tight font-semibold mt-4 "><h2 className={rubik.className}>200+</h2></div>
                            <span className="text-[12px] text-gray-400 tracking-tighter">International Brand</span>
                        </div>

                        <div className="sm:block md:hidden lg:hidden leading-[8px] ml-3">
                            <div className="text-black text-2xl tracking-tight font-semibold mt-4 "><h2 className={rubik.className}>2,000+</h2></div>
                            <span className="text-[12px] text-gray-400 tracking-tighter">High Qualty Products</span>
                        </div>
                    </div>
                    <div className="sm:block md:hidden lg:hidden leading-[8px]">
                        <div className="text-black text-2xl tracking-tight font-sans mt-4 flex justify-center items-center"><h2 className={rubik.className}>30,000+</h2></div>
                        <span className="text-[12px] text-gray-400 tracking-tighter flex justify-center items-center">Happy Customers</span>
                    </div>
                </div>
                
                <div className="relative ">
                    <img src="/main.png" alt="hero" className="w-[586px] md:ml-32"/>
                    <img src="/star1.png" alt="hero" className="absolute w-[30px] md:w-[35px] bottom-44 md:bottom-64 left-6 md:left-36"/>
                    <img src="/star2.png" alt="hero" className="absolute text-black w-[50px] md:w-[70px] top-4 md:top-24 right-6 md:right-10"/>

                </div>
            </section>

            <div className="bg-black h-28 md:h-24 w-[full] text-white md:flex justify-center items-center text-2xl md:text-4xl tracking-tighter">
                <div className="container flex flex-wrap gap-x-4 gap-y-2 pt-5 md:pt-0 md:mt-0 md:flex md:justify-between pl-6 md:pl-28 pr-2 md:pr-28 items-center">
                    <div className={suez_one.className}>VERSACE</div>
                    <div className={playfair_display.className}>ZARA</div>
                    <div className={cormorant.className}>GUCCI</div>
                    <div className="ml-10 md:ml-0"><div className={anton.className}>PARDA</div></div>
                    <div className={poppins.className} >Calvin Klein</div>
                </div>
            </div>
        </div>
    );
}

