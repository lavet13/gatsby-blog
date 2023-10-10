import { ChakraProvider } from '@chakra-ui/react';
import React, { FC } from 'react';
import { WrapPageElementProps } from '../../common/types/types';
import theme from './theme';
import Layout from '../../components/layout.component';

export const ChakraWrapper: FC<WrapPageElementProps> = ({ children }) => {
  console.log({ theme });

  return (
    <ChakraProvider theme={theme} resetCSS>
      <Layout>{children}</Layout>
    </ChakraProvider>
  );
};
