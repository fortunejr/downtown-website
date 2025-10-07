import React from "react";
import { handover, logo, robot } from "../../imports";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="w-full bg-[#0D0D0D]">
      {/* --- Handover image section --- */}
      <div className="relative w-full">
        <img
          src={handover}
          alt="Handover"
          className="w-full h-[350px] md:h-[550px] object-cover"
        />
        <h2 className="absolute inset-0 flex items-center justify-center text-white text-2xl sm:text-3xl md:text-5xl font-extrabold uppercase tracking-wide text-center px-4">
          EAT IT. PRINT IT. CHAT TO GET IT.
        </h2>
      </div>

      {/* --- Orange alert / feature box --- */}
      <div
        className="
          relative z-10 w-[90%] md:w-[85%] mx-auto 
          -mt-16 sm:-mt-4 md:-mt-48
          bg-orange-500 text-white rounded-2xl 
          p-6 sm:p-10 flex flex-col md:flex-row 
          items-center justify-between 
          shadow-[0_0_25px_rgba(0,0,0,0.15)]
        "
      >
        {/* Text + form */}
        <div className="flex-1 md:pr-10 space-y-4 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Join the Downtown New Feature Alert.
          </h3>
          <p className="text-sm sm:text-base text-white/90 max-w-lg mx-auto md:mx-0">
            Be the first to find out when we launch a new feature and unlock
            exclusive perks.
          </p>

          {/* Form wrapper — hidden background on mobile */}
          <div className="sm:bg-white/80 sm:rounded-full sm:p-2 w-full max-w-md mx-auto md:mx-0">
            <form className="flex flex-col sm:flex-row gap-3 w-full">
              <input
                type="email"
                placeholder="Enter your mail"
                className="px-5 py-3 rounded-full bg-white text-gray-800 placeholder-gray-500 flex-1 outline-none focus:ring-2 focus:ring-orange-200"
              />
              <button
                type="submit"
                className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-500 transition w-full sm:w-auto"
              >
                Join waitlist
              </button>
            </form>
          </div>
        </div>

        {/* Robot image */}
        <div
          className="hidden md:block w-[200px] h-[200px] bg-no-repeat bg-contain bg-right mt-8 md:mt-0"
          style={{ backgroundImage: `url(${robot})` }}
        ></div>
      </div>

      {/* --- Footer --- */}
      <footer className="bg-[#0D0D0D] text-white pt-32 pb-10 px-6 md:px-16 relative rounded-t-[30px] -mt-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-10">
          {/* Logo */}
          <img src={logo} alt="Logo" className="w-40 sm:w-48 mb-4 md:mb-0" />

          {/* Footer links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-sm font-medium text-gray-300">
            <div className="flex flex-col space-y-2">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/askdowntown"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://x.com/askdoto"
              target="_blank"
              rel="noopener noreferrer"
            >
              X (Twitter)
            </a>
          </div>
            <div className="leading-loose">
              <Link to="/privacy-policy"><p>Privacy Policy</p></Link>
              <Link to="/terms-of-use"><p>Terms of Use</p></Link>
              <Link to="/about-company"><p>About Company</p></Link>
            </div>
            <div className="space-y-2">
              <p>For Merchants</p>
              <p>For Deliverers</p>
              <p>Support</p>
            </div>
            <div className="space-y-2">
              <p>Contact Us</p>
              <p>Hey AI</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-400 border-t border-gray-800 pt-6">
          © 2025 HeyChat International Limited. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default CTA;
