
import Link from 'next/link';
import { useDimensions } from '../../hooks/useDimensions';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Container, Box, Flex, Spacer, Image, Button, useColorMode, Menu, MenuButton, IconButton, MenuList, MenuItem, Icon } from '@chakra-ui/react';
import { IoMdClose } from 'react-icons/io';

export function Header() {

  const { colorMode, toggleColorMode } = useColorMode();
  const { width } = useDimensions();

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
            <Box pr={[15, 15, 20, 20, 20]} _hover={{ color: "#FFE072" }} sx={{ 'transition': '0.3s' }} fontSize={[16, 16, 18]} >
              <Link href="/">Home</Link>
            </Box>
            <Box pr={[15, 15, 20, 20, 20]} _hover={{ color: "#FFE072" }} sx={{ 'transition': '0.3s' }} fontSize={[16, 16, 18]}>
              <Link href="projects">Projects</Link>
            </Box>
            <Box pr={[10, 10, 10, 20, 35]} _hover={{ color: "#FFE072" }} sx={{ 'transition': '0.3s' }} fontSize={[16, 16, 18]}>
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