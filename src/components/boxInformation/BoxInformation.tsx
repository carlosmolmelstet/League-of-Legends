import { ReactNode } from 'react';

import { Box, BoxProps, Heading } from '@chakra-ui/react';

export interface BoxInformationProps extends BoxProps {
  title: string;
  children: ReactNode;
}

export function BoxInformation({
  title,
  children,
  ...props
}: BoxInformationProps) {
  return (
    <Box
      w="300px"
      bg="neutrals.linear"
      borderRadius={24}
      border="1px solid"
      borderColor="neutrals.dark"
      {...props}
      p={4}
      pb={10}
    >
      <Heading fontSize={32} color="white">
        {title}
      </Heading>
      {children}
    </Box>
  );
}
