import React from 'react'
import{features} from "../constants"

const FeatureSection = () => {
  return (
    <div id='Features' className="relative  border-neutral-800 min-h-[600px]">
    <div className="text-center">
    <h2 className="text-2xl sm:text-3xl lg:text-5xl text-center text-black-500 tracking-wide font-bold">
        Features
      </h2>
    </div>
    <div className="flex flex-wrap mt-10 lg:mt-20">
      {features.map((feature, index) => (
        <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
          <div className="flex">
            <div className="flex mx-6 h-10 w-10 p-2 bg-blue-100 text-black justify-center items-center rounded-full">
              {feature.icon}
            </div>
            <div>
              <h5 className="mt-1 mb-6 text-xl text-blue-700 font-semibold">{feature.text}</h5>
              <p className="text-md p-2 mb-10 lg:mb-20 text-neutral-500">
                {feature.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};
  
export default FeatureSection