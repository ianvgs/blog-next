import { Inter } from 'next/font/google'
import React from 'react';
import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    Divider,
    HStack,
    Tag,
    Wrap,
    WrapItem,
    SpaceProps,
    useColorModeValue,
    Container,
    VStack,

} from '@chakra-ui/react';
import HomeCards from './components/HomeCards';

/* const inter = Inter({ subsets: ['latin'] }) */


export default function Index() {
    // os 6 ultimos mais recentes
    const array = [{ categorie: "Inovação", title: "Méliuz reduz prejuízo em 82% no 4º trimestre de 2022, para R$ 5,4 milhões" }, {
        categorie: "Inovação", title: "Méliuz reduz prejuízo em 82% no 4º trimestre de 2022, para R$ 5,4 milhões"
    },
    {
        categorie: "Diversificação", title: "Ao menos 8 FIIs têm operações relacionadas ao Minha Casa, Minha Vida; como eles lucram?"
    }, {
        categorie: "Inovação", title: "ChatGPT-4: OpenAI anuncia atualização no modelo de linguagem do aplicativo"
    }, {
        categorie: "Formação de talentos", title: "Faculdade XP oferece 200 bolsas integrais para quem quer se tornar assessor de investimentos"
    }, {
        categorie: "Stock Pickers", title: "'Mundo estava acabando': ex-BC relembra discussões para levar a Selic a 2% em 2020"
    },]

    // carroussel mais lidos
    const carroussel = [{ id: 1, title: "Feijão com arroz faz mal", resumo: "Méliuz reduz prejuízo em 82% no 4º trimestre de 2022, para R$ 5,4 milhões", imgUrl: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80', tags: ['Tests', 'Covid'] }, { id: 2, title: "Arroz e macarrão tambem", resumo: "Méliuz reduz prejuízo em 82% no 4º trimestre de 2022, para R$ 5,4 milhões", imgUrl: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80', tags: ['Engeneering', 'Product'] }, { id: 3, title: "Inovação", resumo: "Méliuz reduz prejuízo em 82% no 4º trimestre de 2022, para R$ 5,4 milhões", imgUrl: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80', tags: ['Sexo', 'Amor'] }, { id: 3, title: "Inovação", resumo: "Méliuz reduz prejuízo em 82% no 4º trimestre de 2022, para R$ 5,4 milhões", imgUrl: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80', tags: ['Sexo', 'Amor'] }]

    return (
        <Container maxW={'8xl'}>
            <Box
                marginTop={{ base: '1', sm: '5' }}
                display="flex"
                flexDirection={{ base: 'column', sm: 'row' }}            >
                <Box flex="5">
                    <Box display="flex"
                        flexDirection="column"
                        width={{ base: '100%', sm: '85%' }}
                        zIndex="2"
                        marginLeft={{ base: '0', sm: '5%' }}
                        marginTop="13%">
                        <Box flex="2">
                            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                <Image
                                    borderRadius="lg"
                                    src={
                                        'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                                    }
                                    alt="some good alt text"
                                    objectFit="contain"
                                />
                            </Link>
                        </Box>
                        <Box flex="1" >
                            <VStack display="flex-start" textDecoration="none" alignContent="center" >
                                <Heading fontSize="xl" marginTop="2">
                                    <Link textDecoration="none" _hover={{ textDecoration: 'none', color: 'blue' }}>
                                        Some blog Title
                                    </Link>
                                </Heading>
                                <Heading fontSize="xl" marginTop="2">
                                    <Link textDecoration="none" _hover={{ textDecoration: 'none', color: 'blue' }}>
                                        Some blog Title
                                    </Link>
                                </Heading>
                                <Heading fontSize="xl" marginTop="2">
                                    <Link textDecoration="none" _hover={{ textDecoration: 'none', color: 'blue' }}>
                                        Some blog Title
                                    </Link>
                                </Heading>
                            </VStack>
                        </Box>
                    </Box>
                </Box>

                <Box
                    justifyContent="flex-start"
                    display="flex"
                    flexFlow={"wrap"}
                    flex="6"
                    flexDirection="row"
                    marginTop={{ base: '3', sm: '0' }}>
                    <Wrap spacing="30px" marginTop="5">
                        {array.map((unique, index) => (
                            <HomeCards key={index} mural data={unique} />
                        ))}
                    </Wrap>
                </Box>
            </Box>

            <Divider marginTop="5" />
            <Heading as="h2" marginTop="5">
                Mais lidos
            </Heading>
            <Wrap spacing="30px" marginTop="5">
                {carroussel.map((unique, index) => (
                    <HomeCards key={index} mural={false} data={unique} />
                ))}
            </Wrap>

            <Divider marginTop="5" />
            <Heading as="h2" marginTop="5">
                Latest articles
            </Heading>
            <Wrap spacing="30px" marginTop="5">
                {carroussel.map((unique, index) => (
                    <HomeCards key={index} mural={false} data={unique} />
                ))}
            </Wrap>


            <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
                <Heading as="h2">What we write about</Heading>
                <Text as="p" fontSize="lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
                    pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
                    imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
                    sapien. Suspendisse placerat vulputate posuere. Curabitur neque
                    tortor, mattis nec lacus non, placerat congue elit.
                </Text>
            </VStack>
        </Container >
    )

}