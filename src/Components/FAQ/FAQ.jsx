import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { faq, faq2 } from '../../imports'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What is downtown?",
      answer: "Downtown is a food delivery service that allows you to order food via WhatsApp chat. Simply chat with us to place your order and get it delivered fast."
    },
    {
      question: "Is it secure?",
      answer: "Yes, downtown is completely secure. We use encrypted payment systems and protect your personal information with industry-standard security measures."
    },
    {
      question: "How fast is the delivery",
      answer: "Our delivery time typically ranges from 30-45 minutes depending on your location and restaurant preparation time. We strive to deliver your food as quickly as possible."
    },
    {
      question: "Will downtown understand my order ?",
      answer: "Absolutely! Our AI-powered system is designed to understand natural language. Just chat with us like you would with a friend, and we'll take care of the rest."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full bg-white py-12 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        {/* FAQ Header Image */}
        <div className="text-center mb-8">
          <img
            src={faq2}
            alt="Frequently Asked Questions"
            className="w-full max-w-2xl mx-auto h-auto"
          />
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#F3E8FF] rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#E9D5FF] transition-colors"
              >
                <span className="font-semibold text-gray-900 text-base md:text-lg pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus size={24} className="text-gray-700 flex-shrink-0" />
                ) : (
                  <Plus size={24} className="text-gray-700 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ