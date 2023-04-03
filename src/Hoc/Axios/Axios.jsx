const { default: axios } = require("axios")


export const getBlog = async () => {
    const res = await axios.get("https://kalikablog.onrender.com/blog");
    return res.data.data;
}
