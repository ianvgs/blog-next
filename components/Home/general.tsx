
import React from 'react';
import {
    Box,
    Heading,
    Link,
    Image,
    Divider,
    Wrap,
    Container,
} from '@chakra-ui/react';
import HomeCards from './components/HomeCards';
import config from '../../public/siteConfig.json';


export default function GeneralSite({ homeData }: any) {
    const chosenLayout = config.layout;
    const [ultimasNoticias, noticiasMaisLidas, noticiaPrincipal] = homeData;


    const Manchete = () => {
        return (
            <Link href={`categoria/noticia/${noticiaPrincipal?.noticiaPrincipal?.id}`}>
                <Container
                    display={"flex"}
                    flex={"1"}
                    flexDir={"column"}
                    background={{ base: "gray.400", lg: "none" }}
                    minW={"100%"}
                    py={50}

                >
                    <Image
                        mx="auto" // 
                        h={350} w={500}
                        transform="scale(1.0)"
                        src={
                            noticiaPrincipal?.noticiaPrincipal?.imgPath
                        }
                        alt={noticiaPrincipal?.noticiaPrincipal?.imgAlterText}
                        objectFit="contain"
                        transition="0.3s ease-in-out"
                        _hover={{
                            transform: 'scale(1.05)',
                        }}
                        opacity={0.65}
                        borderRadius="lg"
                    />
                    <Heading
                        color={'gray.700'}                    >
                        {noticiaPrincipal?.noticiaPrincipal?.titulo}
                    </Heading>
                </Container>
            </Link>
        )
    }

    const Mural = () => {
        return (
            <Wrap
                flex="1"
            >
                {ultimasNoticias.ultimasNoticias?.map((unique: any, index: number) => (
                    <HomeCards key={index} mural data={unique} chosenLayout={chosenLayout} />
                ))}
            </Wrap>
        )
    }

    return (
        <Container maxW={'7xl'}>
            <Box
                display="flex"
                flexDirection={{ base: 'column', lg: 'row' }}
                minW={"100%"}>
                {ultimasNoticias &&
                    <Mural />}
                {noticiaPrincipal?.noticiaPrincipal &&
                    <Manchete />}
            </Box>

            {noticiasMaisLidas &&
                <>
                    <Divider my="5" />
                    <Heading
                        color={'gray.700'}
                        fontWeight={700}
                        fontSize={30}
                    >
                        Mais lidos
                    </Heading>
                    <Divider my="5" />

                    <Wrap justify='space-between'
                    >
                        {noticiasMaisLidas.noticiasMaisLidas?.map((unique: any, index: number) => (
                            <HomeCards key={index} mural={false} data={unique} />
                        ))}
                    </Wrap>
                </>
            }
        </Container >
    )

}