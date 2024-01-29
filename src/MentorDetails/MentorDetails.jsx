import React, { useEffect } from 'react'
import useMentors from './useMentors'
import TableDetails from './TableDetails';
const MentorDetails = () => {
    const mentors = useMentors();
    useEffect(()=>{
        console.log(mentors);
    },[mentors])
  return (
  <TableDetails mentors={mentors}/>
  )
}

export default MentorDetails