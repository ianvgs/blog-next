import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Heading,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";

const Links = ["Inicio", "Quem somos"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    key={children}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={/* children?.trim().toLowerCase() === "inicio" ? "/" : children?.trim().toLowerCase() */"$"}>
    {children}
  </Link>
);

export default function NavBar({ user }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const basePath = process.env.BASE_PATH;

  return (
    <>
      <Box bg="#002D4B" px={4}>
        <Flex h={16} /* alignItems={"center"}  */ justifyContent={"space-between"} >
          <HStack spacing={2} alignItems={"center"}>
            <HStack as={"nav"} spacing={1}>
              {Links.map((link) => (

                <Button colorScheme="whiteAlpha" key={link}><NavLink key={link}>{link}</NavLink></Button>

              ))}
            </HStack>
          </HStack>
          <Box justifyContent="center">
            <Heading color="white"><p>MEUSITE.COM</p></Heading>
            {/* <Image
              boxSize="70px"
              bg="white"
              src="../../public/"
              alt="test"
            /> */}
          </Box>
          <Flex alignItems={"center"}>
            <Button
              colorScheme="blackAlpha"
              variant={"solid"}
              size={"md"}
              mr={4}
              leftIcon={<AddIcon />}
            >
              Minha Conta
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}

                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
