import {
  Box,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}

    >
      <Box py={2}>
        <Text pt={6} fontSize={"sm"} textAlign={"center"} ml={6} mr={6}>
          Nossa equipe preza a qualidade da informação em matérias jornalísticas de diversos setores, ressaltando, no entanto, que não se responsabilizando por perdas, danos (diretos, indiretos e incidentais), custos e lucros cessantes advindos da utilização de informações veiculadas, declaramos ainda que não fazemos qualquer tipo de recomendação de investimento.
        </Text>
      </Box>
      <Box py={2}>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © 2023 - BMIZ
        </Text>
      </Box>
    </Box>
  );
}
