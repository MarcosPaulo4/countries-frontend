import { Box, Center, Divider, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import React from 'react';

interface DataListProps<T> {
  data: T[];
  loading: boolean;
  error: string | null;
  renderItem: (item: T) => React.ReactNode;
  itemKey: (item: T) => string;
  listTitle?: string;
  maxH?: string;
}

const DataList = <T extends object>({ data, loading, error, renderItem, itemKey, maxH = '700px' }: DataListProps<T>) => {
  if (loading) {
    return (
      <Center>
        <Spinner />

      </Center>
    );
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <Center flexDirection="column" pb={20}>
      <Box
        maxH={maxH}
        overflowY="auto"
        w="100%"
        css={{
          '&::-webkit-scrollbar': {
            width: '5px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#F3F7F6',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#888',
            borderRadius: '30px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#555',
          },
        }}
      >
        <List spacing={3} bg='#F3F7F6' borderRadius="10px" p={5}>
          {data.map((item, index) => (
            <Box key={itemKey(item)}>
              <ListItem h="30px" pb={8}>
                {renderItem(item)}
              </ListItem>
              {index < data.length - 1 && (
                <Divider borderColor="gray.300" />
              )}
            </Box>
          ))}
        </List>
      </Box>
    </Center>
  );
};

export default DataList;
