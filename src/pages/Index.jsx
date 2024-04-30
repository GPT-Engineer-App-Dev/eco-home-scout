import React from 'react';
import { Box, Flex, Heading, Text, Button, Input, useColorModeValue, Select, Checkbox } from '@chakra-ui/react';
import { FaSearch, FaUserPlus, FaSignInAlt } from 'react-icons/fa';

const Index = () => {
  const bg = useColorModeValue('gray.50', 'gray.800');
  const [searchQuery, setSearchQuery] = React.useState('');
  const color = useColorModeValue('gray.800', 'white');
  const [priceRange, setPriceRange] = React.useState('');
  const [homeType, setHomeType] = React.useState('');
  const [ecoFriendly, setEcoFriendly] = React.useState(false);

  const handleSearch = () => {
    console.log('Searching for:', searchQuery, priceRange, homeType, ecoFriendly);
    // Further implementation of search logic based on these filters should be done here.
  };

  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" bg={bg}>
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Heading fontSize="xl" textAlign="center" color={color}>Find and Renovate Your Dream Home</Heading>
        <Text mt={4} mb={8} align="center" color={color}>
          Explore old flats and houses with potential for modern eco-friendly renovations.
        </Text>
        <Flex gap={2} mb={4}>
          <Input
            placeholder="Search by location, property type, or renovation potential"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button leftIcon={<FaSearch />} colorScheme="blue" onClick={handleSearch}>Search</Button>
          <Input placeholder="Price range (e.g., 100000-500000)" value={priceRange} onChange={(e) => setPriceRange(e.target.value)} />
          <Select placeholder="Select type of home" value={homeType} onChange={(e) => setHomeType(e.target.value)}>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="villa">Villa</option>
          </Select>
          <Checkbox isChecked={ecoFriendly} onChange={(e) => setEcoFriendly(e.target.checked)}>Eco-friendly renovations potential</Checkbox>
        </Flex>
        <Flex gap={2}>
          <Button leftIcon={<FaUserPlus />} colorScheme="teal">Sign Up</Button>
          <Button leftIcon={<FaSignInAlt />} colorScheme="gray">Login</Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Index;