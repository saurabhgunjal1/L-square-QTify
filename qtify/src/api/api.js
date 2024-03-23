import axios from "axios"

export const fetchTopalbums = async()=>{
    try {
        const response =await axios.get(`https://qtify-backend-labs.crio.do/albums/top`);
        return response.data;
    } catch (e) {
        console.error(e);
    }
};
export const fetchNewalbums = async()=>{
    try {
        const response =await axios.get(`https://qtify-backend-labs.crio.do/albums/new`);
        return response.data;
    } catch (e) {
        console.error(e);
    }
};
export const fetchsongs = async()=>{
    try {
        const response =await axios.get(`https://qtify-backend-labs.crio.do/songs`);
        return response.data;
    } catch (e) {
        console.error(e);
    }
};
export const fetchfilters = async()=>{
    try {
        const response =await axios.get(`https://qtify-backend-labs.crio.do/genres`);
        return response.data;
    } catch (e) {
        console.error(e);
    }
};