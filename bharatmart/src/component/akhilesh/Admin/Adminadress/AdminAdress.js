// ... (imports and other code)
import { useState ,useEffect} from "react";
import axios from "axios";
import "./AdminAdress.css"




function AdminAdress() {
  const [address, setaddress] = useState([]);



  useEffect(() => {
    fetchaddress();
  
    
  }, []);

  const fetchaddress = async () => {
    try {
      const response = await axios.get('http://localhost:5000/alladdress/address'); // Replace with your API endpoint
      console.log("this is addrefdsfsdfss",response.data)
      const {userAddress}=response.data;
      console.log("sfsd",userAddress)
      setaddress(userAddress);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  
  


   

  // useEffect(() => {
    
  //   console.log("Products:", products);
  //   console.log("Filtered Products:", filteredProducts.length);
  //   console.log("lenght",products.length)
  // }, [products, filteredProducts]);

//   const objectLength = Object.keys(filteredProducts).length;



  return (
    <div className="App">
      <header className="App-header">
        <h1>Admin Panel</h1>
      </header>
      <main className="App-main">
        <section className="user-section">
          <h2>Address Section</h2>
          <div className="user-list">
            {address.map(add => (
              <div key={add._id} className="user-item">
                <p>Name: {add.name}</p>
                <p>Mobile :{add.mobile}</p>
                <p>Address: {add.address}</p>
                <p>Pincode :{add.pincode}</p>
                <p>Landmark :{add.landmark}</p>
                <p>City :{add.city}</p>
                <p>State :{add.state}</p>
                <p>User :{add.user}</p>
                {/* Add more user data fields */}
              </div>
            ))}
          </div> 
        </section>
      
      </main>
    </div>
  );
}

export default AdminAdress;
