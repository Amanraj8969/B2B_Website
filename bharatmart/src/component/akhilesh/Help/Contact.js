import React from 'react';
import './Contact.css'; // Import your CSS file with the required styling
import Navbar from '../../../Kaushik/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../../../Kaushik/Footer';
import logo from "../../../Assets/logo.png"

const ContactPage = () => {
  return (
    <>
      <Navbar />
     
      <div className="nebula-enterprise">
        <h2>Nebula Enterprise</h2>
        <p>
        

NebulaTrade.com is a cutting-edge B2B portal developed by Nebula Enterprises, aimed at providing comprehensive services to various sectors of manufacturers and customers. The platform's primary focus is to facilitate seamless transactions, foster networking, and offer a range of valuable services to businesses across industries.

        </p>
      </div>
      <div className="company-box">
        <img
          src={logo}
          alt="Company Logo"
          className="company-image"
        />
        <div className="company-content">
          <h2>About Our Company</h2>
          <p>
          NebulaTrade.com stands as a pioneering B2B portal, meticulously crafted by Nebula Enterprises. Its core mission revolves around delivering holistic solutions to a diverse spectrum of manufacturers and customers. With an unwavering commitment to excellence, the platform excels at streamlining transactions, nurturing invaluable connections, and providing an array of indispensable services to cater to the multifaceted needs of businesses spanning various industries. At NebulaTrade.com, innovation meets collaboration, paving the way for a brighter and more prosperous future for all its stakeholders.
          </p>
          =
        </div>
      </div>
      <div className="contact-box">
        
        <Link to="/">Back to Home Page</Link>
      </div>
      <div className="contact-container">
        <div className="contact-box">
          <h3>Contact Number</h3>
          <p>+91 8757059687</p>
        </div>
        <div className="contact-box">
          <h3>Gmail</h3>
          <p>support@nebulatrade.com</p>
        </div>
        <div className="contact-box">
          <h3>Address</h3>
          <p>khaugol patna </p>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default ContactPage;
