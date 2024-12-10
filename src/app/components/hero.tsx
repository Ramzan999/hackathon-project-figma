import React from "react";
import { Anton , Poppins , Suez_One } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import { Cormorant_Garamond } from "next/font/google"
import { Button } from "@/components/ui/button"
 
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
            <section className="bg-bannerImg bg-repeat bg-cover bg-bottom w-full h-screen p-14">
                <div className="container flex items-center">
                    <div>
                        <h1 className="text-7xl tracking-tighter ml-12 font-black">
                            FIND CLOTHES <br />
                            <span className="">
                                THAT MATCHES
                                <br />
                                YOUR STYLE
                            </span>
                        </h1>
                        <p className="text-sm text-gray-500 mt-4 ml-12 tracking-tighter max-w-lg leading-snug">
                            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                        </p>
                        <Button className="rounded-full text-slate-300  pl-12 pr-12 ml-12 mt-6">Shop Now</Button>
                    </div>
                </div>
            </section>
            <div className="bg-black h-24 w-[full] text-white flex justify-center items-center text-4xl tracking-tighter">
                <div className="container flex justify-between pl-28 pr-28 items-center">
                    <div className={suez_one.className}>VERSACE</div>
                    <div className={playfair_display.className}>ZARA</div>
                    <div className={cormorant.className}>GUCCI</div>
                    <div className={anton.className}>PARDA</div>
                    <div className={poppins.className} >Calvin Klein</div>
                </div>
            </div>
        </div>
    );
}

