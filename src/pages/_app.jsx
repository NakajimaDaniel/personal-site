import "../styles/global.scss"
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <ChakraProvider>
      <Head>
          <title>Daniel Nakajima | Personal Site</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>

    </>
  )
}

export default MyApp