// // ... (imports and other code)
// import { useState ,useEffect} from "react";
// import axios from "axios";
// import "./Alluser.css"




// function Alluser() {
//   const [users, setUsers] = useState([]);



//   useEffect(() => {
//     fetchUsers();
  
    
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/data/allusers'); // Replace with your API endpoint
//       setUsers(response.data);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };
//   console.log("this i",users)

 
   

//   // useEffect(() => {
    
//   //   console.log("Products:", products);
//   //   console.log("Filtered Products:", filteredProducts.length);
//   //   console.log("lenght",products.length)
//   // }, [products, filteredProducts]);

// //   const objectLength = Object.keys(filteredProducts).length;



//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Admin Panel</h1>
//       </header>
//       <main className="App-main">
//         <section className="user-section">
//           <h2>User Section</h2>
//           <div className="user-list">
//             {users.map(user => (
//               <div key={user._id} className="user-item">
//                 <p>Name: {user.name}</p>
//                 <p>username :{user.username}</p>
//                 <p>Email: {user.email}</p>
//                 <p>id :{user._id}</p>
//                 <p>Phone :{user.phone}</p>
//                 <p>gender :{user.gender}</p>
//                 {/* Add more user data fields */}
//               </div>
//             ))}
//           </div>
//         </section>
      
//       </main>
//     </div>
//   );
// }

// export default Alluser;


import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Text,
  Heading,
  VStack,
  Input,
  Button,
} from "@chakra-ui/react";
import "./Alluser.css";

function Alluser() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/data/allusers"); // Replace with your API endpoint
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleSearch = () => {
    const filteredUsers = users.filter((user) =>
      user._id.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setUsers(filteredUsers);
  };

  const handleReset = () => {
    setSearchQuery("");
    fetchUsers(); // Reset user list
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Admin Panel</h1>
      </header>
      <main className="App-main">
        <section className="user-section">
          <Box>
            <Input
              placeholder="Search by User ID"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button onClick={handleSearch}>Search</Button>
          </Box>
          <Box mt="4">
            <Button onClick={handleReset}>Reset</Button>
          </Box>
          <h2>User Section</h2>
          <div className="user-list">
            {users.map((user) => (
              <div key={user._id} className="user-item">
                <p>Name: {user.name}</p>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>ID: {user._id}</p>
                <p>Phone: {user.phone}</p>
                <p>Gender: {user.gender}</p>
                {/* Add more user data fields */}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Alluser;
