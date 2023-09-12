
import React, { useState, useEffect } from 'react';
import {
  Box,
  Center,
  Grid,
  GridItem,
  SimpleGrid,
  Spinner,
  Text,
} from '@chakra-ui/react';
import CompanyCard from './CompanyCard';
import Navbar from '../../Kaushik/Navbar';
import Footer from '../../Kaushik/Footer';
import Banner from '../Banner/Banner';

const ServicePage = () => {
  const [companyData, setCompanyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch company data from your backend API
    fetch('http://localhost:5000/all/companies')
      .then((response) => response.json())
      .then((data) => {
        console.log('????????/', data);
        setCompanyData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <Navbar />
     <Banner/>
      <Box pt="60px"> {/* Add padding from the top to avoid going under the navbar */}
        <Center mt="4">
          {loading ? (
             <>
            <Spinner size="xl" />
            <h2>No Company Found</h2>
            </>
          ) : (
            <Box width={{ lg: '76%', md: '76%', sm: '90%' }}>
              <SimpleGrid
                columns={{ base: 1, sm: 2, md: 3, lg: 3 }} // Adjust the number of columns for different screen sizes
                spacing={{ base: 4, md: 4 }}
              >
                {companyData.map((company) => (
                  <GridItem key={company._id}>
                    <Box
                      borderWidth="1px"
                      borderRadius="lg"
                      overflow="hidden"
                      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                      transition="transform 0.3s ease" // Add CSS transition
                      _hover={{
                        transform: 'scale(1.05)', // Scale up on hover
                      }}
                    >
                      <CompanyCard company={company} />
                      {/* Add CompanyCard content here */}
                    </Box>
                  </GridItem>
                ))}
              </SimpleGrid>
            </Box>
          )}
        </Center>
      </Box>
      <Footer />
    </>
  );
};

export default ServicePage;
