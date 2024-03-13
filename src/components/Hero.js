import React from "react";
import WomanImg from "../img/woman_hero.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section
      className="bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24
  "
    >
      <div className="container mx-auto flex justify-around h-full">
        {/* text  */}
        <div className=" flex flex-col justify-center">
          {/* pretitle */}
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-50">New trend</div>
          </div>
        </div>
        {/* title */}
        <h1 className="text-[70x] leading-[1.1] font-light mb-4">
          AUTUMN SALE STYLISH
          <br />
          <span className="font-semibold">WOMEN</span>
          WOMEN
        </h1>
        <Link
          to={"/"}
          className="self-start uppercase font-semibold border-b-2 border-primary"
        >
          Discover More
        </Link>
        {/* image  */}
        <div className="h lg:block">
          <img src="{WomanImg}" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
