

import { ChakraProvider } from '@chakra-ui/react';
import {theme} from '../theme'
import { Layout } from '../components/Layout';
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../prismicio'

function MyApp({ Component, pageProps, router }) {
  return (

        <ChakraProvider theme={theme}>
<Layout>
              <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
                <PrismicPreview repositoryName={repositoryName}>
                  <Component {...pageProps} key={router.route} />
                </PrismicPreview>
              </PrismicProvider>

              <AnimatePresence exitBeforeEnter initial={true}></AnimatePresence>
              </Layout>
        </ChakraProvider>

  )
}

export default MyApp