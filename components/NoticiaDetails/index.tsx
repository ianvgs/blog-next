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

    <Stack padding={3} direction={{ base: 'column', lg: 'row' }}>
      <VStack className="container" bg="gray.400" width={300} rounded={"lg"} />
      <Container maxW={'7xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
              }
              objectFit={'cover'}
            />
          </Flex>
          <Stack spacing={4}>
            <HStack justifyContent={"space-between"}>
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
              <Text
                textTransform={'uppercase'}
                color={'blue.400'}
                fontWeight={600}
                fontSize={'sm'}
                /*  bg={useColorModeValue('blue.50', 'blue.900')} */
                p={2}
                alignSelf={'flex-start'}
                rounded={'md'}>
                {noticia.colaborador.nome} -
                {moment(noticia.createdAt).format('ll')}
              </Text>
            </HStack>
            <Heading>{noticia.titulo}</Heading>
            <Text color={'gray.600'} fontSize={'lg'} textAlign={"justify"}>
              {noticia.resumo}
            </Text>
          </Stack>
        </SimpleGrid>
        <Stack spacing={4} mt={10}>
          <Text textAlign={"justify"} color={'gray.600'} fontSize={'lg'}>
            {noticia.texto}
          </Text>
        </Stack>
      </Container>
    </Stack>


  );


}







