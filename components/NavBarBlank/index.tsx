import { ReactNode } from 'react';
import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';

const Links = ['Dashboard', 'Projects', 'Mercado', 'Tecnologia', 'Educação'];

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        key={children}>
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={children?.toLowerCase()}>
        {children}
    </Link>
);

export default function NavBarBlank() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} >
                <Flex h={10} justifyContent={'center'} >
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack alignItems={'center'}>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <Box pr={35} key={link} >
                                    <NavLink key={link}>{link}</NavLink>
                                </Box>
                            ))}
                        </HStack>
                    </HStack>
                </Flex>


                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as={'nav'} spacing={4}>
                        {Links.map((link) => (
                            <Box padding={10} key={link}>
                                <NavLink key={link}>{link}</NavLink>
                            </Box>
                        ))}
                    </Stack>
                </Box >

            </Box >


        </>
    );
}