import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Sidebar = () => {
  const [sideNav, setSideNav] = useState(false)
  const handleSideNav = () => setSideNav(!sideNav)

  return (
    <div className=''>
      <div className='text-black' onClick={handleSideNav}>
        {!sideNav ? < AiOutlineMenu size={30} /> : < AiOutlineMenu size={30} />}
      </div>
      <div
        className={sideNav ? 'fixed top-0 right-0 h-full w-[250px] border-r border-l-[#ccc] ' : 'fixed right-[-100%]'}>
        <div className='bg-white shadow-md h-screen pt-5 px-5 pb-[150px]'>
          <span className='absolute top-0 right-2 text-black' onClick={handleSideNav}>
            {!sideNav ? '' : <AiOutlineClose size={40} />}
          </span>
          <div className='w-full px-5 h-9'></div>
          <ul>
            <li className='hover:text-[#f79918] py-[5px] px-5 font-normal'>Home</li>
            <li className='hover:text-[#f79918] py-[5px] px-5 font-normal'>Categories
              <ul className='hidden'>
                <li>Travel</li>
                <li>Food</li>
                <li>Technology</li>
                <li>Business</li>
              </ul>
            </li>
            <li className='hover:text-[#f79918] py-[5px] px-5 font-normal'>Travel</li>
            <li className='hover:text-[#f79918] py-[5px] px-5 font-normal'>Food</li>
            <li className='hover:text-[#f79918] py-[5px] px-5 font-normal'>Technology</li>
            <li className='hover:text-[#f79918] py-[5px] px-5 font-normal'>Business</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
