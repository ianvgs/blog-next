import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
} from '@chakra-ui/react';
import config from '../../public/siteConfig.json';


export default function QuemSomos() {
    return (
        <Container maxW={"7xl"}>
            <SimpleGrid columns={{ base: 1, md: 2 }} >
                <Flex flexDir={"column"} justifyContent="center">
                    <Heading>{config.quemSomos.titulo}</Heading>
                    <Text color={'gray.500'} fontSize={'md'}>
                        {config.quemSomos.subTitulo}
                    </Text>
                </Flex>
                <Flex justifyContent="center"  >
                    <Image
                        w={400}
                        h={300}
                        rounded={'md'}
                        alt={'Team Image'}
                        src="/quemSomos.jpg"
                    />
                </Flex>
            </SimpleGrid>
        </Container >
    );
}