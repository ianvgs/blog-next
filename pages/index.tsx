import { Inter } from 'next/font/google'
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
import styles from '@/styles/Home.module.css'
import { GetServerSideProps } from "next";
import Index from '@/components/Home';
/* import axiosNest from "@services/axiosNest"; */

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

const inter = Inter({ subsets: ['latin'] })

interface BlogAuthorProps {
  date: Date;
  name: string;
}

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

export default function Home() {
  return (
    <Index />
  )

}

export const getServerSideProps: GetServerSideProps = async (ctx: {
  req: { cookies: any };
}) => {
  const cookies = ctx.req.cookies;

  /*  let data: any = [];
   try {
     const response = await axiosNest.get(
       "http://localhost:3335/api/banco-ideias/evento",
       {
         headers: {
           Cookie: `BBSSOToken=${cookies.BBSSOToken}`,
         },
       }
     );
 
     data = response.data;
   } catch { } */

  return {
    props: {
      /* eventos: data, */
    },
  };
};





