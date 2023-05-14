import { ReactNode } from 'react';
import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    useDisclosure,
    Stack,
    Divider,
    Text

} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import config from '../../public/siteConfig.json';

import { NavLink } from '../NavLink';

/* const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: 'gray.200',
        }}
        href={children.endereco}>
        {children.nome}
    </Link >
); */

export default function Simple() {
    const linkArray = config['links-categorias'];
    const navBarBg = config['styles']['nav-bar-bg-darker']
    const shouldRenderNavDivider = config['layout'] === '2';

    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box bg={shouldRenderNavDivider ? navBarBg : "gray.200"} px={4}>
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
                            {linkArray?.map((link: any, index: number) => (
                                <>
                                    <NavLink key={index} linkData={link} lightText />
                                    {index === (linkArray.length - 1) ? null : <Divider bg={shouldRenderNavDivider ? 'white' : 'black'} borderColor={'black'} orientation='vertical' h="15px" w={"1px"} />}

                                </>
                            ))}
                        </HStack>
                    </HStack>
                </Flex>
                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {linkArray?.map((link: any, index: number) => (
                                <NavLink key={index} linkData={link} lightText />
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
            {shouldRenderNavDivider ? <Divider height="1px" bg={'black'} /> : null}

        </>
    );
}


