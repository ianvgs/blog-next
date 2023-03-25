import {
    Heading,
    Text,
    Stack,
    Box,
    VStack,
    Wrap,
    Image,
    useColorModeValue,
    Skeleton,
    Flex,
    Avatar
} from '@chakra-ui/react';

import RankingCard from '@/components/front/RankingCard';
import SocialProfileWithImage from '@/components/front/Cardy';

export default function SplitWithImage() {
    const array4 = [{}, {}, {}, {}]
    const array10 = [{ progress: 40 }, { progress: 20 }, { progress: 80 }, { progress: 40 }, { progress: 70 }, { progress: 80 }, { progress: 90 }, { progress: 30 }, { progress: 100 }, { progress: 2 }]
    return (
        <Stack minH={'100vh'} bg="gray.400" padding={5} direction={{ base: 'column', md: 'row' }}>
            <Box width={350} bg="white"
                maxW="sm"
                rounded="lg"
                shadow="lg"
                borderRadius={10} >

                <Stack  >
                    <Box display="flex" justifyContent="center" w={"100%"} h={100} bg={"#90ee90"} borderRadius={10} alignItems={"center"}>
                        <Heading color={"white"}>Ranking</Heading>
                    </Box>
                    <Box w={"100%"} h={"300"} display="flex" justifyContent="center" alignItems={"center"}>
                        <Image
                            w={"70%"}
                            h={"80%"}
                            src="png.png"
                            alt="Troféu"
                        />
                    </Box>
                    <Stack px={14} >
                        <Skeleton height='15px' />
                    </Stack>
                    <Stack px={20} >
                        <Skeleton height='15px' />
                    </Stack>
                    {array4.map((unique, index) => (<RankingCard index={index} />))}
                </Stack>
            </Box >

            <VStack w={"100%"} bg={"white"} minH={'100vh'} borderRadius={10}   >
                <Box
                    h={"170"}
                    bg={"white"}
                    w={'full'}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    overflow={'hidden'}
                >

                    <Flex flex='1' justifyContent={"space-between"} gap='4' alignItems='center' mb={1}>
                        <Box display={"flex"} alignItems={"center"}>
                            <Image
                                w={"10%"}
                                h={"10%"}
                                src="coin.png"
                                alt="coins"
                            />
                            <VStack>
                                <Heading> Total aplicado nesta campanha </Heading>
                                <Heading> R$ 20.000,00 </Heading>
                            </VStack>

                        </Box>

                        <Box>
                            <Heading size='sm'>Segun Adebayo</Heading>
                            <Text>Creator, Chakra UI</Text>
                        </Box>

                    </Flex>





                </Box>
                <Wrap paddingX={3}>
                    {array10.map((unique, index) => (
                        <SocialProfileWithImage {...unique} />

                    ))}
                </Wrap>
            </VStack>
        </Stack >
    );
}