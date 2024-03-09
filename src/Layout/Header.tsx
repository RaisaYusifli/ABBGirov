import { Flex, Link } from '@chakra-ui/react';
import React from 'react';

export const Header: React.FC = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      backgroundColor="white"
      padding="0 80px"
      gridColumn="1/2"
      gridRow="1/2"
      bgColor="white"
    >
      <Flex w={'100%'} gap={'2rem'}>
      <Link href='/abb-mf-pledge/create'>Girovun yaradılması</Link>
      <Link href='/abb-mf-pledge/pledgelist'>Girovun düzəlişi</Link></Flex>
      <Flex w="100%" alignItems="center" justifyContent="flex-end">
        <Flex
          w="120px"
          h="40px"
          borderRadius="50px"
          marginRight="24px"
          flexDirection="row"
          justifyContent="flex-end"
          alignItems="center"
          position="relative"
          backgroundColor="white"
        ></Flex>
      </Flex>
    </Flex>
  );
};
