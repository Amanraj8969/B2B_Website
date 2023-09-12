// // import React , { useState } from 'react';
// // import {
// //   Box,
// //   Text,
// //   Image,
// //   VStack,
// //   Divider,
// //   Button,
// // } from '@chakra-ui/react';
// // import ProductCart from './ProductCart';

// // const CompanyProductItem = ({ product }) => {
// //   const [cart, setCart] = useState([]);
// //   const [isCartFormOpen, setIsCartFormOpen] = useState(false);

// //   // Destructure product data here
// //   const { name, description, imageUrl, price } = product;

// //   const handleAddToCartClick = () => {
// //     setIsCartFormOpen(true);
// //   };

 

// //   const handleCloseCartForm = () => {
// //     setIsCartFormOpen(false);
// //   };


// //   return (
// //     <Box
// //       borderWidth="1px"
// //       borderRadius="lg"
// //       overflow="hidden"
// //       boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
// //     >
// //       <Image src={imageUrl} alt={name} maxH="200px" mx="auto" />
// //       <VStack spacing={2} p={4}>
// //         <Text fontWeight="bold">{name}</Text>
// //         <Text>{description}</Text>
// //         <Text fontSize="sm">
// //           <strong>Price:</strong> {price}
// //         </Text>
// //         <Button
// //           colorScheme="teal"
// //           onClick={handleAddToCartClick}
// //         >
// //           Add to Cart
// //         </Button>
// //       </VStack>
// //       <Divider bg="black" />
// //       {isCartFormOpen && (
// //         <ProductCart
// //           product={product} // Pass the product data to the CartForm
// //           onClose={handleCloseCartForm}
// //           onAddToCart={() => addToCart(product)} 
// //         />
// //       )}
// //     </Box>
// //   );
// // };

// // export default CompanyProductItem;

// import React, { useState } from 'react';
// import {
//   Box,
//   Text,
//   Image,
//   VStack,
//   Divider,
//   Button,
// } from '@chakra-ui/react';
// import ProductCart from './ProductCart'; // Import the ProductCart component

// const CompanyProductItem = ({ product }) => {
//   const [isCartFormOpen, setIsCartFormOpen] = useState(false);

//   // Destructure product data here
//   const { name, description, imageUrl, price } = product;

//   const handleAddToCartClick = () => {
//     setIsCartFormOpen(true);
//   };

//   const handleCloseCartForm = () => {
//     setIsCartFormOpen(false);
//   };

//   return (
//     <Box
//       borderWidth="1px"
//       borderRadius="lg"
//       overflow="hidden"
//       boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
//     >
//       <Image src={imageUrl} alt={name} maxH="200px" mx="auto" />
//       <VStack spacing={2} p={4}>
//         <Text fontWeight="bold">{name}</Text>
//         <Text>{description}</Text>
//         <Text fontSize="sm">
//           <strong>Price:</strong> {price}
//         </Text>
//         <Button colorScheme="teal" onClick={handleAddToCartClick}>
//           Add to Cart
//         </Button>
//       </VStack>
//       <Divider bg="black" />
//       {/* Conditionally render the ProductCart form */}
//       {isCartFormOpen && (
//         <ProductCart
//           product={product} // Pass the product data to the ProductCart
//           onClose={handleCloseCartForm}
//         />
//       )}
//     </Box>
//   );
// };

// export default CompanyProductItem;

import React, { useState } from 'react';
import {
  Box,
  Text,
  Image,
  VStack,
  Divider,
  Button,
  Modal, // Import the Modal component
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import ProductCart from './ProductCart';

const CompanyProductItem = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Destructure product data here
  console.log("<<<<<<",product)
  const { title, description, imageUrl, price,companyId,productType } = product;

  const handleAddToCartClick = () => {
    setIsModalOpen(true);
  };
  // console.log("name",name)

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
    >
      <Image src={imageUrl} alt={title} maxH="200px" mx="auto" />
      <VStack spacing={2} p={4}>
      <Text fontWeight="bold">Type:{productType}</Text>
        <Text fontWeight="bold">{title}</Text>
        <Text>CompanyId:{companyId}</Text>
        <Text>{description}</Text>
        <Text fontSize="sm">
          <strong>Price:</strong> {price}
        </Text>
        <Button colorScheme="teal" onClick={handleAddToCartClick}>
          Enquiry
        </Button>
      </VStack>
      <Divider bg="black" />
      {/* Use the Modal component to display the ProductCart */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cart Form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ProductCart
              product={product}
              onClose={handleCloseModal}
            />
          </ModalBody>
          <ModalFooter>
            {/* You can add footer content here if needed */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CompanyProductItem;
