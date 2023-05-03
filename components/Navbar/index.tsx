import { ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  Image,
  Text,
  Divider
} from '@chakra-ui/react';
import { NavLink } from '../NavLink';
import config from '../../public/siteConfig.json';



export default function NavBarUp() {

  const linkArray = config['links-navbar-up']

  const navBarBg = config['styles']['nav-bar-bg-dark']
  const isDarkLayout = config['layout'] === '2'
  return (
    <>
      <Flex px={10} h={16} justifyContent={'center'} bg={isDarkLayout ? navBarBg : "whiteAlpha.100"}>
        <HStack
          as={'nav'}
          display={{ base: 'none', md: 'flex' }}>
          {linkArray.map((link: any, index: number) => (
            <>
              <NavLink key={index} linkData={link} lightText={isDarkLayout} />
              {index === (linkArray.length - 1) ? null : <Divider key={index} bg={isDarkLayout ? 'white' : 'black'} borderColor={isDarkLayout ? 'white' : 'black'} orientation='vertical' h="15px" w={"1px"} />}
            </>
          ))}
        </HStack>
        <Box width="300px" alignSelf="top" margin="0 auto" >
          <Link href="/">
            <Image
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
        <Box />
        <Box />
      </Flex>

    </>
  );
}


