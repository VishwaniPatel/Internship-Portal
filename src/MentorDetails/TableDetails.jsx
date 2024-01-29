import { Table } from '@mantine/core';
import React from 'react'

const TableDetails = ({mentors}) => {
  console.log(mentors);
    const rows = mentors.map((data) => (
        <Table.Tr key={data.id}>
          <Table.Td>{data.firstName}</Table.Td>
          <Table.Td>{data.lastName}</Table.Td>
          <Table.Td>{data.emailId}</Table.Td>
          <Table.Td>{data.domain}</Table.Td>
        </Table.Tr>
      ));
    
      return (
        <Table >
          <Table.Thead>
            <Table.Tr>
              <Table.Th>First Name</Table.Th>
              <Table.Th>Last Name</Table.Th>
              <Table.Th>Email Id</Table.Th>
              <Table.Th>Domain</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>)
}

export default TableDetails