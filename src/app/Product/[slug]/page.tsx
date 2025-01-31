import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import Image from "next/image";
import { Product } from "../../../../type";
import FooterOnly from "@/app/components/footer";
import Products3 from "@/app/components/productDetail";
import { Button } from "@/components/ui/button";
import { TbDots } from "react-icons/tb";
import { LiaStarHalfSolid } from "react-icons/lia";
import { IoStar } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
import Navbar from "@/app/components/navbar";
import { FaCheck, FaChevronRight } from "react-icons/fa6";
import { Poppins } from "next/font/google";


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

const colorMap: { [key: string]: string }  = {
    red: "#4F4631",
    blue: "#314F4A",
    green: "#31344F",
    yellow: "#f5e44e",
    black: "#000000",
    white: "#5123cf",
    // Add other common colors
  };

interface ProductPageProps {
  params : {slug : string}
}

async function getProduct(slug :string):Promise<Product> {
  return client.fetch(
    groq`*[_type == "products" && slug.current == $slug][0]{
    name,
    price,
    description,
    "imageUrl":image.asset->url,
    category,
    discountPercent,
    isNew,
    colors,
    sizes, 
    slug
    }`, {slug}
  )
}

export default async function ProductPage({params}: ProductPageProps) {
  const {slug} = await params;
  const product = await getProduct(slug)

  return (
    <div>
            <Navbar />
            <div className="border-[1px] w-[full] mx-[45px] border-gray-100"></div>

            <div className="px-[90px]">
                
                <div className="mt-5 flex ">
                    <a href="/" className="flex justify-center text-sm text-gray-600 hover:text-gray-800 hover:underline">Home<FaChevronRight className="text-[12px] mt-[4px] ml-[2px]"/></a>
                    <a href="" className="flex justify-center ml-4 text-sm text-gray-600 hover:text-gray-800 hover:underline">Shop<FaChevronRight className="text-[12px] mt-[4px] ml-[2px]"/></a>
                    <a href="" className="flex justify-center ml-4 text-sm text-gray-600 hover:text-gray-800 hover:underline">{product.category}<FaChevronRight className="text-[12px] mt-[4px] ml-[2px]"/></a>
                </div>
                
                <div className="flex justify-between">
                    
                    <div className="flex w-[50%]">
                        <div className="flex flex-col gap-x-3 mt-8">
                            <Image src={product.imageUrl} alt={product.name} width={120} height={120} className="rounded-[10px]"/>
                            <Image src={product.imageUrl} alt={product.name} width={120} height={120} className="mt-2 rounded-[10px]" />
                            <Image src={product.imageUrl} alt={product.name} width={120} height={120} className="mt-2 rounded-[10px]"/>
                        </div>
                        <div className="mt-8 ml-3">
                        <Image src={product.imageUrl} alt={product.name} width={370} height={370} className="rounded-[10px]"/>
                        </div>
                    </div>

                    <div className="flex flex-col w-[50%]">
                        <div className="flex justify-left ml-10 font-semibold mt-14 -tracking-tight leading-snug items-center text-3xl ">
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
                                <h2 className="text-2xl text-gray-400 font-semibold ml-3 line-through"></h2>
                                <h4 className="bg-red-100 ml-3 border-none rounded-full mt-1 w-14 h-6 flex justify-center items-center text-red-700 text-[12px]">%{product.discountPercent}</h4>
                            </div>
                            
                            <div className="text-[14px] leading-snug mt-3 text-gray-400 ml-7">
                                <p className={poppins2.className}>{product.description}</p>
                            </div>
                            <div className="border-[1px] mt-5 ml-7 border-gray-100"></div>

                            <div className="">
                                <div className="text-[14px] tracking-tighter font-semibold leading-snug mt-3 text-gray-500 ml-7">
                                    <h2 className={poppins2.className}>Select Colors</h2>
                                </div>
                                <div className="flex ml-5">
                                    {/* Check if colors exist, and fallback to an empty array if not */}
                                    {(product.colors && Array.isArray(product.colors) ? product.colors : []).map((color, index) => {
                                    const colorCode = (typeof color === "string" ? colorMap[color.toLowerCase()] : "#F0F0F0") || "#F0F0F0";
                                    return (
                                        <div
                                        key={index}
                                        className="w-8 h-8 rounded-full mt-2 ml-2 hover:border-black border-[1px] flex justify-center items-center"
                                        style={{ backgroundColor: colorCode }} // Dynamically set background color
                                        >
                                        <FaCheck
                                            className={`text-white text-[14px] ${index === 0 ? "visible" : "hidden"}`}
                                        />
                                        </div>
                                    );
                                    })}
                                </div>
                            </div>
                            <div className="border-[1px] mt-5 ml-7 border-gray-100"></div>

                            <div>
                                <div className="text-[14px] tracking-tighter font-semibold leading-snug mt-3 text-gray-500 ml-7">
                                    <h2 className={poppins2.className}>Choose Size</h2>
                                </div>
                                <div className="mt-3 ml-4 flex">
                                    {product.sizes && product.sizes.length > 0 ? (
                                    product.sizes.map((size, index) => (
                                        <a key={index} href="">
                                        <div
                                            className={`flex justify-center items-center ml-3 bg-[#F0F0F0] text-[14px] text-gray-600 w-[70px] h-10 rounded-full 
                                            hover:bg-gray-600 hover:text-gray-200 
                                            ${index === 0 ? "bg-gray-400" : ""}`} // Optional: highlight first size by default
                                        >
                                            {size}
                                        </div>
                                        </a>
                                    ))
                                    ) : (
                                    <div>No sizes available</div> // Show a message if no sizes are available
                                    )}
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

            <div className="flex mt-16">
                <div className=" text-gray-500 hover:text-gray-900 border-gray-100 pb-2 hover:border-gray-900 border-b-[1px] ml-24 w-[35%]">
                    <Link href={"/"}><div className=" text-[16px] ml-32 font-mono tracking-tighter ">Product Detail</div></Link>
                </div>
                <div className=" text-gray-500 hover:text-gray-900 border-gray-100 pb-2 hover:border-gray-900 border-b-[1px] ml- w-[35%]">
                    <Link href={"/"}><div className=" text-[16px] ml-32 font-mono tracking-tighter ">Rating & Reviews</div></Link>
                </div>
                <div className=" text-gray-500 hover:text-gray-900 border-gray-100 pb-2 hover:border-gray-900 border-b-[1px] mr-20 w-[35%]">
                    <Link href={"/"}><div className=" text-[16px] ml-40 font-mono tracking-tighter ">FAQs</div></Link>
                </div>
            </div>

            <div className="flex justify-between px-[90px] mt-7 mb-10">
                <div className="flex font-bold tracking-[-1px] text-xl">All Reviews<h4 className="text-[13px] font-extralight font-mono ml-2 mt-[1px] text-gray-500">(451)</h4></div>
                <div className="flex">
                    <div className="flex justify-center items-center bg-[#F0EEED] rounded-[50%] w-[40px] h-[40px]">
                        <a href=""><Image src={"/filter.png"} alt="filter" width={20} height={20}/></a>
                    </div>
                    <a href=""><div className="flex justify-between items-center bg-[#F0F0F0] font-medium text-[14px] text-gray-800 w-[120px] h-10 ml-2 px-5 rounded-full ">Latest <select name="select" id="reviews" className="bg-[#F0F0F0] text-gray-800"></select></div></a>
                    <a href=""><div className="flex justify-center items-center bg-[#F0F0F0] font-medium text-[14px] text-gray-800 w-[150px] h-10 ml-2 rounded-full hover:bg-gray-800 hover:text-gray-200">Write a Review</div></a>
                </div>
            </div>

            <div className="px-[90px]">
                <div className="grid-cols-2 columns-2 gap-x-10 ">
                    <div className="w-[550px]  h-[215px] mb-6 p-4 border-solid border-gray-200 border-[1px] rounded-xl">
                        <div className="ml-2 flex pt-2">
                            <IoStar className="text-yellow-400"/>
                            <IoStar className="text-yellow-400 ml-1"/>
                            <IoStar className="text-yellow-400 ml-1"/>
                            <IoStar className="text-yellow-400 ml-1"/>
                            <LiaStarHalfSolid className="text-yellow-400 ml-1"/>
                            <TbDots className="ml-[380px] text-2xl text-gray-500"/>
                        </div>
                        <h4 className="font-sans font-semibold mt-[2px] ml-2 flex items-center gap-2">Samantha D.<FaCheckCircle className="text-green-600 text-xl"/></h4>
                        <p className="text-sm text-gray-500 ml-2 leading-5 mt-2 pr-14 tracking-tight">"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
                        <p className="text-sm text-gray-500 ml-2 leading-snug mt-7 tracking-tight">Posted on August 14, 2023</p>
                    </div>

                    <div className="w-[550px]  h-[215px] mb-6 p-4 border-solid border-gray-200 border-[1px] rounded-xl">
                        <div className="ml-2 flex pt-2">
                            <IoStar className="text-yellow-400"/>
                            <IoStar className="text-yellow-400 ml-1"/>
                            <IoStar className="text-yellow-400 ml-1"/>
                            <IoStar className="text-yellow-400 ml-1"/>
                            <TbDots className="ml-[380px] text-2xl text-gray-500"/>
                        </div>
                        <h4 className="font-sans font-semibold mt-[2px] ml-2 flex items-center gap-2">Alex M.<FaCheckCircle className="text-green-600 text-xl"/></h4>
                        <p className="text-sm text-gray-500 ml-2 leading-5 mt-2 pr-14 tracking-tight">"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."</p>
                        <p className="text-sm text-gray-500 ml-2 leading-snug mt-7 tracking-tight">Posted on August 15, 2023</p>
                    </div>

                    <div className="w-[550px]  h-[215px] mb-6 p-4 border-solid border-gray-200 border-[1px] rounded-xl">
                        <div className="ml-2 flex pt-2">
                            <IoStar className="text-yellow-400"/>
                            <IoStar className="text-yellow-400 ml-1"/>
                            <IoStar className="text-yellow-400 ml-1"/>
                            <LiaStarHalfSolid className="text-yellow-400 ml-1"/>
                            <TbDots className="ml-[380px] text-2xl text-gray-500"/>
                        </div>
                        <h4 className="font-sans font-semibold mt-[2px] ml-2 flex items-center gap-2">Ethan R.<FaCheckCircle className="text-green-600 text-xl"/></h4>
                        <p className="text-sm text-gray-500 ml-2 leading-5 mt-2 pr-14 tracking-tight">"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."</p>
                        <p className="text-sm text-gray-500 ml-2 leading-snug mt-7 tracking-tight">Posted on August 16, 2023</p>
                    </div>

                    <div className="w-[550px]  h-[215px] mb-6 p-4 border-solid border-gray-200 border-[1px] rounded-xl">
                        <div className="ml-2 flex pt-2">
                            <IoStar className="text-yellow-400"/>
                            <IoStar className="text-yellow-400 ml-1"/>
                            <IoStar className="text-yellow-400 ml-1"/>
                            <IoStar className="text-yellow-400 ml-1"/>
                            <TbDots className="ml-[380px] text-2xl text-gray-500"/>
                        </div>
                        <h4 className="font-sans font-semibold mt-[2px] ml-2 flex items-center gap-2">Olivia P.<FaCheckCircle className="text-green-600 text-xl"/></h4>
                        <p className="text-sm text-gray-500 ml-2 leading-5 mt-2 pr-14 tracking-tight">"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."</p>
                        <p className="text-sm text-gray-500 ml-2 leading-snug mt-7 tracking-tight">Posted on August 17, 2023</p>
                    </div>

                    <div className="w-[550px]  h-[215px] mb-6 p-4 border-solid border-gray-200 border-[1px] rounded-xl">
                        <div className="ml-2 flex pt-2">
                            <IoStar className="text-yellow-400"/>
                            <IoStar className="text-yellow-400 ml-1"/>
                            <IoStar className="text-yellow-400 ml-1"/>
                            <IoStar className="text-yellow-400 ml-1"/>
                            <TbDots className="ml-[380px] text-2xl text-gray-500"/>
                        </div>
                        <h4 className="font-sans font-semibold mt-[2px] ml-2 flex items-center gap-2">Liam K.<FaCheckCircle className="text-green-600 text-xl"/></h4>
                        <p className="text-sm text-gray-500 ml-2 leading-5 mt-2 pr-14 tracking-tight">"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."</p>
                        <p className="text-sm text-gray-500 ml-2 leading-snug mt-7 tracking-tight">Posted on August 18, 2023</p>
                    </div>

                    <div className="w-[550px]  h-[215px] mb-6 p-4 border-solid border-gray-200 border-[1px] rounded-xl">
                        <div className="ml-2 flex pt-2">
                            <IoStar className="text-yellow-400 "/>
                            <IoStar className="text-yellow-400  ml-1"/>
                            <IoStar className="text-yellow-400  ml-1"/>
                            <IoStar className="text-yellow-400  ml-1"/>
                            <LiaStarHalfSolid className="text-yellow-400 ml-1"/>
                            <TbDots className="ml-[380px] text-2xl text-gray-500"/>
                        </div>
                        <h4 className="font-sans font-semibold mt-[2px] ml-2 flex items-center gap-2">Ava H.<FaCheckCircle className="text-green-600 text-xl"/></h4>
                        <p className="text-sm text-gray-500 ml-2 leading-5 mt-2 pr-14 tracking-tight">"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."</p>
                        <p className="text-sm text-gray-500 ml-2 leading-snug mt-7 tracking-tight">Posted on August 19, 2023</p>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-4 mb-6">
                    <Button className="bg-white border  text-gray-950 hover:bg-gray-800 hover:text-[#F0F0F0] text-sm font-sans tracking-tight py-2 px-11 rounded-full">Load More Reviews</Button>
                </div>
            </div>     

            <Products3 />

            <FooterOnly />


                



            
        </div>
  )
}


