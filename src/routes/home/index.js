import React from "react";
import Hero from "../../components/hero";
import About from "../../components/about";
import Pricing from "../../components/pricing";
import Contact from "../../components/contact";

export const Home = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Pricing />
      <Contact />
    </div>
  );
};

export default Home;
