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
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Economia', 'Finanças', 'Tecnologia', 'Educação', 'Cultura', 'Dados Econômicos'];

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={`./categoria/${children?.toString().toLowerCase()}`}>
        {children}
    </Link >
);

export default function Simple() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box bg={useColorModeValue('gray.200', 'gray.900')} px={4}>
                <Flex h={10} alignItems={'center'} justifyContent={{ md: '', lg: 'center' }}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link: any) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                </Flex>
                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link: any) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}


