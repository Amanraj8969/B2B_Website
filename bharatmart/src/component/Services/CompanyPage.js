// // import React, { useEffect, useState } from 'react';
// // import { useParams } from 'react-router-dom';
// // import Navbar from '../../Kaushik/Navbar';

// // const CompanyPage = () => {
// //   const { companyId } = useParams(); // Access the company ID from the route parameters
// //   const [company, setCompany] = useState(null);

// //   useEffect(() => {
// //     // Fetch company data from your database using the company ID
// //     // Update the "company" state with the fetched data
// //     // Example API call:
// //     if(companyId!=undefined){
// //         fetch(`http://localhost:5000/details/companies/${companyId}`)
// //         .then((response) => {
// //             if (!response.ok) {
// //               throw new Error('Network response was not ok');
// //             }
// //             return response.json();
// //           })
// //           .then((data) => {
// //             setCompany(data); // Update the state with the fetched company data
// //           })
// //           .catch((error) => {
// //             console.error('Error fetching company data:', error);
// //           });
// //     }
   
// //   }, [companyId]);
// //   {console.log("666666666666",company)}

// //   return (
// //     <>
// //     <Navbar/>
// //     <div>
// //       {company ? (
// //       <>
// //         <div>
// //           <img src={company.image} alt={company.name} />
// //           <h1>{company.name}</h1>
// //           <p>Mobile: {company.mobileNumber}</p>
// //           <p>Email: {company.email}</p>
// //         </div>
// //         <div>
// //           <h2>About the Company</h2>
// //           <p>{company.description}</p>
// //         </div>
// //       </>
// //     ) : (
// //       <p>Loading...</p>
// //     )}
// //     </div>
// //     </>
// //   );
// // };

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Navbar from '../../Kaushik/Navbar';
// import {
//   Box,
//   Text,
//   Heading,
//   Image,
//   Badge,
//   VStack,
//   Divider,
// } from '@chakra-ui/react';

// const CompanyPage = () => {
//   const { companyId } = useParams();
//   const [company, setCompany] = useState(null);

//   useEffect(() => {
//     if (companyId !== undefined) {
//       fetch(`http://localhost:5000/details/companies/${companyId}`)
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
//           return response.json();
//         })
//         .then((data) => {
//           setCompany(data);
//         })
//         .catch((error) => {
//           console.error('Error fetching company data:', error);
//         });
//     }
//   }, [companyId]);

//   const imageStyle = {
//     borderRadius: '10px', // Add border radius
//     transition: 'transform 0.3s ease', // Add transition effect
//     '&:hover': {
//       transform: 'scale(1.05)', // Add hover effect (scale up)
//     },
//   };

//   return (
//     <>
//       <Navbar />
//       <Box
//         padding={{ base: '20px', md: '60px' }} // Adjust padding for responsiveness
//         boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
//         textAlign="center"
//         marginTop={{ base: '50px', md: '0' }} // Adjust margin top for responsiveness
//       >
//         {company ? (
//           <>
//             <Image
//               src={company.image}
//               alt={company.name}
//               maxH="200px"
//               mx="auto"
//               style={imageStyle} 
//             />
//             <Heading color="teal" fontWeight="bold" mt="2">
//               {company.name}
//             </Heading>
//             <Text color="grey">{company.description}</Text>
//             <Text fontSize="sm" mt="1">
//               <strong>Mobile Number:</strong> {company.mobileNumber}
//             </Text>
//             <Text fontSize="sm">
//               <strong>Email:</strong>{' '}
//               <a href={`mailto:${company.email}`}>{company.email}</a>
//             </Text>
//             <Text fontSize="sm">
//               <strong>GST:</strong> {company.gst}
//             </Text>
//             {/* <Badge
//             //   onClick={handlecheck}
//               style={{
//                 background: '#047a70',
//                 borderRadius: '5px',
//                 border: 'none',
//                 height: '30px',
//                 width: '140px',
//                 color: 'white',
//                 fontWeight: 'bold',
//                 cursor: 'pointer',
//                 margin: '5px',
//                 mt: '2',
//               }}
//               colorScheme="blue"
//             >
//               Service Provider
//             </Badge> */}
//           </>
//         ) : (
//           <p>Loading...</p>
//         )}
//       </Box>
//       <Divider
//         bg="black" // Horizontal line color
//         mt="4" // Margin top
//       />
//       <Heading textAlign="center" mt="4">
//         Our Products
//       </Heading>
//       {/* Add product cards or list here */}
//     </>
//   );
// };

// export default CompanyPage;


// // export default CompanyPage;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Kaushik/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import AddProductForm from './AddProductForm';

import {
  Box,
  Text,
  Heading,
  Image,
  VStack,
  Divider,
  Button, // Import Button component
} from '@chakra-ui/react';
import CompanyProductList from './CompanyProductList';
import Footer from '../../Kaushik/Footer';
import Banner from "../Banner/Banner"




const CompanyPage = () => {
  const { companyId } = useParams();
  const [company, setCompany] = useState(null);
  const [showProductForm, setShowProductForm] = useState(false); // State to control the product form visibility

  useEffect(() => {
    if (companyId !== undefined) {
      fetch(`http://localhost:5000/details/companies/${companyId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setCompany(data);
        })
        .catch((error) => {
          console.error('Error fetching company data:', error);
        });
    }
  }, [companyId]);

  const imageStyle = {
    borderRadius: '10px',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  };

  // Function to toggle the product form visibility
  const toggleProductForm = () => {
    setShowProductForm(!showProductForm);
  };
  const handleProductAdded = () => {
    toast.success('Product added successfully!', {
      position: 'top-right', // Set the position of the toast
      autoClose: 3000, // Set how long the toast will be displayed (in milliseconds)
      hideProgressBar: false, // Set to false to show a progress bar
      closeOnClick: true, // Close the toast when clicked
      pauseOnHover: true, // Pause the timer when hovered
      draggable: true, // Allow the toast to be dragged
    });
    // Implement any logic you need after a product is added
    // For example, you can refresh the list of products
    // or show a success message.
    // You can add the logic here.
  };

  return (
    <>
      <Navbar />
      <Banner/>
      
      <Box
        padding={{ base: '20px', md: '60px' }}
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        textAlign="center"
        marginTop={{ base: '50px', md: '0' }}
      >
        {company ? (
          <>
            <Image
              src={company.image}
              alt={company.name}
              maxH="200px"
              mx="auto"
              style={imageStyle}
            />
            <Heading color="teal" fontWeight="bold" mt="2">
              {company.name}
            </Heading>
            <Text color="grey">{company.description}</Text>
            <Text fontSize="sm" mt="1">
              <strong>Mobile Number:</strong> {company.mobileNumber}
            </Text>
            <Text fontSize="sm">
              <strong>Email:</strong>{' '}
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </Text>
            <Text fontSize="sm">
              <strong>GST:</strong> {company.gst}
            </Text>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </Box>
      <Divider bg="black" mt="4" />
      <Heading textAlign="center" mt="4">
        Our Products
      </Heading>
      {/* Add product cards or list here */}
        {/* <CompanyProductList companyId={companyId }/> */}
        <CompanyProductList companyId={companyId}/>
      {/* Add Product button */}
      <Button
        onClick={toggleProductForm}
        position="fixed"
        bottom="20px"
        right="20px"
        zIndex="999"
        bgColor="teal"
        color="white"
        _hover={{ bgColor: 'teal.500' }}
        display={showProductForm ? 'none' : 'block'}
      >
        Add Prod
      </Button>
      
      {showProductForm && (
        // Open a new window for the form
        // Note: You can customize the size and behavior of the new window
       
          <AddProductForm
          isOpen={showProductForm}
          onRequestClose={toggleProductForm}
          companyId={companyId}
          onProductAdded={handleProductAdded} />
        
      )}
      <Footer/>
    </>
  );
};

export default CompanyPage;
