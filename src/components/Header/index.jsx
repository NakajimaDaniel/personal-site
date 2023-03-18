
import Link from 'next/link';
import { useDimensions } from '../../hooks/useDimensions';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Container, Box, Flex, Spacer, Image, Button, useColorMode, Menu, MenuButton, IconButton, MenuList, MenuItem, Icon } from '@chakra-ui/react';
import { IoMdClose } from 'react-icons/io';
import { ClientOnly } from '../ClientOnly';
import {motion} from 'framer-motion'
import { useState } from 'react';

export function Header() {

  const { colorMode, toggleColorMode } = useColorMode();
  const { width } = useDimensions();

  const [ isDarkMode, setIsDarkMode ] = useState(true);

  function setColorMode() {
    const newColorMode = !isDarkMode;
    setIsDarkMode(newColorMode);
    toggleColorMode();
  }

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  }
  

  return (
    <Container maxW="100vw" w="100%" p="0" bg={colorMode === "dark" ? "blue.transparent" : "white.transparent"} position="fixed" top="0" pt="5" pl="5" pb="3" zIndex={20} backdropFilter="saturate(180%) blur(5px)" >
      <Flex align="center">
        <Box>
          {colorMode === "dark" ? (
            <Link href="/" passHref>
              <Image src={"/" + "logo.svg"} w={["80%", "100%"]} alt="logo" />
            </Link>
          ) : (
            <Link href="/" passHref>
              <Image src={"/" + "logo-dark.svg"} w={["80%", "100%"]} alt="logo" />
            </Link>
          )}

        </Box>
        <Spacer />
        {width >= 900 ? (
          <>
            <Box pr={[15, 15, 20, 20, 20]} _hover={{ color: "#FFE072" }} sx={{ 'transition': '0.3s' }} fontSize={[15, 15, 16]} >
              <Link href="/">Home</Link>
            </Box>

            <Box pr={[15, 15, 20, 20, 20]} _hover={{ color: "#FFE072" }} sx={{ 'transition': '0.3s' }} fontSize={[15, 15, 16]}>
              <Link href="/blog">Blog</Link>
            </Box>

            <Flex w="45px" h="20px" bg={isDarkMode ? "#4380F5" : "#ffffff"} borderRadius={20} alignItems={isDarkMode ? "flex-end" : "flex-start"} direction="column"  onClick={setColorMode} justifyContent="center" mr="10" borderColor={isDarkMode ?  "" : "#D9D9D9"} borderWidth="1px" >
              <motion.div transition={spring} layout >
                <Box w="14px" h="14px" bg={isDarkMode ? "#ffffff" : "#D9D9D9"}  borderRadius={20} position="relative" right={isDarkMode ? "1" : ""} left={isDarkMode ? "" : "1"}  > </Box>
              </motion.div>
            </Flex>

          </>
        ) : (
          <>
            <Box pr="7">
              <Flex w="45px" h="20px" bg={isDarkMode ? "#4380F5" : "#ffffff"} borderRadius={20} alignItems={isDarkMode ? "flex-end" : "flex-start"} direction="column"  onClick={setColorMode} justifyContent="center" mr="10" borderColor={isDarkMode ?  "" : "#D9D9D9"} borderWidth="1px" >
                <motion.div transition={spring} layout >
                  <Box w="14px" h="14px" bg={isDarkMode ? "#ffffff" : "#D9D9D9"}  borderRadius={20} position="relative" right={isDarkMode ? "1" : ""} left={isDarkMode ? "" : "1"}  > </Box>
                </motion.div>
              </Flex>
            </Box>

            <Box pr="5">
              <ClientOnly>
              <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton
                      as={IconButton}
                      icon={isOpen ? <Icon as={IoMdClose} /> : <HamburgerIcon />}
                    />
                    <MenuList>
                      <Link href="/" passHref>
                        <MenuItem>Home</MenuItem>
                      </Link>
                      <Link href="/blog" replace passHref>
                        <MenuItem>Blog</MenuItem>
                      </Link>

                    </MenuList>
                  </>
                )}
              </Menu>
              </ClientOnly>
            </Box>

          </>
        )}

      </Flex>

    </Container>
  )

}