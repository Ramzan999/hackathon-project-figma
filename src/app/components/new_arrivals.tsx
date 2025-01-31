import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { Poppins } from "next/font/google"
import { Button } from "@/components/ui/button";
import { Rubik } from "next/font/google"
import Link from "next/link";


const rubik = Rubik ({
    weight: '800',
    subsets: ['latin'],
    display: 'swap',
})

const poppins = Poppins ({
    weight: '900',
    subsets: ['latin'],
    display: 'swap',
})

const products = [
    {
        title: "T-Shirt with Tape Details",
        price: "$120",
        oldPrice: null,
        image: "/image1.png",
        rating: "4.5",
        reviews: "4",
    },

    {
        title: "Skinny Fit Jeans",
        price: "$240",
        oldPrice: "$260",
        image: "/image2.png",
        rating: "3.5",
        reviews: "9",
    },

    {
        title: "Checkered Shirt",
        price: "$180",
        oldPrice: null,
        image: "/image3.png",
        rating: "4.5",
        reviews: "5",
    },

    {
        title: "Sleeve Striped T-shirt",
        price: "$130",
        oldPrice: "$160",
        image: "/image4.png",
        rating: "4.5",
        reviews: "5",
    },
];

const ProductBox = ({product} : {product: any}) => (
    <div>
        <div className=" group shadow-md bg-[#F0EEED] rounded-md w-[160px] md:w-[220px] h-[170px] md:h-[180px] flex justify-center items-center relative cursor-pointer">
            <Image src={product.image} width={150} height={100} alt={product.title}/>
        </div>

        <h1 className="font-bold text-sm md:text-[18px] font-sans pt-2">{product.title}</h1>
        <div className="flex items-center space-x-2">
            <span className="text-gray-800 font-bold">{product.price}</span>
            {product.oldPrice && (
                <span className="text-gray-400 font-bold line-through">{product.oldPrice}</span>
            )}
        </div>
        <div className="flex items-center space-x-1 text-yellow-400 text-md pt-1">
            {[...Array(5)].map((_, index) =>
            index < product.rating ? (
                <FaStar key = {index}/>
            ): (
                <FaStar key = {index}/>
            )
            )}
            <span className="text-gray-400 text:sm ml-1">{product.reviews}</span>
        </div>
    </div>
);

const Products = () => {
    return (
        <main>
            <div className="w-full flex justify-center items-center mt-10 mb-1">
                <div className="w-[90%] md:w-[80%]">
                    <div className="flex flex-col">
                        <div className="flex justify-center text-black tracking-tight md:tracking-tighter text-2xl md:text-3xl lg:text-3xl pt-4">
                            <h1 className={rubik.className}>NEW ARRIVALS</h1>
                        </div>
                    </div>
                    <div className="flex justify-between mt-5 gap-x-3 md:gap-x-0 gap-y-5">
                        {products.map((product, index) => (
                            < ProductBox key={index} product={product} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center pt-5">
                <Link href={"/apidata"}>
                    <Button className="flex justify-center rounded-full text-gray-600 text-sm font-extralight bg-white border-gray-300 border-solid border-[1px] hover:bg-slate-400 hover:text-white w-full md:w-[200px] lg:w-[200px] mx-7 md:mx-0">View All</Button>
                </Link>
            </div>
            
            <div className="pt-4">
                <br />
                <hr className="border-[1px] border-solid border-gray-200 mr-6 md:mr-28 ml-6 md:ml-28"/>
                <br />
            </div>
        </main>
    )
}

export default Products;









