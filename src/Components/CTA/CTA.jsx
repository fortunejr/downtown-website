import React from "react";
import { MessageCircle } from "lucide-react";
import { faq, order } from "../../imports";

const WhatsAppOrderSection = () => {
  // Replace with your actual WhatsApp number
  const whatsappNumber = "2349023168568"; // Format: country code + number (no + or spaces)
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="w-full bg-[#EFFFF9] py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Order Food on WhatsApp Image - Aligned Left */}
        <div className="mb-6">
          <img
            src={order}
            alt="Order food on WhatsApp"
            className="w-auto h-auto max-w-[300px] md:max-w-[400px]"
          />
        </div>

        {/* Chat Downtown Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex font-montserrat items-center gap-2 bg-[#FF5722] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#F4511E] transition-colors shadow-md mb-8"
        >
          Chat Downtown
          <MessageCircle size={20} />
        </a>

        {/* FAQ/Phone Image - Large */}
        <div className="mt-8">
          <img
            src={faq}
            alt="FAQ"
            className="w-full max-w-[500px] md:max-w-[600px] h-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default WhatsAppOrderSection;
