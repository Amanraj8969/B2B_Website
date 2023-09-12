import React, { useState } from 'react';
import Modal from 'react-modal';
import './AddProductForm.css'; // Import a CSS file for styling
Modal.setAppElement('#root');

const AddProductForm = ({ isOpen, onRequestClose, companyId,onProductAdded }) => {
  const [productType, setProductType] = useState('service');
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        productType,
        imageUrl,
        title,
        description,
        price,
        companyId,
      };
      // {console.log(">>>>>>>>>>>>>>>>>>>>..",companyId,productType,imageUrl)}
      const response = await fetch('http://localhost:5000/company/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Make sure this header is set
        },
        body: JSON.stringify(formData),
      });
      if(response.status===201){
        onProductAdded()
      }else{
        console.log("error adding product: ",response.statusText);
      }
    } catch (error) {
      console.error("Error adding product :",error);
    }
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add Product Form"
      className="modal" // Apply custom modal styles
      overlayClassName="modal-overlay" // Apply custom modal overlay styles
    >
      <div className="add-product-form">
        <h2>Add Product</h2>
        {/* <p className="company-name">{companyName}</p>  */}
        <form onSubmit={handleSubmit}>
          <label>
            Product Type:
            <select
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
            >
              <option value="service">Service</option>
              <option value="product">Product</option>
            </select>
          </label>
          <br />
          <label>
            Image URL:
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="input-field" // Apply custom input styles
            />
          </label>
          <br />
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input-field" // Apply custom input styles
            />
          </label>
          <br />
          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="input-field" // Apply custom input styles
            />
          </label>
          <br />
          <label>
            Price:
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="input-field" // Apply custom input styles
            />
          </label>
          <br />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default AddProductForm;
