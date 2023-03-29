
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
    Flex,
    SimpleGrid,
} from '@chakra-ui/react';
import HomeCards from './components/HomeCards';
import { ArrowRightIcon, InfoIcon } from '@chakra-ui/icons';
import { Feature } from './components/Feature';


export default function Index({ homeData }: any) {
    const [ultimasNoticias, noticiasMaisLidas, noticiaPrincipal, dadosEconomicos] = homeData;
    const homeNoticias = homeData;
    /* const dadosEconomicos = homeData[3].dadosEconomicos */



    return (
        <Container maxW={'8xl'}>
            <Box
                marginTop={{ base: '1', sm: '5' }}
                display="flex"
                flexDirection={{ base: 'column', lg: 'row' }}            >
                <Box flex="1">
                    <VStack
                        divider={<StackDivider borderColor='gray.300' />}
                        align='stretch'
                        mt={5}
                        width={{ base: '100%', sm: '85%' }}
                        zIndex="2"
                        marginLeft={{ base: '0', sm: '5%' }}
                    >
                        <Box position="relative">
                            <Link href={`categoria/noticia/${noticiaPrincipal.noticiaPrincipal.id}`} textDecoration="none" _hover={{ textDecoration: 'none', color: 'blue' }}>
                                <Image
                                    transform="scale(1.0)"
                                    src={
                                        'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                                    }
                                    alt="some text"
                                    objectFit="contain"
                                    width="100%"
                                    transition="0.3s ease-in-out"
                                    _hover={{
                                        transform: 'scale(1.05)',
                                    }}
                                    opacity={0.65}
                                    borderRadius="lg"
                                />

                                <Heading position="absolute" bottom="5%" mx={5} color={'gray.800'}>
                                    {noticiaPrincipal.noticiaPrincipal.titulo}
                                </Heading>
                            </Link>
                        </Box>
                        <Text
                            color={'blue.400'}
                            fontWeight={700}
                            fontSize={'sm'}
                        >
                            DADOS ECONÔMICOS
                        </Text>
                        <SimpleGrid columns={2} spacing={3} >
                            <Link href={`dados-economicos`} textDecoration="none" _hover={{ textDecoration: 'none', color: 'gray' }}>
                                <Feature
                                    icon={
                                        <Icon as={InfoIcon} color={'gray.500'} />
                                    }

                                    text={`O INPC acumulado 12 meses é de ${dadosEconomicos.dadosEconomicos?.inpcAcumulado12}% e do mes de ${dadosEconomicos.dadosEconomicos?.inpcMes} foi de ${dadosEconomicos.dadosEconomicos?.inpcValorMes}%`}
                                /> </Link>


                            <Link href={`dados-economicos`} textDecoration="none" _hover={{ textDecoration: 'none', color: 'gray' }}>
                                <Feature
                                    icon={<Icon as={InfoIcon} color={'gray.500'} />}

                                    text={`O IPCA acumulado 12 meses é de ${dadosEconomicos.dadosEconomicos?.ipcaAcumulado12}% e do mes de ${dadosEconomicos.dadosEconomicos?.ipcaMes} foi de ${dadosEconomicos.dadosEconomicos?.ipcaValorMes}%`}
                                />
                            </Link>
                            <Link href={`dados-economicos`} textDecoration="none" _hover={{ textDecoration: 'none', color: 'gray' }}>
                                <Feature
                                    icon={
                                        <Icon as={InfoIcon} color={'gray.500'} />
                                    }

                                    text={`O INPC acumulado 12 meses é de ${dadosEconomicos.dadosEconomicos?.igpmAcumulado12}% e do mes de ${dadosEconomicos.dadosEconomicos?.igpmMes} foi de ${dadosEconomicos.dadosEconomicos?.igpmValorMes}%`}
                                />
                            </Link>
                            <Link href={`dados-economicos`} textDecoration="none" _hover={{ textDecoration: 'none', color: 'gray' }} display={"flex"} justifyContent={"center"}>
                                <Feature
                                    icon={
                                        <Icon as={ArrowRightIcon} color={'golden.500'} />}

                                    text={'Ver mais dados...'}
                                />
                            </Link>

                        </SimpleGrid>

                    </VStack>
                </Box>
                <Box
                    justifyContent="flex-start"
                    display="flex"
                    flexFlow={"wrap"}
                    flex="1"
                    flexDirection="row"
                    marginTop={{ base: '3', sm: '0' }}>
                    <Wrap alignItems={"center"} justifyItems={"center"}>
                        {ultimasNoticias.ultimasNoticias?.map((unique: any, index: number) => (
                            <HomeCards key={index} mural data={unique} />
                        ))}
                    </Wrap>
                </Box>
            </Box>
            <Divider marginTop="5" />
            <Heading marginTop="5" color={'blue.400'}
                ml={15}
                fontWeight={700}
                fontSize={30}>
                Mais lidos
            </Heading>
            <Wrap marginTop="5" spacing={30}>
                {noticiasMaisLidas.noticiasMaisLidas?.map((unique: any, index: number) => (
                    <HomeCards key={index} mural={false} data={unique} />
                ))}
            </Wrap>
        </Container >
    )

}