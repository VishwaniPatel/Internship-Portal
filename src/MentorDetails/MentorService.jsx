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

export const deleteMentorData = async (id) => {
  const url = baseUrl + "mentors/" + id ;
  return await axios.delete(url);
};

export const getMentorById = async (id) => {
  const url = baseUrl + "mentors/" + id ;
  return await axios.get(url);
}

export const updateMentor = async (id,mentor) =>{
  const url = baseUrl + "mentors/" + id;
  return await axios.put(url, mentor);
}