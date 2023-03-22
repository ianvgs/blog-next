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
  useColorModeValue,
  Container,
  Avatar,
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

interface BlogAuthorProps {
  date: Date;
  name: string;
  matricula: any;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props: any) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Avatar
        size={"sm"}
        src={`https://humanograma.intranet.bb.com.br/avatar/${props.matricula}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const IdeiasList = (eventAndIdeias: any) => {
  return (
    <Container maxW={"7xl"} p="10">
      <Heading as="h1">
        {`Ideias do evento: ${eventAndIdeias.eventAndIdeias?.descricao}`}
      </Heading>

      {eventAndIdeias.eventAndIdeias?.ideias.map((unique: any) => (
        <Box key={unique.id} marginTop={{ base: "2", sm: "5" }} display="flex">
          <Box flex="1" position="relative" alignItems="center">
            <Link
              href={`ideia/` + unique.id}
              width={{ base: "70%", sm: "85%" }}
              zIndex="2"
              marginLeft={{ base: "0", sm: "5%" }}
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
              flexDirection="column"
              justifyContent="center"
            >
              <Image
                borderRadius="lg"
                src={
                  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>

          <Box
            display="flex"
            flex="2"
            flexDirection="column"
            justifyContent="center"
            marginLeft={20}
            marginTop={{ base: "3", sm: "0" }}
          >
            <BlogTags tags={unique.tags.map((tag: any) => tag.tag)} />
            <Heading marginTop="1">
              <Link
                href={`ideia/${unique.id}`}
                textDecoration="none"
                _hover={{ textDecoration: "none" }}
              >
                {unique.titulo}
              </Link>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              {unique.resumo}
            </Text>
            <BlogAuthor
              matricula={unique.colaborador.matricula}
              name={unique.colaborador.nome}
              date={new Date(unique.createdAt)}
            />
          </Box>
        </Box>
      ))}

      {/*  <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                borderRadius="lg"
                src={
                  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(orange.600 1px, transparent 1px)",
                "radial(orange.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <BlogTags tags={["Engineering", "Product"]} />
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              Blog article title
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <BlogAuthor name="John Doe" date={new Date("2021-04-06T19:01:27Z")} />
        </Box>
      </Box> */}
    </Container>
  );
};

export default IdeiasList;
