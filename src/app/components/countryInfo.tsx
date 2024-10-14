'use client';

import useCountryInfo from '@/hooks/useCountryInfo';
import { SearchIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Flex, Heading, Image, Link, Spinner, Text, Tooltip } from '@chakra-ui/react';
import { BorderCountryType } from '../countryInfo.interface';
import DataList from './dataList';
import { PopulationChart } from './populationChart';

const renderBorderCountry = (border: BorderCountryType) => (
  <Flex justify="space-between">
    <Box display="flex" justifyContent="space-between" alignItems="center" mr={10}>
      <Text>{border.commonName} ({border.officialName})</Text>
    </Box>
    <Tooltip label="Click to see more about this country!" fontSize="sm" bg="gray.800">
      <Link href={`/countries/${border.countryCode}`}>
        <SearchIcon boxSize={4} />
      </Link>
    </Tooltip>
  </Flex>

);

const borderKey = (border: BorderCountryType) => border.countryCode;

const CountryInfo = ({ code }: { code: string }) => {
  const { countryInfo, loading, error } = useCountryInfo(code);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  if (!countryInfo) {
    return <Text>Country information not found.</Text>;
  }

  return (
    <Box>
      <Link _hover="none" href='/' pt={2}>
        <Button variant="ghost">
          Home Page
        </Button>
      </Link>
      <Center flexDirection="column">
        <Box p={5}>
          <Heading>Country Information</Heading>
        </Box>

        <Center display="flex" flexDirection="column">
          <Box p={5}>
            <Image
              src={countryInfo.flag}
              alt={`${countryInfo.commonName} flag`}
              boxSize="100px"
              borderRadius="20px"
            />
          </Box>
          <Text fontSize="2xl" fontWeight={'bold'}>
            {countryInfo.commonName}
          </Text>
        </Center>

        <Center p={5} flexDirection="column">
          <Flex gap={2}>
            <Text fontSize="md">Population: </Text>
            <Text fontWeight={'semibold'}>
              {countryInfo?.population?.at(-1)?.value || 0}
            </Text>

          </Flex>
          <PopulationChart data={countryInfo.population} />
        </Center>
        <Box p={5}>
          <Text fontSize="xl">Border Countries</Text>
        </Box>
        {countryInfo.borders.length > 0 ? (
          <DataList
            data={countryInfo.borders}
            loading={false}
            error={null}
            renderItem={renderBorderCountry}
            itemKey={borderKey}
          />
        ) : (
          <Text>No border countries available.</Text>
        )}
      </Center>
    </Box>
  );
};

export default CountryInfo;
