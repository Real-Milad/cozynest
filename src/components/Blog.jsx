import { IoMdArrowRoundForward } from "react-icons/io";

import grid_1 from "../assets/grid-1.jpg";
import grid_2 from "../assets/grid-2.jpg";
import grid_3 from "../assets/grid-3.jpg";
import grid_4 from "../assets/grid-4.jpg";
import grid_5 from "../assets/grid-5.jpg";
import autumnLift from "../assets/autumn-leaf.svg";

export const Blog = () => {


  return (
    <section className="text-white bg-[#4f3120ff] relative overflow-hidden">
      <div className="container mx-auto px-3 py-10 grid gap-10 relative z-1 sm:gap-5 sm:grid-cols-2 sm:items-center sm:px-7 md:items-stretch">

        <div className="blog-content md:grid md:content-between">
          <div>
            <h1 className="font-primary font-bold text-5xl mb-4 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">HandMade Decor: <br /> The Power of Selling Online</h1>
            <p className="text-lg italic mb-10 lg:max-w-md xl:text-2xl xl:max-w-lg">Discover How Selling Online Can grow your handmade decor business.</p>
          </div>

          <div className="">
            <p className="font-bold sm:text-sm md:text-base">September 16-18 2026 <br /> Paragon One Plaza ans Sky Garden</p>
            <button className="btn bg-[#dd9d4cff] py-3 px-10 mt-10 lg:mx-0 lg:py-4">
              Read More 
              <IoMdArrowRoundForward className="inline" />
            </button>
          </div>
        </div>

        <div className="grid gap-3 max-w-md ms-auto lg:grid-cols-3 lg:max-w-full">
          <div className="grid grid-cols-3 gap-3 lg:col-span-2">
            <figure className="img-holder overflow-hidden group col-span-3">
              <img src={grid_1} alt="" width={474} height={474} loading="lazy " 
              className="w-full h-full duration-300 ease-in group-hover:scale-[1.01] object-cover"/>
            </figure>

            <figure className="img-holder overflow-hidden group">
              <img src={grid_2} alt="" width={474} height={474} loading="lazy" 
              className="w-full h-full duration-300 ease-in group-hover:scale-[1.01] object-cover"/>
            </figure>

            <figure className="img-holder overflow-hidden group">
              <img src={grid_3} alt="" width={474} height={474} loading="lazy" 
              className="w-full h-full duration-300 ease-in group-hover:scale-[1.01] object-cover"/>
            </figure>

            <figure className="img-holder overflow-hidden group">
              <img src={grid_4} alt="" width={474} height={474} loading="lazy" 
              className="w-full h-full duration-300 ease-in group-hover:scale-[1.01] object-cover"/>
            </figure>
          </div>

          <figure className="img-holder overflow-hidden group hidden lg:block">
            <img src={grid_5} alt="" width={474} height={474} loading="lazy" 
            className="w-full h-full duration-300 ease-in group-hover:scale-[1.01] object-cover"/>
          </figure>

        </div>

      </div>

      <img src={autumnLift} alt="" className=" absolute top-96 -left-2 opacity-10 max-w-56 animate-bounce duration-1000 sm:-left-16" />
    </section>
  )
}
