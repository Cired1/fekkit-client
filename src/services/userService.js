import axios from "axios";

const API_URL = "http://localhost:8000/api/users";

//Get user
const getUser = async (id) => {
    const response = await axios.get(API_URL + `/${id}`);
    return response.data;
}

const userService = {
    getUser
}

export default userService;