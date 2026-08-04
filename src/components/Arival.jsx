import { FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { MdOutlineShoppingBag } from "react-icons/md";
import newProduct1 from "../assets/new-product-1.jpg";
import newProduct2 from "../assets/new-product-2.jpg";
import newProduct3 from "../assets/new-product-3.png";
// import newProduct4 from "../assets/new-product-4.jpg";
// import newProduct5 from "../assets/new-product-5.jpg";
// import newProduct6 from "../assets/new-product-6.jpg";

// import { TbShoppingBag } from "react-icons/tb";


export const Arival = () => {

  return (
    <section>
      <div className="container">

        <h1 className="">New Arrival</h1>

        <p className="">
          Discover the latest must-have arrivals! Elevate yout 
          style with our newest collection of trendsetting items
        </p>

        <ul className="">
          <li className="group pb-6 space-y-5 max-w-64 rounded-lg duration-75 ease-linear">
            <div className="img-box relative overflow-hidden">
              <figure className="img-holder rounded-lg h-80 ">
                <img src={newProduct1} alt="" width={256} height={320} className="img-cover duration-500 ease-linear group-hover:scale-105"/>
              </figure>

              <div className="bg-[#d89245c7] text-white px-3 py-1 absolute top-2/4 left-2/4 -translate-1/2 flex items-center opacity-0 duration-200 group-hover:opacity-100">
                <a href="#" className="size-9 grid place-items-center">
                  <MdOutlineShoppingBag size={22}/>
                </a>
                <a href="#" className="size-9 grid place-items-center">
                  <FaRegHeart size={18}/>
                </a>
                <a href="#" className="size-9 grid place-items-center">
                  <FiEye size={20}/>
                </a>
              </div> 
            </div>

            <div className="card-content space-y-2">
              <div className="flex justify-between items-start">
                <p className="text-lg text-[#333333ff] font-bold">Cable Roll Neck Sweater</p>
                <span className="bg-[#d89245] px-2 py-1 text-sm text-[#fff3dcff] font-bold">$25.75</span>
              </div>
            </div>
          </li>

          <li className="group pb-6 space-y-5 max-w-64 rounded-lg duration-75 ease-linear">
            <div className="img-box relative overflow-hidden">
              <figure className="img-holder rounded-lg h-80 ">
                <img src={newProduct2} alt="" width={256} height={324} className="img-cover duration-500 ease-linear group-hover:scale-105"/>
              </figure>

              <div className="bg-[#d89245c7] text-white px-3 py-1 absolute top-2/4 left-2/4 -translate-1/2 flex items-center opacity-0 duration-200 group-hover:opacity-100">
                <a href="#" className="size-9 grid place-items-center">
                  <MdOutlineShoppingBag size={22}/>
                </a>
                <a href="#" className="size-9 grid place-items-center">
                  <FaRegHeart size={18}/>
                </a>
                <a href="#" className="size-9 grid place-items-center">
                  <FiEye size={20}/>
                </a>
              </div> 
            </div>

            <div className="card-content space-y-2">
              <div className="flex justify-between items-start">
                <p className="text-lg text-[#333333ff] font-bold">Cableknit Sweater</p>
                <span className="bg-[#d89245] px-2 py-1 text-sm text-[#fff3dcff] font-bold">$25.75</span>
              </div>
            </div>
          </li>

          <li className="group pb-6 space-y-5 max-w-64 rounded-lg duration-75 ease-linear">
            <div className="img-box relative overflow-hidden">
              <figure className="img-holder rounded-lg h-80 ">
                <img src={newProduct3} alt="" width={256} height={320} className="img-cover duration-500 ease-linear group-hover:scale-105"/>
              </figure>

              <div className="bg-[#d89245c7] text-white px-3 py-1 absolute top-2/4 left-2/4 -translate-1/2 flex items-center opacity-0 duration-200 group-hover:opacity-100">
                <a href="#" className="size-9 grid place-items-center">
                  <MdOutlineShoppingBag size={22}/>
                </a>
                <a href="#" className="size-9 grid place-items-center">
                  <FaRegHeart size={18}/>
                </a>
                <a href="#" className="size-9 grid place-items-center">
                  <FiEye size={20}/>
                </a>
              </div> 
            </div>

            <div className="card-content space-y-2">
              <div className="flex justify-between items-start">
                <p className="text-lg text-[#333333ff] font-bold">Wool Panda Diary Cover</p>
                <span className="bg-[#d89245] px-2 py-1 text-sm text-[#fff3dcff] font-bold">$25.75</span>
              </div>
            </div>
          </li>



          <li className="off-card">
            <div className="bg-[#4f3120db] text-white max-w-max ms-auto px-4 py-5 rounded-md relative z-10 md:px-5 md:py-6">
              <div className="flex  justify-center items-center gap-3 mb-5 md:mb-9">
                <span className="text-5xl mb-2 md:text-[64px]">45%</span>
                <span className="italic">Off</span>
              </div>

              <p className="text-center mb-1">All new Flower vase</p>
              <a href="#" className="px-4 py-3 text-center border border-solid border-[#d89245]">See all Products</a>
            </div>
          </li>
        </ul>

      </div>
    </section>
  )
}