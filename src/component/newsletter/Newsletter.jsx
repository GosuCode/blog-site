import React from 'react'

const Newsletter = () => {
  return (
    <div>
        <div>
            <h2>Subscribe to newsletter</h2>
        </div>
        <div>
            <input placeholder='Enter your email'
            className='focus:outline-none w-[300px] border-solid border-2
            border-[#ccc] rounded-md h-[38px] px-[20px]'/>
            <button className='rounded bg-[#f79918] text-white'>SUBSCRIBE</button>
        </div>
    </div>
  )
}

export default Newsletter
