
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
          Hi, my name is
        </Text>
        <Text fontSize={["4xl", "5xl"]} fontWeight="bold" pb="3">
          Daniel Nakajima !
        </Text>
        <Text fontSize={["xl"]} w={["100%", "60%"]}>
          I'm a front end developer passionate about technology, currently looking for new opportunities !
        </Text>
      </Box>

      <Box pt="20" pl={[2, 4, 10, 20]} w={["100%"]} mb={[10]} pr={[2]} >
        <Text fontSize={['xl', '2xl']} pb={[5]}>
          About me ...
        </Text>
        <Flex w="100%" flexDirection="column" justifyItems="center">
          <Text fontSize={['lg']} pb={[2]}>
            I'm an Automation Technician, working every day mostly in an industrial environment,
            developing systems for machines and user interfaces (HMI) since 2017.
          </Text>
          <Text fontSize={['lg']} pb={[2]}>
            I love working with technology, so in 2019 I get particularly interested in software (web and mobile) development.
          </Text>
          <Text fontSize={['lg']} pb={[2]}>
            Passionate about technology and learning new stuffs, i'm currently looking for web developer position.
          </Text>
          <Text fontSize={['lg']} pb={[2]}>
            I have experience with front end (React) and mobile (React Native) and some basic knowledge in PHP and Elixir (Im currently learning).
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