import { Menu, Table } from '@mantine/core';
import { IconDotsVertical } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react'
import MenuDropdown from './MenuDropdown';
import { deleteMentorData } from './MentorService';
import useMentors from './useMentors';

const TableDetails = () => {

const mentorData = useMentors();
const [mentors, setMentors] = useState(mentorData)

   // delete selected mentor data
   const handleDataReceived = async (id) => {
    await deleteMentorData(id);
    // Update the mentorData state if necessary
    setMentors((prevMentorData) =>
      prevMentorData.filter((data) => data.id !== id)
    );
  };
    const rows = mentors.map((data) => (
     
        <Table.Tr key={data.id}>
          <Table.Td>{data.firstName}</Table.Td>
          <Table.Td>{data.lastName}</Table.Td>
          <Table.Td>{data.emailId}</Table.Td>
          <Table.Td>{data.domain}</Table.Td>
          <Table.Td>
          <Menu shadow="md" width={120} position="bottom-end">
          <Menu.Target>
            <IconDotsVertical />
          </Menu.Target>
          <MenuDropdown data={data} onDataReceived={handleDataReceived} />
          </Menu>
          </Table.Td>

        </Table.Tr>
      ));
      useEffect(()=>{
        setMentors(mentorData)
      },[mentorData])
    
      return (
        <Table >
          <Table.Thead>
            <Table.Tr>
              <Table.Th>First Name</Table.Th>
              <Table.Th>Last Name</Table.Th>
              <Table.Th>Email Id</Table.Th>
              <Table.Th>Domain</Table.Th>
              <Table.Th></Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>)
}

export default TableDetails