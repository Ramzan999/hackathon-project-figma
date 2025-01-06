import React from "react";
import { Poppins } from "next/font/google";
import { Rubik } from "next/font/google"


const rubik = Rubik ({
    weight: '800',
    subsets: ['latin'],
    display: 'swap',
})

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function BrowseNewStyle() {
  return (
    <div className=" w-full flex justify-center items-center pt-10 md:pt-7">
      <div className="w-[86%] md:w-[80%] lg:w-[80%]">
        {/* container */}
        <div className="flex flex-col md:flex md:flex-row ml-0 md:ml-[80px] pb-6 md:pb-0 w-full md:w-[900PX] lg:w-[900PX] h-auto md:h-[600px] lg:h-[600px] p-2 md:p-6 rounded-[15px] md:rounded-[40px] bg-[#F0EEED] text-black pt-4">
          <div className="bg-[#F0EEED] w-auto md:w-[50%] relative">
            <div className="hidden md:flex justify-center items-center ml-[180px] tracking-tighter font-bold text-slate-800 text-3xl w-[500px] ">
              <h1>
                BROWSE BY DRESS STYLE
              </h1>
            </div>
            {/* container title for mobile */}
            <div className="block md:hidden lg:hidden leading-6 mt-4 text-[22px]">
              <div className="ml-16 tracking-tighter">
                <h1 className={rubik.className}>
                  BROWSE BY
                </h1>
              </div>
              <div className="ml-14 tracking-tight">
                <h1 className={rubik.className}>
                  DRESS STYLE
                </h1>
              </div>
            </div>

            {/* image row 1 */}
            <div className="flex flex-col md:flex md:flex-row gap-y-0 md:gap-y-4 ml-0 md:ml-6 gap-x-0 md:gap-x-4">
              
              <div className="absolute left-7 md:left-10 top-0 md:top-1 text-black ">
                <h1 className="sm:text-lg font-bold mt-24 md:text-xl">Casual</h1>
              </div>
              <img src="/image9.png" alt="9" className="object-cover mt-4 md:mt-10 rounded-[20px] px-2 md:px-0 py-1 md:py-0 w-auto md:w-[290px] h-[160px] md:h-[220px]"/>

              {/* image 10*/}
              <div className="absolute ml-7 md:ml-[325px] top-40 md:top-1 text-black ">
                <h1 className="sm:text-lg font-bold mt-24 md:text-xl">Formal</h1>
              </div>
              <img src="/image10.png" alt="10" className="object-cover mt-0 md:mt-10 rounded-[20px] px-2 md:px-0 py-1 md:py-0 w-auto md:max-w-[500px] h-[160px] md:h-[220px]"/>

            </div>

            {/* image row 2 */}
            <div className="flex flex-col md:flex md:flex-row gap-y-0 md:gap-y-4 ml-0 md:ml-6 gap-x-0 md:gap-x-4">

              {/* image 11*/}
              <div className="absolute left-7 md:left-11 top-[320px] md:top-64 text-black ">
                <h1 className="sm:text-lg font-bold mt-24 md:text-xl">Party</h1>
              </div>
              <img src="/image11.png" alt="11" className="object-cover mt-0 md:mt-4 rounded-[20px] px-2 md:px-0 py-1 md:py-0 w-auto md:max-w-[501px] h-[160px] md:h-[240px]" />
              
              {/* image 12*/}
              <div className="absolute ml-7 md:ml-[535px] top-[480px] md:top-64 text-black ">
                <h1 className="sm:text-lg font-bold mt-24 md:text-xl">Gym</h1>
              </div>
              <img src="/image12.png" alt="12" className="mt-0 md:mt-4 rounded-[20px] object-cover px-2 md:px-0 py-1 md:py-0 w-auto md:md:w-[290px] h-[160px] md:h-[240px]"/>

            </div>

          </div> 
        </div>
      </div>
    </div>
  );
}
