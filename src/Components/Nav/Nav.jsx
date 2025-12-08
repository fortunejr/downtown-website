import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { logo2 } from "../../imports";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center w-full px-4 md:px-10 py-4">
      
      {/* LEFT — Logo (Bigger on Mobile, Aligned Left) */}
      <Link to="/" className="flex items-center">
        <img
          src={logo2}
          alt="logo"
          className="w-32 sm:w-36 md:w-48 lg:w-56" // bigger on mobile
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
      <div className="hidden md:flex items-center space-x-8 text-orange-600 font-semibold text-sm">
        <Link to="#merchants" className="hover:text-orange-700">FOR MERCHANT/VENDORS</Link>
        <Link to="#how-it-works" className="hover:text-orange-700">HOW IT WORKS</Link>
        <Link to="#contact" className="hover:text-orange-700">CONTACT US</Link>
        <Link
          to="#get-started"
          className="bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-600 shadow-[0_0_15px_rgba(255,165,0,0.4)]"
        >
          GET STARTED
        </Link>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-6 flex flex-col items-center space-y-5 text-orange-600 font-semibold text-sm z-50">
          <Link to="#merchants" onClick={() => setMenuOpen(false)}>FOR MERCHANT/VENDORS</Link>
          <Link to="#how-it-works" onClick={() => setMenuOpen(false)}>HOW IT WORKS</Link>
          <Link to="#contact" onClick={() => setMenuOpen(false)}>CONTACT US</Link>
          <Link
            to="#get-started"
            className="bg-orange-500 text-white px-6 py-2 rounded-full shadow-[0_0_15px_rgba(255,165,0,0.4)] hover:bg-orange-600"
            onClick={() => setMenuOpen(false)}
          >
            GET STARTED
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
