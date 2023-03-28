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
  Stack,
  VStack,
  SimpleGrid,
  Icon,
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

const CategoriaListaNoticias = (props: any) => {

  return (

    <Stack minH={'100vh'} padding={3} direction={{ base: 'column', md: 'row' }}>

      <VStack>
        < Heading as="h1" >
          {props.categoria?.nome}
        </Heading >
        {
          props.categoria?.noticias?.map((unique: any) => (
            <Box key={unique.id} marginTop={{ base: "2", sm: "5" }} display="flex">
              <Box flex="1" position="relative" alignItems="center">
                <Link
                  href={`noticia/` + unique.id}
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
                <BlogTags tags={unique?.tags?.map((tag: any) => tag.tag)} />
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
                  color={'gray.300'}
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
          ))
        }
      </VStack>

      <VStack bg="gray.400" width={550} rounded={10}>
        <VStack w={"90%"}>
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


    </Stack>
  );
};

export default CategoriaListaNoticias;
