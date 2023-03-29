import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Cards2 = () => {
    const [data, setData] = useState([

    ])

    const GetBlog = async () => {
        try {
            await axios.get('https://kalikablog.onrender.com/blog').then(res => {
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
        <div className='grid grid-cols-3 w-11/12 mx-auto gap-2 pt-28'>
            {console.log('working?')}
            {
                data.map((val, i) => {
                    return <div key={i}>
                        <div className='w-full shadow-sm hover:shadow-lg group overflow-clip shadow-gray-300 border border-gray-300'>
                            <div className='w-full'>
                                <div className='h-[280px] w-full bg-lime-500 group-hover:scale-105 transition-all duration-300'
                                    style={{
                                        backgroundImage: `url(${val.image[0].path})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"
                                    }} />
                                <div className='px-3 py-3'>
                                    <div className='mb-1'><span>Business, Travel</span> <span>- July 2, 2023</span></div>
                                    <h2 className='mb-4'>{val.title}</h2>
                                    <div className='mb-4 line-clamp-3' dangerouslySetInnerHTML={{ __html: val.description }} />
                                    {/* dangerouslySetInnerHTML used to include tags*/}
                                    <div className='flex'>
                                        <div className='rounded-full w-12 bg-cyan-600 mr-[10px]'></div>
                                        <div><strong>Alember Shreesh</strong><br />
                                            <span>CEO and Founder</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Cards2
