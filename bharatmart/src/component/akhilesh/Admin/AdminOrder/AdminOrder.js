// // ... (imports and other code)
// import { useState ,useEffect} from "react";
// import axios from "axios";
// import "./AdminOrder.css"




// function AdminOrder() {
//   const [order, setOrder] = useState([]);



//   useEffect(() => {
//     fetchorder();
  
    
//   }, []);

//   const fetchorder = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/orders/allorder'); // Replace with your API endpoint
//       console.log("5647",response.data)

//       const product=(response.data).data;
//       console.log("t56",product)
    
//       setOrder(product);
//       console.log(":",order)
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };
//   console.log("this i",order)

 
   

//   // useEffect(() => {
    
//   //   console.log("Products:", products);
//   //   console.log("Filtered Products:", filteredProducts.length);
//   //   console.log("lenght",products.length)
//   // }, [products, filteredProducts]);

// //   const objectLength = Object.keys(filteredProducts).length;



//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <h1>Admin Panel</h1> */}
//       </header>
//       <main className="App-main">
//         <section className="user-section">
//           <h2>Order Section</h2>
//           <div className="user-list">
//             {order.map(order => (
//               <div key={order._id} className="user-item">
//                 <p>Name: {order.name}</p>
//                 <p>UserID: {order.user}</p>
//                 <p>Product: {order.title}</p>
//                 <p>Product Id: {order._id}</p>
//                 <p>Price: {order.price}</p>
//                 <p>Quantity: {order.quantity}</p>
//                 <p>Mobile: {order.mobile}</p>
//                 <p>Address: {order.address}</p>
//                 <p>Pincode: {order.pincode}</p>
//                 <p>State: {order.state}</p>
//                 <p>City: {order.city}</p>
//                 <p>OrderAt: {order.createdAt}</p>
//               </div>
//             ))}
//           </div>
//         </section>
      
//       </main>
//     </div>
//   );
// }

// export default AdminOrder;




import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Text,
  Heading,
  VStack,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import "./AdminOrder.css";

function AdminOrder() {
  const [order, setOrder] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOption, setFilterOption] = useState("");

  useEffect(() => {
    fetchorder();
  }, []);

  const fetchorder = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/orders/allorder"
      ); // Replace with your API endpoint
      console.log("43434",response)
      const product = response.data.data;
      setOrder(product);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const handleSearch = () => {
    const filteredOrder = order.filter((o) =>
      o._id.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setOrder(filteredOrder);
  };

  const handleFilter = () => {
    if (filterOption === "date") {
      const sortedOrder = [...order].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setOrder(sortedOrder);
    }
  };

  const handleReset = () => {
    setSearchQuery("");
    setFilterOption("");
    fetchorder(); // Reset order list
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Admin Panel</h1> */}
      </header>
      <main className="App-main">
        <section className="user-section">
          <Box>
            <Input
              placeholder="Search by Product ID"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button onClick={handleSearch}>Search</Button>
          </Box>
          <Box mt="4">
            <Select
              placeholder="Filter by Date"
              value={filterOption}
              onChange={(e) => setFilterOption(e.target.value)}
            >
              <option value="date">Sort by Date</option>
            </Select>
            <Button onClick={handleFilter}>Apply Filter</Button>
          </Box>
          <Box mt="4">
            <Button onClick={handleReset}>Reset</Button>
          </Box>
          <h2>Order Section</h2>
          <div className="user-list">
            {order.map((order) => (
              <div key={order._id} className="user-item">
                 <p>Name: {order.name}</p>
                <p>UserID: {order.user}</p>
                <p>Product: {order.title}</p>
                 <p>Product Id: {order._id}</p>
                 <p>Price: {order.price}</p>
                 <p>Quantity: {order.quantity}</p>
                <p>Mobile: {order.mobile}</p>
                <p>Address: {order.address}</p>
                <p>Pincode: {order.pincode}</p>
                <p>State: {order.state}</p>
                <p>City: {order.city}</p>
                 <p>OrderAt: {order.createdAt}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminOrder;
