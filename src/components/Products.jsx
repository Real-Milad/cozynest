import productimg1 from "../assets/product-showcase-1.jpg";
import productimg2 from "../assets/product-showcase-2.jpg";
import productimg3 from "../assets/product-showcase-3.jpg";
import productimg4 from "../assets/product-showcase-4.jpg";
import productimg5 from "../assets/product-showcase-5.jpg";

const products = [
  {id: 1, title: "Clothings", numProducts: "954 Products", img: productimg1},
  {id: 2, title: "Candles", numProducts: "184 Products", img: productimg2},
  {id: 3, title: "Accessories", numProducts: "986 Products", img: productimg3},
  {id: 4, title: "Clocks", numProducts: "710 Products", img: productimg4},
  {id: 5, title: "Bags", numProducts: "740 Products", img: productimg5},
];


export const Products = () => {

  return (
    <div className="w-full bg-[#fff3dcff] py-20 md:py-20 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-3 md:px-10 lg:px-30 lg:grid-cols-3">
        {products.map((product => 
          <div key={product.id} style={{backgroundImage:`url(${product.img})`}} 
            className={`bg-cover bg-no-repeat bg-center rounded-md min-h-54.75 py-5 px-5 brightness-95 shadow-lg hover:scale-103 duration-500 ${product.title === "Clothings" && "md:row-span-2 lg:min-h-150"}`}
          >
            <p className="font-montserrat font-bold text-[#281811ff] text-2xl">{product.title}</p>
            <p className="font-montserrat font-medium text-[17px] text-[#4f3120ff]">{product.numProducts}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
