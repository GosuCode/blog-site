import React from 'react'
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineTwitter, AiFillYoutube} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='text-center py-[70px]'>
            <ul className='flex justify-center gap-1'>
                <li className='bg-[#ccc] p-[12px] rounded-[40%] hover:bg-[#f79918] hover:text-white h-10 w-10 '><FaFacebookF/></li>
                <li className='bg-[#ccc] p-[12px] rounded-[40%] hover:bg-[#f79918] hover:text-white h-10 w-10 '><AiOutlineTwitter/></li>
                <li className='bg-[#ccc] p-[12px] rounded-[40%] hover:bg-[#f79918] hover:text-white h-10 w-10 '><FaLinkedinIn/></li>
                <li className='bg-[#ccc] p-[12px] rounded-[40%] hover:bg-[#f79918] hover:text-white h-10 w-10 '><AiFillYoutube/></li>
            </ul>
            <div className='mb-10'>
            <p className='m-4'>Copyright ©2023 All rights reserved | This template is made with<span> &hearts; </span>by <br />
             Colorlib</p>
             <div>
              <span className='m-2'>Terms & Condition</span>/<span className='m-2'>Privacy Policy</span>
             </div>
             </div>
    </div>
  )
}

export default Footer
