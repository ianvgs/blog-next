import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  HStack,
  Divider,
  Container,
  VStack,
} from "@chakra-ui/react";
import { ListaCategoriaProps, NoticiaDetailsProps } from "../@types";
import { BlogTags } from "../Tags";
import { Author } from "../Author";

const CategoriaListaNoticias = ({ categoria }: ListaCategoriaProps) => {

  return (
    <Container maxW={"7xl"}>
      < Heading as="h1" textTransform={'uppercase'}>
        {categoria.nome}
      </Heading >
      {
        categoria.noticias.map((noticia: NoticiaDetailsProps, index: number) => (
          <>
            <Box
              key={index}
              display="flex"
              alignItems={"center"}
              flexDirection={{ base: 'column', md: 'row' }}>
              {/* BOX IMAGE */}
              <Box w="250px" key={noticia.id}>
                <Link

                  key={noticia.id}
                  href={`noticia/` + noticia.id}
                  marginLeft={{ base: "0", sm: "5%" }}
                  _hover={{ textDecoration: "none" }}

                >
                  <Image
                    key={noticia.id}
                    borderRadius="lg"
                    mb="1"
                    src={
                      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                    }
                    alt="some good alt text"
                  />
                </Link>
                <BlogTags key={noticia.id} tags={noticia.tags} />
              </Box>
              {/* BOX TITULO|RESUMO|AUTOR */}
              <VStack
                display="flex"
                flex="1"
                key={noticia.id}
              >
                <Link
                  key={noticia.id}
                  href={`noticia/${noticia.id}`}
                  textDecoration="none"
                  _hover={{ textDecoration: "none" }}
                >
                  <Heading marginTop="5" fontSize={"lg"} key={noticia.id}
                    alignSelf="flex-start">
                    {noticia.titulo}
                  </Heading>

                  <Text
                    key={noticia.id}
                    as="p"
                    fontSize="lg"
                    textAlign={"justify"}
                  >
                    {noticia.resumo}
                  </Text>
                </Link>



                <Author
                  key={noticia.id}
                  date={new Date(noticia.createdAt)}
                  autor={noticia.colaborador.nome + noticia.colaborador.sobrenome}
                />
              </VStack>
              {/*       </HStack> */}
            </Box>
            <Divider height={"1.0px"} bg={"gray."} key={noticia.id} mt={5} />
          </>
        ))
      }
    </Container>
  );
};

export default CategoriaListaNoticias;
