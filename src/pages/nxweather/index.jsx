
import { Box, Container, Flex, Grid, Image, Text, useColorMode, VStack } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import Head from "next/head";
import ProjectCard from "../../components/ProjectCard";
import { useDimensions } from '../../hooks/useDimensions'
import { PageAnimation } from '../../components/PageAnimation'

export default function NxWeather() {

  const { width } = useDimensions();
  const { colorMode } = useColorMode();


  return (
    <PageAnimation>
    <Container mt="20" maxW="100vw" w="100%">
      <Head>
        <title>Nx Weather</title>
      </Head>
      <Flex direction={"column"} pl={width >= 500 ? "20" : "2"} pr={width >= 500 ? "20" : "2"}>
        
        <Text fontSize={['2xl', '3xl']} fontWeight={"bold"} pb="8" pt="8">
          Nx Weather
        </Text>
          <Flex align="center" justify="center" >
          <Box w={width >= 900 ? "60%" : "100%"} h={width >= 900 ? "60%" : "100%"} >
            <motion.div
              initial={{ scale: 0 }}
              animate={{scale: 1 }}
              transition={{
                ease: "linear",
                duration: 0.3,
                x: { duration: 0.3 }
              }}
            >
              <Image src="/nxweather/nxweather-ss.png" alt="nxweather"  />
            </motion.div>
          </Box>
        </Flex>


        <Text pb="10" pt="2" >
          Nx weather is a simple current and forecast weather web app built with Next.js, TailwindCSS and MongoDB.
        </Text>
        
        <Text fontWeight={"bold"} fontSize={"xl"} pb="2">Tech Stack</Text>
        <Grid templateColumns={width >= 500 ? "repeat(5, 1fr)" : "repeat(3, 1fr)"} gap={4} pb={"8"} >
          <Text>React.js</Text>
          <Text>Next.js</Text>
          <Text>TailWindCSS</Text>
          <Text>MongoDB</Text>
          <Text>REST API</Text>
        </Grid>
        
        <Text fontWeight={"bold"} fontSize={"xl"} pb="8">Project Purpose</Text>
        <Text pb="10">
          This project has 2 main pages and functionalities. The main page is the weather page that show all information from a specific city.
          The search function enable the user to search the city 
          (with autocomplete functionality that prevents the user from enter a city name that do not exist )
        </Text>
        <Text fontWeight={"bold"} fontSize={"xl"} pb="8">Initial Idea</Text>
        <Text pb={"8"}>
          When I first started this project I built with React.js, Next.js and SASS. The search functionality was powered by Algolia search API. 
          The Algolia API worked well, however as a personal project (hobby) the free version has some limitations (For example max number of records). 
          So, this time I decided to rebuild and improving this project with a new stack. 
        </Text>
        <Text fontWeight={"bold"} fontSize={"xl"} pb="8">Stack Definition</Text>
        <Flex direction={width >= 1000 ? "row" : "column"} gap="100px" alignItems={"center"} pb="20" mb="10" >
          <Flex direction={"column"} pb="8" gap={"2"} width={width >= 1000 ? "50%" : "100%"} >
            <Text>
              React and Next made most sense for this application since how commom both tool/framework is used in web development with server side rendering, app routes and others Next.js functionalities. 
            </Text>
            <Text>
              For the styling I switched to Tailwind over SASS. Tailwind received so much improvement since the last time I used, so i tried to use again. 
            </Text>
            <Text>
              For the search funcionality The first thing that come to my mind is to use a database to store the city info and a backend server to connect to database and 
              create a REST API so I can fetch the data based on the city name. 
            </Text>
            <Text>
              Since we are using Next.js, we can use Next api routes so we do not need a backend for the api!
              The implementation that we need is really simple (just retrieve the city name, id and country) so why not use the next.js api?
            </Text>
          </Flex>
          <Image src="/nxweather/nxweather-ss1.png" alt=""  width={width >= 1000 ? "30%" : "60%"} height={width >= 1000 ? "30%" : "60%"} />
        </Flex>

        <Flex direction={width >= 1000 ? "row" : "column"} gap={10} pt="10" pb="20" mb="20" alignItems={"center"}>
          <Image src="/nxweather/nxweather-ss2.png" alt="" width={width >= 1000 ? "50%" : "100%"} height={width >= 1000 ? "50%" : "100%"} borderRadius={10} sx={colorMode === "dark" ? {boxShadow: "6px 6px 2px #20293B"} : {boxShadow: "6px 6px 2px #cccc"}} />
          <Image src="/nxweather/nxweather-ss3.png" alt="" width={width >= 1000 ? "50%" : "100%"} height={width >= 1000 ? "50%" : "100%"} borderRadius={10} sx={colorMode === "dark" ? {boxShadow: "6px 6px 2px #20293B"} : {boxShadow: "6px 6px 2px #cccc"}}/>
        </Flex>
        
        <Text fontWeight={"bold"} fontSize={"xl"} pb="8" >
          See also my other project: 
        </Text>
        <ProjectCard src="/upreport.png" title="Up Report" description="Web application that helps you keep track your expenses. " background="#BEE8FF" href="/upreport"/>

      </Flex>
    </Container>
    </PageAnimation>
  )
}