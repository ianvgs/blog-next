import { ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  Image,
  Button,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import config from '../../public/siteConfig.json';

const NavLink = ({ children }: { children: ReactNode }) => (
  < Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={children?.endereco}>
    {children?.nome}
  </Link >
);

export default function NavBarUp() {
  const { colorMode, toggleColorMode } = useColorMode();
  const linkArray = config['links-navbar-up']
  return (
    <Flex px={10} h={16} alignItems={'end'} justifyContent={'space-between'}>
      <HStack
        as={'nav'}
        spacing={6}
        display={{ base: 'none', md: 'flex' }}>
        {linkArray.map((link: any, index: number) => (
          <NavLink key={index}>{link}</NavLink>
        ))}
      </HStack>

      <Box className="azul-escuro-bck" width="300px" alignSelf="center">
        <Link href="/">
          <Image
            transform="scale(1.0)"
            src="/LOGO.png"
            alt="some text"
            objectFit="contain"
            width="100%"
            transition="0.3s ease-in-out"
            _hover={{
              transform: "scale(1.05)",
            }}
          />
        </Link>
      </Box>
      <HStack>
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </HStack>
    </Flex>
  );
}


