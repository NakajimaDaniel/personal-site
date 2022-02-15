import { Header } from "../Header";
import Head from 'next/head'
import { Box } from "@chakra-ui/react"
import { Footer } from "../Footer";

export function Layout({ children }) {
  return (
    <Box>
      <Head>
        <title>Daniel Nakajima | Personal Site</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Header />
      {children}
      <Footer />
    </Box>
  )
}