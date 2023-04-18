import {
  Stack,
  Text,
  Heading,
  VStack,
} from "@chakra-ui/react";
import moment from 'moment';
import 'moment/locale/pt-br'


interface Colaborador {
  id: number;
  nome: string;
  sobrenome: string;
  email: string;
  ativo: string;
  createdAt: string;
  updatedAt: string;
}

interface Categoria {
  id: number;
  nome: string;
  descricao: string;
  img: string;
  bloqueio: string;
  ativo: string;
  dataVencimento: string;
  createdAt: string;
  updatedAt: string;
}

type Noticia = {
  id: number;
  titulo: string;
  resumo: string;
  texto: string;
  views: number;
  idCategoria: number;
  idColaborador: number;
  ativo: string;
  createdAt: string;
  updatedAt: string;
  categoria: Categoria;
  colaborador: Colaborador
}


export default function NoticiaDetails(noticia: Noticia) {
  return (
    <Stack direction={{ base: 'column', lg: 'row' }} my={5} align="top">
      <VStack bg="gray.400" width={250} minW={250} rounded={"lg"} height="100%" />
      <VStack>
        <VStack>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={'blue.50'}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            {noticia.categoria.nome}
          </Text>
          <Text fontSize={10} alignSelf={'flex-start'}>Por {noticia.colaborador.nome} {noticia.colaborador.sobrenome}, {moment(noticia.createdAt).format('ll')}</Text>
          <Heading>{noticia.titulo}</Heading>
          <Text color={'gray.600'} fontSize={'lg'}>
            {noticia.resumo}
          </Text>
        </VStack>
        <VStack w="100%" p={5}>
          <Text color={'gray.600'}>
            <div dangerouslySetInnerHTML={{ __html: noticia.texto }} />
          </Text>
        </VStack>
      </VStack>
      <VStack className="container" bg="gray.400" width={250} minW={250} rounded={"lg"} height="100%" />
    </Stack>
  );


}







