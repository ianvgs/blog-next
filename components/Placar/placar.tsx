import {
    Box,
    Flex,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
    Image,
    Heading
} from '@chakra-ui/react';

import { BsPerson } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';



export default function BasicStatistics() {
    return (

        <Box display={"flex"} justifyContent={"space-between"}  >
            <Box w={"50%"} className="nes-container with-title  is-rounded"
                position={"relative"}     >
                <Box width={500} position={"absolute"} className="nes-btn is-success" top={-6} >
                    <span className="is-success" >
                        <Heading fontSize={15} >CAMPANHA SUPER ADM -2022</Heading>
                    </span>
                </Box>
                <Box display={"flex"} /* align={'end'}  */ mt={5}>
                    <Stat>
                        <Flex >
                            <Box
                                my={'auto'}
                                color={useColorModeValue('gray.800', 'gray.200')}
                                alignContent={'center'}>
                                <GoLocation size={'3em'} />
                            </Box>
                            <Box pl={{ base: 2, md: 4 }} >
                                <StatLabel fontWeight={'medium'} isTruncated>
                                    {'Ideias cadastradas:'}
                                </StatLabel>
                                <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                                    {'15'}
                                </StatNumber>
                            </Box>

                        </Flex>
                    </Stat >

                    <Stat>
                        <Flex  >
                            <Box pl={{ base: 2, md: 4 }} >
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
                position={"relative"}>
                <Box width={200} position={"absolute"} className="nes-btn is-success" top={-6} >
                    <span className="is-success" >
                        <Heading fontSize={15} >SALDO</Heading>
                    </span>
                </Box>

                <Stat>
                    <Flex justifyContent={'space-between'} mt={3} >
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






    );
}