import React, { useEffect, useState } from 'react'
import Body from '../../component/post/Body'
import axios from 'axios'
const MainBody = () => {
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
    <div className='grid grid-cols-3 w-11/12 mx-auto gap-4 pt-28'>

      {
        data.map((val, i) => {
          console.log(val.image)
          return (
            <Body key={i} image={val.image[0].path} title={val.title} description={val.description} author={val.author_name} />
          )
        })
      }

    </div>
  )
}

export default MainBody
