import { Center } from '@chakra-ui/react';
import React from 'react';

import LogoIcon from './icons/LogoIcon';

export const RouteLoading: React.FC<{ mt?: string | number }> = ({ mt = 0 }) => (
  <Center mt={mt} h="100%" w="100%">
    <LogoIcon />
  </Center>
);
