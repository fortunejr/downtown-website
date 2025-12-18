import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../imports";

const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] font-montserrat text-white pt-32 pb-10 px-6 md:px-16 relative -mt-8">
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
            <Link to="/privacy-policy">
              <p>Privacy Policy</p>
            </Link>
            <Link to="/terms-of-use">
              <p>Terms of Use</p>
            </Link>
            <Link to="/about-company">
              <p>About Company</p>
            </Link>
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
      <div className="text-center font-montserrat text-xs text-gray-400 border-t border-gray-800 pt-6">
        © 2025 HeyChat International Limited. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
