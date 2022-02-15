import { Container, Flex, Text, Image, Box } from "@chakra-ui/react";



export function Footer() {
  return (
    <Container mb={5} mt={5}>
      <Flex align="center" flexDir="row">
        <Text pr="1">©  Design with</Text>
        <Image src="heart.svg" />
        <Text pl="1">by Daniel Nakajima. All Rights Reserved.</Text>
      </Flex>
    </Container>
  )
}