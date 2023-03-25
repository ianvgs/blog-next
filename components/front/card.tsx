import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    VStack,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    WrapItem,
    HStack,
    Card,
    Heading,
    CardHeader,
    Button,
    CardBody,
    CardFooter,
    Text,
    Avatar

} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { GiPiggyBank } from "react-icons/gi";
import ProgressBar from './progressbar';

const data = {
    isNew: true,
    imageURL:
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'Wayfarer Classic',
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
};

interface RatingProps {
    rating: number;
    numReviews: number;
}

function Rating({ rating, numReviews }: RatingProps) {
    return (

        <ProgressBar bgcolor="#2E8B57" progress='85' height={20} />

    );
}

function ProductAddToCart() {





    return (
        <Card bg={useColorModeValue('white', 'gray.800')}
            maxW="sm"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative">
            <CardHeader>
                <Heading size='md'> Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
                < HStack>
                    <Avatar
                        size={"sm"}
                    />
                    <Text>View a summary of all your customers over the last month.
                        View a summary of all your customers over the last month.
                        View a summary of all your customers over the last month.
                    </Text>
                </HStack>
            </CardBody>
            <CardFooter>

                <VStack width={"100%"}>
                    <VStack alignItems={"end"} width={"85%"}   >
                        <chakra.a href={'#'} display={'flex'}>
                            <Icon as={GiPiggyBank} h={8} w={50} alignSelf={'center'} color={'yellow.900'} />
                        </chakra.a>
                        <Text>R$500,00
                        </Text>
                    </VStack>
                    <Box w={"100%"} >
                        <Rating />
                    </Box>
                </VStack>


            </CardFooter>
        </Card >

    );
}

export default ProductAddToCart;