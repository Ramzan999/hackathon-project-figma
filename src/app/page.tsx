import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Products from "./components/new_arrivals";
import Products2 from "./components/top_selling";
import Upperfooter from "./components/upper_footer";
import BrowseNewStyle from "./components/browseByStyle";
import FooterOnly from "./components/footer";
import ProductCard from "./products/page";

const Home = () => {
  return(
    <div>
      <Navbar />
      <Hero />
      <Products />
      <Products2 />
      <BrowseNewStyle />
      <ProductCard />
      <Upperfooter />
      <FooterOnly />
    </div>
  )
}

export default Home ;
