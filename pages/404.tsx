import { Box, Button, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function PaginaNaoEncontrada() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        as="h2"
        display="inline-block"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Pagina não encontrada.
      </Text>
      <Text color={"gray.500"} mb={6}>
        Ooops... esse link não existe!
      </Text>

      <Button
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        variant="solid"
      >
        <Link href="/">Ir para o início</Link>
      </Button>
    </Box>
  );
}
