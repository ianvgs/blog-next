import {
  Stack,
  Heading,
  Text,
  Button,
  Icon,
  useColorModeValue,
  Link,
  Container,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

export default function CardWithIllustration() {
  return (

    <Container
      maxW={"7xl"}
      display="flex"
      alignItems={"center"}
      justifyContent="center"
    >
      <Stack
        boxShadow={'2xl'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        p={10}
        spacing={4}
        align={'center'}
        w={400}
        flexDir={"column"}
      >
        <Icon as={Search2Icon} w={20} h={20} color="gray.400" />

        <Heading
          as="h1"
          display="inline-block"
          size="2xl"
          bgGradient="linear(to-r, gray.400, gray.600)"
          backgroundClip="text"
        >
          404
        </Heading>
        <Text fontSize="32px" mt={3} mb={2} color={"gray.500"} >
          Pagina não encontrada.
        </Text>
        <Text color={"gray.500"} mb={6}>
          Ooops... esse link não existe!
        </Text>
        <Button
          colorScheme="gray"
          bgGradient="linear(to-r, gray.400, gray.500, gray.600)"
          color="white"
          variant="solid"
        >
          <Link href="/">Ir para o início</Link>
        </Button>
      </Stack >
    </Container >

  );
}


