'use client'
import { useState } from "react";

const faqs = [
  {
    q: "What material is this T-shirt made of?",
    a: "This T-shirt is made from 100% premium cotton for all-day comfort."
  },
  {
    q: "Is it suitable for daily wear?",
    a: "Yes, it is designed for everyday use and long-lasting comfort."
  },
  {
    q: "Does the color fade after washing?",
    a: "No, the fabric is treated to prevent color fading."
  },
  {
    q: "What sizes are available?",
    a: "Sizes are available from S to XXL. Please check the size chart."
  }
];

export default function Question() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-xs h-96 p-4 space-y-3 text-[13px] bg-white rounded-xl shadow-md">
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className=" rounded-lg overflow-hidden"
          >
            
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className={`w-full flex justify-between items-center px-4 py-3 text-left font-medium transition
                ${isOpen ? "bg-gray-100" : "bg-white hover:bg-gray-50"}
              `}
            >
              <span>{item.q}</span>
              <span className="text-lg">{isOpen ? "−" : "+"}</span>
            </button>

            
            {isOpen && (
              <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
