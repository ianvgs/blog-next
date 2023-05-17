import {
  Stack,
  Text,
  Heading,
  VStack,
  Container,
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


export default function NoticiaDetails(noticia: any) {
  const base64Data = Buffer.from(noticia.imageData.data).toString('base64');
  const src = `data:image/jpeg;base64,${base64Data}`;
  return (

    <Container maxW={"7xl"} >
      <VStack>
        <img src={src} alt="News Image" width={250} height={250} />
        <Text
          textTransform={'uppercase'}
          color={'blue.400'}
          fontWeight={600}
          fontSize={'sm'}
          bg={'blue.50'}
          p={2}
          alignSelf={'flex-start'}
          rounded={'md'}>
          {noticia?.categoria?.nome}
        </Text>
        <Text fontSize={10} alignSelf={'flex-start'}>Por {noticia?.colaborador?.nome} {noticia?.colaborador?.sobrenome}, {moment(noticia.createdAt).format('ll')}</Text>
        <Heading>{noticia.titulo}</Heading>
        <Text color={'gray.600'} fontSize={'lg'}>
          {noticia.resumo}
        </Text>



      </VStack>



      <Text color={'gray.600'}>
        <div dangerouslySetInnerHTML={{ __html: noticia.texto }} />
      </Text>




    </Container>
  );


}







