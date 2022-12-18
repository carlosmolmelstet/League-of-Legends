import { IconType } from 'react-icons/lib/esm/iconBase';
import {
  RxHome,
  RxAccessibility,
  RxMagicWand,
  RxIconjarLogo,
} from 'react-icons/rx';

import { Box, Flex, Icon, Stack, Text } from '@chakra-ui/react';
import AppLogo from '@components/logos/AppLogo';
import { useRouter } from 'next/router';

interface MenuItemProps {
  label: string;
  href: string;
  icon: IconType;
}

function MenuItem({ label, href, icon }: MenuItemProps) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Flex
      onClick={() => router.push(href)}
      py={4}
      pl={4}
      borderRadius={4}
      transition=".3s"
      _hover={{
        bg: 'neutrals.dark',
      }}
      role="group"
      cursor="pointer"
      position="relative"
    >
      <Icon
        color={isActive ? 'primary.base' : 'neutrals.light'}
        fontSize={24}
        as={icon}
        mr={2}
        _groupHover={{
          color: isActive ? 'primary.base' : 'neutrals.light',
        }}
      />
      <Text
        fontWeight={600}
        color={isActive ? 'primary.base' : 'neutrals.light'}
        _groupHover={{
          color: isActive ? 'primary.base' : 'neutrals.light',
        }}
      >
        {label}
      </Text>
      <Box
        position="absolute"
        right={0}
        bg={isActive ? 'primary.base' : 'none'}
        w="3px"
        h="50px"
        top="2.5px"
      ></Box>
    </Flex>
  );
}

export default function Menu() {
  return (
    <Flex
      borderRight="1px solid"
      borderColor="neutrals.base"
      h="100vh"
      minW="248px"
      py={2}
      direction="column"
      display={{ base: 'none', md: 'flex' }}
    >
      <AppLogo width="40px" ml={4} />
      <Stack mt={10} spacing={2}>
        <MenuItem label="Home" href="/" icon={RxHome} />
        <MenuItem label="Campeões" href="/champions" icon={RxAccessibility} />
        <MenuItem label="Items" href="/items" icon={RxIconjarLogo} />
        <MenuItem label="Feitiços" href="/spells" icon={RxMagicWand} />
      </Stack>
    </Flex>
  );
}
