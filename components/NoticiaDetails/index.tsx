import {
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Heading,
  SimpleGrid,
  useColorModeValue,
  HStack,
  VStack,
  Avatar,
  Divider,
} from "@chakra-ui/react";
import moment from 'moment';
import 'moment/locale/pt-br'


interface Colaborador {
  id: number;
  nome: string;
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
  const date = moment.locale('pt-br');

  return (

    <Stack direction={{ base: 'column', lg: 'row' }} my={5}>
      <VStack bg="gray.400" width={250} minW={250} rounded={"lg"} height="100%" />

      <VStack>
        <HStack align={"start"} justifyItems="space-between" alignContent={"space-between"}>
          <Image
            w={250}
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            objectFit={'cover'}
          />

          <VStack>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              {noticia.categoria.nome}
            </Text>
            <Heading>{noticia.titulo}</Heading>
            <Text color={'gray.600'} fontSize={'lg'}>
              {noticia.resumo}
            </Text>
          </VStack>
        </HStack>


        <VStack w="100%" p={5}>
          <Text color={'gray.600'}>
            <div dangerouslySetInnerHTML={{ __html: noticia.texto }} />
          </Text>
          <Divider height={2} bg="gray.300" />
          <HStack alignSelf={'end'}>
            <Avatar
              size={"sm"}
              src={``}
            />
            <Text
              textTransform={'uppercase'}
              bg="blue"
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              p={2}
              rounded={'md'}>
              {noticia.colaborador.nome} -
              {moment(noticia.createdAt).format('ll')}
            </Text>
          </HStack>
          <Divider height={2} bg="gray.300" />

        </VStack>
      </VStack>

      <VStack className="container" bg="gray.400" width={250} minW={250} rounded={"lg"} height="100%" />

    </Stack>



  );


}







