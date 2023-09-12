import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./OrderPage.css"
import {
  Flex,
  Box,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import Navbar from '../Kaushik/Navbar';
import Footer from '../Kaushik/Footer';

function OrderPage() {
  const [orders, setOrders] = useState([]);
  const toast = useToast();
  const [sorting, setSorting] = useState('latest');

  const userId = JSON.parse(localStorage.getItem('userId')); // Get user ID from localStorage
  {console.log("1222222",userId)}

  const handleSortChange = (event) => {
    setSorting(event.target.value);
  };

  const sortedOrders = [...orders];
  if (sorting === 'latest') {
    sortedOrders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }




  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/orderspage/details?userId=${userId}`); // Replace with your API endpoint
      
      // const {data}=response.data;
      console.log("^^^^^^^^^",response.data);
      console.log("inside")
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
      toast({
        title: 'Error fetching orders',
        description: 'An error occurred while fetching orders.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

 

  return (
    <>
    <Navbar/>
    <Flex direction="column" align="center" justify="center" minH="100vh">
      <Stack spacing={4}>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Your Orders
        </Text>
        <Box>
    <label htmlFor="sort">Sort by:</label>
    <select id="sort" value={sorting} onChange={handleSortChange}>
      <option value="latest">Latest Orders</option>
      {/* Add more sorting options if needed */}
    </select>
  </Box> 
  {orders.length > 0 ? (
          orders.map((order) => (
            <Box
            key={order.id}
            className="order-box"
          >
            <img src={order.image} alt={order.title} className="order-image" />
            <div className="order-details">
              <div className="order-detail">
                <strong>Title:</strong> {order.title}
              </div>
              <div className="order-detail">
                <strong>Order ID:</strong> {order.id}
              </div>
              <div className="order-detail">
                <strong>Name:</strong> {order.name}
              </div>
              <div className="order-detail">
                <strong>Price:</strong> {order.price}
              </div>
              <div className="order-detail">
                <strong>quantity:</strong> {order.quantity}
              </div>
              <div className="order-detail">
                <strong>Number:</strong> {order.number}
              </div>
              <div className="order-detail">
                <strong>Address:</strong> {order.address}<br/>
                <strong>Pincode:</strong> {order.pincode}<br/>
                <strong>City:</strong> {order.city}<br/>
                <strong>State:</strong> {order.state} 
              </div>
              <div className="order-detail">
                <strong>Order at:</strong> {order.createdAt}
              </div>
              {/* Add more details as needed */}
            </div>
          </Box>
          ))
        ) : (
          <Text>No orders found.</Text>
        )}
      </Stack>
    </Flex>
    <Footer/>
    </>
  );
}

export default OrderPage;





