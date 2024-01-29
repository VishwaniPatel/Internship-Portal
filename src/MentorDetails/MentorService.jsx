import axios from "axios";
const baseUrl = "http://localhost:3000/";
// to get user details

export const getMentorData = async () => {
  return await axios.get(baseUrl + "mentors");
};

export const getDomain = async () => {
    return await axios.get(baseUrl + "domain");
}

export const addMentor = async (mentor) =>{
    const url = baseUrl + "mentors";
    return await axios.post(url, mentor);
}