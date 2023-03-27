import { Box, Container, Text } from "@chakra-ui/react";
import { createClient } from '../../prismicio'
import { PageAnimation } from "../../components/PageAnimation";
import { Post } from "../../components/Post";
import { useDimensions } from "../../hooks/useDimensions";
import * as prismicH from '@prismicio/helpers'
import Head from "next/head";

export default function Blog({ page }) {

    const { width } = useDimensions();

    const post = page.map(val =>{
      return val.data
   })

   const postSlices = post[0].slices
      .filter(slice => {return slice.slice_type === "text"})
      .map(val => {return val} )

   const text = postSlices[0].items.map(val => prismicH.asText(val.text) ).join(" ").substring(0, 200);

   const excerpt = text.length > 10 ? text.substring(0, text.lastIndexOf(" ")) + "…" : text;
   
   const posts = page.map(val => {
    return {
      id: val.id,
      title: val.data.title,
      slug: val.uid,
      banner: val.data.banner,
      publicationDate: val.first_publication_date,
      type: val.type,
      excerpt: excerpt,
      tags: val.tags

    }
  })
  
  return (
    <PageAnimation>
    <Head>
      <title>Blog</title>
    </Head>
    <Container maxW="100vw" w="100%" mt="20">
      <Box pt="6" pl={width > 900 ? "10" : "0"} pb="10">
        <Text fontWeight="bold" fontSize="2xl">
          Blog
        </Text>
      </Box>

      <Box pt="6" pl={width > 900 ? "10" : "0"} pb="10">
      {posts.map(posts => (
        <Post post={posts} key={posts.id} />
      ))}
      </Box>
      
    </Container>
  </PageAnimation>
  )
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getAllByType('blogpost')

  return {
    props: {
      page,
    },
  }
}