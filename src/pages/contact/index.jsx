
import { Icon } from "@chakra-ui/react"
import { AiFillGithub } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"

import { Container, Box, Text, Button, Flex } from "@chakra-ui/react"
import { PageAnimation } from "../../components/PageAnimation"



export default function contact() {
  return (
    <PageAnimation>
    <Container maxW="100vw" w="100%" mt="20">
      <Box align="center" pt="20" mt="20">
        <Text pt="10" pb="10" fontWeight="semibold">Feel free to contact me!</Text>
        <Box 
          as="button"
          pb="3"
          pt="3"
          pl="5"
          pr="5"
          bgGradient={[
            "linear(to-r,rgba(255, 199, 0), #FFE072)",
          ]}
          color="black.900"
          borderRadius="4"
          _hover={{ bg: "#FFE27A" }}
        >
          Contact me
        </Box>
        <Flex direction="row" align="center" justify="center" pt="10">
          <Box as="button" mr="10" _hover={{ color: "#FFE27A" }}>
            <Icon as={AiFillGithub} w={7} h={7} />
          </Box>
          <Box as="button" _hover={{ color: "#FFE27A" }}>
            <Icon as={FaLinkedinIn} w={7} h={7} />
          </Box>
          
        </Flex>
      </Box>
    </Container>
    </PageAnimation>
  )
}