// import React, { useState } from 'react';
// import axios from 'axios';
// import "./Addproduct.css"

// function AddProduct() {
//   const [product, setProduct] = useState({
//     image: '',
//     title: '',
//     brand: '',
//     price: 0,
//     category: '',
//     quantity: 0,
//     description: '',
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:5000/product/add', product);
//       console.log('Product added:', response.data);
//     } catch (error) {
//       console.error('Error adding product:', error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProduct((prevProduct) => ({
//       ...prevProduct,
//       [name]: value,
//     }));
//   };

//   return (
//     <div className="add-product-container">
//       <h2>Add Product</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Image Link</label>
//         <input
//           type="text"
//           name="image"
//           placeholder="Image URL"
//           value={product.image}
//           onChange={handleInputChange}
//         /><br/>
//           <label>Title</label>
//          <input
//           type="text"
//           name="title"
//           placeholder="Title here"
//           value={product.title}
//           onChange={handleInputChange}
//         /><br/>
//           <label>Brand</label>
//          <input
//           type="text"
//           name="brand"
//           placeholder="Ex-Puma"
//           value={product.brand}
//           onChange={handleInputChange}
//         /><br/>
//           <label>Price</label>
//          <input
//           type="number"
//           name="price"
//           placeholder="ex-599"
//           value={product.price}
//           onChange={handleInputChange}
//         /><br/>
//           <label>Categories</label>
//          <input
//           type="text"
//           name="category"
//           placeholder="ex-Men"
//           value={product.category}
//           onChange={handleInputChange}
//         /><br/>
//           <label>Quantity</label>
//          <input
//           type="number"
//           name="quantity"
//           placeholder="ex-1,2"
//           value={product.quantity}
//           onChange={handleInputChange}
//         /><br/>
//           <label>Description</label>
//           <textarea
//           name="description"
//           placeholder="Product Description"
//           value={product.description}
//           onChange={handleInputChange}
//         /><br/>
//         {/* Other input fields for other properties */}
//         <button type="submit"className="submit-button">Add Product</button>
//       </form>
//     </div>
//   );
// }

// export default AddProduct;

////////////////////////////////////////////////
// import React, { useState } from 'react';
// import axios from 'axios';
// import "./Addproduct.css"
// import { useNavigate } from 'react-router-dom';

// function AddProduct() {

//   const navigate=useNavigate();
//   const [product, setProduct] = useState({
//     image: '',
//     title: '',
//     brand: '',
//     price: 0,
//     category: '',
//     quantity: 0,
//     description: '',
//   });

//   const brands = ["other", "Adidas", "Puma", "Reebok", "New Balance"];
//   const categories = ["men", "ladies", "Kids", "decoration","beautyproduct","mobile","decoration","light","industrial","footwear"];

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:5000/product/add', product);
//       console.log('Product added:', response.data);
//       navigate('/shopping')
      
//     } catch (error) {
//       console.error('Error adding product:', error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProduct((prevProduct) => ({
//       ...prevProduct,
//       [name]: value,
//     }));
//   };

//   return (
//     <div className="add-product-container">
//       <h2>Add Product</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Image Link: </label>
//         <input
//           type="text"
//           name="image"
//           placeholder="Image URL"
//           value={product.image}
//           onChange={handleInputChange}
//         /><br/>
//         <label>Title :</label>
//         <input
//           type="text"
//           name="title"
//           placeholder="Title here"
//           value={product.title}
//           onChange={handleInputChange}
//         /><br/>
//         <label>Brand</label>
//         <select
//           name="brand"
//           value={product.brand}
//           onChange={handleInputChange}
//         >
//           <option value="" disabled>Select Brand</option>
//           {brands.map((brand) => (
//             <option key={brand} value={brand}>{brand}</option>
//           ))}
//         </select><br/>
//         <label>Price :</label>
//         <input
//           type="number"
//           name="price"
//           placeholder="ex-599"
//           value={product.price}
//           onChange={handleInputChange}
//         /><br/>
//         <label>Categories</label>
//         <select
//           name="category"
//           value={product.category}
//           onChange={handleInputChange}
//         >
//           <option value="" disabled>Select Category</option>
//           {categories.map((category) => (
//             <option key={category} value={category}>{category}</option>
//           ))}
//         </select><br/>
//         <label>Quantity :</label>
//         <input
//           type="number"
//           name="quantity"
//           placeholder="ex-1,2"
//           value={product.quantity}
//           onChange={handleInputChange}
//         /><br/>
//         <label>Description</label>
//         <textarea
//           name="description"
//           placeholder="Product Description"
//           value={product.description}
//           onChange={handleInputChange}
//         /><br/>
//         <button type="submit" className="submit-button">Add Product</button>
//       </form>
//     </div>
//   );
// }

// export default AddProduct;

import React, { useState } from 'react';
import axios from 'axios';
import "./Addproduct.css"
import { useNavigate } from 'react-router-dom';

function AddProduct() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    image: '',
    title: '',
    brand: '',
    price: 0,
    category: '',
    quantity: 0,
    description: '',
  });

  const brands = ["other", "Adidas", "Puma", "Reebok", "New Balance"];
  const categories = ["men", "ladies", "Kids", "decoration", "beautyproduct", "mobile", "decoration", "light", "industrial", "footwear"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/product/add', product);
      console.log('Product added:', response.data);
      navigate('/shopping');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <div className="modal">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Image Link: </label>
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleInputChange}
          className="input-field"
        /><br />
        <label>Title :</label>
        <input
          type="text"
          name="title"
          placeholder="Title here"
          value={product.title}
          onChange={handleInputChange}
          className="input-field"
        /><br />
        <label>Brand</label>
        <select
          name="brand"
          value={product.brand}
          onChange={handleInputChange}
          className="input-field"
        >
          <option value="" disabled>Select Brand</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select><br />
        <label>Price :</label>
        <input
          type="number"
          name="price"
          placeholder="ex-599"
          value={product.price}
          onChange={handleInputChange}
          className="input-field"
        /><br />
        <label>Categories</label>
        <select
          name="category"
          value={product.category}
          onChange={handleInputChange}
          className="input-field"
        >
          <option value="" disabled>Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select><br />
        <label>Quantity :</label>
        <input
          type="number"
          name="quantity"
          placeholder="ex-1,2"
          value={product.quantity}
          onChange={handleInputChange}
          className="input-field"
        /><br />
        <label>Description</label>
        <textarea
          name="description"
          placeholder="Product Description"
          value={product.description}
          onChange={handleInputChange}
          className="input-field"
        /><br />
        <button type="submit" className="submit-button">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
