// ... (imports and other code)
import { useState ,useEffect} from "react";
import axios from "axios";
import "./Lead.css"




function Lead() {
  const [Lead, setlead] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [filteredLead, setFilteredLead] = useState([]);



  useEffect(() => {
    fetchlead();
  
    
  }, []);

  useEffect(() => {
    filterLead();
  }, [filterValue, Lead]);

  useEffect(() => {
    searchLead();
  }, [searchValue, Lead]);



  const fetchlead = async () => {
    try {
      const response = await axios.get('http://localhost:5000/all/leads'); // Replace with your API endpoint
      console.log("this is dfss",response.data)
      const lead=response.data;
      console.log("sfsd",lead)
      setlead(lead);
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
const searchLead = () => {
    const searched = Lead.filter((add) => {
      return (
        add.productId.includes(searchValue) ||
        add.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    setFilteredLead(searched);
  };

  const filterLead = () => {
    const filtered = Lead.filter((add) => {
      return (
        add.productId.includes(filterValue) ||
        add.title.toLowerCase().includes(filterValue.toLowerCase())
      );
    });
    setFilteredLead(filtered);
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Admin Panel</h1>
      </header>
      <main className="App-main">
        <section className="user-section">
          <h2>Lead Section</h2>
          <div className="filters">
            <input
              type="text"
              placeholder="Filter by Product ID or Title"
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
            />
            <input
              type="text"
              placeholder="Search by Product ID or Title"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          <div className="user-list">
            {Lead.map(add => (
              <div key={add._id} className="user-item">
                {/* <p>Name: {add.name}</p> */}

                <img src={add.image} alt={add.title} />
                <p>Title :{add.title}</p>
                <p>ProductID :{add._id}</p>
                <p>Brand: {add.brand}</p>
                <p>Price:{add.price}</p>
                <p>Mobile :{add.number}</p>
               
               
              </div>
            ))}
          </div> 
        </section>
      
      </main>
    </div>
  );
}

export default Lead;
