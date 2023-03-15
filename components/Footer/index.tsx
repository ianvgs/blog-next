import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { ReactNode } from "react";

const Logo = (props: any) => {
  const basePath = process.env.BASE_PATH;
  return (
    <Image
      backgroundColor="#002D4B"
      boxSize="50px"
      alt="test"
    />
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"7xl"} py={5} alignItems="stretch">
        <SimpleGrid columns={{ md: 3 }}>
          <Stack align={"center"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>
              About Us
              <Tag
                size={"sm"}
                bg={useColorModeValue("yellow.300", "yellow.100")}
                ml={2}
                color={"white"}
              >
                New
              </Tag>
            </Link>
            <Link href={"#"}>Press</Link>
          </Stack>

          <Stack align={"center"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Press</Link>
          </Stack>

          <Stack align={"center"}>
            <ListHeader>Follow Us</ListHeader>
            <Link href={"#"}>Facebook</Link>
            <Link href={"#"}>Twitter</Link>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box py={2}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Logo />
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © 2022 Ian Next
        </Text>
      </Box>
    </Box>
  );
}
