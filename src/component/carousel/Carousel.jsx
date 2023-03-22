import React from 'react'

const Carousel = () => {

  return (
    <div className='pt-12 px-3'>
      <div className='flex mb-12 mx-[-12px] justify-center'>
        <h2 className='mb-2 px-3 text-center font-bold text-4xl w-[60%]'>Trending</h2>
      </div>
        {/* big div */}
        <div className='flex justify-between mx-20'>
          {/* img */}
          <div className='w-[440px] h-[385px] mr-10 rounded-md bg-amber-500'></div>
          {/* side div  */}
          <div className='w-[60%] pt-12'>
            <div className='mb-4'>
            <span className='font-bold'>Business,Travel</span> <span className='text-[#999]'>- July 2, 2022</span>
            </div>
            <p className='text-[40px] font-bold'>Your most unhappy customers are your greatest source of learning.</p>
            <p className='mb-4 text-[#999]'>
            Far far away, behind the word mountains, far from the countries
            hello and yellow, there live the blind texts. Separated
            they live in book right at the coast of the Semantics,
            a large language ocean.
            </p>
            <div className='flex'>
              <div className='rounded-full w-12 bg-fuchsia-600 mr-[10px]'></div>
              <div><strong>Hello Campbell</strong><br />
              <span className='text-[#999]'>CEO and Founder</span></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Carousel
