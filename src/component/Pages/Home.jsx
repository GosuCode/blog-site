import React from 'react'
import Trending from '../carousel/Trending'

const Home = () => {
    return (
        <div className=' grid grid-cols-12'>
            <h2 className='text-4xl font-bold my-12 col-start-6'>Trending</h2>
            <Trending />
        </div>
    )
}

export default Home
