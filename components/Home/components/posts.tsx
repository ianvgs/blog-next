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
import { Inter } from 'next/font/google';

interface IBlogTags {
    tags: Array<string>;
    marginTop?: SpaceProps['marginTop'];
}

const inter = Inter({ subsets: ['latin'] })

interface BlogAuthorProps {
    date: Date;
    name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
    return (
        <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
            <Image
                borderRadius="full"
                boxSize="40px"
                src="https://100k-faces.glitch.me/random-image"
                alt={`Avatar of ${props.name}`}
            />
            <Text fontWeight="medium">{props.name}</Text>
            <Text>—</Text>
            <Text>{props.date.toLocaleDateString()}</Text>
        </HStack>
    );
};

const BlogTags: React.FC<IBlogTags> = (props) => {
    return (
        <HStack spacing={2} marginTop={props.marginTop}>
            {props.tags.map((tag) => {
                return (
                    <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
                        {tag}
                    </Tag>
                )
            })}
        </HStack>
    )
};

{/* <Box
    display="flex"
    flex="1"
    flexDirection="column"
    justifyContent="center"
    marginTop={{ base: '3', sm: '0' }}>
    <BlogTags tags={['Engineering', 'Product']} />
    <Heading marginTop="1">
        <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
            Blog article title
        </Link>
    </Heading>
    <Text
        as="p"
        marginTop="2"
        color={useColorModeValue('gray.700', 'gray.200')}
        fontSize="lg">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book.
    </Text>
    <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} />
</Box> */}





export default function PostCards() {
    return (
        <Box
            borderColor={'black'}
            borderWidth={"5px"}
            height="250px"
            width="200px"
            flex-flow="column"
            borderRadius="20px"
            display="flex"  >

            <BlogTags tags={['Engineering', 'Product']} />
            <Heading marginTop="1">
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    Blog article title
                </Link>
            </Heading>
            <Text
                as="p"
                marginTop="2"
                color={useColorModeValue('gray.700', 'gray.200')}
                fontSize="lg">
                Lorem Ipsum is simply dummy text of the printing and
            </Text>
            <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} />




        </Box >




    )
}








