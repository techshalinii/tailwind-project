import React from 'react'
import Swal from 'sweetalert2'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "508f071c-ccc9-4264-96b0-4abb94cb8cac");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title:"Success",
        text:"Message sent",
        icon:"success"
      });
    }
  };

    return (
        <section className="flex justify-center items-center min-h-[100vh]">
          <form onSubmit={onSubmit} className='max-w-[600px] w-full p-6 shadow-lg text-black m-6 bg-blue-200 rounded-lg'>
              <h2 className='text-4xl text-blue-700 text-center'>Contact Form</h2>
              <div className='mt-10'>
                  <label>Full Name</label>
                  <input type="text" className='w-full h-2/3 transparent border-white rounded-sm p-4 rounded-sm' placeholder='Enter your name'  name='name' required/>
               </div>
               <div className='mt-10'>
                  <label>Email Address</label>
                  <input type="email" className='w-full h-2/3 transparent border-white rounded-sm p-4 rounded-sm' placeholder='Enter your email id' name='email' required/>
               </div>
               <div className='mt-10 items-center'>
                  <label>Your Message</label>
                  <textarea  name="message" className='h-[100px] w-full  resize-none rounded-sm' placeholder='Enter your message' required ></textarea>
               </div>
               <button type='submit' className='mt-6 w-full h-[55px] bg-blue-800 rounded-lg shadow-sm cursor-pointer hover:bg-blue-900 text-white '>Send Message</button>
          </form>
        </section>
    )
  }
  

export default Contact
