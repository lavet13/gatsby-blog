import React from 'react';
import type { GatsbySSR } from 'gatsby';
import { ChakraWrapper } from './src/@chakra-ui/gatsby-plugin/chakra-root-wrapper';
import { GatsbySharedScripts } from './src/scripts/gatsby-shared';

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element }) => (
  <>
    <ChakraWrapper>{element}</ChakraWrapper>
    <GatsbySharedScripts />
  </>
);
