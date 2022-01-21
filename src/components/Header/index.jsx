
import Link from 'next/link'

import { useState } from 'react';


import { useDimensions } from '../../hooks/useDimensions';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

import { Container, Box, useColorModeValue, Flex, Spacer, Image, Button, useColorMode, Menu, MenuButton, IconButton, MenuList, MenuItem, Icon } from '@chakra-ui/react';

import { IoMdClose } from 'react-icons/io'

export function Header() {

  const { colorMode, toggleColorMode } = useColorMode();
  const { width, height } = useDimensions();

  return (
    <Container maxW="100vw" w="100%" p="0" bg={colorMode === "dark" ? "blue.transparent" : "white.transparent"} position="fixed" top="0" pt="5" pl="5" pb="3" zIndex={20} backdropFilter="saturate(180%) blur(5px)" >
      <Flex align="center">
        <Box>
          {colorMode === "dark" ? (
            <Image src="logo.svg" w={["80%", "100%"]} />
          ) : (
            <Image src="logo-dark.svg" w={["80%", "100%"]} />
          )}

        </Box>
        <Spacer />
        {width >= 655 ? (
          <>
            <Box pr="5">
              <Link href="/">Home</Link>
            </Box>
            <Box pr="5">
              <Link href="projects">Projects</Link>
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
                {({ isOpen }) => (
                  <>
                    <MenuButton
                      as={IconButton}
                      icon={isOpen ? <Icon as={IoMdClose} /> : <HamburgerIcon />}
                    />
                    <MenuList>
                      <Link href="/">
                        <MenuItem>Home</MenuItem>
                      </Link>
                      <Link href="projects">
                        <MenuItem>Projects</MenuItem>
                      </Link>
                      <Link href="contact">
                        <MenuItem>Contact</MenuItem>
                      </Link>
                    </MenuList>
                  </>
                )}
              </Menu>
            </Box>

          </>
        )}




      </Flex>

    </Container>
  )

}