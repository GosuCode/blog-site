import React from 'react'

const Body = ({ title, description, image }) => {
  return (
    <div className='flex w-full shadow-sm hover:shadow-lg group overflow-clip shadow-gray-300 border border-gray-300'>
      <div className='w-full'>
        <div className='h-[280px] w-full bg-lime-500 group-hover:scale-105 transition-all duration-300'
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}></div>
        <div className='px-3 py-3'>
          <div className='mb-1'><span>Business, Travel</span> <span>- July 2, 2023</span></div>
          <h2 className='mb-4'>{title}</h2>
          <div className='mb-4 line-clamp-3' dangerouslySetInnerHTML={{ __html: description }} />
          {/* https://blog.logrocket.com/using-dangerouslysetinnerhtml-in-a-react-application/ */}
          <div className='flex'>
            <div className='rounded-full w-12 bg-cyan-600 mr-[10px]'></div>
            <div><strong>author_name</strong><br />
              <span>CEO and Founder</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body
