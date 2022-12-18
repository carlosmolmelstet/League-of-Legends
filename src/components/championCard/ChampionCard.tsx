import { Box, Text, Image } from '@chakra-ui/react';

interface ChampionCardProps {
  id: string;
  name: string;
  title: string;
}

export default function ChampionCard({ name, title, id }: ChampionCardProps) {
  return (
    <Box cursor="pointer" w="184px">
      {/* if feito para corrigir incoerência  na api de imagens da Riot*/}
      <Image
        w="184px"
        h="184px"
        borderRadius="8px"
        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${
          id === 'Fiddlesticks' ? 'FiddleSticks' : id
        }_0.jpg`}
      />
      <Text color="white" fontWeight={700} mt={2}>
        {name}
      </Text>
      <Text
        color="neutrals.lightest"
        fontWeight={400}
        fontSize={12}
        textTransform="capitalize"
      >
        {title}
      </Text>
    </Box>
  );
}
