import React from 'react'
import Cards from '../../component/post/Cards'
import Trending from '../../component/carousel/Trending'
import Newsletter from '../newsletter/Newsletter'

const Home = () => {
    return (
        <div>
            <div className='grid grid-cols-3'>
                <h2 className='text-4xl font-bold my-12 col-start-2 text-center'>Trending</h2>
            </div>
            <div className=' grid grid-cols-12'>
                <Trending />
            </div>

            <div className='py-28'><Cards /></div>

            <div className='grid grid-cols-3'>
                <h2 className='text-4xl font-bold my-12 col-start-2 text-center'>Most Popular Post</h2>
            </div>

            <div className='mt-28 w-11/12 grid grid-cols-12 py-28'>
                <Trending />
            </div>

            {/* <div className='mt-28 grid grid-cols-12'>
                <div className='text-4xl col-start-2 col-span-5'>
                    <h2>Sports</h2>
                </div>
                <div className='text-4xl col-start-7 col-span-5'>
                    <h2>Business</h2>
                </div>
            </div> */}
            <Newsletter className="mt-28" />
        </div>
    )
}

export default Home
