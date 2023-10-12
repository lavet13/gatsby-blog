import React, { FC } from 'react';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';

import type { PageProps } from 'gatsby';

type ThemeToggleProps = {
  colorScheme?: string;
};

const ThemeToggle: FC<Partial<ThemeToggleProps & PageProps>> = ({
  colorScheme,
  pageContext,
}) => {
  console.log({ pageContext });
  const { toggleColorMode: toggleMode } = useColorMode();

  const ToggleIcon = useColorModeValue(SunIcon, MoonIcon);

  return (
    <IconButton
      colorScheme={colorScheme}
      icon={<ToggleIcon />}
      aria-label='Toggle Theme'
      onClick={toggleMode}
    />
  );
};

export default ThemeToggle;
