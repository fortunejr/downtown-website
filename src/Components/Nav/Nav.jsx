import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronLeft } from "lucide-react";
import { logo2 } from "../../imports";
import { whatsappIcon } from "../../imports";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closureStep, setClosureStep] = useState(0); // 0: Menu, 1: Email, 2: OTP
  const [email, setEmail] = useState("");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setClosureStep(0); // Reset closure flow when closing menu
  };
  const whatsappNumber = "2349023168568";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <nav className="relative font-montserrat flex justify-between items-center w-full px-4 md:px-10 py-12">
      {/* LEFT — Logo (Bigger on Mobile, Aligned Left) */}
      <Link to="/" className="flex items-center">
        <img
          src={logo2}
          alt="logo"
          className="w-[164px] md:w-56" // bigger on mobile
        />
      </Link>

      {/* RIGHT — Hamburger (Mobile Only) */}
      <button
        className="md:hidden text-orange-600"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* DESKTOP LINKS */}
      <div className="hidden md:flex items-center space-x-8 font-normal text-xl">
        <a href="/#features" className="hover:text-orange-700">
          Features
        </a>
        <a href="/#faqs" className="hover:text-orange-700">
          FAQs
        </a>
        <Link to="/about-company" className="hover:text-orange-700">
          About us
        </Link>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FC4C01] text-white text-[16px] px-5 py-2.5 rounded-[8px] hover:bg-[#152D4D] flex items-center gap-2"
        >
          <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
          GET STARTED
        </a>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white/70 backdrop-blur-md z-50 flex flex-col px-4 animate-in fade-in duration-300 md:hidden">
          {/* Header section with Logo and Close button */}
          <div className="flex justify-between items-center py-6 my-6">
            <img
              src={logo2}
              alt="logo"
              className="w-[164px] md:w-56" // bigger on mobile
            />
            <button onClick={toggleMenu} className="text-orange-600">
              <X size={32} />
            </button>
          </div>

          {/* Back Button Row (Only visible in closure steps) */}
          {closureStep > 0 && (
            <div className="mb-2">
              <button
                onClick={() => setClosureStep(closureStep - 1)}
                className="text-gray-800"
              >
                <ChevronLeft size={32} />
              </button>
            </div>
          )}

          {/* STEP 0: MAIN MENU */}
          {closureStep === 0 && (
            <>
              {/* Menu Links */}
              <div className="flex-1 flex flex-col items-center justify-center space-y-10 text-2xl font-medium">
                <a href="/#features" onClick={toggleMenu}>
                  Features
                </a>
                <a href="/#faqs" onClick={toggleMenu}>
                  FAQs
                </a>
                <Link to="/about-company" onClick={toggleMenu}>
                  About us
                </Link>

                {/* WhatsApp Styled Button */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FC4C01] text-white font-codec-regular font-normal px-8 py-3 rounded-[8px] flex items-center gap-2 text-xl"
                >
                  <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
                  Order Now!
                </a>
              </div>

              {/* Footer Link */}
              <div className="text-center pb-10">
                <button
                  onClick={() => setClosureStep(1)}
                  className="text-red-500 text-sm font-light italic"
                >
                  *Close your account
                </button>
              </div>
            </>
          )}

          {/* ACCOUNT CLOSURE FLOW (Steps 1 & 2) */}
          {closureStep > 0 && (
            <div className="flex-1 flex flex-col px-4 mt-32">
              <h2 className="text-2xl font-codec-regular font-bold mb-4">
                {closureStep === 1 ? "Account Closure" : "Check Mail for OTP"}
              </h2>

              {/* Shared Progress Bar for Smooth Transition */}
              <div className="flex w-[200px] gap-2 mb-8">
                {/* Bar 1: Always Orange */}
                <div className="h-1 flex-1 bg-[#FC4C01] rounded-full"></div>
                {/* Bar 2: Gray -> Orange Transition */}
                <div
                  className={`h-1 flex-1 rounded-full transition-colors duration-500 ease-in-out ${
                    closureStep >= 2 ? "bg-[#FC4C01]" : "bg-gray-200"
                  }`}
                ></div>
              </div>

              {/* Step 1 Form */}
              {closureStep === 1 && (
                <>
                  <input
                    type="email"
                    placeholder="Enter registered email"
                    className="w-full bg-transparent border border-#000000A6 rounded-md p-4 mb-6 focus:outline-none focus:border-orange-500 placeholder:text-gray-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <button
                    onClick={() => setClosureStep(2)}
                    className="w-full bg-black text-white py-4 rounded-[8px] font-medium text-lg"
                  >
                    Continue
                  </button>
                </>
              )}

              {/* Step 2 Form */}
              {closureStep === 2 && (
                <>
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    className="w-full bg-transparent border border-#000000A6 rounded-md p-4 mb-6 focus:outline-none focus:border-orange-500 placeholder:text-gray-500"
                  />

                  <button
                    onClick={() => {
                      alert("Account closure request sent!");
                      toggleMenu();
                    }}
                    className="w-full bg-black text-white py-4 rounded-[8px] font-medium text-lg"
                  >
                    Close Account
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Nav;
