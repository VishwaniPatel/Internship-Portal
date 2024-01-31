import React, { useEffect } from 'react'
import useMentors from './useMentors'
import TableDetails from './TableDetails';
import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';
const MentorDetails = () => {
    // const mentors = useMentors();
    // useEffect(()=>{
    //     console.log(mentors);
    // },[mentors])
  
  return (
<>
<Link to="/add-mentor">
    <Button>Add Mentor</Button>
</Link>
  <TableDetails />
</>
  )
}

export default MentorDetails