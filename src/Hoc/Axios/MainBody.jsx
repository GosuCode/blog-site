import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from '../../component/post/Cards'
// import Categories from '../../component/Pages/Categories'
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
            <Cards key={i} image={val.image[0].path} title={val.title} description={val.description} />
          )
        })
      }


      {/* {
        data.map((val, i) => {
          console.log(val.image)
          return (
            <Categories key={i} image={val.image[0].path} title={val.title} description={val.description} author={val.author_name} />
          )
        })
      } */}

    </div>
  )
}

export default MainBody
