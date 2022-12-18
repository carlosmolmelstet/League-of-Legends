import { ReactNode } from 'react';

import { Box, Flex } from '@chakra-ui/react';

import Menu from './menu';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Flex>
      <Menu />
      <Box maxH="100vh" overflow="auto" px={4} py={4} w="100%">
        {children}
      </Box>
    </Flex>
  );
}
