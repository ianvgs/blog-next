import {
    Heading,
    Avatar,
    Box,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    WrapItem,
    chakra,
    Icon,
} from '@chakra-ui/react';
import { GiPiggyBank } from "react-icons/gi";
import ProgressBar from './progressbar';


export default function SocialProfileWithImage({ progress }) {
    return (
        <WrapItem height='400px' minW={"300"}  >
            <Box
                borderRadius={5}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'} >
                <Box h={'75px'}
                    w={'full'}
                    borderColor={"gray.600"} />

                <Flex justify={'center'} mt={-12}>
                    <Avatar
                        size={'xl'}
                        src={
                            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                        }
                        alt={'Author'}
                        css={{
                            border: '2px solid white',
                        }}
                    />
                </Flex>

                <Box p={6}>
                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                            Automatizar processo.
                        </Heading>
                        <Text color={'gray.500'}>Criar processo para alterar....</Text>
                    </Stack>
                    <Stack direction={'row'} justify={'center'} spacing={6}>
                        <Stack spacing={0} align={'center'}>
                            <Text fontWeight={600}>23.000k</Text>
                            <Text fontSize={'sm'} color={'gray.500'}>
                                Total captado
                            </Text>
                        </Stack>
                        <Stack spacing={0} align={'center'}>
                            <chakra.a href={'#'} display={'flex'}>
                                <Icon as={GiPiggyBank} h={8} w={50} alignSelf={'center'} color={'yellow.900'} />
                            </chakra.a>



                        </Stack>
                    </Stack>

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
                        }}>
                        Aportar
                    </Button>
                    <ProgressBar height={20} progress={progress} bgcolor={"#FCFC30"} />
                </Box>
            </Box >

        </WrapItem >
    );
}