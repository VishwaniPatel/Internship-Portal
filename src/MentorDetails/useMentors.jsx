import React, { useEffect, useState } from 'react'
import { getMentorData } from './MentorService';

const useMentors = () => {
    const [mentors, setMentors] = useState([]);
    const getMentors = async () =>{
        await getMentorData().then((res)=> {
            console.log(res);
            const response = res.data;
            setMentors(response);
        })
    }
    useEffect(()=>{
        getMentors();
    },[])
  return mentors;
}

export default useMentors