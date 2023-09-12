import React, { useState } from 'react';
import {
  Box,
  Input,
  Button,
  VStack,
  FormControl,
  FormLabel,
  useToast,
} from '@chakra-ui/react';
import './AddProductForm.css';



const ProductCart = ({ product, onClose, onAddToCart }) => {

    const toast=useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async() => {
    try {
        const cartData = {
          companyId: product.companyId,
          companyProductId: product._id,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
        };
    
        // Send a POST request to your server to save the data to MongoDB
        const response = await fetch('http://localhost:5000/companyproduct/lead', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cartData),
        });
    
        if (response.ok) {
            alert("Our Representative Contact you Shortly!")
            toast({
                title: 'Your Enquiry Submitted',
                description: "We will contact you soon.",
                status: 'success',
                duration: 2000,
                position:"top",
                isClosable: true,
              })
          onClose();
        } else {
          // Handle errors if the save operation fails
          console.error('Error saving cart data:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
  };

  return (
    
    <Box className="add-product-form">
      <h2>Cart Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="input-field"
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="input-field"
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="input-field"
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="input-field"
          />
        </label>
        <br />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </Box>
  );
};

export default ProductCart;
