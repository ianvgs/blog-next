import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
  Center,
  Heading
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { LinksMenuPrincipal } from '../../styles/index.tsx'



const NavLink = ({ children }: { children: ReactNode }) => (
  < Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={children.endereco.toString()}>
    {children.nome}
  </Link >

);

export default function NavBarUp() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex px={10} h={16} alignItems={'end'} justifyContent={'space-between'}>
      <HStack
        as={'nav'}
        spacing={6}
        display={{ base: 'none', md: 'flex' }}>
        {LinksMenuPrincipal.map((link: any, index: number) => (
          <NavLink key={index}>{link}</NavLink>
        ))}
      </HStack>
      <Box className="azul-escuro-bck" width="300px" alignSelf="center">
        <Link href="/">
          <Heading color="white">Logo</Heading>
        </Link>
      </Box>
      <HStack>
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
        <Menu>
          <MenuButton
            as={Button}
            rounded={'full'}
            variant={'link'}
            cursor={'pointer'}
            minW={0}>
            <Avatar
              size={'sm'}
              src={'https://avatars.dicebear.com/api/male/username.svg'}
            />
          </MenuButton>
          <MenuList alignItems={'center'}>
            <br />
            <Center>
              <Avatar
                size={'2xl'}
                src={'https://avatars.dicebear.com/api/male/username.svg'}
              />
            </Center>
            <br />
            <Center>
              <p>Olá Usuario!</p>
            </Center>
            <br />
            <MenuDivider />
            <MenuItem>Login</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
}


