import { checklistItems } from "../constants";
import img1 from "../assets/img1.png";
import React from 'react';
const Workflow = () => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl sm:text-3xl lg:text-5xl text-center mt-6 tracking-wide">
        How it 
        <span className="bg-gradient-to-r from-blue-500 to-blue-800  text-transparent bg-clip-text"> 
                {" "}  Works
            </span>?
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12  items-center ">
              <div className="ml-10">
                <h5 className="mt-1 mb-2 text-xl lg:text-3xl text-blue-700">{item.title} </h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-2 w-full lg:w-1/2">
          <img src={img1} alt="img"  />
        </div>
      </div>
    </div>
  );
};

export default Workflow;