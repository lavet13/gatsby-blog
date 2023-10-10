import React from 'react';
import type { GatsbySSR } from 'gatsby';
import { ChakraWrapper } from './src/@chakra-ui/gatsby-plugin/chakra-root-wrapper';

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element }) => (
  <ChakraWrapper>{element}</ChakraWrapper>
);
