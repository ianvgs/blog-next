import "styles/globals.css";
import "styles/coresBB.css";
import "styles/TinyMCE.css";
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider, Box, Flex, Container } from "@chakra-ui/react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import NavBarBlank from '../components/NavBarBlank';
import config from '../public/siteConfig.json';



export default function App({ Component, pageProps }: AppProps) {
  return (

    <ChakraProvider>
      <Head>
        <title>{config.siteName}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex minH={"100vh"} flexDir={"column"} justifyContent="space-between" bg={'gray.50'} >
        <Box>
          <NavBar />
          <NavBarBlank />
        </Box>
        <Flex >
          <Component  {...pageProps} />
        </Flex>
        <Footer />
      </Flex >
    </ChakraProvider >

  )

}
