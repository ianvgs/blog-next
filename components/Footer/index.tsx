import {
  Box,
  Text,
  Flex
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import config from '../../public/siteConfig.json';

export default function Footer() {
  const footerDisclaimer = config['footerDisclaimer']
  const copyrightInfo = config["copyrightInfo"]
  const navBarBg = config['styles']['nav-bar-bg']
  const navBarBgDark = config['styles']['nav-bar-bg-darker']
  const isDarkerLayout = config['layout'] === '2'
  const [timeLogger, setTimeLogger] = useState<any>()
  useEffect(() => {
    setTimeLogger(new Date().toLocaleString())
  }, [])

  return (
    <Flex flexDirection={"column"} >
      <Box bg={isDarkerLayout ? navBarBg : "gray.200"} >
        <Text fontSize={14} textAlign={"center"} m={4} color={isDarkerLayout ? 'white' : 'gray.700'}>
          {footerDisclaimer}
        </Text>
      </Box>
      <Box bg={isDarkerLayout ? navBarBgDark : "gray.200"}  >
        <Text fontSize={12} textAlign={"center"} m={1} color={isDarkerLayout ? 'white' : 'gray.700'}>
          {copyrightInfo}
        </Text>
        <Text fontSize={12} textAlign={"center"} m={1} color={isDarkerLayout ? 'white' : 'gray.700'}>
          Last updated time: {timeLogger}
        </Text>
      </Box>
    </Flex>
  );
}
