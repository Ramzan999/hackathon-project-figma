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

    {
        title: "Vertical Striped Shirt",
        price: "$212",
        oldPrice: "$232",
        image: "/image5.png",
        rating: "5.0",
        reviews: "7",
    },

    {
        title: "Courage Graphic T-shirt",
        price: "$145",
        oldPrice: null,
        image: "/image6.png",
        rating: "4.0",
        reviews: "5",
    },

    {
        title: "Loose Fit Bermuda Shorts",
        price: "$80",
        oldPrice: null,
        image: "/image7.png",
        rating: "3.0",
        reviews: "10",
    },
];

const ProductBox = ({product} : {product: any}) => (
    <div>
        <div className="group shadow-md bg-[#F0EEED] rounded-md w-[245px] h-[250px] flex justify-center items-center relative cursor-pointer">
            <Image src={product.image} width={220} height={150} alt={product.title}/>

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

const Products_Casual = () => {
    return (
        <main>
            <div className="w-full mb-1">
                <div className="">

                    <div className="flex flex-wrap gap-y-10 gap-x-10">
                        {products.map((product, index) => (
                            < ProductBox key={index} product={product} />
                        ))}
                    </div>
                </div>
            </div>
            
        </main>
    )
}

export default Products_Casual;