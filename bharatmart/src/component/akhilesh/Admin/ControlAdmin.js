// // ... (imports and other code)
// import { useState ,useEffect} from "react";
// import axios from "axios";
// import "./ControlAdmin.css"




// function ControlAdmin() {
//   const [users, setUsers] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [categoryFilter, setCategoryFilter] = useState('');

//   useEffect(() => {
//     fetchUsers();
//     fetchProducts();
    
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

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/dataproduct/allproducts'); // Replace with your API endpoint
//       const productData = response.data;
//       console.log(productData)
//       setProducts(productData);
//       setFilteredProducts(productData); // Initialize filteredProducts with all products
//       // {console.log("this is ",products.length)}
//       // {console.log("this is ",products)}
//       // {console.log("this is ",filteredProducts)}

//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };
    
   
//   const handleCategoryFilter = (category) => {
//     if (category === categoryFilter) {
//       setCategoryFilter('');
//       setFilteredProducts(products); // Reset to all products
//     } else {
//       setCategoryFilter(category);
//       const filtered = products.filter(product => product.category === category);
//       setFilteredProducts(filtered);
//     }
//   };
//   // useEffect(() => {
    
//   //   console.log("Products:", products);
//   //   console.log("Filtered Products:", filteredProducts.length);
//   //   console.log("lenght",products.length)
//   // }, [products, filteredProducts]);

//   const objectLength = Object.keys(filteredProducts).length;



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
//         <section className="product-section">
//           <h2>Product Section</h2>
//           <div className="filter-buttons">
//             <button onClick={() => handleCategoryFilter('')}>All</button>
//             <button onClick={() => handleCategoryFilter('Electronics')}>Electronics</button>
//             <button onClick={() => handleCategoryFilter('Clothing')}>Clothing</button>
           
//           </div>
//           <div className="product-list">
//           {filteredProducts.length > 0 ? (
//             filteredProducts.map(product => (
//               <div key={product._id} className="product-item">
//                 <img src={product.image} alt={product.title} />
//                 <p>Title: {product.title}</p>
//                 <p>Brand: {product.brand}</p>
//                 <p>Price: ${product.price}</p>
//                 <p>Category: {product.category}</p>
//                 {/* Add more product data fields */}
//               </div>
//             ))
//           ) : (
//             <p>No products found.</p>
//           )}
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default ControlAdmin;


// ControlAdmin.js
import { useState, useEffect } from "react";
import axios from "axios";
import "./ControlAdmin.css";
import Alluser from "./Adminuser/Alluser";
import AdminProduct from "./AdminProduct/AdminProduct";
import AdminAdress from "./Adminadress/AdminAdress";
import AdminOrder from "./AdminOrder/AdminOrder";
import Lead from "./AdminLead/Lead";
import {useNavigate} from "react-router-dom"
import { Button } from "@chakra-ui/react";
import AddProduct from "../../../Page/Addproduct";
import AdminCompany from "../Admin/Admincompany/AdminCompany"

function ControlAdmin() {
   const history=useNavigate()
  const [activeSection, setActiveSection] = useState("users");
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  // ... (other state and fetch functions)

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };
  const handleLogout = () => {
    // Clear admin information from local storage
    localStorage.removeItem("Admin");
    // Redirect to admin login page
    history("/admin/login");
  };
  return (
    <div className="control-admin">
      <div className="sidebar">
        <Button color="black" onClick={handleLogout}>Logout</Button>
        <ul>
          <li
            className={activeSection === "users" ? "active" : ""}
            onClick={() => handleSectionClick("users")}
          >
            Users
          </li>
          <li
            className={activeSection === "products" ? "active" : ""}
            onClick={() => handleSectionClick("products")}
          >
            Products
          </li>
          <li
            className={activeSection === "address" ? "active" : ""}
            onClick={() => handleSectionClick("address")}
          >
            Address
          </li>
          <li
            className={activeSection === "order" ? "active" : ""}
            onClick={() => handleSectionClick("order")}
          >
            Order
          </li>

          <li
            className={activeSection === "lead" ? "active" : ""}
            onClick={() => handleSectionClick("lead")}
          >
            Lead
          </li>

          <li
            className={activeSection === "addproduct" ? "active" : ""}
            onClick={() => handleSectionClick("addproduct")}
          >
            AddProduct
          </li>
          <li
            className={activeSection === "addcompany" ? "active" : ""}
            onClick={() => handleSectionClick("addcompany")}
          >
            AddCompany
          </li>
        </ul>
      </div>
      <div className="content">
        {activeSection === "users" && (
          <section className="user-section">
            <Alluser/>
          </section>
        )}
        {activeSection === "products" && (
          <section className="product-section">
            <AdminProduct/>
          </section>
        )}
        {activeSection === "address" && (
          <section className="order-section">
            <AdminAdress/>
          </section>
        )}

{activeSection === "order" && (
          <section className="order-section">
            <AdminOrder/>
          </section>
        )} 

{activeSection === "lead" && (
          <section className="order-section">
            <Lead/>
          </section>
        )} 
        {activeSection === "addproduct" && (
          <section className="order-section">
            <AddProduct/>
          </section>
        )} 
         {activeSection === "addcompany" && (
          <section className="order-section">
            <AdminCompany/>
          </section>
        )}
      </div>
    </div>
  );
}

export default ControlAdmin;
