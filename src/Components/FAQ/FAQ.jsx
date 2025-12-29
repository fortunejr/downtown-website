import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faq } from "../../imports";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is downtown?",
      answer:
        "Downtown is a food delivery service that allows you to order food via WhatsApp chat. Simply chat with us to place your order and get it delivered fast.",
    },
    {
      question: "Is downtown secure?",
      answer:
        "Yes, downtown is completely secure. We use encrypted payment systems and protect your personal information with industry-standard security measures.",
    },
    {
      question: "How do i use downtown?",
      answer:
        "Our delivery time typically ranges from 30-45 minutes depending on your location and restaurant preparation time. We strive to deliver your food as quickly as possible.",
    },
    {
      question: "how long does an order take?",
      answer:
        "Our delivery time typically ranges from 30-45 minutes depending on your location and restaurant preparation time. We strive to deliver your food as quickly as possible.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faqs" className="w-full bg-[#F5F6F6] pb-40 pt-16 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        {/* FAQ Header */}
        <div className="text-center mb-2">
          <p className="font-codec-heavy leading-[0.84] text-4xl md:text-6xl lg:text-[64px]">
            <span className="text-[#FC4C01]">FREQUENTLY</span>
          </p>
          <p className="font-codec-heavy leading-[0.84] text-4xl md:text-6xl lg:text-[64px]">
            <span> ASKED</span>
            <span className="text-[#C2C2C2]"> QUESTIONS</span>
          </p>
        </div>
        {/* FAQ Subtitle */}
        <div className="text-center mb-8">
          <p className="text-gray-600 font-montserrat leading-[1.2] font-normal text-base md:text-lg mx-auto">
            Find quick answers to the questions we hear most often.
          </p>
        </div>
        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F5F6F6] transition-colors"
              >
                <div className="w-[70%] flex items-center">
                  <span className="font-montserrat text-left font-semibold text-gray-900 text-sm md:text-lg pr-4">
                    {faq.question}
                  </span>
                </div>
                {openIndex === index ? (
                  <Minus size={24} className="text-gray-700 flex-shrink-0" />
                ) : (
                  <Plus size={24} className="text-gray-700 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 font-montserrat text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
