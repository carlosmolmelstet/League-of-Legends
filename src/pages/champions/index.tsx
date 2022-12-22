import { useEffect, useState } from 'react';
import { RxMagnifyingGlass } from 'react-icons/rx';

import {
  Flex,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
} from '@chakra-ui/react';
import { ChampionCard } from '@components/championCard';
import { Champion, getChampions } from '@services/queries/get-champions';

import Layout from '../../components/layout';

export default function Champions() {
  const [allChampions, setAllChampions] = useState<Champion[]>([]);
  const [champions, setChampions] = useState<Champion[]>([]);

  function handleSearch(value: string) {
    const filterChampions = allChampions.filter(s =>
      s.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    setChampions(filterChampions);
  }

  useEffect(() => {
    getChampions().then(e => {
      setAllChampions(e);
      setChampions(e);
    });
  }, []);

  return (
    <Layout>
      <Flex
        w="100%"
        bg="neutrals.dark"
        borderRadius={24}
        h="200px"
        backgroundImage="url(./images/banner-search.png)"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        px={4}
        direction="column"
        justify="center"
        mt={10}
      >
        <Heading mb={4} color="neutrals.lightest">
          Pesquise por um campeão
        </Heading>
        <InputGroup maxW="600px" h="56px">
          <InputLeftElement>
            <Icon
              color="neutrals.base"
              fontSize={24}
              mt={4}
              as={RxMagnifyingGlass}
            />
          </InputLeftElement>
          <Input
            onChange={e => handleSearch(e.currentTarget.value)}
            bg="neutrals.darkest"
            border="none"
            py={2}
            h="56px"
            borderRadius={8}
            color="neutrals.lightest"
            _focusVisible={{
              boxShadow: '0 0 0 1px  #8B00FF',
            }}
          />
        </InputGroup>
      </Flex>

      <SimpleGrid minChildWidth="184px" spacingX={6} spacingY="60px" mt={10}>
        {champions.map(champion => (
          <ChampionCard
            key={champion.id}
            id={champion.id}
            title={champion.title}
            name={champion.name}
          />
        ))}
      </SimpleGrid>
      {champions.length === 0 && (
        <Flex w="100%" justify="center">
          <Image src="./images/not-found.png" />
        </Flex>
      )}
    </Layout>
  );
}
