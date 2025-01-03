import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import MainCards from "./components/MainCards";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TopSellers from "./components/TopSellers";
import Footer from "./components/Footer";
import Products from "./components/Products";
import CounterBanner from "./components/CounterBanner";
import BookGuide from "./components/BookGuide";
import Blog from "./components/Blog";
import Testimonies from "./components/Testimonies";
import Gift from "./components/Gift";
import PricePackage from "./components/PricePackage";
import Newsletter from "./components/Newsletter";

import About from "./components/routes/about/About";

const Home = () => {
  return (
    <>
      <Hero />
      <Banner />
      <MainCards />
      <TopSellers />
      <Products />
      <Testimonies />
      <BookGuide />
      <CounterBanner />
      <Blog />
      <Gift />
      <PricePackage />
      <Newsletter />
    </>
  );
};

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<div>Blog</div>} />
        <Route path="/teams" element={<div>Teams</div>} />
        <Route path="/products" element={<div>Products</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
