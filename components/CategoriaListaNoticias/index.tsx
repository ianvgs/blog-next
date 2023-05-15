import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  HStack,
  Tag,
  SpaceProps,
  Stack,
  VStack,
  Divider,
} from "@chakra-ui/react";


interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags?.map((tag: any) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name?: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props: any) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center" alignSelf="end">
      <Text fontWeight="medium">{props.name}</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const CategoriaListaNoticias = (props: any) => {

  return (
    <Stack direction={{ base: 'column', lg: 'row' }} justifyContent="space-between">
      <VStack bg="gray.400" width={250} minW={250} rounded={"lg"} minH="100%" />
      <VStack  >
        < Heading as="h1" alignSelf={"start"}  >
          {props.categoria?.nome?.toUpperCase()}
        </Heading >
        {
          props.categoria?.noticias?.map((unique: any) => (
            < >
              <Box justifyContent={"space-between"} key={unique.id} display="flex" flexDirection={{ base: 'column', md: 'row' }} alignItems={{ base: "center", lg: "space-between" }} w="100%"
              >
                <Box w="250px">
                  <Link
                    href={`noticia/` + unique.id}
                    marginLeft={{ base: "0", sm: "5%" }}
                    _hover={{ textDecoration: "none" }}

                  >
                    <Image
                      borderRadius="lg"
                      src={
                        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                      }
                      alt="some good alt text"
                    />
                  </Link>
                </Box>
                <Box
                  display="flex"
                  flex="3"
                  flexDirection="column"
                  mx="5"
                >
                  <BlogTags tags={unique?.tags?.map((tag: any) => tag.tag)} />
                  <Heading marginTop="5" fontSize={"lg"}>
                    <Link
                      href={`noticia/${unique.id}`}
                      textDecoration="none"
                      _hover={{ textDecoration: "none" }}
                    >
                      {unique.titulo}
                    </Link>
                  </Heading>
                  <Text
                    w={"600px"}
                    as="p"
                    marginTop="2"
                    color={'gray.700'}
                    fontSize="lg"
                    textAlign={"justify"}
                  >
                    {unique.resumo}
                  </Text>
                  <BlogAuthor
                    date={new Date(unique.createdAt)}
                  />
                </Box>
              </Box>
              <Divider key={unique.id} height={"1.0px"} bg={"gray."} />
            </>
          ))
        }
      </VStack>
      <VStack bg="gray.400" width={250} minW={250} rounded={"lg"} height="100%" />
    </Stack >







  );
};

export default CategoriaListaNoticias;
