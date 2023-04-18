import {
  Box,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import config from '../../public/siteConfig.json';

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Box >
        <Text pt={3} fontSize={10} textAlign={"center"} ml={6} mr={6}>
          {config.footerDisclaimer}
        </Text>
      </Box>
      <Box >
        <Text pt={3} fontSize={10} textAlign={"center"}>
          {config.copyrightInfo}
        </Text>
      </Box>
    </Box>
  );
}
