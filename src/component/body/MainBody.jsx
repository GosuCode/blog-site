import React, { useEffect, useState } from 'react'
import Body from './Body'
import axios from 'axios'
const MainBody = () => {
  const [data, setData] = useState([

  ])

  const GetBlog=()=>{
    try {
      axios.get('https://kalikablog.onrender.com/blog').then(res=>{
        console.log(res.data);
        if(res.status===200){
          setData(res.data.data)
        }
      }).catch(err=>{
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
    <div className='grid grid-cols-3 w-11/12 mx-auto gap-4 pt-28'>
       {/* {[1,2,3,4,5,6,7,8,89,78,78,7,8,7,87].map((val) => (
        <div key={val}>
          <Body/>
          </div>
       ))} */}
       {
       data.map((val,i)=>{
          return <Body key={i} image={val.image[0].path} title={val.title} description={val.description} />
        })
       }


    </div>
  )
}

export default MainBody
