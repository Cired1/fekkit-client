import axios from "axios";

const API_URL = "http://localhost:8000/api/communities";

//Get community
const getCommunity = async (id) => {
    const response = await axios.get(API_URL + `/${id}`);
    return response.data;
}

//Create community
const createCommunity = async (data, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, data, config);
    return response.data;
}

const communityService = {
    createCommunity,
    getCommunity
}

export default communityService;