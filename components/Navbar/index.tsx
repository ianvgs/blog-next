
import {
  Box,
  Flex,
  HStack,
  Link,
  Image,
  Divider
} from '@chakra-ui/react';
import { NavLink } from '../NavLink';
import config from '../../public/siteConfig.json';

export default function NavBarUp() {
  const linkArray = config['links-navbar-up']
  const navBarBg = config['styles']['nav-bar-bg-dark']
  const isDarkLayout = config['layout'] === '2'

  return (
    <Flex px={5} h={20} bg={isDarkLayout ? navBarBg : "whiteAlpha.100"} justifyContent="center">
      <HStack
        as={'nav'}
        display={{ base: 'none', md: 'flex' }} mx={10} >
        {linkArray.map((link: any, index: number) => (
          <>
            <NavLink key={index} linkData={link} lightText={isDarkLayout} />
            {index === (linkArray.length - 1) ? null : <Divider key={index} bg={isDarkLayout ? 'white' : 'black'} borderColor={isDarkLayout ? 'white' : 'black'} orientation='vertical' h="15px" w={"1px"} />}
          </>
        ))}
      </HStack>
      <Box width="300px" margin="0 auto"   >
        <Link href="/">
          <Image
            ml={{ base: 'none', md: -28 }}
            transform="scale(1.0)"
            src="/LOGO.png"
            alt="some text"
            objectFit="contain"
            transition="0.3s ease-in-out"
            _hover={{
              transform: "scale(1.05)",
            }}
          />
        </Link>
      </Box>
    </Flex >
  );
}


