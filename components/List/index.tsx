import React, { useState } from "react";
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
  Flex,
} from "@chakra-ui/react";

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface EventAuthorProps {
  date: Date;
  name: string;
}

export const EventAuthor: React.FC<EventAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Text fontWeight="medium">{"Prefixo" || props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const EventosList = (props: any) => {
  return (
    <>
      <Flex>
        <VStack w="250px" bg="#AFAFAF" />
        <VStack>
          <Heading as="h1">Eventos ativos</Heading>
          <Divider
            marginTop="15"
            marginBottom="10"
            borderWidth="1px"
            w="100vh"
          />
          {props.arrayDeData.map((unique: any): any => (
            <HStack key={unique.id} display="flex">
              <Box flex="2" padding={3}>
                <Link
                  href={`eventos/` + unique.id}
                  textDecoration="none"
                  _hover={{ textDecoration: "none" }}
                >
                  <Image
                    height={200}
                    width={300}
                    borderRadius="lg"
                    src={unique.img}
                    alt="some good alt text"
                    objectFit="cover"
                  />
                </Link>
              </Box>

              <Box
                display="flex"
                flex="6"
                flexDirection="column"
                marginTop={{ base: "3", sm: "0" }}
              >
                <Heading marginTop="1">
                  <Link
                    href={`eventos/` + unique.id}
                    textDecoration="cyan"
                    _hover={{ textDecoration: "none" }}
                  >
                    {unique.descricao || "Nome do blog"}
                  </Link>
                </Heading>
                <Text
                  as="p"
                  marginTop="2"
                  color={useColorModeValue("gray.700", "gray.200")}
                  fontSize="lg"
                >
                  Pensou em algo inovador que ajudará a sua equipe? Cadastre
                  aqui até xx/xx/xxxx e ajude o processo de inovação do banco.
                </Text>
                <EventAuthor
                  name="John Doe"
                  date={new Date(unique.createdAt)}
                />
              </Box>
            </HStack>
          ))}
        </VStack>
      </Flex>

      <Heading as="h1" margin={15}>
        Últimos Eventos
      </Heading>
      <
        margin={15}
      height={400}
      justifyContent="center"
      alignContent="center"
      >
      <Divider
        marginTop="15"
        marginBottom="10"
        borderWidth="1px"
        bg="#FCFC30"
      />
      <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "15%" }}>
        <Box>
          <Box borderRadius="lg" overflow="hidden">
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                transform="scale(1.0)"
                src={
                  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                }
                alt="some text"
                objectFit="contain"
                width="100%"
                transition="0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                }}
              />
            </Link>
          </Box>
          <BlogTags tags={["Engineering", "Product"]} marginTop="3" />
          <Heading fontSize="xl" marginTop="2">
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              Some blog title
            </Link>
          </Heading>
          <Text as="p" fontSize="md" marginTop="2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </Text>
          <EventAuthor
            name="John Doe"
            date={new Date("2021-04-06T19:01:27Z")}
          />
        </Box>
      </WrapItem>
      <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "15%" }}>
        <Box>
          <Box borderRadius="lg" overflow="hidden">
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                transform="scale(1.0)"
                src={
                  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                }
                alt="some text"
                objectFit="contain"
                width="100%"
                transition="0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                }}
              />
            </Link>
          </Box>
          <BlogTags tags={["Engineering", "Product"]} marginTop="3" />
          <Heading fontSize="xl" marginTop="2">
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              Some blog title
            </Link>
          </Heading>
          <Text as="p" fontSize="md" marginTop="2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </Text>
          <EventAuthor
            name="John Doe"
            date={new Date("2021-04-06T19:01:27Z")}
          />
        </Box>
      </WrapItem>
    </Wrap >
    </>
  );
};

export default EventosList;
