import {
    Heading,
    Text,
    Stack,
    Box,
    VStack,
    Wrap,
    Image,
    Skeleton,
    Flex,
} from '@chakra-ui/react';

import RankingCard from '@/components/front/RankingCard';
import IdeiaCard from '@/components/front/IdeiaCard';
import BasicStatistics from '@/components/Placar/placar';

export default function SplitWithImage() {
    const array4 = [{ progress: 70 }, { progress: 53 }, { progress: 40 }, { progress: 10 }]
    const array10 = [{ progress: 40 }, { progress: 20 }, { progress: 80 }, { progress: 40 }, { progress: 70 }, { progress: 80 }]
    return (
        <Stack minH={'100vh'} bg="blue.800" padding={3} direction={{ base: 'column', md: 'row' }}>
            <VStack>
                {/*  //RankingBoxTitle */}
                <Box width={500} className="nes-container is-rounded" display="flex"
                    alignItems={"center"}
                    justifyContent="center" h={130} bg={"#92cc41"}
                    maxW="sm"
                    minW="sm">
                    <Heading color={"white"}>RANKING</Heading>
                </Box>
                {/*  //RankingBox */}
                <Box bg="white"
                    className="nes-container"
                    rounded="lg"
                    maxW="sm"
                    minW="sm"
                >
                    <Box w={"100%"} h={"300"} display="flex" justifyContent="center" alignItems={"center"} >
                        <Image
                            w={"70%"}
                            h={"80%"}
                            src="png.png"
                            alt="Troféu"
                        />
                    </Box>
                    <Stack px={14} mb={3} >
                        <Skeleton height='15px' />
                    </Stack>
                    <Stack px={20} >
                        <Skeleton height='15px' />
                    </Stack>
                    {array4.map((unique: any, index: number) => (<RankingCard {...unique} key={index} />))
                    }
                </Box >
            </VStack>

            <VStack w={"100%"} minH={'100%'}  >
                <Box
                    className='nes-container'
                    //minimo height
                    h={"170"}
                    bg={"white"}
                    w={'full'}
                    boxShadow={'2xl'}
                    rounded="lg"
                >
                    <BasicStatistics />

                </Box  >
                <Wrap spacingX={25} spacingY={15} justify={"center"} >
                    {array10.map((unique: any, index: number) => (
                        <IdeiaCard {...unique} key={index} />
                    ))}
                </Wrap>
            </VStack>
        </Stack >
    );
}