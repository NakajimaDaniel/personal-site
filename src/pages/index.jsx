
import { Container, Box, Text, Image, Flex, Grid, useColorMode, Spacer, Link, VStack, HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useDimensions } from '../hooks/useDimensions'
import { Icon } from "@chakra-ui/react"

import { AiFillGithub } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"

export default function Page() {

  const { width } = useDimensions();
  const { colorMode } = useColorMode();
  const router = useRouter();

  return (
    <Container mt="20" maxW="100vw" w="100%">
      <Flex direction="column" align="center" >
      <Box pt="20" mb={[15, 20]} >
        <Text fontSize={['2xl', '3xl']}>
          Hi,
        </Text>
        <Text fontSize={["4xl", "5xl"]} fontWeight="bold" pb="3">
          I’ am Daniel ! 
        </Text>
        <Text fontSize={["xl"]}>
          I'm a automation/software developer passionate about technology, 
          currently looking for new opportunities !
        </Text>
        <Image src={colorMode =="dark" ? "separator-dark-mode.png" : "separator-white-mode.png"} alt=""/>
      </Box>

      <Box pt="20" w="100%" mb={[10]} pr={[2]} >
        <Flex pb={[5]} fontSize="23px" fontWeight="bold">
          <Text  pr="2" >
            About me
          </Text>
          <Text color="#FFC700" >
            . . .
          </Text>
        </Flex>
  
        <Flex w="100%" flexDirection="column" justifyItems="center" align="center">
          <Text fontSize={['lg']} pb={[2]} w="95%">
            I'm an Automation Analyst/Digitalization Specialist, and I work on developing web-based interfaces for dosimetry, 
            digitizing reports, implementing MES Systems, and developing and maintaining stored procedures, views, and tables in SQL Server on a daily basis.
          </Text>
          <Flex direction="row" w="95%"> 
            <Text fontSize={['lg']} pb={[2]} pr="5">
              With 5 years of work experience in the Automation Industry, most of my experience involved programming PLCs and HMI/SCADA for OEM machinery, 
              providing assistance and support to customers (both local and remote), and writing manuals and technical documentation.
            </Text>
            <Text fontSize={['lg']} pb={[2]} pl="5">
              I enjoy working with technology, and in 2019, I became particularly interested in software development and programming languages, including Python, JavaScript, HTML, and CSS.
              I enjoy playing video games 🎮 and listening to music 🎧 in my free time! If you have any questions, feel free to get in touch with me.
            </Text>
          </Flex>
        </Flex>
        
      </Box>

      </Flex>

      <Flex pt="20"  w="100%" mb="20" direction="column">
        <Flex direction="row" pb={[5]} mb={[5]} fontSize="23px" fontWeight="bold" >
          <Text >
            Technologies I familiar with
          </Text>
          <Text color="#FFC700">
            :
          </Text>
        </Flex>

        {width >= 870 ?
          <Flex ml={20}>
            <Image src="html.svg" pr={10} alt="html icon" />
            <Image src="css.svg" pr={10} alt="css icon" />
            <Image src="js.svg" pr={10} alt="js icon" />
            <Image src="ts.svg" pr={10} alt="ts icon" />
            <Image src="react.svg" pr={10} alt="react icon" />
            <Image src="figma.svg" pr={10} alt="figma icon" />
          </Flex>
          :
          <Grid templateColumns='repeat(4, 1fr)' justifyItems="center">
            <Image src="html.svg" pb={[10]} alt="html icon" />
            <Image src="css.svg" pb={[10]} alt="css icon" />
            <Image src="js.svg" pb={[10]} alt="js icon" />
            <Image src="ts.svg" pb={[10]} alt="ts icon" />
            <Image src="react.svg" pb={[10]} alt="react icon" />
            <Image src="figma.svg" pb={[10]} alt="figma icon" />
          </Grid>
        }
      </Flex>

      <Flex direction="row" pb={[5]} mb={[5]} fontSize="23px" fontWeight="bold" alignItems="left">
          <Text>
            Take a look some project I have built
          </Text>
          <Text color="#FFC700">
            :
          </Text>
      </Flex>

      <VStack mb="10">
        <Flex direction={width >= 1000 ? "row" : "column"} gap={20}>
          <Flex direction="column"> 
            <Box w={width >= 470 ? "450px" : "350px"} h={width >= 470 ? "330px" : "230px"} bg="#BEE8FF" justifyItems="center" alignItems="center" p="10" mb="5" borderRadius="5" _hover={{ cursor: "pointer" }} >
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ delay: 0.1 }}
              >
                <Image src="upreport.png" alt="upreport" />
              </motion.div>
            </Box>
            <VStack w={width >= 470 ? "450px" : "350px"} h="180px" alignItems="left">
              <Text fontWeight="bold" pb="2" fontSize="23px">
                Up Report
              </Text>
              <Text pb="6" fontSize="18px">
                Web application that helps you keep track your expenses. 
              </Text>
              <Spacer />
              <Flex _hover={{ cursor: "pointer" }}>
                <Text pr="6px" _hover={{ textDecoration: "underline" }}>
                  Project Details
                </Text>
                <Text>
                ➜
                </Text>
              </Flex>
            </VStack>
          </Flex>
          
          <Flex direction="column"> 
            <Box w={width >= 470 ? "450px" : "350px"} h={width >= 470 ? "330px" : "230px"} bg="#F5F5F5" justifyItems="center" alignItems="center" p="10" mb="5" borderRadius="5" _hover={{ cursor: "pointer" }} >
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ delay: 0.1 }}
              >
                <Image src="nxweather.png" alt="upreport" />
              </motion.div>
            </Box>
            <VStack w={width >= 470 ? "450px" : "350px"}  h="180px" alignItems="left">
              <Text fontWeight="bold" pb="2" fontSize="23px" >
                Nx Weather
              </Text>
              <Text pb="6" fontSize="18px">
                Simple weather (current and forecast) web app.
              </Text>
              <Spacer />
              <Flex _hover={{ cursor: "pointer" }} >
                <Text pr="6px" _hover={{ textDecoration: "underline" }}>
                  Project Details
                </Text>

                <Text>
                ➜
                </Text>
              </Flex>
            </VStack>
          </Flex>
        </Flex>
      </VStack>
      
      <Flex direction="column" align="center" justify="center" >
        <Image src={colorMode =="dark" ? "separator-dark-mode.png" : "separator-white-mode.png"} alt="" sx={{transform: 'rotate(180deg)'}} />

        <Flex w={width >= 700 ? "50%" : "100%"} borderRadius="5" bg={ colorMode === "dark" ? "blue.800" : "white.700" } pt="2%" pl="5%" pr="5%" pb="2%" direction="column" align="center" >
          <Text fontWeight="bold" fontSize="19px" pb="5">
            If you have any question, feel free to contact me!
          </Text>

          <Flex align="center" justify="center" >
            <Box
              as="button"
              pb="3"
              pt="3"
              pl="5"
              pr="5"
              bg="#FFC700"
              borderRadius="4"
              _hover={{ bg: "#FFE27A" }}
              onClick={() => router.push("mailto:nakajimadaniel@outlook.com")}
              sx={{ 'transition': '0.3s' }}
            >
              <Text fontWeight="bold" color="#656565" >Send an E-mail</Text>
            </Box>
          </Flex>

          <Flex direction="row" align="center" justify="center" pt="10">
            <Box as="button" mr="10" _hover={{ color: "#FFE27A" }} sx={{ 'transition': '0.3s' }}>
              <Link href="https://github.com/nakajimadaniel">
                <Icon as={AiFillGithub} w={7} h={7} />
              </Link>
            </Box>
            <Box as="button" _hover={{ color: "#FFE27A" }} sx={{ 'transition': '0.3s' }}>
              <Link href="https://www.linkedin.com/in/danielnakajima/">
                <Icon as={FaLinkedinIn} w={7} h={7} />
              </Link>
            </Box>
          </Flex>

        </Flex>



      </Flex>





    </Container >
  )
}