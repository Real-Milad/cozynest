import heroBanner from "../assets/hero-banner.jpg"
import brand1 from "../assets/brand-1.svg";
import brand2 from "../assets/brand-2.svg";
import brand3 from "../assets/brand-3.svg";
import brand4 from "../assets/brand-4.svg";


export const Hero = () => {


  return (
    <div className="flex">

      <div className="flex-2 bg-[#4f3120ff] hidden lg:flex flex-col pt-60 items-center overflow-hidden">
        <div className="mb-20 px-10 -ml-30">
          <h3 className="font-montserrat text-[#e5c6a1] font-bold text-[20px] uppercase mb-10">Welcome to vintage Shop</h3>
          <h1 className="font-cormorant font-bold text-[#dfdfdf] text-8xl w-200 ">Handmade Fashion & Vintage Pieces</h1>
          <button className="font-montserrat font-bold text-[#dfdfdf] text-[19px] bg-[#a06d3e] px-9 py-4 rounded-sm mt-10">Shop</button>
        </div>

        <div className="mt-10 -ml-10">
          <p className="font-montserrat font-bold text-[#e5c6a1] mb-10 text-2xl">Trusted by:</p>
          <div className="flex-center gap-25">
            <img src={brand1} alt="" className="w-35"/>
            <img src={brand2} alt="" className="w-35"/>
            <img src={brand3} alt="" className="w-35"/>
            <img src={brand4} alt="" className="w-40"/>
          </div>
        </div>
      </div>


      <div className="flex-1 relative overflow-hidden">
        <img src={heroBanner} alt="" className="w-full h-dvh object-cover blur-[6px] brightness-40 scale-105 lg:blur-none lg:brightness-100 lg:scale-100"/>

        <div className="absolute top-[50%] translate-y-[-50%] text-center left-[50%] translate-x-[-50%] w-full md:px-20 md:top-80 lg:hidden">
          <h3 className="font-montserrat text-[#e5c6a1] font-bold text-[16px] uppercase mb-10 md:text-2xl">Welcome to vintage Shop</h3>
          <h1 className="font-cormorant font-bold text-[#dfdfdf] text-5xl px-6 mb-15 md:text-7xl">Handmade Fashion & Vintage Pieces</h1>
          <button className="font-montserrat font-bold text-[#dfdfdf] bg-[#a06d3e] px-5 py-2 rounded-sm md:px-7 md:py-3">Shop</button>
        </div>

        <div className="absolute bottom-[10%] w-full px-[5%] md:px-20 md:bottom-40 lg:hidden">
          <p className="font-montserrat font-bold text-[#e5c6a1] mb-4">Trusted by:</p>
          <div className="flex justify-center gap-10 items-center w-full md:gap-11">
            <img src={brand1} alt="" className="w-22 md:w-32" />
            <img src={brand2} alt="" className="w-22 md:w-32" />
            <img src={brand3} alt="" className="w-22 md:w-32" />
            <img src={brand4} alt="" className="w-35 hidden md:block" />
          </div>
        </div>
      </div>

    </div>
  )
}
