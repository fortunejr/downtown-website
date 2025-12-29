import React from "react";
import { qr } from "../../imports";

function qr_section() {
  const whatsappNumber = "2349023168568";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  return (
    <div className="w-full bg-[#FFFFFF] py-32 px-6 md:px-16">
      <div className="w-full flex flex-col items-center gap-6 justify-center">
        <a href={whatsappLink} className="mb-8">
          <img src={qr} alt="QR Button" />
        </a>
        <p className="text-[#454545] font-montserrat font-thin max-w-sm md:max-w-lg text-center text-xl leading-relaxed px-8">
          scan or just Tap! the QR to get started
        </p>
      </div>
    </div>
  );
}

export default qr_section;
