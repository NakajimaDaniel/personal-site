import "../styles/global.scss"
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react';
import MainTheme from '../themes/theme';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <ChakraProvider theme={MainTheme}>
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