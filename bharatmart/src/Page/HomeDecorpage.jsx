import React from 'react'
// import Ladies from "../component/akhilesh/Ladies/Ladies"
import Snavbar from '../component/akhilesh/Shopping/Snavbar'
import Footer from '../Kaushik/Footer'
import { Box,Heading ,Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import HomeDecor from '../component/akhilesh/HomeDecor/HomeDecor'


const HomeDecorpage = () => {
  return (
    <>
<Snavbar/>
<Text m={5}><Link to="/shopping">Shopping</Link></Text>
    <Box w="90%" mx="auto" textAlign="center">
   <Heading m={3}>Home-Decoration</Heading>
   <HomeDecor/>
   </Box>
    <Footer/>

    </>
  )
}

export default HomeDecorpage