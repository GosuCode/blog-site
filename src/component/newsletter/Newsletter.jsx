import React from 'react'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { BsTwitter, BsYoutube } from 'react-icons/bs'

const Newsletter = () => {
  return (
    <div className='text-center'>
      <div className='py-12'>
        <h2>Subscribe to newsletter</h2>
        <div>
          <input placeholder='Enter your email'
            className='focus:outline-none w-[300px] border-solid border-2
            border-[#ccc] rounded-md h-[38px] px-[20px]'/>
          <button className='rounded bg-[#f79918] text-white'>SUBSCRIBE</button>
        </div>
      </div>
      <div className='py-20'>
        <div className='flex justify-center'>
          <div><FaFacebookF /></div>
          <div><BsTwitter /></div>
          <div><FaLinkedinIn /></div>
          <div><BsYoutube /></div>
        </div>

        <p>Copyright ©2023 All rights reserved | This template is made with &hearts; by Colorlib</p>
      </div>
    </div>
  )
}

export default Newsletter
