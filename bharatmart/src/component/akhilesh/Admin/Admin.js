// import React, { useState } from 'react';


// function App() {
//   const [name, setName] = useState('');
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const [account ,setAccount]=useState(false);

  



//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/admin/register1', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, username, email, password }),
//       });

//       const data = await response.json();
//       setMessage(data.message);
//     } catch (error) {
//       console.error('Error:', error);
//       setMessage('An error occurred. Please try again later.');
//     }
//   };

//   return (
//     <div className="App">
//       <div className="container">
//         <h1>Admin Registration</h1>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />

//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />

//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <button type="submit">Register</button>
//         </form>
//         <p id="message">{message}</p>
//       </div>
//     </div>
//   );
// }

// export default App;



import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useToast
    
    
  } from '@chakra-ui/react';
  
  import { Link } from 'react-router-dom'
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { useState } from 'react'
  import { useNavigate } from 'react-router-dom'
//   import Navbar from '../Kaushik/Navbar';
//   import Footer from '../Kaushik/Footer';
  import { RiContactsBookLine } from 'react-icons/ri';
  
  
  const initdata={
   name:"",
   email:"",
   password:"",
   username:"",

  }
  
  
  
  const signup=async (data)=>{
    try {
      const res = await fetch("http://localhost:5000/admin/register1", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const res_1 = await res.json();
      return res_1;
    } catch (err) {
      return err
    }
  }
    
  export default function SignupCard() {
    const [showPassword, setShowPassword] = useState(false);
  
    const [data,setdata]=useState(initdata)
    const toast=useToast()
    const navigate= useNavigate()
  
  
    const handlechange=(e)=>{
      const {name,value}=e.target 
      setdata({
        ...data,
        [name]:value
        
      })
     
    }
    const handlesubmit=async(e)=>{
      e.preventDefault()
      console.log("submitted")
      signup(data).then(res=>{
        console.log(res)
        toast({
          title:`${res.message}`,
          description: "Thanku",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
        navigate("/admin/login")
        
      })
  
   setdata(initdata)
   
    }
    
  
  
    const {name,email,password,username}=data
  
  
  
    return (
      <>
      {/* <Navbar/> */}
      <div>
      <Flex
       
        align='center'
        justify='center'
     maxW={{base:"100%",md:"50%"}}
     m="auto"
        
     boxShadow='base' p='6' rounded='md' bg='white'
        >
        
        <Stack justifyContent={"space-around"}  mx={'auto'} w="100%" p={10} bg={"none"}>
          <Stack textAlign={"center"}  alignItem={'center'} m="auto" bg={"green"}  borderRadius={"5px"} height={"100px"}p={5}  >
            <Heading fontSize={'sm'} color={"white"} textAlign={'center'}>
              SIGN UP
            </Heading>
            <Text fontSize={'sm'} color={'white'}>
              Welcome to  Bharat Mart ✌️
            </Text>
          </Stack>
          <Box
          
            rounded={'lg'}
        
            boxShadow={'none'}
            p={8}>
            <Stack >
            <form onSubmit={handlesubmit}>
             
                  <FormControl  isRequired>
                    <FormLabel color={"black"}>Name</FormLabel>
                    <Input style={{color:"black"}} onChange={handlechange} type="text" value={username} name="username"/>
                  </FormControl>
                
                  <FormControl  isRequired>
                    <FormLabel color={"black"}>User Name</FormLabel>
                    <Input style={{color:"black"}} onChange={handlechange} type="text" value={name} name="name"/>
                  </FormControl>
{/*                
                  <FormControl  isRequired>
                    <FormLabel color={"black"}>Phone</FormLabel>
                    <Input style={{color:"black"}} onChange={handlechange} type="number" value={phone} name="phone"/>
                  </FormControl> */}
                
               
             
                  {/* <FormControl  isRequired>
                    <FormLabel color={"black"}>Gender</FormLabel>
                    <Input style={{color:"black"}} onChange={handlechange} type="text" value={gender} name="gender"/>
                  </FormControl> */}
               
               
             
              <FormControl id="email" isRequired>
                <FormLabel color={"black"}>Email address</FormLabel>
                <Input style={{ color:"black"}} type="email" onChange={handlechange} value={email} name="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel color={"black"}>Password</FormLabel>
                <InputGroup >
                  <Input style={{color:"black"}} type={showPassword ? 'text' : 'password'} onChange={handlechange} value={password} name="password" />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Input
              
                  loadingText="Submitting"
                  type={"submit"}
                  value={"Register"}
                  size="lg"
                  textAlign={"center"}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue',
                  }}
                 placeholder="Sign up" 
                />
              </Stack>
              <Stack pt={6}>
                <Text align={'center'} color={"black"} marginTop={"0px"} fontWeight="bold">
                  Already a user? <Link to="/admin/login">Login</Link>
                </Text>
              </Stack>
              </form>
            </Stack>
          </Box>
        </Stack>
  
      </Flex>
      </div>
    
      </>
    
    );
  }
