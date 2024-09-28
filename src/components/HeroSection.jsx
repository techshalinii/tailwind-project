import React from 'react'
import img from "../assets/img.png";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center ">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide pl-4 pr-4">
        Find the Perfect Domain for Your Business with
            <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text"> 
                {" "}  Namezar
            </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Premium domain brokerage services to elevate your brand online.
      </p>
      <div className="flex justify-center my-10">
        <a href="#" className='bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-md text-white '>Get Started</a>
      </div>
      <div className="p-2 w-full object-center lg:w-1/2">
      <img src={img} alt="image" />
      </div>
    </div>
  )
}

export default HeroSection
