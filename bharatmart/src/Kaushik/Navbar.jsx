import React, { useEffect, useState } from "react";
import "./Navbar.css"
import logo from "../Assets/logo.png"
//-----------Chakra UI Components-------
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Input,
  Text,
  Image,
  Button,
  PopoverFooter,
  PopoverBody,
  PopoverHeader,
  PopoverCloseButton,
  PopoverArrow,
  PopoverContent,
  Popover,
  PopoverTrigger,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Spinner,
  useToast,
} from "@chakra-ui/react";
//-----------ICONS----------------------
import { TiThSmall } from "react-icons/ti";
import { ImUserCheck } from "react-icons/im";
import { RiCustomerServiceFill } from "react-icons/ri";
import { BsQuestionCircle, BsShop } from "react-icons/bs";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { MdAdminPanelSettings, MdOutlineMessage, MdSendToMobile } from "react-icons/md";
import { BiMessageDetail, BiMobile, BiUserCircle } from "react-icons/bi";
import { AiOutlineHome, AiOutlineSetting, AiOutlineTag } from "react-icons/ai";
import {CgShoppingBag} from "react-icons/cg"
import {BsCartCheckFill} from "react-icons/bs"
import {FaHireAHelper} from "react-icons/fa"

import { Link } from "react-router-dom";

//-----------***------------------------------------------------------------------
// import Logo from "../public/logo.png";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";



// import {
//   AddUser,
//   GetAllAdmin,
//   LoginUser,
//   LogOUT,
// } from "../redux/Auth/auth.action";
// import { getItem, setItem } from "../utility/localStorage";

const Navbar = () => {

  const [items, setItems] = useState();
  const [userId,setUserId]=useState("");
  // const [items1, setItems1] = useState([]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('token'));
    const userId = JSON.parse(localStorage.getItem('userId'));
    if (items) {
      // console.log("item ",items)
     setItems(items);
    }
    if(userId){
      setUserId(userId);
    }
 
  }, []);
  console.log("this is",items)


  const handleLogout=()=>{
    console.log("logout ")
    setItems(undefined)
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem("userId");
    navigate("/");
  }

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };




    const [query, setQuery] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Registarion, setRegistarion] = useState(false);
  const [admin, setAdmin] = useState(false);
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const [cred, setCred] = useState({});
  const [conform, setConform] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

//   const handlechenge = (e) => {
//     const { name, value } = e.target;
//     setCred({
//       ...cred,
//       [name]: value,
//     });
//   };
 
  

  

 
 
 
  

//   let styleNev = {
//     position: "-webkit-sticky",
//     position: "fixed",
//     top: "0",
//     left: "0",
//     zIndex: "1",
//     width: "100%",
//   };




// console.log("this is admin",admin)
  return (
    <>
      <Box width={"100%"} top={'0px'} position={'fixed'} alignItems={"center"}  zIndex={5} backgroundColor="gray.500" >
        <Flex h={14} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={{ base: 3, md: 8 }} alignItems={"center"}>
            <Link to="/">
              <Box w={["120px", "140px", "160px", "200px"]}>
              <Link to={'/'} > 
                <Image marginLeft={'10px'} height={{ base:"50px",sm: "50px", md: "50px", lg: "50px" }} src={logo} /></Link>
              </Box>
            </Link>
            {/* <Input placeholder='search' display={{base:"none", md:"flex"}} /> */}
          </HStack>
          <Flex alignItems={"center"} w={{ md: "75%", md: "40%", lg: "30%" }}>
            <Box
              justifyContent="space-around"
              w="100%"
              display={{ base: "none", md: "flex" }}
            >
              {userId?   <Link to={'/shopping'} >
              <Box align="center">
                <CgShoppingBag
                  fontSize="20px"
                  color="#dbdbdb"
                  cursor="pointer"
                />
                <Text cursor="pointer" fontSize="12px" color="white">
                  Shopping
                </Text>
              </Box>
              </Link>:  <Link to={'/login'} >
              <Box align="center">
                <CgShoppingBag
                  fontSize="20px"
                  color="#dbdbdb"
                  cursor="pointer"
                />
                <Text cursor="pointer" fontSize="12px" color="white">
                  Shopping
                </Text>
              </Box>
              </Link>}
              
               {/* //////////////////////////////////////////////////////// */}

               {/* <Link to={'/addproduct'} >
              <Box align="center">
                <AiOutlineTag
                  fontSize="20px"
                  color="#dbdbdb"
                  cursor="pointer"
                />
                <Text cursor="pointer" fontSize="12px" color="white">
                  Add Product
                </Text>
              </Box>
              </Link> */}


              {/* //////////////////////////////////////////////// */}
              {/* <Link to={"/laptop"} >
              <Box align="center">
                <BsShop fontSize="20px" color="#dbdbdb" cursor="pointer" />
                <Text cursor="pointer" fontSize="12px" color="white">
                  Product
                </Text>
              </Box>
              </Link> */}
                <Link to={"/service"} >
              <Box align="center">
                <BsShop fontSize="20px" color="#dbdbdb" cursor="pointer" />
                <Text cursor="pointer" fontSize="12px" color="white">
                  service
                </Text>
              </Box>
              </Link>
              {userId?<Link to='/orderpage'>
              <Box align="center">
                <BsCartCheckFill
                  fontSize="20px"
                  color="#dbdbdb"
                  cursor="pointer"
                />
                <Text cursor="pointer" fontSize="12px" color="white">
                  Order
                </Text>
              </Box>
              </Link>: <Link to='/login'>
              <Box align="center">
                <BsCartCheckFill
                  fontSize="20px"
                  color="#dbdbdb"
                  cursor="pointer"
                />
                <Text cursor="pointer" fontSize="12px" color="white">
                  Order
                </Text>
              </Box>
              </Link>}
             
              <Box  className="contact-box1" align="center">
                <FaHireAHelper
                  fontSize="20px"
                  color="#dbdbdb"
                  cursor="pointer"

                />
                <Link to="/help">
                <Text cursor="pointer" fontSize="12px" color="white" 
                                  onMouseEnter={handleMouseEnter}
                                  onMouseLeave={handleMouseLeave}  >
                  Help
                </Text>
                </Link>
                {isHovered && (
          <div className="dropdown-menu">
          <ul>
            <li>Contact Number: 8757092569</li>
            <li>Email: support@nebulatrade.com</li>
            <li>Website: nebulatrade.com</li>
          </ul>
        </div>
      )}
              </Box>

               {items?   <Box align="center">
                    <BiUserCircle
                      fontSize="20px"
                      color="#dbdbdb"
                      cursor="pointer"
                    />
                    
                    <Text cursor="pointer" fontSize="12px" color="white" onClick={handleLogout}>
                      Logout
                    </Text>
 
                  </Box>
                  :  <Link to={'/login'}>
              <Box align="center">
                    <BiUserCircle
                      fontSize="20px"
                      color="#dbdbdb"
                      cursor="pointer"
                    />
                    
                    <Text cursor="pointer" fontSize="12px" color="white">
                      Sign In
                    </Text>

                  </Box>
                  </Link>} 
            
              
            </Box>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              backgroundColor="#2E3192"
              color="white"
              fontSize={{ base: "20px", sm: "30px" }}
              onClick={isOpen ? onClose : onOpen}
            />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box alignItems={'center'} pb={4} display={{ md: "none" }}>
            {/* //------------------------------- */}
            {/* <Input
                onChange={(e) => setQuery(e.target.value)}
                paddingLeft="10px"
                fontSize={{ base: "12px", sm: "13px", md: "15px" }}
                variant="unstyled"
                placeholder=" ex-mens"
                bg="white"
                height={{ base: "20px", sm: "30px", md: "50px" }}
                width={{ base: "140px", sm: "140px", md: "160px" }}
                borderRadius="0px"
                marginLeft={'26%'}
              />
              <Link to={`/${query}`}>
                <Button
                  fontSize={{ base: "12px", sm: "13px", md: "15px" }}
                  borderRadius="0px"
                  fontFamily="arial"
                  background="-webkit-gradient(linear,left top,left bottom,from(#058b80),to(#02625a))"
                  colorScheme="#fff"
                  p="5px 22px"
                  border="none"
                  margin="0"
                  height={{ base: "20px", sm: "30px", md: "50px" }}
                  position="relative"
                
                  top="0"
                  cursor="pointer"
                  width={'60px'}
                  fontWeight="700"
                  text-indent="30px"
                >
                  Search
                </Button>
              </Link> */}
            {/* --------------------------- */}
            <Stack alignItems={'center'} as={"nav"} spacing={4}>
              {/* <Text cursor="pointer" fontSize="12px" color="white">
                Sign In
              </Text> */}
              {/* <Text cursor="pointer" fontSize="12px" color="white">
                Message
              </Text> */}
              {userId? <Link to='/shopping'>
              <Text cursor="pointer" fontSize="12px" color="white">
                Shopping
              </Text>
              </Link>: <Link to='/login'>
              <Text cursor="pointer" fontSize="12px" color="white">
                Shopping
              </Text>
              </Link>}
             
           {/* ///////////////////////////////////////////// */}

          {userId? <Link to={'/orderpage'} >
              <Box align="center">
                <AiOutlineTag
                  fontSize="20px"
                  color="#dbdbdb"
                  cursor="pointer"
                />
                <Text cursor="pointer" fontSize="12px" color="white">
                  order
                </Text>
              </Box>
              </Link>: <Link to={'/login'} >
              <Box align="center">
                <AiOutlineTag
                  fontSize="20px"
                  color="#dbdbdb"
                  cursor="pointer"
                />
                <Text cursor="pointer" fontSize="12px" color="white">
                  order
                </Text>
              </Box>
              </Link>}
          
           {/* ////////////////////////////////////////////////// */}


              <Link to="/help"> 
              <Text cursor="pointer" fontSize="12px" color="white">
                Help
              </Text>
              </Link>


            


              <Link to={"/service"} >
              <Text cursor="pointer" fontSize="12px" color="white">
               Service
              </Text>
              </Link>

              {items? 
              <Text  onClick={handleLogout} cursor="pointer" fontSize="12px" color="white">
                Logout
              </Text>
              : <Link to={"/login"} >
              <Text cursor="pointer" fontSize="12px" color="white">
                Login
              </Text>
              </Link>}
             
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;