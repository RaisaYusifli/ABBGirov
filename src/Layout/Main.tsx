import { Box, Container, VStack } from '@chakra-ui/react';
import React from 'react';

export const Main: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box gridColumn="1/2" gridRow="2/3" p="0 48px 64px 48px" backgroundColor="#F2F2F7">
      <Container maxW="6xl" centerContent>
        <VStack spacing={'20px'} align={'start'} w={'100%'}>
          {children}
        </VStack>
      </Container>
    </Box>
  );
};
