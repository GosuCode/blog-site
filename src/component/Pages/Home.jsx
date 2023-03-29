import React from 'react'
import Cards2 from '../../component/post/Cards2'
import Trending from '../../component/carousel/Trending'

const Home = () => {
    return (
        <div>
            <div className=' grid grid-cols-12'>
                <h2 className='text-4xl font-bold my-12 col-start-6'>Trending</h2>
                <Trending />
            </div>
            <div><Cards2 /></div>
            <div className=' grid grid-cols-12'>
                <h2 className='text-4xl font-bold mt-12 col-start-5 col-span-4'>Most Popular Post</h2>
            </div>
        </div>
    )
}

export default Home
