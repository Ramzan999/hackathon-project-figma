import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { Poppins } from "next/font/google"

const poppins = Poppins ({
    weight: '900',
    subsets: ['latin'],
    display: 'swap',
})

const products = [
    {
        title: "Polo with Contrast Trim",
        price: "$212",
        oldPrice: "$242",
        image: "/image13.png",
        rating: "4.0",
        reviews: "5",
    },

    {
        title: "Gradient Graphic T-shirt",
        price: "$145",
        oldPrice: null,
        image: "/image14.png",
        rating: "3.5",
        reviews: "5",
    },

    {
        title: "Polo with Tipping T-Shirt",
        price: "$180",
        oldPrice: null,
        image: "/image15.png",
        rating: "4.5",
        reviews: "5",
    },

    {
        title: "Black Striped T-shirt",
        price: "$120",
        oldPrice: "$150",
        image: "/image16.png",
        rating: "5",
        reviews: "5",
    },
];

const ProductBox = ({product} : {product: any}) => (
    <div>
        <div className="group shadow-md bg-[#F0EEED] rounded-md w-[220px] h-[180px] flex justify-center items-center relative cursor-pointer">
            <Image src={product.image} width={150} height={100} alt={product.title}/>

        </div>
        <h1 className="font-bold font-sans pt-2">{product.title}</h1>
        
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
        <div className="flex items-center space-x-2">
            <span className="text-gray-800 font-bold">{product.price}</span>
            {product.oldPrice && (
                <span className="text-gray-400 flex font-bold line-through">{product.oldPrice}
                <h4 className="bg-red-100 ml-2 mt-[2px] border-none rounded-full w-12 h-5 flex justify-center items-center text-red-700 text-[10px]">-40%</h4>
                </span>
            )}
        </div>
    </div>
);

const Products3 = () => {
    return (
        <main>
            <div className="w-full flex justify-center items-center mt-14 mb-1">
                <div className="w-[80%]">
                    <div className="flex flex-col">
                        <div className="flex justify-center text-black tracking-normal mb-3 sm:text-md md:text-3xl lg:text-3xl">
                            <h1 className={poppins.className}>YOU MIGHT ALSO LIKE</h1>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between mt-5 gap-y-5">
                        {products.map((product, index) => (
                            < ProductBox key={index} product={product} />
                        ))}
                    </div>
                </div>
            </div>
            
        </main>
    )
}

export default Products3;