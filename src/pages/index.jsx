
import { Container, Box, Text } from '@chakra-ui/react'

import { motion } from 'framer-motion'


const MotionBox = motion(Box)


export default function Page() {
  return (
    <Container mt="20" maxW="100vw" w="100%">
      <Box pt="20" pl={[4,10,20]}>
        <Text fontSize={['2xl','3xl']}>
          Hi, my name is
        </Text>
        <Text fontSize={["4xl","5xl"]} fontWeight="bold" pb="3">
          Daniel Nakajima !
        </Text>
        <Text fontSize={["xl"]} w={["100%","60%"]}>
          I'm a front end developer passionate about technology, currently looking for new opportunities !
        </Text>
        
      </Box>
    </Container>
  )
}