import { Box, Flex } from '@chakra-ui/react';
import React, { FC, PropsWithChildren } from 'react';

import ThemeToggle from './toggle-theme.component';

const Header: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex as='nav' justifyContent='flex-end'>
      <ThemeToggle />
    </Flex>
  );
};

export default Header;
