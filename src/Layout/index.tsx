import { Grid } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import { Main } from './Main';

export const Layout: React.FC = () => {
  return (
    <Grid gridTemplateColumns="1fr" gridTemplateRows="64px 1fr" minH="100vh" bg="white" w={'100%'}>
      <Header />
     <Main>
        <Outlet />
      </Main>
    </Grid>
  );
};
