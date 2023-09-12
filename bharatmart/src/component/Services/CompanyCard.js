import React, { useEffect, useState } from 'react';
import {
  Box,
  Text,
  Heading,
  Image,
  Badge,
  VStack,
  Link,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';



const CompanyCard = ({ company }) => {

const [user,setUser]=useState("");
  useEffect(()=>{
     const data=localStorage.getItem('userId');
     setUser(data);
  },[])

  console.log("000000",user)
  const navigate=useNavigate();
  const { name, description, image, mobileNumber, email, gst,_id } = company;
  const handlecheck=()=>{
    // console.log(_id)
    navigate(`/company/${_id}`)
  }
  const handlelogin=()=>{
    navigate('/login')
  }

  return (
    <div style={{margin:"20px",boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="4">
      <Image   style={{height:"300px",width:"100%"}}  src={image} alt={name} maxH="200px" />
      <Heading style={{color:"teal",fontWeight:"bold"}} >
        {name}
      </Heading>
      <Text   style={{color:"grey"}} >
        {description}
      </Text>
      <Text fontSize="sm">
        <strong>Mobile Number:</strong> {mobileNumber}
      </Text>
      <Text fontSize="sm">
        <strong>Email:</strong> <Link href={`mailto:${email}`}>{email}</Link>
      </Text>
      <Text fontSize="sm">
        <strong>GST:</strong> {gst}
      </Text>
      {/* <Link to={`/company/${_id}`} >  */}
      {user?<Badge  onClick={handlecheck}style={{background:"#047a70",borderRadius:"5px",border:"none",height:"30px",width:"140px",color:"white",fontWeight:"bold",cursor:"pointer",margin:"5px"}}  colorScheme="blue" mt="2">
        Service Provider
      </Badge>:<Badge  onClick={handlelogin}style={{background:"#047a70",borderRadius:"5px",border:"none",height:"30px",width:"140px",color:"white",fontWeight:"bold",cursor:"pointer",margin:"5px"}}  colorScheme="blue" mt="2">
        Service Provider
      </Badge>}
      
      {/* </Link> */}
    </Box>
    </div>
  );
};

export default CompanyCard;
