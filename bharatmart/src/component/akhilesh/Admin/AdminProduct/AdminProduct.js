// ... (imports and other code)
import { useState ,useEffect} from "react";
import axios from "axios";
import "./AdminProduct.css"




function AdminProduct() {
 
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');

  useEffect(() => {
    
    fetchProducts();
    
  }, []);

 

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/dataproduct/allproducts'); // Replace with your API endpoint
      const productData = response.data;
      console.log(productData)
      setProducts(productData);
      setFilteredProducts(productData); // Initialize filteredProducts with all products
      // {console.log("this is ",products.length)}
      // {console.log("this is ",products)}
      // {console.log("this is ",filteredProducts)}

    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
    
   
  const handleCategoryFilter = (category) => {
    if (category === categoryFilter) {
      setCategoryFilter('');
      setFilteredProducts(products); // Reset to all products
    } else {
      setCategoryFilter(category);
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  };
  // useEffect(() => {
    
  //   console.log("Products:", products);
  //   console.log("Filtered Products:", filteredProducts.length);
  //   console.log("lenght",products.length)
  // }, [products, filteredProducts]);

  const objectLength = Object.keys(filteredProducts).length;



  return (
    <div className="App">
      <header className="App-header">
        <h1>Admin Panel</h1>
      </header>
      <main className="App-main">
    
        <section className="product-section">
          <h2>Product Section</h2>
          <div className="filter-buttons">
            <button onClick={() => handleCategoryFilter('')}>All</button>
            <button onClick={() => handleCategoryFilter('men')}>Mens</button>
            <button onClick={() => handleCategoryFilter('ladies')}>Ladies</button>
            <button onClick={() => handleCategoryFilter('decoration')}>Ladies</button>
            <button onClick={() => handleCategoryFilter('mobile')}>Ladies</button>
            <button onClick={() => handleCategoryFilter('footwear')}>Ladies</button>
            <button onClick={() => handleCategoryFilter('light')}>Ladies</button>
            <button onClick={() => handleCategoryFilter('beautyproduct')}>Ladies</button>
            <button onClick={() => handleCategoryFilter('industrial')}>Ladies</button>
            <button onClick={() => handleCategoryFilter('medicine')}>Ladies</button>

           
          </div>
          <div className="product-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product._id} className="product-item">
                <img src={product.image} alt={product.title} />
                <p>Title: {product.title}</p>
                <p>Brand: {product.brand}</p>
                <p>Price: ${product.price}</p>
                <p>Category: {product.category}</p>
                {/* Add more product data fields */}
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminProduct;
