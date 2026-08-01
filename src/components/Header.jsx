import { IoMenu } from "react-icons/io5";
import { MobileMenu } from "./MobileMenu";
import { useEffect, useState } from "react";
import logoLight from "../assets/logo-light.svg"
import { MdOutlineShoppingCart } from "react-icons/md";

export const Header = () => {

  const [toggleMenu, setToggleMenu] = useState(false)
  

  useEffect(() => {
    document.body.classList.toggle("menu-open", toggleMenu);
  }, [toggleMenu]);

  return (
    <>
      <div className="fixed w-full flex justify-between items-center py-6 px-4 md:py-7 md:px-8 z-2 bg-[#694129] lg:bg-transparent">
        <div className="flex-1">
          <a href="#"><img src={logoLight} alt="cozynest" className="w-35 md:w-45"/></a>
        </div>

        <div className="hidden lg:flex lg:justify-center gap-15 font-montserrat font-bold text-[16px] text-white flex-2 tracking-widest uppercase">
          <a href="#home">Home</a>
          <a href="#home">Shop</a>
          <a href="#home">Blog</a>
          <a href="#home">Latest</a>
          <a href="#home">Info</a>
        </div>

        <div className="flex-center gap-5 flex-1 flex justify-end">
          <div className="flex-center relative after:content-['2'] after:flex after:items-center 
          after:justify-center after:font-bold after:text-white after:size-5 after:bg-red-400 
          after:absolute after:rounded-full after:-top-2 after:-right-2">
            <MdOutlineShoppingCart className="text-[#d6c6ad] cursor-pointer text-[30px] lg:bg-[#4f3120ff] lg:p-2.25 lg:text-5xl lg:rounded-2xl"/>
          </div>

          <IoMenu onClick={() => setToggleMenu(true)} size={30} className="text-[#d6c6ad] cursor-pointer lg:hidden"/>
        </div>
      </div>

      <MobileMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />

      <div 
        onClick={() => setToggleMenu(false)} 
        className={`
          fixed inset-0 z-1 bg-[#000000cc] opacity-0 
          transition delay-100 duration-500 invisible 
          ${toggleMenu && "visible opacity-100"}
        `}
      ></div>
    </>
  )
}
