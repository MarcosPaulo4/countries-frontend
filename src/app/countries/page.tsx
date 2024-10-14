'use client'

import useCountries from '@/hooks/useCountries';
import { SearchIcon } from '@chakra-ui/icons';
import { Box, Center, Flex, Heading, Link, Text, Tooltip } from '@chakra-ui/react';
import ReactCountryFlag from 'react-country-flag';
import DataList from '../components/dataList';


const CountryList = () => {
  const { countries, loading, error } = useCountries();

  return (
    <Center flexDirection="column">
      <Box pt={10} pb={20}>
        <Heading>Country Explorer</Heading>
      </Box>

      <DataList
        data={countries}
        loading={loading}
        error={error}
        itemKey={(country) => country.countryCode}
        renderItem={(country) => (
          <Flex justify="space-between" >
            <Box display="flex" justifyContent="space-between" alignItems="center" mr={10}>
              <ReactCountryFlag countryCode={country.countryCode} style={{ fontSize: "2em", marginRight: "15px", borderRadius: "50px" }} svg />
              <Text>{country.name}</Text>
            </Box>
            <Box>
              <Tooltip label="Click to see more about this country!" fontSize="sm" bg="gray.800">
                <Link href={`/countries/${country.countryCode}`} >
                  <SearchIcon boxSize={4} />
                </Link>
              </Tooltip>
            </Box>
          </Flex>
        )}
      />

    </Center >

  );
};

export default CountryList;
