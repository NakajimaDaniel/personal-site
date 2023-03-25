
import { Box, Container, Flex, Image, Text, useColorMode, VStack } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import ProjectCard from "../../components/ProjectCard";
import { useDimensions } from '../../hooks/useDimensions'


export default function UpReport() {

  const { width } = useDimensions();
  const { colorMode } = useColorMode();


  return (
    <Container mt="20" maxW="100vw" w="100%">
      <Flex direction={"column"} pl={width >= 500 ? "10" : "2"} pr={width >= 500 ? "10" : "2"}>
        
        <Text fontSize={['2xl', '3xl']} fontWeight={"bold"} pb="8" pt="8">
          Up Report
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
              <Image src="upreport.png" alt="upreport"  />
            </motion.div>
          </Box>
        </Flex>


        <Text pb="10" pt="2" >
          Up Report is a web application built with React, Next, ChrakraUI and Firebase. 
        </Text>
        
        <Text fontWeight={"bold"} fontSize={"xl"} pb="2">Tech Stack</Text>
        <Flex gap="10" pb="10"  >
          <Text>React.js</Text>
          <Text>Next.js</Text>
          <Text>Firebase</Text>
          <Text>ChakraUI</Text>
          <Text>Vercel</Text>
        </Flex>
        
        <Text fontWeight={"bold"} fontSize={"xl"} pb="8" >Motivation and Purpose</Text>
        <Text pb="10">
          The reason I started this project is to help manage and control all my expenses and make it easier to keep track all my transactions. 
        </Text>
        <Text fontWeight={"bold"} fontSize={"xl"} pb="8">Funcionality</Text>
        <Flex direction={width >= 900 ? "row" : "column"} gap={width >=900 ? "10%" : 0} >
          <Flex direction="column" pb="8" w={width >= 900 ? "40%" : "100%"}  gap={"5"}>
            <Text>
              Up Report has 3 main pages. The first page is the home page of the app. 
              The page contains the current month balance (positive and negative), your latest expenses and total expense by category. 
            </Text>
            <Text>
              The overview page contains a bar graphic of all months and you can see the total balance of the month by hover the mouse in the bar graph or in the table below. 
            </Text>
            <Text>
              The last functionality is the transactions page. In the transactions page you can register the transaction (positive or negative), 
              select the category and insert the name and the value. Also, you can register the category in “Register New Category”. 
              All the fields has validations if its empty, not select or already exists (Category). 
            </Text>
          </Flex>
          <Image src="/upreport/upreport-ss.png" alt="" pb="8" w={width >= 900 ? "50%" : "100%"} h={width >= 900 ? "50%" : "100%"} mt={width >= 900 ? "10" : "0"} />
        </Flex>

        <Text fontWeight={"bold"} fontSize={"xl"} pb="8">Challenges and Things I learned</Text>
        <Flex direction={width >= 900 ? "row" : "column"} gap={width >= 900 ? "10%" : 0} >
          <Flex direction="column" pb="8" w={width >= 900 ? "40%" : "100%"} gap={"5"} >
            <Text>
              When I started this project, one the challenges I face is a way to save all the 
              information and at same time enable the data to be accessible in every type of devices. 
            </Text>
            <Text>
              One the easiest way to setup a database that fits the project needs is using Firebase Realtime database. 
            </Text>
            <Text>
              Using Firebase database is kinda a challenge for me because its my first time using No relational (NoSQL) database. 
              To overcome this, I created a simple structure for the database: 
            </Text>
          </Flex>
          <Image src={colorMode == "dark" ? "/upreport/upreport-ss2.png" : "/upreport/upreport-ss1.png"} alt="" w={width >= 900 ? "18%": "25%"} h={width >= 900 ? "18%": "25%"} pb="8" pl={width >= 700 ? "10" : 0} mt={width >=900 ?"10" : 0} align="center" />          
      
        </Flex>
        <Text pb="10">
          I asked myself what's the necessary information I need for my project functionalities. So I ended up with above database structure. 
          Understand the NoSQL structure, my projects needs and put down in a schema truly helps overcome this challenge. 
        </Text>
        
        <Text fontWeight={"bold"} fontSize={"xl"} pb="8" >
          See also my other project: 
        </Text>
        <ProjectCard src="/nxweather.png" title="Nx Weather" description="Simple weather (current and forecast) web app. " background="#F5F5F5" href="/nxweather"/>

      </Flex>
    </Container>
  )
}