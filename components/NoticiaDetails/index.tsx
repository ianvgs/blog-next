import {
  Text,
  Heading,
  VStack,
  Container,
  Box,
  Image
} from "@chakra-ui/react";
import moment from 'moment';
import 'moment/locale/pt-br'

import { NoticiaDetailsProps } from "../@types";
import { BlogTags } from "../Tags";


export default function NoticiaDetails(noticia: NoticiaDetailsProps) {

  return (
    <Container maxW={"7xl"} >
      <Box
        display="flex"
        alignItems={"center"}
        flexDirection={{ base: 'column', lg: 'row' }}>
        <Image mb="2" src={noticia?.imgPath} alt="News Image" height={250} width={300}

        />
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
            {noticia?.categoria?.nome}
          </Text>
          <Text fontSize={14} alignSelf={'end'}>Por {noticia?.colaborador?.nome} {noticia?.colaborador?.sobrenome}, {moment(noticia?.createdAt).format('ll')}
          </Text>
          <Heading>{noticia?.titulo}</Heading>
          <Text color={'gray.600'} fontSize={'lg'} >
            {noticia?.resumo}
          </Text>
        </VStack>
      </Box>
      <BlogTags tags={noticia?.tags} key={noticia?.id} />
      <Text color={'gray.600'} mx={100} my={15}>
        <div dangerouslySetInnerHTML={{ __html: noticia?.texto }} />
      </Text>
    </Container>
  );
}







