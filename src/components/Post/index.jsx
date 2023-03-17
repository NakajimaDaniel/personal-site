/* eslint-disable @next/next/link-passhref */
import { Box, Flex, HStack, Image, Spacer, Text, VStack } from "@chakra-ui/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicImage, PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useDimensions } from "../../hooks/useDimensions";


export function Post({post}) {

  const [hasMounted, setHasMounted] = useState(false);
  const {width, height} = useDimensions();


  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const options = {
    year: 'numeric', month: 'numeric', day: 'numeric',

  }

  const postFirstPublicationDate = new Intl.DateTimeFormat('default', options).format(new Date(post.publicationDate))

  
  return (
    <>
    {width >= 650 ? (
      <Flex mb="10" direction="row">

        <VStack mr="10" >
          <Link href={"/blog/" + post.slug}> 
            <Box height="200px" width="310px">
              <PrismicNextImage field={post.banner} imgixParams={{ fit: 'crop', maxWidth:310, maxHeight: 200}}  />
            </Box>
          </Link>
        </VStack>

        <Box>
          <VStack h="200"  alignItems="left">
            <Link href={"/blog/" + post.slug}>
              <Text fontWeight="600" fontSize="xl" _hover={{ textDecoration: "underline" }}>
                <PrismicRichText  field={post.title}/>        
              </Text>
            </Link>
            <Text w="90%">
              {post.excerpt}
            </Text>
            <Spacer />
            <Text>{ postFirstPublicationDate }</Text>
          </VStack>
        </Box>

      </Flex>
    ) : (
      <VStack mb="10">

        <Link href={"/blog/" + post.slug}>
          <Box w={[310]} h={[200]}>
            <PrismicImage field={post.banner} />
          </Box>
        </Link>

        <Box pl="5" w="100%">
        <VStack alignItems="left">
        <Link href={"/blog/" + post.slug} >
          <Text fontWeight="600" fontSize="xl"  _hover={{ textDecoration: "underline" }}>
            <PrismicRichText  field={post.title}/>
          </Text>
        </Link>
        <Text>{ postFirstPublicationDate }</Text>
        </VStack>

        </Box>
      </VStack>
    )}
    </>
  )
  
}