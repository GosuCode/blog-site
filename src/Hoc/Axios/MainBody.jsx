import React, { useEffect, useState } from 'react'
import Cards from '../../component/post/Cards'
import { getBlog } from './Axios'

const MainBody = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    let data = getBlog();
    setData(data);
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

    </div>
  )
}

export default MainBody
