import { Box, HStack,Image,Heading,Text,Checkbox, Stack,Button,useToast } from '@chakra-ui/react'
import React,{useEffect, useState} from 'react'

import { useSelector,useDispatch } from 'react-redux'
import { getCardData,deleteAllItemFromCart } from '../../../redux/Cart/action'
import { useNavigate } from 'react-router-dom'
import { getAddress } from '../../../redux/Address/action'
import useRazorpay from "react-razorpay";





const CashOnDel = () => {
  const [Razorpay] = useRazorpay();

  const [res,setRes]=useState(false)
  console.log(res)
  const bgc=res?"#00b5b7":"gray"
  const toast=useToast()
  const navigate=useNavigate()
  const token=JSON.parse(localStorage.getItem("token"))
 

  const dispatch=useDispatch()
  useEffect(()=>{
dispatch(getCardData(token))
dispatch(getAddress(token))
  },[dispatch])

  const data=useSelector(store=>store.cartReducer.cart)
  console.log("terewre",data);
 
  
  const Fulladdress=useSelector(store=>store.addressReducer.Address)
  console.log("dfdsf",Fulladdress)
  
 let product=data.CartData
 
 let res3=data.CartData
 let res4=Fulladdress?.length===0
 console.log("res3",res3)









  let User;
  let Id;
  let Price;
  let Quantity;
  let Title;
  let Name;
  let Mobile;
  let Pincode;
  let State;
  let City;
  let Category;
  let Address;
   var Img;
 




 if (product && product.length > 0) {
  const cartdetails = product[0];
     const {user,_id,price,quantity,title,category,image}=cartdetails;
     console.log("12121",user,image)

     User=user;
     Id=_id;
     Price=price;
     Quantity=quantity;
     Title=title;
     Category=category;
     Img=image;


  // Now you can use cartdetails safely
} else {
  // Handle the case when the product array is empty or undefined
  console.log('Product array is empty or undefined.');
}





/////////////////////////////////////////////////////
if (Fulladdress&& Fulladdress.length > 0) {
  const addressdetail=Fulladdress[0];
  const {name,mobile,pincode,state,city,address}=addressdetail;

  Name=name;
  Mobile=mobile;
  Pincode=pincode;
  State=state;
  City=city;
  Address=address

  // Now you can use cartdetails safely
} else {
  // Handle the case when the product array is empty or undefined
  console.log('Product array is empty or undefined.');
}



// {console.log("11111",address)}

 
  //  {console.log("112222",user,_id)}
  


 console.log("res4",res3)
 const paymentMethod="cash on delivery"
 console.log("r4",User)
  const handleOrder=async(id)=>{


dispatch(deleteAllItemFromCart(id,token))

const orderDetails = {
  User,
  Id,
  Price,
  Img,
  Quantity,
  Title,
  Name,
  Mobile,Pincode,State,City,Category,Address
};
// {console.log("fsdssaa",orderDetails)}

const response = await fetch(`http://localhost:5000/allorders/orderdetails`,{
  method:'POST',
  headers:{
    'Content-Type':'application/json',
  },
  body:JSON.stringify(orderDetails)
});


setTimeout(()=>{
  navigate("/")
},2000)
toast({
  title: 'Order Placed Successfully',
  description: "We will contact you soon.",
  status: 'success',
  duration: 2000,
  position:"top",
  isClosable: true,
})

  }

// When the user clicks the online payment button
const handleOnlinePayment = async (id) => {
  const amountInRupees = Price * 100;
  const paymentDetails = {
    amount:amountInRupees, // Amount in smallest currency unit (e.g., cents)
    currency: "INR", // Currency code
    
  };

  try {
    const response = await fetch("http://localhost:5000/pay/process-payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentDetails),

    });
   
    const { orderId } = await response.json();
    

    // Initialize the Razorpay checkout
    const options = {
      key: "rzp_test_AxF6sbI9BuYymp",
      amount: paymentDetails.amount,
      currency: paymentDetails.currency,
      name: "Aman Enterprise",
      description: "Order Payment",
      order_id: orderId,
      handler: function (response) {
        // This function will be called when the payment is successful
        console.log("Payment successful!", response);
        handleOrder();
        // You can perform further actions here, like navigating to a success page
      },
      prefill: {
        email: "araj6205444@gmail.com",
        contact: "8210880450",
      },
    };

    const rzp = new Razorpay(options);
    rzp.open();
   
  } catch (error) {
    console.error("Error processing payment:", error);
    // Handle payment error
  }
};


















 let res1=true
 if(data&&data.CartData?.length>0){
  res1=false
 }

 

 
  return (
    <Stack w={{base:"100%",lg:"80%"}} gap={1}>
    <Box boxShadow='lg' p='6' rounded='md' bg='white'>
    
   
    <HStack alignItems="center" gap={1}>
    <Image src="https://static1.hkrtcdn.com/hknext/static/media/payment/cod-inner.svg" alt="cod"/>
    <Heading as="h4" size="sm">
    CASH ON DELIVERY</Heading>
   
    </HStack>
    <Text pl={12}>
    You will not earn any HK Cash through COD
    </Text>
   
    </Box>
    <Box boxShadow='lg' p='6' rounded='md' bg='orange.100'>
    
    <Heading as="h4" size="sm" >
    Sure about the address?
    </Heading>
    <HStack alignItems="center" gap={1}>
    <Checkbox colorScheme='blue' type="twitter" bg="white" isChecked={res} onChange={()=>setRes(!res)}/>
    <Text >
    Check the box here to confirm & complete your purchase through Cash On Delivery option.
    </Text>
   
    </HStack>
   </Box>
   <Button w={{base:"100%",lg:"50%"}} isDisabled={!res||res1||res4} bg={bgc} onClick={()=>handleOrder(res3[0].user)}>Cash On Delivery</Button>
   <Text >
       Or
    </Text>
    <Button w={{base:"100%",lg:"50%"}} isDisabled={!res||res1||res4} bg={bgc} onClick={()=>handleOnlinePayment(res3[0].user)}>Online payment</Button>
   
    </Stack>
  )
}

export default CashOnDel


///////////////////////key secret :QaGHP9OWSO9ITO64V7ywQDHS
/////////////////////key id :rzp_test_AxF6sbI9BuYymp