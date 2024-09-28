import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { faqs } from "../constants"; 

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id='Faqs' className="flex flex-col justify-center mb-10 items-center min-h-[400px] mt-10">
      <h2 className="text-2xl sm:text-3xl lg:text-5xl text-center mt-0 my-10 lg:my-10 font-bold">
        FAQs
      </h2>
      <div className="grid grid-cols-1 gap-2 w-full sm:w-3/4 lg:w-1/2 sm:gap-4 mx-auto">
        {faqs.map((item, index) => (
          <div key={index} className="group rounded border border-gray-200 bg-blue-100 p-2 shadow-md">
            <dt className="flex justify-between items-center">
              <p className="font-semibold text-sm">{item.question}</p>
              <button onClick={() => toggleFaq(index)}>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6" />
                ) : (
                  <ChevronDown className="w-6 h-6" />
                )}
              </button>
            </dt>
            {openIndex === index && (
              <dd className="mt-2 text-gray-700">
                <p>{item.answer}</p>
              </dd>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
