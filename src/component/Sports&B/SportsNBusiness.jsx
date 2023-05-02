import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const SportsNBusiness = () => {
    const url = 'https://kalikablog.onrender.com/blog';
    const [data, setData] = useState([

    ])

    const GetBlog = async () => {
        try {
            await axios.get(url).then(res => {
                if (res.status === 200) {
                    setData(res.data.data)
                }
            }).catch(err => {
                console.log(err);
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        GetBlog();
    }, [])
    return (
        <div>
            <div className='grid grid-cols-2'>
                {
                    data.map((val, i) => {
                        return <div key={i} className=''>
                            <div className='w-full group overflow-clip mt-12 grid grid-cols-6 pl-16'>
                                <div
                                    className='h-[100px] w-[150px] rounded-md bg-lime-500 cursor-pointer'
                                    style={{
                                        backgroundImage: `url(${val.image[0].path})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"
                                    }} />
                                <div className='px-3 py-3 col-start-3 col-span-4'>
                                    <div className='mb-1'><span>Business, Travel</span> <span>- July 2, 2023</span></div>
                                    <h2 className='mb-4 font-bold'>{val.title}</h2>
                                    <Link to={`/viewmore/${val._id}`}>
                                        <div className='mb-4 line-clamp-2' dangerouslySetInnerHTML={{ __html: val.description }} />
                                    </Link>
                                    <div className='flex'>
                                        <div className='rounded-full w-12 bg-cyan-600 mr-[10px]'
                                            style={{
                                                backgroundImage: `url(${val.image[0].path})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center"
                                            }}></div>
                                        <div><strong>Alember Shreesh</strong><br />
                                            <span>CEO and Founder</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default SportsNBusiness
