import React from 'react'
import{contactDetails} from "../constants"

const ContactUs = () => {
  return (
    <div id='ContactUs' className="relative mt-20 min-h-[50px]">
    <div className="text-center">
    <h2 className="text-2xl sm:text-3xl lg:text-5xl text-center mt-6 tracking-wide">
        Contact
        <span className="bg-gradient-to-r from-blue-500 to-blue-800  text-transparent bg-clip-text"> 
                {" "}  Us
            </span> 
      </h2>
    </div>
    <div className=" mt-10 lg:mt-20">
      {contactDetails.map((contactDetails, index) => (
        <div key={index} className="w-full sm:w-full lg:w-1/2">
          <div className="flex">
            <div className="flex mx-6 h-10 w-10 p-2 bg-blue-100 text-black justify-center items-center rounded-full">
              {contactDetails.icons}
            </div>
            <div>
              <h5 className="mt-1 mb-6 text-xl">{contactDetails.description}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default ContactUs
