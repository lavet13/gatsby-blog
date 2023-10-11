import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';

import type { SliceComponentProps } from 'gatsby';

import ThemeToggle from './toggle-theme.component';

const Header: FC<SliceComponentProps> = ({ sliceContext }) => {
  console.log({ sliceContext });

  return (
    <Flex as='nav' justifyContent='flex-end'>
      <ThemeToggle />
    </Flex>
  );
};

export default Header;
