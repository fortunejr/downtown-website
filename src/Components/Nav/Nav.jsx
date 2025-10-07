import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // modern icons for the hamburger

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center mx-auto mt-8 px-6 md:px-10 py-4 w-[90%] md:w-[85%] bg-white rounded-full shadow-[0_0_25px_rgba(0,0,0,0.1)]">
      {/* Left links (hidden on mobile) */}
      <div className="hidden md:flex items-center space-x-8 text-orange-600 text-sm font-semibold">
        <Link to="#merchants" className="hover:text-orange-700 transition">
          FOR MERCHANT/VENDORS
        </Link>
        <Link to="#how-it-works" className="hover:text-orange-700 transition">
          HOW IT WORKS
        </Link>
      </div>

      {/* Center logo/text (clickable link) */}
      <Link
        to="/"
        className="text-2xl md:text-3xl font-extrabold text-orange-600 absolute left-1/2 transform -translate-x-1/2 hover:text-orange-700 transition"
      >
        downtown
      </Link>

      {/* Right links (hidden on mobile) */}
      <div className="hidden md:flex items-center space-x-6 text-orange-600 text-sm font-semibold">
        <Link to="#contact" className="hover:text-orange-700 transition">
          CONTACT US
        </Link>
        <Link
          to="#get-started"
          className="bg-orange-500 text-white px-5 py-2 rounded-full shadow-[0_0_15px_rgba(255,165,0,0.4)] hover:bg-orange-600 transition"
        >
          GET STARTED
        </Link>
      </div>

      {/* Hamburger icon (mobile only) */}
      <button
        className="md:hidden text-orange-600"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.1)] mt-3 py-6 flex flex-col items-center space-y-5 text-orange-600 font-semibold text-sm z-50">
          <Link
            to="#merchants"
            className="hover:text-orange-700 transition"
            onClick={() => setMenuOpen(false)}
          >
            FOR MERCHANT/VENDORS
          </Link>
          <Link
            to="#how-it-works"
            className="hover:text-orange-700 transition"
            onClick={() => setMenuOpen(false)}
          >
            HOW IT WORKS
          </Link>
          <Link
            to="#contact"
            className="hover:text-orange-700 transition"
            onClick={() => setMenuOpen(false)}
          >
            CONTACT US
          </Link>
          <Link
            to="#get-started"
            className="bg-orange-500 text-white px-6 py-2 rounded-full shadow-[0_0_15px_rgba(255,165,0,0.4)] hover:bg-orange-600 transition"
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
