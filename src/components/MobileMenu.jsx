import { useState } from "react";
import { IoClose } from "react-icons/io5";
import logoLight from "../assets/logo-light.svg";
import { IoMdArrowDropright } from "react-icons/io";


export const MobileMenu = ({toggleMenu, setToggleMenu}) => {

  const [expandShop, setExpandShop] = useState(false)

  


  return (
    <div className={`
      fixed top-0 left-0 w-80 h-screen z-3 pt-25 flex items-center flex-col 
      -translate-x-full overflow-auto transition duration-700 bg-[#3e2c22]
      ${toggleMenu && "translate-x-0"}
    `}>

      <div onClick={() => setToggleMenu(false)} 
        className="absolute right-5 top-5 border p-2 rounded-full text-white cursor-pointer"
      >
        <IoClose size={20}/>
      </div>

      <a href="#" className="mx-auto mb-10">
        <img src={logoLight} alt="cozynest" className="w-45"/>
      </a>

      <ul className="flex flex-col items-start w-full px-10 font-montserrat font-bold">
        <li><a href="#home" className="nav-item">Home</a></li>

        <li>
          <a href="#home" onClick={() => setExpandShop(prev => !prev)} className="nav-item">
            Shop
            <IoMdArrowDropright size={20} className={`inline transition duration-400 ${expandShop && "rotate-90"}`}/>
          </a>

          <div className={`
            flex flex-col text-[#dac3a6] border-b h-0 px-5 space-y-1 invisible 
            ${expandShop && "visible h-46 pb-52 pt-4"}
          `}>
            <a href="#">All Products</a>
            <a href="#">Clothing</a>
            <a href="#">Candles</a>
            <a href="#">Accessories</a>
            <a href="#">Bags</a>
            <a href="#">Clocks</a>
            <a href="#">Sale</a>
          </div>
        </li>

        <li><a href="#blog" className="nav-item">Blog</a></li>
        <li><a href="#latest" className="nav-item">Latest</a></li>
        <li><a href="#info" className="nav-item">Info</a></li>
      </ul>
    </div>
  )
}
