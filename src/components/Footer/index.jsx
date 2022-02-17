import { Container, Flex, Text, Image } from "@chakra-ui/react";

export function Footer() {
  return (
    <Container mb={5} mt={5} w="100%" maxW="100vw" >
      <Flex align="center" flexDir="row" justify="center">
        <Text pr="1" fontSize={[11, 12, 13, 15, 17]} >©  Design with</Text>
        <Image src="heart.svg" />
        <Text pl="1" fontSize={[11, 12, 13, 15, 17]} >by Daniel Nakajima. All Rights Reserved.</Text>
      </Flex>
    </Container>
  )
}