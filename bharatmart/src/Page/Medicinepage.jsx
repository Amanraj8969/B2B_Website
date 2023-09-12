import React from 'react'
import Ladies from "../component/akhilesh/Ladies/Ladies"
import Snavbar from '../component/akhilesh/Shopping/Snavbar'
import Footer from '../Kaushik/Footer'
import { Box,Heading ,Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Light from '../component/akhilesh/Light/Light'
import Medicine from '../component/akhilesh/Medicine/Medicine'


const Medicinepage = () => {
  return (
    <>
<Snavbar/>
<Text m={5}><Link to="/shopping">Shopping</Link></Text>
    <Box w="90%" mx="auto" textAlign="center">
   <Heading m={3}>Medicine</Heading>
   <Medicine/>
   </Box>
    <Footer/>

    </>
  )
}

export default Medicinepage