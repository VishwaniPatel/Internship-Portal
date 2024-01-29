import React from 'react'
import { TextInput, Select, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import useDomain from './useDomain';
import { addMentor } from './MentorService';
import { useNavigate } from 'react-router-dom';
const AddMentorsDetail = () => {
    const domains = useDomain();
    const navigate = useNavigate();
    const form = useForm({
        initialValues: {
          firstName: '',
          lastName: "",
          emailId:"",
          domain:""
        },
      });
    const handleFormSubmit = (values) => {
       
          addMentor(values);
       navigate("/");
      };
  return (
    <Box maw={340} mx="auto">
    <form onSubmit={form.onSubmit((values) => handleFormSubmit(values))}>
      <TextInput
        withAsterisk
        label="First Name"
        placeholder="Enter First Name"
        {...form.getInputProps('firstName')}
      />
      <TextInput
        withAsterisk
        label="Last Name"
        placeholder="Enter Last Name"
        {...form.getInputProps('lastName')}
      />
      <TextInput
        withAsterisk
        label="Email ID"
        placeholder="Enter Email ID"
        {...form.getInputProps('emailId')}
      />
      
      <Select
      label="Domain"
      placeholder="Select Domain"
      data={domains}
      {...form.getInputProps('domain')}
      onChange={(value) => form.setFieldValue('domain', value)}
    />

     
      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  </Box>
  )
}

export default AddMentorsDetail