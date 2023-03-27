import { PrismicImage, PrismicRichText, PrismicText, SliceZone } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'

import { createClient } from '../../prismicio'
import { components } from '../../../slices'
import { PageAnimation } from '../../components/PageAnimation'
import { Box, Container, Flex, HStack, Stack, Text, useColorMode, VStack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useDimensions } from '../../hooks/useDimensions'
import Head from 'next/head'


export default function Post({ page, latestPosts }) {

  const [hasMounted, setHasMounted] = useState(false);
  const { colorMode } = useColorMode();
  const { width } = useDimensions();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const options = {
    year: 'numeric', month: 'long', day: 'numeric'
  }

  const postFirstPublicationDate = new Intl.DateTimeFormat('en-us', options).format(new Date(page.first_publication_date))

  return (
    <PageAnimation>
      <Head>
        <title>
          {page.data.title[0].text}
        </title>
      </Head>
      {width > 900 ? (
        <Flex spacing={6} direction="row">

            <VStack alignItems="left" pt="20" maxW="70vw" mt="20" ml="5%">
              
              <HStack pl="20%">
                <Link href="/" passHref>
                  <Text _hover={{ textDecoration: "underline" }}>
                    Home
                  </Text>
                </Link>
                <Text>{'>'}</Text>
                <Link href="/blog" passHref >
                  <Text _hover={{ textDecoration: "underline" }}>
                    Blog
                  </Text>
                </Link>
              </HStack>

              <Text fontWeight="700" fontSize="25" pl="20%" >
                <PrismicText field={page.data.title}/>
              </Text>

              <HStack pb="5" pl="20%">
                <Text fontSize="15">
                  By Daniel Nakajima, 
                </Text>
                <Text fontSize="15">
                  {postFirstPublicationDate} 
                </Text>
              </HStack>
              
              <VStack w="100%">
                <Box w="40%" >
                  <PrismicImage field={page.data.banner} /> 
                </Box>
              </VStack>
              
              <Box>
                <SliceZone slices={page.data.slices} components={components} />
              </Box>
              
            </VStack>
          
            <Flex direction="column" mt={width > 1800 ? "15vw" : "20vw"} w="20vw" p="8" h="max-content" bg={ colorMode === "dark" ? "blue.800" : "white.700" }  borderRadius="5">
            <Text pb="5" textAlign="center" fontWeight="bold">Latest Posts</Text>
            <Box alignItems="left">
              { latestPosts.map((val, key) => {
                  return (
                    <Link href={"/blog/" + val.uid} passHref key={key}>
                      <Text _hover={{ textDecoration: "underline" }}>
                        <PrismicText field={val.data.title}  />
                      </Text>
                    </Link>
                    
                  )
              })}  
            </Box>
          </Flex>

        </Flex>

      ) : (
        <Container maxW="100vw" w="100%" mt="20">
          <VStack alignItems="left" pt="20" pl={width > 950 ? "20%" : 0} pb="5" >

            <HStack pb="5">
              <Link href="/" passHref>
                <Text _hover={{ textDecoration: "underline" }}>
                  Home
                </Text>
              </Link>
              <Text>{'>'}</Text>
              <Link href="/blog" passHref >
                <Text _hover={{ textDecoration: "underline" }}>
                  Blog
                </Text>
              </Link>
            </HStack>

            <Text fontWeight="700" fontSize="25" >
              <PrismicText field={page.data.title}/>
            </Text>

            <HStack>
              <Text fontSize="15">
                By Daniel Nakajima, 
              </Text>
              <Text fontSize="15">
                {postFirstPublicationDate} 
              </Text>
            </HStack>

          </VStack>

        <VStack w="100%">
          <Box w="100%" >
            <PrismicImage field={page.data.banner} /> 
          </Box>
        </VStack>

        <SliceZone slices={page.data.slices} components={components} />
      </Container>
      )}

    </PageAnimation>
  )
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("blogpost", params.slug);
  const latestPosts = await client.getAllByType("blogpost", {
    limit: 3,
    orderings: [
      { field: "my.blogpost.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });

  return {
    props: {
      page,
      latestPosts
    }
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("blogpost");

  const postInfo = pages.map(post => {
    return {
      params: {
        slug: post.uid,
      },
    }
  })
    
  return {
    paths: postInfo, //pages.map((page) => prismicH.asLink(page)),
    fallback: false,
  };
} 
