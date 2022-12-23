import { Flex, Text, Tooltip } from '@chakra-ui/react';
import { Spell } from '@services/queries/get-champion';

export interface SpellBoxProps {
  spell: Spell;
}

export function SpellBox({ spell }: SpellBoxProps) {
  return (
    <Tooltip
      label={`${spell.name} (${spell.key})`}
      bg="neutrals.dark"
      borderRadius={8}
    >
      <Flex
        w="54px"
        h="54px"
        bg="neutrals.light"
        backgroundImage={
          spell.key === 'P'
            ? `url(${process.env.NEXT_PUBLIC_DDRAGON_LEAGUEOFLEGENDS}cdn/12.23.1/img/passive/${spell.image.full})`
            : `url(${process.env.NEXT_PUBLIC_DDRAGON_LEAGUEOFLEGENDS}cdn/12.23.1/img/spell/${spell.image.full})`
        }
        backgroundSize="contain"
        borderRadius={4}
        justify="flex-end"
        align="flex-end"
        cursor="pointer"
      >
        <Flex
          bg="black"
          w="20px"
          h="20px"
          borderRadius="4px 0 4px 0"
          justify="center"
          align="center"
        >
          <Text color="white" fontSize={12}>
            {spell.key}
          </Text>
        </Flex>
      </Flex>
    </Tooltip>
  );
}
