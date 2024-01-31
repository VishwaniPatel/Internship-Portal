import React, { useEffect } from 'react'
import { TextInput, Select, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import useDomain from './useDomain';
import { addMentor, getMentorById, updateMentor } from './MentorService';
import { useNavigate, useParams } from 'react-router-dom';
import { DateInput, DatePicker } from '@mantine/dates';
const AddMentorsDetail = () => {
    const domains = useDomain();
    const {id} = useParams();
    const navigate = useNavigate();
    const form = useForm({
        initialValues: {
          firstName: '',
          lastName: "",
          emailId:"",
          domain:"",
          date:""
        },
      });
    const handleFormSubmit = (values) => { 

      if (id) {
        // If ID is present, update the existing mentor
        updateMentor(id, values);
      } else {
        // If no ID is present, add a new mentor
        addMentor(values);
      }
  
      // Navigate back to the main page after submitting the form
      navigate('/');
      };
      useEffect(() => {
        const fetchMentorDetails = async () => {
          if (id) {
            try {
              // Fetch mentor details by ID
              const mentorDetails = await getMentorById(id);
              console.log(mentorDetails.data);
              // Populate the form with fetched details
              form.setValues(mentorDetails.data);
            } catch (error) {
              console.error('Error fetching mentor details:', error);
            }
          }
        };
    
        fetchMentorDetails();
      }, [id]);
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