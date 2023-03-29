import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider, Box } from "@chakra-ui/react";
/* import "@/node_modules/nes.css/css/nes.css" */
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import NavBarBlank from '@/components/NavBarBlank';



export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Blog-App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider>
        <Box>
          <NavBar />
          <NavBarBlank />
          <Component {...pageProps} />
          <Footer />
        </Box>
      </ChakraProvider>
    </>
  )

}
