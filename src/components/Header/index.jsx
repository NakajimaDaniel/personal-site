
import Link from 'next/link';
import { useDimensions } from '../../hooks/useDimensions';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Container, Box, Flex, Spacer, Image, Button, useColorMode, Menu, MenuButton, IconButton, MenuList, MenuItem, Icon } from '@chakra-ui/react';
import { IoMdClose } from 'react-icons/io';
import { ClientOnly } from '../ClientOnly';

export function Header() {

  const { colorMode, toggleColorMode } = useColorMode();
  const { width } = useDimensions();

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
              <Link href="/projects">Projects</Link>
            </Box>
            <Box pr={[15, 15, 20, 20, 20]} _hover={{ color: "#FFE072" }} sx={{ 'transition': '0.3s' }} fontSize={[15, 15, 16]}>
              <Link href="/blog">Blog</Link>
            </Box>
            <Box pr={[10, 10, 10, 20, 50]} _hover={{ color: "#FFE072" }} sx={{ 'transition': '0.3s' }} fontSize={[15, 15, 16]}>
              <Link href="/contact">Contact</Link>
            </Box>
            <Box pr="10">
              <Button onClick={toggleColorMode}>
                {colorMode === "dark" ? (
                  <Image src={"/" + "lightmode.svg"} alt="moon logo" />
                ) : (
                  <Image src={"/" + "darkmode.svg"} alt="sun logo" />
                )}
              </Button>
            </Box>

          </>
        ) : (
          <>
            <Box pr="7">
              <Button onClick={toggleColorMode}>
                {colorMode === "dark" ? (
                  <Image src={"/" + "lightmode.svg"} alt="moon logo" />
                ) : (
                  <Image src={"/" + "darkmode.svg"} alt="sun logo" />
                )}
              </Button>
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
                      <Link href="/projects" passHref>
                        <MenuItem>Projects</MenuItem>
                      </Link>
                      <Link href="/blog" replace passHref>
                        <MenuItem>Blog</MenuItem>
                      </Link>
                      <Link href="/contact" passHref>
                        <MenuItem>Contact</MenuItem>
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