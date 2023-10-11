import { ChakraProvider } from '@chakra-ui/react';
import React, { FC, PropsWithChildren } from 'react';
import theme from './theme';
import Layout from '../../components/layout.component';

export const ChakraWrapper: FC<PropsWithChildren> = ({ children }) => {
  console.log({ theme });

  return (
    <ChakraProvider theme={theme} resetCSS>
      <Layout>{children}</Layout>
    </ChakraProvider>
  );
};
