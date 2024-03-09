import { AvatarGroup } from '@chakra-ui/react';
import { Avatar, Badge, Button, Center, Code, Heading, Stack, Text, VStack } from '@chakra-ui/react';
// import { AlertHexagon } from '@abb/uikit/icons/outline/alerts';
// import { AlertHexagon as AlertHexagonS } from '@abb/uikit/icons/solid/alerts';
import { SWR_CONFIG } from 'consts';
import { httpClient } from 'httpClient';
import React from 'react';
import { useTranslation } from 'react-i18next';
import useSWR from 'swr';

export const Home = () => {
  const { t } = useTranslation<string>('test');

  const data = useSWR('/example/v1/list', httpClient.get, SWR_CONFIG);
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;
  return (
    <Center data-test-id="home-page-wrapper" w="100%" h="100%">
      <VStack>
        <Stack spacing="24px">
          {sizes.map((size) => (
            <AvatarGroup size={size} max={3} key={size}>
              <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
              <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
              <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
              <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
            </AvatarGroup>
          ))}
        </Stack>

        <Stack direction="row">
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
          <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
        </Stack>
        <Badge>sdvnsbj kfjdbv k</Badge>
        <Text variant="body1">Test</Text>
        <Button size="xs" colorScheme="brand" variant="gray">
          Test
        </Button>
        <Heading variant="pageHeading">{t('welcome')}</Heading>
        <Code bg="AppWorkspace" children={JSON.stringify(data)} />
      </VStack>
      {/* <AlertHexagon />
      <AlertHexagonS /> */}
    </Center>
  );
};
