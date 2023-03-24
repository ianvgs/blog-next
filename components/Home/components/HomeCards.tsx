import React from 'react';
import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    HStack,
    Tag,
    WrapItem,
    SpaceProps,
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

const BlogTags: React.FC<IBlogTags> = (props: any) => {
    return (
        <HStack spacing={2} marginTop={props.marginTop}>
            {props.tags.map((tag: any) => {
                return (
                    <Tag size={'md'} variant="subtle" colorScheme={"red"} key={tag}>
                        {tag.tag}
                    </Tag>
                )
            })}
        </HStack>
    )
};

export default function HomeCards(props: any) {
    return (
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '22%' }}>
            <Box w="100%" >
                {props.mural ?
                    <Heading fontSize="20" fontWeight={"bold"} color={'gray.600'} position={"relative"} mb={1} >
                        <Link textDecoration="aqua" _hover={{ color: 'gray' }}>
                            <Text>{props.data?.categoria.nome}</Text>
                        </Link>
                    </Heading>
                    : null}
                <Box borderRadius="lg" overflow="hidden">
                    <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
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
                        />
                    </Link>
                </Box>
                {props.mural ? null : <BlogTags tags={props.data?.tags || ['Engineering', 'Product']} marginTop="3" />}
                <Heading fontSize="xl" marginTop="2">
                    <Link href={`dados-economicos`} textDecoration="none" _hover={{ textDecoration: 'none', color: 'gray' }}>
                        {props.data?.titulo || 'Some blog Title'}
                    </Link>
                </Heading>
                {props ? null : <BlogAuthor
                    name="John Doe"
                    date={new Date('2021-04-06T19:01:27Z')}
                />}
            </Box>
        </WrapItem>
    )
}










