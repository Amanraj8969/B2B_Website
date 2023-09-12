import React, { useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button,
  useToast,
} from '@chakra-ui/react';

const initialCompanyData = {
  name: '',
  description: '',
  image: '',
  mobileNumber: '',
  email: '',
  gst: '', // Add GST field
};

const CompanyDetailsForm = () => {
  const [companyData, setCompanyData] = useState(initialCompanyData);
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyData({
      ...companyData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:5000/add/company`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(companyData)
      });
    toast({
      title: 'Company details saved!',
      description: 'The company details have been successfully saved.',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });

    // Reset the form
    setCompanyData(initialCompanyData);
  };

  const { name, description, image, mobileNumber, email, gst } = companyData;

  return (
    <Flex
      align='center'
      justify='center'
      maxW={{ base: '100%', md: '50%' }}
      m='auto'
      boxShadow='base'
      p='6'
      rounded='md'
      bg='white'
    >
      <Box
        rounded='lg'
        boxShadow='none'
        p={8}
      >
        <Stack>
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type='text'
                name='name'
                value={name}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Description</FormLabel>
              <Textarea
                name='description'
                value={description}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Image URL</FormLabel>
              <Input
                type='text'
                name='image'
                value={image}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Mobile Number</FormLabel>
              <Input
                type='text'
                name='mobileNumber'
                value={mobileNumber}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type='email'
                name='email'
                value={email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>GST</FormLabel>
              <Input
                type='text'
                name='gst'
                value={gst}
                onChange={handleChange}
              />
            </FormControl>
            <Button
              type='submit'
              size='lg'
              bg='blue.400'
              color='white'
              _hover={{
                bg: 'blue',
              }}
            >
              Save Company Details
            </Button>
          </form>
        </Stack>
      </Box>
    </Flex>
  );
};

export default CompanyDetailsForm;
