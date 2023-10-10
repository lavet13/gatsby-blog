import React, { FC } from 'react';
import type { GatsbyBrowser } from 'gatsby';
import { ChakraWrapper } from './src/@chakra-ui/gatsby-plugin/chakra-root-wrapper';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
}) => <ChakraWrapper>{element}</ChakraWrapper>;
