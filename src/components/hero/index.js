import React from "react";
import { Fade } from "react-awesome-reveal";

function Hero() {
  return (
    <div className="relative">
      <img src="images/intro.jpg" className="w-full h-[600px] object-cover" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Fade triggerOnce cascade>
          <p className="font-bold text-4xl">Your #1 solution for ERP needs</p>
          <p className="text-xl my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            consectetur sodales odio, ac dapibus mi pellentesque ut. Cras at
            enim vel nunc porttitor fermentum non quis purus.
          </p>
          <button className="bg-[#D90600] p-4 rounded-full text-white hover:opacity-75 w-44 mt-4">
            See Pricing
          </button>
        </Fade>
      </div>
    </div>
  );
}

export default Hero;
