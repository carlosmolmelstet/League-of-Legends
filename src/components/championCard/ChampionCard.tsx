import { Box, Text, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export interface ChampionCardProps {
  id: string;
  name: string;
  title: string;
}

export function ChampionCard({ name, title, id }: ChampionCardProps) {
  const router = useRouter();

  return (
    <Box
      cursor="pointer"
      w="184px"
      id={`champion_card_` + id}
      onClick={() => router.push('/champions/' + id)}
    >
      {/* if feito para corrigir incoerência  na api de imagens da Riot*/}
      <Image
        w="184px"
        h="184px"
        borderRadius="8px"
        src={
          process.env.NEXT_PUBLIC_DDRAGON_LEAGUEOFLEGENDS +
          `cdn/img/champion/tiles/${
            id === 'Fiddlesticks' ? 'FiddleSticks' : id
          }_0.jpg`
        }
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
