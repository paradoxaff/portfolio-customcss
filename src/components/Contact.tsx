import React from 'react'
import { IoMail } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='Contact' className='pt-2 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-6xl' data-aos="zoom-in-up">Get in touch</h2>
            <p className='text gray-600 text-[20px] pt-2' data-aos="zoom-in-up">
                Drop me a line,give me a call,or send me a message by submitting the form.
            </p>
            <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                <IoMail size={30} /> waheedaffan@25gmail.com
            </div>
            <div className='flex gap-3 items-center' data-aos="zoom-in-up">
            <BsFillTelephoneFill size={30} /> +923112479711
            </div>
        </div>
        <div className='space-y-8' >
            <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                <label htmlFor="name">Name</label>
                <input type="text" 
                className='h-[40px] bg-transparent border-accent'
                id='name'/>
            </div>
            <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                <label htmlFor="email">Email</label>
                <input type="text" 
                className='h-[40px] bg-transparent border-accent'
                id='email'/>
            </div>
            <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                <label htmlFor="message">Message</label>
                <textarea
                className='h-[100px] bg-transparent border-accent'
                id='message'>
                </textarea>
            </div>
            <button className='bg-gradient-to-r from-violet-600 to-indigo-600 p-2 px-6'data-aos="zoom-in-up">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
