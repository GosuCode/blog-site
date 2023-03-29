import axios from "axios";
import { useEffect, useState } from "react";

const Trending = () => {
    const [blogs, setBlogs] = useState()

    const getData = () => {
        try {
            axios
                .get("https://kalikablog.onrender.com/blog")
                .then((res) => {
                    // console.log(res.data);
                    setBlogs(res.data.data);
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
        <div>
            {
                blogs.map((val, i) => {
                    return (
                        <div key={i}>{val.description}</div>
                    )
                })
            }
        </div>
    )
}

export default Trending
