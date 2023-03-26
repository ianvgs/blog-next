import {
    Heading,
    Box,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    WrapItem,
    Image,
} from '@chakra-ui/react';

import ProgressBar from './progressbar';


export default function IdeiaCard({ progress }) {
    return (
        <WrapItem  >
            <Box
                className='nes-container is-rounded'
                boxShadow={'2xl'}
                bg={'white'}
                width={400}
                height={600}
                justifyContent={"space-between"}
            >
                <Box p={2}>

                    <Flex justifyContent={"space-between"} /* spacing='4'*/>
                        <Box className="nes-badge is-splited" w={20}>
                            <span className="is-dark">#</span>
                            <span className="is-success">{Math.random(2)}</span>
                        </Box>

                        <Box>
                            <i className="nes-icon is-medium heart"></i>
                            <i className="nes-icon is-medium  is-half heart"></i>
                        </Box>
                        {/*   <i className="nes-icon is-medium  is-transparent heart"></i>
                        <i className="nes-icon is-medium  heart is-empty"></i> */}
                    </Flex>


                    <Stack height={240} className="nes-balloon from-left">
                        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                            Automatizar processo.
                        </Heading>
                        <Text color={'gray.500'}>Criar processo para alterar lorem ipsolongo aet viveres de lorum ipsolongus  processo para alterar lorem ipsolongo aet viveres de lorum ipsolongus....</Text>
                    </Stack>

                    <Flex justifyContent={"space-between"} >
                        <Image
                            className="nes-avatar is-rounded is-large"
                            /* style={{ imageRendering: "pixelated" }} */
                            src={
                                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                            }
                            alt="Troféu" />

                        <Stack align={'end'}>
                            <Image
                                w={"25%"}
                                src="pilecoin.png"
                                alt="Troféu"
                            />
                            <Text fontWeight={600}>$23.000,00</Text>
                        </Stack>
                    </Flex>

                </Box>
                <Button

                    mb={5}
                    w={'full'}
                    mt={8}
                    bg={useColorModeValue('green.400', 'blue.200')}
                    color={'white'}
                    rounded={'md'}
                    _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                    }}
                    className="nes-btn is-success">
                    APORTAR
                </Button>
                <ProgressBar height={20} progress={progress} />
            </Box >

        </WrapItem >
    );
}