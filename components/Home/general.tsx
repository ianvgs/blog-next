
import React from 'react';
import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    Divider,
    Wrap,
    Container,
    VStack,
    StackDivider,
    Icon,
    SimpleGrid,
    Flex,
} from '@chakra-ui/react';
import HomeCards from './components/HomeCards';
import config from '../../public/siteConfig.json';


export default function GeneralSite({ homeData }: any) {
    const chosenLayout = config.layout;
    const [ultimasNoticias, noticiasMaisLidas, noticiaPrincipal] = homeData;


    const Manchete = () => {
        return (

            <Link href={`categoria/noticia/${noticiaPrincipal.noticiaPrincipal.id}`}>
                <Box position={"relative"}>
                    <Image
                        h={500} w={500}
                        transform="scale(1.0)"
                        src={
                            noticiaPrincipal.noticiaPrincipal?.imgPath ??
                            'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                        }
                        alt="some text"
                        objectFit="contain"
                        transition="0.3s ease-in-out"
                        _hover={{
                            transform: 'scale(1.05)',
                        }}
                        opacity={0.65}
                        borderRadius="lg"
                    />
                    <Heading
                        position="absolute"
                        color={'gray.700'}
                        bottom="0">
                        {noticiaPrincipal.noticiaPrincipal.titulo}
                    </Heading>
                </Box >
            </Link>

        )
    }

    const Mural = () => {
        return (
            <Box
                justifyContent="flex-start"
                display="flex"
                flexFlow={"wrap"}
                flex="1"
                flexDirection="row"
                marginTop={{ base: '3', sm: '0' }}>
                <Wrap>
                    {ultimasNoticias.ultimasNoticias?.map((unique: any, index: number) => (
                        <HomeCards key={index} mural data={unique} chosenLayout={chosenLayout} />
                    ))}
                </Wrap>
            </Box>
        )

    }

    return (
        <Container maxW={'7xl'}>
            <Box
                marginTop={{ base: '1', sm: '5' }}
                display="flex"
                flexDirection={{ base: 'column', lg: 'row' }}>
                <Mural />
                <Manchete />
            </Box>

            <Divider my="5" />
            <Heading
                color={'gray.700'}
                fontWeight={700}
                fontSize={30}
            >
                Mais lidos
            </Heading>
            <Divider my="5" />


            <Wrap justify='center' >
                {noticiasMaisLidas.noticiasMaisLidas?.map((unique: any, index: number) => (
                    <HomeCards key={index} mural={false} data={unique} />
                ))}
            </Wrap>








        </Container >
    )

}