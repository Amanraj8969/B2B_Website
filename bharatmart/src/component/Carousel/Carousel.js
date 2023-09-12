// Carousel.js

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import  "./Carousel.css"
const PartnerCarousel = () => {
  return (
    <div className="carousel-container">
      <h2>Our Partners</h2>
      <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showThumbs={false}>
        <div>
          <img src="https://cdn2-b3f6.kxcdn.com/wp-content/uploads/2022/08/courier-parcel-background-delivery-servic-courier-parcel-background-delivery-service-124604337_result.webp" alt="Partner 1" />
        </div>
        <div>
          <img src="https://www.scnsoft.com/blog-pictures/ecommerce/b2c-ecom.png" alt="Partner 2" />
        </div>
        <div>
          <img src="https://f9s9t9d6.rocketcdn.me/wp-content/uploads/2019/12/venta-marketplace.jpg" alt="Partner 3" />
        </div>
        {/* Add more partner images as needed */}
      </Carousel>
    </div>
  );
};

export default PartnerCarousel;
