import { useState } from 'react';

import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { Skin } from '@services/queries/get-champion';

export interface SkinsProps {
  skins: Skin[];
  id: string;
}

export function Skins({ skins, id }: SkinsProps) {
  const [selectedSkinNum, setSelectedSkinNum] = useState(0);

  return (
    <Box
      w="100%"
      bg="neutrals.linear"
      borderRadius={24}
      border="1px solid"
      borderColor="neutrals.dark"
      backgroundImage={`url(${process.env.NEXT_PUBLIC_DDRAGON_LEAGUEOFLEGENDS}cdn/img/champion/splash/${id}_${selectedSkinNum}.jpg)`}
      backgroundSize="cover"
    >
      <Box
        w="400px"
        bg="rgba(0, 0, 0, 0.6)"
        borderRadius="24px 0 0 24px"
        px={4}
        py={6}
      >
        <Heading color="white" fontSize={42}>
          Skins Disponiveis
        </Heading>
        <Box
          css={{
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-track': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'neutrals.base',
              borderRadius: '24px',
            },
          }}
          h="600px"
          overflow="auto"
          mt={10}
        >
          <Stack spacing={4}>
            {skins.map(skin => (
              <Flex
                key={skin.id}
                align="center"
                opacity={selectedSkinNum === skin.num ? 1 : '0.5'}
                onClick={() => setSelectedSkinNum(skin.num)}
                cursor="pointer"
              >
                <Box
                  backgroundImage={`url(${process.env.NEXT_PUBLIC_DDRAGON_LEAGUEOFLEGENDS}cdn/img/champion/tiles/${id}_${skin.num}.jpg)`}
                  backgroundSize="cover"
                  borderRadius={8}
                  w="64px"
                  h="64px"
                ></Box>
                <Text color="white" fontWeight={700} ml={4}>
                  {skin.num === 0 ? id : skin.name}
                </Text>
              </Flex>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
