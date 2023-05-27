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
import { useEffect, useState } from "react";

import { NoticiaDetailsProps } from "../@types";
import { BlogTags } from "../Tags";


export default function NoticiaDetails(noticia: NoticiaDetailsProps) {
  const [currentNoticia, setCurrentNoticia] = useState<NoticiaDetailsProps | undefined>(undefined);
  useEffect(() => {
    setCurrentNoticia(noticia)
  }, [noticia])


  return (
    <Container maxW={"7xl"} >
      <Box
        display="flex"
        alignItems={"center"}
        flexDirection={{ base: 'column', lg: 'row' }}>
        <Image mb="2" src={currentNoticia?.imgPath} alt={currentNoticia?.imgAlterText} height={250} width={300} />
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
            {currentNoticia?.categoria?.nome}
          </Text>
          <Text fontSize={14} alignSelf={'end'}>Por {noticia?.colaborador?.nome} {noticia?.colaborador?.sobrenome}, {moment(noticia?.createdAt).format('ll')}
          </Text>
          <Heading>{currentNoticia?.titulo}</Heading>
          <Text color={'gray.600'} fontSize={'lg'} >
            {currentNoticia?.resumo}
          </Text>
        </VStack>
      </Box>
      {currentNoticia?.tags && <BlogTags tags={currentNoticia?.tags} key={currentNoticia?.id} />}
      {currentNoticia?.texto && <Text color={'gray.600'} mx={100} my={15}>
        <div dangerouslySetInnerHTML={{ __html: currentNoticia?.texto }} />
      </Text>}
    </Container>
  );
}







