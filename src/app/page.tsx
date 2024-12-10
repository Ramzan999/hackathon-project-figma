import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Products from "./components/new_arrivals";
import Products2 from "./components/top_selling";
import Upperfooter from "./components/upper_footer";


const Home = () => {
  return(
    <div>
      <Navbar />
      <Hero />
      <Products />
      <Products2 />
      <Upperfooter />
    </div>
  )
}

export default Home ;
