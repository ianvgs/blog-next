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
  Avatar,
  Stack,
  VStack,
  Icon,
  Container,
  SimpleGrid,
  Flex,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { Feature } from "../Home/components/Feature";
import { ArrowRightIcon, InfoIcon } from "@chakra-ui/icons";

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
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props: any) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center" alignSelf="end">
      <Avatar
        size={"sm"}
        src={``}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const CategoriaListaNoticias = (props: any) => {

  return (
    <Stack padding={3} direction={{ base: 'column', lg: 'row' }} justifyContent={"space-between"}>
      <VStack width={200} rounded={"lg"} >
        < Heading as="h1" >
          {props.categoria?.nome.toUpperCase()}
        </Heading >
      </VStack>
      <Container maxW={'9xl'} display={"flex"} flexDirection={{ base: 'column', lg: 'row' }} justifyContent={"space-between"} >
        <VStack>
          {
            props.categoria?.noticias?.map((unique: any) => (
              <>
                <Box key={unique.id} display="flex" flexDirection={{ base: 'column', lg: 'row' }} alignItems={{ sm: "center", lg: "" }} >
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
                    justifyContent="center"
                    mx="5"
                    w={"90%"}
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
                      as="p"
                      marginTop="2"
                      color={'gray.700'}
                      fontSize="lg"
                      textAlign={"justify"}

                    >
                      {unique.resumo}
                    </Text>
                    <BlogAuthor
                      name={unique.colaborador.nome}
                      date={new Date(unique.createdAt)}
                    />
                  </Box>
                </Box>
                <Divider height={"1.0px"} bg={"gray."} />
              </>
            ))
          }
        </VStack>
        <VStack bg="gray.400" minW={200} rounded={10} display={"flex"} padding={5} shadow={"lg"}>
          <VStack >
            <Text
              color={'blue.400'}
              fontWeight={700}
              fontSize={'sm'}
            >
              DADOS ECONÔMICOS
            </Text>

            <Link href={`dados-economicos`} textDecoration="none" _hover={{ textDecoration: 'none', color: 'gray' }}>
              <Feature
                icon={
                  <Icon as={InfoIcon} color={'gray.500'} />
                }

                text={'O INPC acumulado 12 meses é de 10% .'}
              /> </Link>
            <Link href={`dados-economicos`} textDecoration="none" _hover={{ textDecoration: 'none', color: 'gray' }}>
              <Feature
                icon={<Icon as={InfoIcon} color={'gray.500'} />}

                text={'O IPCA acumulado 12 meses é de 15%'}
              />
            </Link>
            <Link href={`dados-economicos`} textDecoration="none" _hover={{ textDecoration: 'none', color: 'gray' }}>
              <Feature
                icon={
                  <Icon as={InfoIcon} color={'gray.500'} />
                }

                text={'O IGPM acumulado 12 meses é de 18%'}
              />
            </Link>
            <Link href={`dados-economicos`} textDecoration="none" _hover={{ textDecoration: 'none', color: 'gray' }}>
              <Feature
                icon={
                  <Icon as={ArrowRightIcon} color={'golden.500'} />}
                text={'Ver mais dados...'}
              />
            </Link>
          </VStack>
        </VStack>

      </Container>
    </Stack >



  );
};

export default CategoriaListaNoticias;
