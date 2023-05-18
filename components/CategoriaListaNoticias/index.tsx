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
  Divider,
  Container,
  VStack,
  WrapItem,
  Wrap
} from "@chakra-ui/react";
import moment from "moment";


interface IBlogTags {
  tags: TagsProps[];

}

interface TagsProps {

  id: number;
  tag: string;
  idSite: number;
  color: string;
  createdAt: Date;

}



interface BlogAuthorProps {
  date: Date;
  autor: string;
}

interface ColaboradorProps {
  id: number;
  nome: string;
  sobrenome: string;
  apresentacao: string;
  email: string;
  ativo: string;
  createdAt: Date;
  updatedAt: Date;
}

interface NoticiasProps {
  id: number;
  idSite: number;
  titulo: string;
  resumo: string;
  views: number | null,
  idCategoria: number;
  idColaborador: number;
  ativo: string;
  imgPath: string;
  createdAt: Date;
  updatedAt: Date;
  colaborador: ColaboradorProps
  tags: TagsProps[]


}

interface Categoria {
  id: number;
  nome: string;
  sufixurl: string;
  descricao: string;
  createdAt: Date;
  idSite: number;
  noticias: NoticiasProps[]
}

interface ListaProps {
  categoria: Categoria
}


const BlogTags: React.FC<IBlogTags> = ({ tags }) => {

  return (
    <Wrap justify={"center"} >
      {tags?.map((tag: any, index: number) => {
        return (
          <WrapItem key={tag.id}>
            <Tag size={"md"} variant="solid" colorScheme={tag.color}>
              {tag.tag}
            </Tag>
          </WrapItem>
        );
      })}
    </Wrap>
  );
};



export const BlogAuthor = ({ date, autor }: BlogAuthorProps) => {
  return (


    <VStack alignSelf="end">
      <Text fontWeight="bold" fontSize={14} alignSelf={'end'}>Por {autor}, {moment(date).format('ll')}</Text>

    </VStack>
  );
};

const CategoriaListaNoticias = ({ categoria }: ListaProps) => {

  return (
    <Container maxW={"7xl"}>
      < Heading as="h1" textTransform={'uppercase'}>
        {categoria.nome}
      </Heading >
      {
        categoria.noticias.map((noticia: NoticiasProps, index: number) => (
          <>
            <HStack key={noticia.id}>
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
                    src={
                      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                    }
                    alt="some good alt text"
                  />
                </Link>
              </Box>

              {/* BOX TITULO|RESUMO|AUTOR */}
              <VStack
                display="flex"
                flex="1"
                key={noticia.id}
              >

                <Heading marginTop="5" fontSize={"lg"} key={noticia.id}>
                  <Link
                    key={noticia.id}
                    href={`noticia/${noticia.id}`}
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    {noticia.titulo}
                  </Link>
                </Heading>

                <Text
                  key={noticia.id}
                  as="p"
                  fontSize="lg"
                  textAlign={"justify"}
                >
                  {noticia.resumo}
                </Text>
                <HStack>
                  <BlogTags key={noticia.id} tags={noticia.tags} />
                </HStack>
                <BlogAuthor
                  key={noticia.id}
                  date={new Date(noticia.createdAt)}
                  autor={noticia.colaborador.nome + noticia.colaborador.sobrenome}
                />
              </VStack>
            </HStack>
            <Divider height={"1.0px"} bg={"gray."} key={noticia.id} mt={5} />
          </>
        ))
      }
    </Container>









  );
};

export default CategoriaListaNoticias;
