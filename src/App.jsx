
import { Blog } from "./components/Blog"
import { Categories } from "./components/Categories"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Products } from "./components/Products"

export const App = () => {

  
  return (
    <div>
      <Header />
      <Hero />
      <Products />
      <Categories />
      <Blog />
    </div>
  )
}
