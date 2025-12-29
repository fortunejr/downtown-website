import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter } from "lucide-react";
import { downtowntxtjpg } from "../../imports";

const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] font-montserrat text-white pt-20 pb-0 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10 flex flex-col md:items-center">
        {/* MOBILE LAYOUT (< md) */}
        <div className="md:hidden w-full mb-12">
          <div className="grid grid-cols-2 gap-y-10 text-base font-medium text-gray-200">
            {/* Left Column */}
            <div className="space-y-6">
              <Link to="/privacy-policy" className="block hover:text-white">
                Privacy policy
              </Link>
              <Link to="/terms-of-use" className="block hover:text-white">
                Terms of use
              </Link>
            </div>
            {/* Right Column */}
            <div className="space-y-6">
              <Link to="" className="block hover:text-white">
                Downtown for vendors
              </Link>
              <Link to="/about-company" className="block hover:text-white">
                About company
              </Link>
            </div>
          </div>
        </div>

        {/* DESKTOP LAYOUT (>= md) */}
        <div className="hidden md:flex flex-row space-x-12 text-lg font-medium text-gray-200 mb-12">
          <Link to="" className="hover:text-white">
            Downtown for vendors
          </Link>
          <Link to="/terms-of-use" className="hover:text-white">
            Terms of use
          </Link>
          <Link to="/privacy-policy" className="hover:text-white">
            Privacy policy
          </Link>
          <Link to="/about-company" className="hover:text-white">
            About company
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 mb-8 text-gray-400 w-full md:w-auto md:justify-center">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <Twitter size={24} />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-6 w-full"></div>

        {/* Copyright */}
        <div className="text-left md:text-center text-xs text-gray-400 mb-20 md:mb-40 w-full">
          © 2025 Heychat International Limited. All rights reserved.
        </div>
      </div>

      {/* Large Background Text Image */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <img
          src={downtowntxtjpg}
          alt="Downtown"
          className="w-full h-auto lg:h-[240px] object-cover opacity-80"
        />
      </div>
    </footer>
  );
};

export default Footer;
