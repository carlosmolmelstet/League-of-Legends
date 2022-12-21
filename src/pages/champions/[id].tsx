import { useState } from 'react';

import { AspectRatio, Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { BoxInformation } from '@components/boxInformation';
import { Skins } from '@components/skins';
import { SpellBox } from '@components/spellBox';
import { Data, getChampion } from '@services/queries/get-champion';
import { GetServerSideProps } from 'next';

import Layout from '../../components/layout';
interface ChampionsProps {
  data: Data;
}

type SpellSelectedType = 'P' | 'Q' | 'E' | 'W' | 'R';

export default function Champions({ data }: ChampionsProps) {
  const [spellSelected, setSpellSelected] = useState<SpellSelectedType>('P');

  return (
    <Layout>
      <Flex
        w="100%"
        bg="neutrals.dark"
        borderRadius={24}
        minH="300px"
        backgroundImage={`  linear-gradient(
          rgba(0, 0, 0, 0.6),
          rgba(0, 0, 0, 0.6)
        ), url(${process.env.NEXT_PUBLIC_DDRAGON_LEAGUEOFLEGENDS}cdn/img/champion/splash/${data.id}_0.jpg)`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        filter="grayscale(40%)"
        px={8}
        py={8}
        direction="column"
        mt={10}
        overflow="hidden"
      >
        <Heading fontSize={54} color="white">
          {data.name}
        </Heading>
        <Text
          fontSize={24}
          color="neutrals.lightest"
          textTransform="capitalize"
        >
          {data.title}
        </Text>
        <Text mt={10} color="white">
          {data.lore}
        </Text>
      </Flex>
      <Stack spacing={6} direction="row" mt={10}>
        <BoxInformation w="500px" title="Status">
          <Stack color="red" mt={6} spacing={2}>
            <Text color="white" fontWeight={700}>
              <Text fontWeight={400} color="neutrals.lightest" as="span">
                Vida:
              </Text>{' '}
              {data.stats.hp}
            </Text>
            <Text color="white" fontWeight={700}>
              <Text fontWeight={400} color="neutrals.lightest" as="span">
                Mana:
              </Text>{' '}
              {data.stats.mp}
            </Text>
            <Text color="white" fontWeight={700}>
              <Text fontWeight={400} color="neutrals.lightest" as="span">
                Armadura:
              </Text>{' '}
              {data.stats.armor}
            </Text>
            <Text color="white" fontWeight={700}>
              <Text fontWeight={400} color="neutrals.lightest" as="span">
                Resistência Mágica:
              </Text>{' '}
              {data.stats.spellblock}
            </Text>
            <Text color="white" fontWeight={700}>
              <Text fontWeight={400} color="neutrals.lightest" as="span">
                Dado de ataque:
              </Text>{' '}
              {data.stats.attackdamage}
            </Text>
            <Text color="white" fontWeight={700}>
              <Text fontWeight={400} color="neutrals.lightest" as="span">
                Velocidade de ataque:
              </Text>{' '}
              {data.stats.attackspeed}
            </Text>
            <Text color="white" fontWeight={700}>
              <Text fontWeight={400} color="neutrals.lightest" as="span">
                Velocidade de movimento:
              </Text>{' '}
              {data.stats.movespeed}
            </Text>
          </Stack>
        </BoxInformation>
        <BoxInformation w="100%" title="Habilidades">
          <Flex mt={6} w="100%">
            <Stack direction="row" w="50%" spacing={2}>
              <Box onClick={() => setSpellSelected('P')}>
                <SpellBox
                  spell={{
                    id: data.id + '_P',
                    name: data.passive.name,
                    description: data.passive.description,
                    key: 'P',
                    image: data.passive.image,
                  }}
                />
              </Box>

              {data.spells.map(spell => (
                <Box
                  key={spell.id}
                  onClick={() =>
                    setSpellSelected(spell.key as SpellSelectedType)
                  }
                >
                  <SpellBox spell={spell} />
                </Box>
              ))}
            </Stack>
          </Flex>
          <Flex mt={6} w="100%" justifyContent="space-between">
            <Flex w="50%" direction="column">
              <Box>
                <Heading fontSize={18} color="white">
                  {spellSelected === 'P'
                    ? data.passive.name
                    : data.spells.find(spell => spell.key === spellSelected)
                        .name}
                </Heading>
                <Text fontSize={12} color="neutrals.lightest" mt={2}>
                  {spellSelected === 'P'
                    ? data.passive.description
                    : data.spells.find(spell => spell.key === spellSelected)
                        .description}
                </Text>
              </Box>
              <Box maxW="200px" mt={6}>
                <Heading fontWeight={500} fontSize={16} color="white" mb={1}>
                  Dificudade
                </Heading>
                <Box
                  bg="neutrals.base"
                  w="100%"
                  h="4px"
                  borderRadius={3}
                  position="relative"
                >
                  <Box
                    bg="support.blue"
                    w={`calc(${data.info.difficulty * 10}%)`}
                    h="4px"
                    borderRadius={3}
                  ></Box>
                </Box>
              </Box>
            </Flex>
            <Box ml={4} w="50%" borderRadius={8} overflow="hidden">
              <AspectRatio ratio={16 / 9} maxW="500px">
                <iframe
                  title="naruto"
                  src={`https://blitz-cdn-videos.blitz.gg/tooltip_videos/${data.id}/${spellSelected}.webm`}
                  allowFullScreen
                />
              </AspectRatio>
            </Box>
          </Flex>
        </BoxInformation>
      </Stack>
      <Box w="100%" mt={10}>
        <Skins id={data.id} skins={data.skins} />
      </Box>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<
  ChampionsProps
> = async context => {
  const { query } = context;
  const data = await getChampion(query.id as string);

  return {
    props: {
      data,
    },
  };
};
