
import Link from 'next/link'

import { useState } from 'react';


import { useDimensions } from '../../hooks/useDimensions';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

import { Container, Box, useColorModeValue, Flex, Spacer, Image, Button, useColorMode, Menu, MenuButton, IconButton, MenuList, MenuItem } from '@chakra-ui/react';



export function Header() {

  const { colorMode, toggleColorMode } = useColorMode();
  const { width, height } = useDimensions();

  return (
    <Container maxW="100vw" w="100%" p="0" bg={colorMode === "dark" ? "blue.transparent" : "white.transparent" }  position="fixed" top="0" pt="5" pl="5" pb="3" zIndex={20} backdropFilter="saturate(180%) blur(5px)" >
      <Flex align="center">
        <Box>
          {colorMode === "dark" ? (
            <Image src="logo.svg" w={["80%","100%"]} />
          ) : (
            <Image src="logo-dark.svg" w={["80%","100%"]} />
          )}
          
        </Box>
        <Spacer />
        { width >= 655 ? (
          <>
            <Box pr="5">
            <Link href="/">Home</Link>
            </Box>
            <Box pr="5">
            <Link href="projects">Projects</Link>
            </Box>
            <Box pr="5">
              Posts
            </Box>
            <Box pr="5">
              <Link href="contact">Contact</Link>
            </Box>

            <Box pr="10">
              <Button onClick={toggleColorMode}>
                {colorMode === "dark" ? (
                  <Image src="lightmode.svg" />
                ) : (
                  <Image src="darkmode.svg" />
                )}
              </Button>
            </Box>

          </>
        ) : (
          <>
            <Box pr="7">
              <Button onClick={toggleColorMode}>
                {colorMode === "dark" ? (
                  <Image src="lightmode.svg" />
                ) : (
                  <Image src="darkmode.svg" />
                )}
              </Button>
            </Box>

            <Box pr="5">
              <Menu>
                {({isOpen}) => (
                  <>
                    <MenuButton 
                      as={IconButton}
                      icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    /> 
                    <MenuList>
                      <Link href="/">
                      <MenuItem>Home</MenuItem>
                      </Link>
                      <MenuItem>Projects</MenuItem>
                      <MenuItem>Posts</MenuItem>
                      <MenuItem><Link href="contact">Contact</Link></MenuItem>
                    </MenuList>
                  </>
                )}
              </Menu>
            </Box>

          </>
        ) }




      </Flex>

    </Container>
  )

}