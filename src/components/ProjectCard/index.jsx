import { Box, Flex, Spacer, Text, VStack } from "@chakra-ui/react";
import { motion } from 'framer-motion'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDimensions } from "../../hooks/useDimensions";

export default function ProjectCard({ src, title, description, background, href }) {

  const { width } = useDimensions();
  const router = useRouter();

  function handleOnClick() {
    router.push(href)
  }

  return (
    <Flex direction="column"> 
  
      <Box w={width >= 470 ? "450px" : "350px"} h={width >= 470 ? "350px" : "230px"} bg={background} justifyItems="center" alignItems="center" p="10" mb="5" borderRadius="5" _hover={{ cursor: "pointer" }} onClick={handleOnClick}  >
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ delay: 0.2 }}
        >
          <Image src={src} alt={title} width="450" height="350" />
        </motion.div>
      </Box>
   
    <VStack w={width >= 470 ? "450px" : "350px"} h="140px" alignItems="left">
      <Link href={href} passHref>
        <Text fontWeight="bold" pb="2" fontSize="23px" _hover={{"textDecoration": "underline"}}>
          {title}
        </Text>
      </Link>
      <Text pb="3" fontSize="18px">
        {description}
      </Text>
      <Spacer />
      <Flex _hover={{ cursor: "pointer" }}>
        <Link href={href} passHref>
          <Text pr="6px" _hover={{ textDecoration: "underline" }}>
            Project Details
          </Text>
        </Link>
        <Text>
        ➜
        </Text>
      </Flex>
    </VStack>
  </Flex>
  )
}