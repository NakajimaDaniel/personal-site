

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
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={repositoryName}>
        <ChakraProvider theme={theme}>
          <Layout>
            <AnimatePresence exitBeforeEnter initial={true}>
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </Layout> 
        </ChakraProvider>
      </PrismicPreview>
    </PrismicProvider>
  )
}

export default MyApp