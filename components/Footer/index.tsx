import {
  Box,
  Text,
} from "@chakra-ui/react";
import config from '../../public/siteConfig.json';

export default function Footer() {
  const footerDisclaimer = config['footerDisclaimer']
  const copyrightInfo = config["copyrightInfo"]
  const navBarBg = config['styles']['nav-bar-bg']
  const navBarBgDark = config['styles']['nav-bar-bg-dark']
  const isDarkerLayout = config['layout'] === '2'


  return (
    <Box>
      <Box bg={isDarkerLayout ? navBarBg : "gray.200"} >
        <Text fontSize={12} textAlign={"center"} m={4} color={isDarkerLayout ? 'white' : 'gray.700'}>
          {footerDisclaimer}
        </Text>
      </Box>
      <Box bg={isDarkerLayout ? navBarBgDark : "gray.200"}  >
        <Text fontSize={10} textAlign={"center"} m={1} color={isDarkerLayout ? 'white' : 'gray.700'}>
          {copyrightInfo}
        </Text>
      </Box>
    </Box>

  );
}
