import React, { useEffect, useState } from 'react'
import { getDomain } from './MentorService'
const useDomain = () => {
    const [domain, setDomain] = useState([]);
    const getDomains = async () =>{
        await getDomain().then((res)=> {
            console.log(res.data);
            const response = res.data;
            const transformedValues = response?.map((item) => ({
                id: item.id,
                value: item.name,
              
              }));
            setDomain(transformedValues);
        })
    }
    useEffect(()=>{
        getDomains();
    },[])
  return domain;
}

export default useDomain