import React from "react";
import { Link } from "react-router-dom";
import paperbag from "../../assets/paperbag.png";
import { bg } from "../../imports"; // background image import
import "./Hero.css"; // optional custom CSS

const Herosection = () => {
  return (
    <section
      className="
        flex flex-col items-center justify-center text-center 
        bg-cover bg-center bg-no-repeat 
        px-6 md:px-12 
        h-[80vh] sm:h-[85vh] md:h-[100vh]  /* 👈 Increased height */
      "
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Paper bag image */}
      <img
        src={paperbag}
        alt="paper bag"
        className="w-28 sm:w-36 md:w-44 lg:w-56 mb-6 animate-fade-in"
      />

      {/* Heading text */}
      <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-black mb-6 leading-snug drop-shadow-sm">
        We’re Launching Soon on <br className="hidden sm:block" /> your campus!
      </h1>

      {/* Join button */}
      <Link
        to="/"
        className="bg-orange-600 hover:bg-orange-500 text-white text-base sm:text-lg font-semibold px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-full shadow-[0_4px_15px_rgba(255,165,0,0.5)] transition transform hover:scale-105"
      >
        Join waitlist
      </Link>
    </section>
  );
};

export default Herosection;
