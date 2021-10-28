
// // import styles from './style.module.scss'
// import Link from 'next/link'
// import { useRouter } from 'next/router'

// import {Link as LinkScroll} from 'react-scroll'
import { useState } from 'react';
// import Modal from 'react-modal';



import { useDimensions } from '../../hooks/useDimensions';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

import { Container, Box, useColorModeValue, Flex, Spacer, Image, Button, useColorMode, Menu, MenuButton, IconButton, MenuList, MenuItem } from '@chakra-ui/react';

export function Header() {


  const [activeHomeLink, setActiveHomeLink] = useState(false);
  const [activeProjectLink, setActiveProjectLink] = useState(false);
  const [activeContactLink, setActiveContactLink] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);


  // const { width, heigth } = useDimensions();



  // return (
  //   <div className={styles.MainContainer}>
  //     <Link href="/" >
  //       <img src="logo.svg" alt="logo image" />
  //     </Link>
  //     { width >= 1000 ? (
  //       <nav className={styles.HeaderMenu}>
  //       <LinkScroll to="home" spy={true}  smooth="easeOutQuint"   onSetActive={() => setActiveHomeLink(true)}  onSetInactive={() => setActiveHomeLink(false)} >
  //         <span className={activeHomeLink ? styles.active : ''} >Home</span>
  //       </LinkScroll>
  //       <LinkScroll to="projects" spy={true}  smooth="easeOutQuint"   onSetActive={() => setActiveProjectLink(true)}   onSetInactive={() => setActiveProjectLink(false)} >
  //         <span className={activeProjectLink ? styles.active : ''} >Projects</span>
  //       </LinkScroll>
  //       <LinkScroll to="contact" spy={true}   smooth="easeOutQuint"    onSetActive={() => setActiveContactLink(true)}  onSetInactive={() => setActiveContactLink(false)} >
  //         <span className={activeContactLink ? styles.active : ''} >Contact</span>
  //       </LinkScroll>
  //     </nav>
  //     ) : (
  //       <div className={styles.mobileMenu} >
  //         {isSideBarOpen? (
  //           <a onClick={() => setIsSideBarOpen(false)}> 
  //             <img src="menu.svg" alt="" /> 
  //           </a>
  //         ) : ( 
  //         <a onClick={() => setIsSideBarOpen(true)}> 
  //           <img src="menu.svg" alt="" /> 
  //         </a>)}
   

  //         <div className={isSideBarOpen ? styles.sideBarOpen : styles.sideBar}>
  //           <div className={styles.sideBarContent} >
  //             <a onClick={() => setIsSideBarOpen(false)}>
  //               <img src="close.svg" alt="" />
  //             </a>
  //             <nav>
  //               <div>
  //                 <LinkScroll to="home" spy={true} smooth="easeOutQuint" >
  //                   <a > Home </a>
  //                 </LinkScroll>
  //                 <LinkScroll to="projects" spy={true} smooth="easeOutQuint" >
  //                   <a > Projects </a>
  //                 </LinkScroll>
  //                 <LinkScroll to="contact" spy={true} smooth="easeOutQuint" >
  //                   <a > Contact </a>
  //                 </LinkScroll>


  //               </div>
  //             </nav>
  //           </div>
  //         </div>

  //       {isSideBarOpen ? (<div className={styles.mobileBackground} onClick={() => setIsSideBarOpen(false)} ></div>) : (<div></div>)}
          

  //       </div>
  //     ) }
  //   </div>
  // )

  const { colorMode, toggleColorMode } = useColorMode();
  const { width, height } = useDimensions();

  return (
    <Container maxW="100vw" w="100%" p="0" styles={{filter:  "blur(5px)"}} position="fixed" top="0" pt="5" pl="5">
      <Flex align="center">
        <Box>
          {colorMode === "dark" ? (
            <Image src="logo.svg" />
          ) : (
            <Image src="logo-dark.svg" />
          )}
          
        </Box>
        <Spacer />
        { width >= 655 ? (
          <>
            <Box pr="5">
              Home
            </Box>
            <Box pr="5">
              Projects
            </Box>
            <Box pr="5">
              Posts
            </Box>
            <Box pr="5">
              Contact
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
                      <MenuItem>Home</MenuItem>
                      <MenuItem>Projects</MenuItem>
                      <MenuItem>Posts</MenuItem>
                      <MenuItem>Contact</MenuItem>
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