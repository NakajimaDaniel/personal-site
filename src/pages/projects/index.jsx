

import { Container, Box, Text, Flex, Image, SimpleGrid, useColorMode, Link  } from '@chakra-ui/react'
import { PageAnimation } from '../../components/PageAnimation'

export default function Projects() {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <PageAnimation>
    <Container maxW="100vw" w="100%" mt="20">
      <Box pt="6" pl="10" pb="10">
        <Text fontWeight="bold" fontSize="2xl">
          Personal Projects
        </Text>
      </Box>
      <SimpleGrid columns={[1,1,1,2]} spacing={10} align="center">
        <Flex pt="5" direction="column" w="440" align="center">
          <Text pb="3" fontWeight="semibold" >NX-Weather</Text>
          <Box pb="5">
            <Link  href='https://nx-weather.vercel.app/' isExternal>
              <Image src="nxweather.png" alt="nxweather" w={[440,440,440,440,440, 440,837]} borderRadius={10} /> 
            </Link>
          </Box>
          <Text maxW="440" w="100%" bg={ colorMode === "dark" ? "blue.800" : "white.700" } mb="5" pl="2" pr="2" pt="2" pb="2" borderRadius="5"> 
              A web app for visualizing current and forecast weather. With search function powered by Algolia. 
              Weather data from OpenWeather.
          </Text>
          <Flex direction="row" align="center">
            <Text pr="3" fontWeight="light" >HTML</Text>
            <Text pr="3" fontWeight="light">CSS</Text>
            <Text pr="3" fontWeight="light">Javascript</Text>
            <Text pr="3" fontWeight="light">React</Text>
            <Text fontWeight="light">NextJs</Text>
          </Flex>
        </Flex>

        <Flex pt="5" direction="column" align="center">
          <Text pb="3" fontWeight="semibold">LetMeAsk</Text>
          <Box pb="5">
            <Link href='http://letmeask-kappa-swart.vercel.app/' isExternal>
              <Image src="letmeask.png" alt="letmeask"  w={[440,440,440,440,440,440,837]} /> 
            </Link>
          </Box>
          <Text maxW="440" w="100%" bg={ colorMode === "dark" ? "blue.800" : "white.700" } mb="5" pl="2" pr="2" pt="2" pb="2" borderRadius="5"> 
            Create a room, share and ask questions.  LetMeAsk is a simple web app built using Firebase (realtime database /authentication).

          </Text>
          <Flex direction="row" pb="5">
            <Text pr="3" fontWeight="light" >HTML</Text>
            <Text pr="3" fontWeight="light">CSS</Text>
            <Text pr="3" fontWeight="light">Javascript</Text>
            <Text pr="3" fontWeight="light">React</Text>
            <Text pr="3" fontWeight="light">Firebase</Text>
            <Text fontWeight="light">TailwindCSS</Text>
          </Flex>
        </Flex>

        <Flex pt="5" direction="column" align="center">
          <Text pb="3" fontWeight="semibold">Up Report</Text>
          <Box pb="5">
            <Link href='https://up-report.vercel.app/' isExternal>
              <Image src="upreport.png" alt="upreport"  w={[440,440,440,440,440,440,837]} borderRadius={10} /> 
            </Link>
          </Box>
          <Text maxW="440" w="100%" bg={ colorMode === "dark" ? "blue.800" : "white.700" } mb="5" pl="2" pr="2" pt="2" pb="2" borderRadius="5"> 
            Keep on track on your expenses. Up Report is a web application that help you control your finances.  

          </Text>
          <Flex direction="row" pb="5">
            <Text pr="3" fontWeight="light" >HTML</Text>
            <Text pr="3" fontWeight="light">CSS</Text>
            <Text pr="3" fontWeight="light">Javascript</Text>
            <Text pr="3" fontWeight="light">React</Text>
            <Text pr="3" fontWeight="light">Firebase</Text>
            <Text fontWeight="light">ChakraUI</Text>
          </Flex>
        </Flex>

      </SimpleGrid>

    </Container>
    </PageAnimation>
  )
}