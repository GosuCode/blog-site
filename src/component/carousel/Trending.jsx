import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';

const Trending = () => {

    const [MyData, setMyData] = useState([])

    const getData = () => {
        try {
            axios
                .get("https://kalikablog.onrender.com/blog")
                .then((res) => {
                    // console.log(res.data);
                    setMyData(res.data.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='col-start-2 col-span-10 h-96'>
            <Carousel>
                {MyData.map((val, i) => {
                    return (
                        <Carousel.Item key={i} className="h-96">
                            <div className="grid grid-cols-2">
                                <div className="h-[385px] mr-10 rounded-md bg-green-500 col-span-1"
                                    style={{
                                        backgroundImage: `url(${val.image[0].path})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"
                                    }} />
                                <div className="col-start-2">
                                    <div className='pt-12'>
                                        <div className='mb-4'>
                                            <span className='font-bold'>{val.sub_title}</span>
                                            <span className='text-[#999]'>- {val.date}</span>
                                        </div>
                                        <p className='text-[40px] font-bold'>{val.title}</p>
                                        <p className='mb-4 text-[#999] line-clamp-3'>
                                            {val.description}
                                        </p>
                                        <div className='flex'>
                                            <div className='rounded-full w-12 bg-fuchsia-600 mr-[10px]'></div>
                                            <div><strong>Alember Shreesh</strong><br />
                                                <span className='text-[#999]'>CEO and Founder</span></div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </div>
        // <Carousel className='bg-blue-200 col-start-2 col-span-10'>
        //     <Carousel.Item interval={1500}>
        //         <div className='h-48'>hello3</div>
        //     </Carousel.Item>
        //     <Carousel.Item interval={1500}>
        //         <div className='h-48'>hello2</div>
        //     </Carousel.Item>
        //     <Carousel.Item interval={1500}>
        //         <div className='h-48'>hello</div>
        //     </Carousel.Item>
        // </Carousel>
    );
}

export default Trending;
