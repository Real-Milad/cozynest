import slide1 from "../assets/slide-1.jpg";
import slide2 from "../assets/slide-2.jpg";
import slide3 from "../assets/slide-3.jpg";
import slide4 from "../assets/slide-4.jpg";
import slide5 from "../assets/slide-5.jpg";
import slide6 from "../assets/slide-6.jpg";
import slide7 from "../assets/slide-7.jpg";
import slide8 from "../assets/slide-8.jpg";
import slide9 from "../assets/slide-9.jpg";
import slide10 from "../assets/slide-10.jpg";

import { FiEye } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";


const images = [
  {id: 1, img: slide1, title: "Attire", price: "$25.75", subtitle: "Artisanal designs that make every day a feast"},
  {id: 2, img: slide2, title: "Jewellery", price: "$25.75", subtitle: "Casual yet sophisticated pieces for every room in the house"},
  {id: 3, img: slide3, title: "Decor", price: "$25.75", subtitle: "Tasteful elements to mix and match for an elevated look"},
  {id: 4, img: slide4, title: "Bag", price: "$25.75", subtitle: "Artisanal designs that make every day a feast"},
  {id: 5, img: slide5, title: "Wool Panda Bag", price: "$25.75", subtitle: "Casual yet sophisticated pieces for every room in the house"},
  {id: 6, img: slide6, title: "Decor", price: "$25.75", subtitle: "Tasteful elements to mix and match for an elevated look"},
  {id: 7, img: slide7, title: "Autumn aesthetic candles", price: "$25.75", subtitle: "Artisanal designs that make every day a feast"},
  {id: 8, img: slide8, title: "Candle", price: "$25.75", subtitle: "Artisanal designs that make every day a feast"},
  {id: 9, img: slide9, title: "Art Wall Frame", price: "$25.75", subtitle: "Artisanal designs that make every day a feast"},
  {id: 10, img: slide10, title: "Autumn leaf", price: "$25.75", subtitle: "Artisanal designs that make every day a feast"},
]



export const Categories = () => {

  return (
    <section className="bg-[#fff3dcff]">
      <div className="container mx-auto px-3 py-10 md:py-16 grid  gap-6 sm:px-7 md:grid-cols-[0.8fr_1fr] md:items-center md:gap-0 lg:py-24 lg:grid-cols-[0.8fr_1fr] xl:grid-cols-[0.5fr_1fr] xl:py-20 xl:px-10">

        <div className="md:mb-10">
          <h1 className="text-[#4f3120ff] font-cormorant font-bold text-6xl text-center my-3 md:text-start lg:text-7xl">Our Product Categories</h1>
          <p className="text-[#333333ff] text-center text-lg md:hidden">Explore our curated popular collection product categories featuring high-quality</p>
          <button href="#" className="btn text-white font-montserrat font-bold bg-[#dd9d4cff] py-3 px-10 mx-auto mt-10 md:mx-0 md:mt-10 lg:py-4 lg:mx-0 hidden md:block rounded-[7px]">view Products</button>
        </div>


        {/* <Slider /> */}
        <div className="grid gap-3 md:gap-5 lg:gap-10 overflow-hidden" data-slider-container>
          <ul className="slider h-112.5 sm:max-w-135 sm:ms-5 md:max-w-full md:ms-0" >

            {images.map(img => 
              <li key={img.id} className="slider-item group pb-6 space-y-5 w-64 rounded-lg">
                <div className="relative overflow-hidden">
                  <figure className="img-holder rounded-lg h-80 overflow-hidden w-66.25">
                    <img src={img.img} alt="sweater" loading="lazy" className="img-cover duration-500 group-hover:scale-105 w-full h-full object-cover rounded-lg"/>
                  </figure>

                  <div className="bg-[#d891458a] text-white px-3 py-1 absolute top-1/2 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-0 duration-200 group-hover:-translate-y-1/2 group-hover:opacity-100 rounded-2xl">
                    <a href="#"><MdOutlineShoppingBag size={22} /></a>
                    <a href="#"><FaRegHeart size={18} /></a>
                    <a href="#"><FiEye size={20} /></a>
                  </div>
                </div>

                <div className="card-content space-y-2">
                  <div className="flex justify-between items-start">
                    <p className="text-lg text-[#333333ff] font-bold">{img.title}</p>
                    <span className="bg-[#d89245] px-2 py-1 text-sm text-[#fff3dcff] font-bold">{img.price}</span>
                  </div>

                  <p className="product-detail">{img.subtitle}</p>
                </div>
              </li>
            )}

          </ul>

          <div className="flex items-center gap-3 mx-auto md:-order-1 md:mx-0 md:ms-auto">
            <button className="arrow-button size-10 grid place-items-center border border-solid border-[#d89245] rounded-sm">
              <IoIosArrowBack className="text-[#4f3120ff] font-bold"/>
            </button>
            <button className="arrow-button size-10 grid place-items-center border border-solid border-[#d89245] rounded-sm">
              <IoIosArrowForward className="text-[#4f3120ff] font-bold"/>
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}
