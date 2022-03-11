import axios from "axios";

const API_URL = "http://localhost:8000/api/communities";

//Get community
const getCommunity = async (id) => {
    const response = await axios.get(API_URL + `/${id}`);
    return response.data;
}

const communityService = {
    getCommunity
}

export default communityService;