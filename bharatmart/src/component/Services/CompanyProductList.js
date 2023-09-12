// import React, { useEffect, useState } from 'react';
// import {
//   Box,
//   Flex,
//   SimpleGrid, // Use SimpleGrid for responsive grid layout
// } from '@chakra-ui/react';
// import CompanyProductItem from './CompanyProductItem';

// import mongoose from 'mongoose';


// const CompanyProductList = ({ companyId }) => {

//   const [Companyproducts, setCompanyProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       if (companyId) {
//         try {
//           const response = await fetch(`http://localhost:5000/company/Allproducts/${companyId}`);
//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
//           const data = await response.json();
//           if (Array.isArray(data)) {
//             setCompanyProducts(data);
//             setLoading(false);
//           } else {
//             console.error('Invalid data format:', data);
//             setLoading(false);
//           }
//         } catch (error) {
//           console.error('Error fetching products:', error);
//           setLoading(false);
//         }
//       }
//     };

//     fetchData();
//   }, [companyId]);
  
//   console.log("Companyproducts:", Companyproducts);
  

//   return (
//     <Box mt="4">
//       <Flex justifyContent="center">
//         <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={4}>
  

//         {Companyproducts.map((product) => (
//             <CompanyProductItem key={product._id} product={product} />
//           ))}
//         </SimpleGrid>
//       </Flex>
//     </Box>
//   );
// };

// export default CompanyProductList;


import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  SimpleGrid,
  Text, // Import Text component to display messages
  Spinner, // Import Spinner component for loading state
} from '@chakra-ui/react';
import CompanyProductItem from './CompanyProductItem';

const CompanyProductList = ({ companyId }) => {
  const [Companyproducts, setCompanyProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (companyId) {
        try {
          const response = await fetch(`http://localhost:5000/company/Allproducts/${companyId}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          if (Array.isArray(data)) {
            setCompanyProducts(data);
          } else {
            console.error('Invalid data format:', data);
          }
        } catch (error) {
          console.error('Error fetching products:', error);
        } finally {
          setLoading(false); // Set loading to false whether successful or not
        }
      }
    };

    fetchData();
  }, [companyId]);

  console.log('Companyproducts:', Companyproducts);

  return (
    <Box mt="4">
    <Flex justifyContent="center">
      {loading ? (
        <Spinner size="lg" color="teal" />
      ) : !Companyproducts || Companyproducts.length === 0 ? (
        <Text>No products found.</Text>
      ) : (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={4}>
          {Companyproducts.map((product) => (
            <CompanyProductItem key={product._id} product={product} />
          ))}
        </SimpleGrid>
      )}
    </Flex>
  </Box>
  );
};

export default CompanyProductList;
