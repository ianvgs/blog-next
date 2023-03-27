import {
    Box,
    Flex,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
    Image,
    Heading,
    Stack
} from '@chakra-ui/react';

import { BsPerson } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';



export default function BasicStatistics() {
    return (

        <Stack justifyContent={"space-between"} direction={{ base: 'column', md: 'row' }}
            className='nes-container'
            bg={"white"}
            w={'full'}
            boxShadow={'2xl'}
            rounded="lg" >
            <Box w={{ md: "100%", lg: "50%" }} className="nes-container with-title  is-rounded"
                position={"relative"}     >
                <Box width={"700"} position={"absolute"} className="nes-btn is-success" top={-6} >
                    <Heading fontSize={17} >CAMPANHA SUPER ADM -2022</Heading>
                </Box>
                <Box display={"flex"} mt={5}>
                    <Stat>
                        <Flex justifyContent={'end'} mt={3} >
                            <Box pl={{ base: 2, md: 4 }}   >
                                <StatLabel fontWeight={'medium'} isTruncated>
                                    {'Valor total aplicado na campanha:'}
                                </StatLabel>
                                <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                                    {'100.000,00'}
                                </StatNumber>
                            </Box>
                            <Box
                                my={'auto'}
                                color={useColorModeValue('gray.800', 'gray.200')}
                                alignContent={'center'}>
                                <Image
                                    maxW={"150px"}
                                    w={"60%"}
                                    src="pilecoin.png"
                                    alt="Troféu"
                                />
                            </Box>
                        </Flex>
                    </Stat >
                </Box>
            </Box>


            <Box className="nes-container with-title  is-rounded"
                position={"relative"} >
                <Box width={200} position={"absolute"} className="nes-btn is-success" top={-6} >
                    <Heading fontSize={15} >SALDO</Heading>
                </Box>

                <Box display={"flex"} mt={5}>
                    <Stat>
                        <Flex justifyContent={'end'} mt={3} >
                            <Box pl={{ base: 2, md: 4 }} >
                                <StatLabel fontWeight={'medium'} isTruncated>
                                    {'Saldo disponivel na campanha:'}
                                </StatLabel>
                                <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                                    {' $7.000,00 '}
                                </StatNumber>
                            </Box>
                            <Box
                                my={'auto'}
                                color={useColorModeValue('gray.800', 'gray.200')}
                                alignContent={'center'}>

                                <BsPerson size={'3em'} />
                            </Box>
                        </Flex>
                    </Stat >
                </Box>
            </Box>
        </Stack>






    );
}