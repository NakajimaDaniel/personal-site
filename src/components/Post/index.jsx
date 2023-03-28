/* eslint-disable @next/next/link-passhref */
import { Box, Flex, HStack, Image, Spacer, Text, VStack } from "@chakra-ui/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicImage, PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useDimensions } from "../../hooks/useDimensions";


export function Post({post}) {

  const [hasMounted, setHasMounted] = useState(false);
  const { width } = useDimensions();


  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const options = {
    year: 'numeric', month: 'long', day: 'numeric',

  }

  const postFirstPublicationDate = new Intl.DateTimeFormat('en-us', options).format(new Date(post.publicationDate))

  
  return (
    <>
    {width >= 650 ? (
      <Flex mb="10" direction="row">

        <VStack mr="10" w="30%" >
          <Link href={"/blog/" + post.slug}> 
            <Box>
              <PrismicNextImage field={post.banner} imgixParams={{borderRadius: "20,20,20,20", border: "20,00FFFFFF", borderRadiusInner: "20,20,20,20" }} alt=""/>
            </Box>
          </Link>
        </VStack>

        <Box w="50%">
          <VStack h="200"  alignItems="left">
            <Flex gap="4">
              {post.tags.map((val) => {
                return (
                  <Text key={val} color={"#FFC700"} >{val}</Text>
                )
              })}
            </Flex>
            <Link href={"/blog/" + post.slug}>
              <Text fontWeight="bold" fontSize="xl" _hover={{ textDecoration: "underline" }}>
                <PrismicRichText  field={post.title}/>        
              </Text>
            </Link>
            <Text w="90%">
              {post.excerpt}
            </Text>
            <Spacer />
            <Text fontWeight={"bold"}>Daniel Nakajima</Text>
            <Text>{ postFirstPublicationDate }</Text>
          </VStack>
        </Box>

      </Flex>
    ) : (
      <VStack mb="10">

        <Link href={"/blog/" + post.slug}>
          <Box>
            <PrismicImage field={post.banner} alt=""/>
          </Box>
        </Link>

        <Box pl="5" w="100%">
        <VStack alignItems="left">
        <Flex gap="4">
              {post.tags.map((val) => {
                return (
                  <Text key={val}>{val}</Text>
                )
              })}
        </Flex>
        <Link href={"/blog/" + post.slug} >
          <Text fontWeight="600" fontSize="xl"  _hover={{ textDecoration: "underline" }}>
            <PrismicRichText  field={post.title}/>
          </Text>
        </Link>
        <Text fontWeight={"bold"}>Daniel Nakajima</Text>
        <Text>{ postFirstPublicationDate }</Text>
        </VStack>

        </Box>
      </VStack>
    )}
    </>
  )
  
}