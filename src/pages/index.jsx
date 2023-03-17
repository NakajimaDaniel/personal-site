
import { Container, Box, Text, Image, Flex, Grid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useDimensions } from '../hooks/useDimensions'


const MotionBox = motion(Box)


export default function Page() {

  const { width } = useDimensions();

  return (
    <Container mt="20" maxW="100vw" w="100%">
      <Box pt="20" pl={[2, 4, 10, 20]} mb={[15, 20]} >
        <Text fontSize={['2xl', '3xl']}>
          Hi,
        </Text>
        <Text fontSize={["4xl", "5xl"]} fontWeight="bold" pb="3">
          I’ am Daniel ! 
        </Text>
        <Text fontSize={["xl"]} w={["100%", "50%"]}>
          I'm a automation/software developer passionate about technology, currently looking for new opportunities !
        </Text>
        <Image src="separator.png" alt=""/>
      </Box>

      <Box pt="20" pl={[2, 4, 10, 20]} w={["100%"]} mb={[10]} pr={[2]} >
        <Text fontSize={['xl', '2xl']} pb={[5]}>
          About me ...
        </Text>
        <Flex w="100%" flexDirection="column" justifyItems="center">
          <Text fontSize={['lg']} pb={[2]}>
            I'm an Automation Analyst/Digitalization Specialist, and I work on developing web-based interfaces for dosimetry, 
            digitizing reports, implementing MES Systems, and developing and maintaining stored procedures, views, and tables in SQL Server on a daily basis.
          </Text>
          <Text fontSize={['lg']} pb={[2]}>
            With 5 years of work experience in the Automation Industry, most of my experience involved programming PLCs and HMI/SCADA for OEM machinery, 
            providing assistance and support to customers (both local and remote), and writing manuals and technical documentation.
          </Text>
          <Text fontSize={['lg']} pb={[2]}>
            I enjoy working with technology, and in 2019, I became particularly interested in software development and programming languages, including Python, JavaScript, HTML, and CSS.
          </Text>
          <Text fontSize={['lg']} pb={[2]}>
            I enjoy playing video games 🎮 and listening to music 🎧 in my free time! If you have any questions, feel free to get in touch with me.
          </Text>
        </Flex>
      </Box>

      <Box pt="20" pl={width >= 870 ? [2, 4, 10, 20] : 0} w={["100%"]} mb={[20]}>
        <Text fontSize={['xl', '2xl']} pb={[5]} mb={[5]}>
          Technologies I familiar with:
        </Text>
        {width >= 870 ?
          <Flex ml={20}>
            <Image src="html.svg" pr={10} />
            <Image src="css.svg" pr={10} />
            <Image src="js.svg" pr={10} />
            <Image src="ts.svg" pr={10} />
            <Image src="react.svg" pr={10} />
            <Image src="next.svg" pr={10} />
            <Image src="figma.svg" pr={10} />
          </Flex>
          :
          <Grid templateColumns='repeat(4, 1fr)' justifyItems="center">
            <Image src="html.svg" pb={[10]} />
            <Image src="css.svg" pb={[10]} />
            <Image src="js.svg" pb={[10]} />
            <Image src="ts.svg" pb={[10]} />
            <Image src="react.svg" pb={[10]} />
            <Image src="next.svg" pb={[10]} />
            <Image src="figma.svg" pb={[10]} />
          </Grid>
        }
      </Box>

    </Container >
  )
}