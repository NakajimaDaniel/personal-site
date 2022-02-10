import { Box, Container, Flex, Link, Text } from "@chakra-ui/react";



export default function Custom404() {
  return (
    <Container maxW="100vw" w="100%" mt="20">
      <Box align="center" pt="20" mt="20">
        <Flex direction="column" align="center" justify="center" pt="10">
          <Text pb="10" fontSize={40} fontWeight="bold" >Error 404</Text>
          <Text>Ooww... we haven't found what you are looking for...</Text>
          <Text>Go back <Link href="/" textDecoration="underline">Home</Link> ?</Text>
        </Flex>
      </Box>
    </Container>
  )
}