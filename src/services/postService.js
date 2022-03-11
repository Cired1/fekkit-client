import axios from "axios";

const API_URL = "http://localhost:8000/api/posts";

//Get posts
const getPosts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
}

//Get post
const getPost = async (id) => {
    const response = await axios.get(API_URL + `/${id}`);
    return response.data;
}

const postService = {
    getPosts,
    getPost
}

export default postService;