
import styles from './style.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

import {Link as LinkScroll} from 'react-scroll'
import { useState } from 'react';
import Modal from 'react-modal';

import { useDimensions } from '../../hooks/useDimensions';

export function Header() {


  const [activeHomeLink, setActiveHomeLink] = useState(false);
  const [activeProjectLink, setActiveProjectLink] = useState(false);
  const [activeContactLink, setActiveContactLink] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);


  const { width, heigth } = useDimensions();



  return (
    <div className={styles.MainContainer}>
      <Link href="/" >
        <img src="logo.svg" alt="logo image" />
      </Link>
      { width >= 1000 ? (
        <nav className={styles.HeaderMenu}>
        <LinkScroll to="home" spy={true}  smooth="easeOutQuint"   onSetActive={() => setActiveHomeLink(true)}  onSetInactive={() => setActiveHomeLink(false)} >
          <span className={activeHomeLink ? styles.active : ''} >Home</span>
        </LinkScroll>
        <LinkScroll to="projects" spy={true}  smooth="easeOutQuint"   onSetActive={() => setActiveProjectLink(true)}   onSetInactive={() => setActiveProjectLink(false)} >
          <span className={activeProjectLink ? styles.active : ''} >Projects</span>
        </LinkScroll>
        <LinkScroll to="contact" spy={true}   smooth="easeOutQuint"    onSetActive={() => setActiveContactLink(true)}  onSetInactive={() => setActiveContactLink(false)} >
          <span className={activeContactLink ? styles.active : ''} >Contact</span>
        </LinkScroll>
      </nav>
      ) : (
        <div className={styles.mobileMenu} >
          {isSideBarOpen? (
            <a onClick={() => setIsSideBarOpen(false)}> 
              <img src="menu.svg" alt="" /> 
            </a>
          ) : ( 
          <a onClick={() => setIsSideBarOpen(true)}> 
            <img src="menu.svg" alt="" /> 
          </a>)}
   

          <div className={isSideBarOpen ? styles.sideBarOpen : styles.sideBar}>
            <div className={styles.sideBarContent} >
              <a onClick={() => setIsSideBarOpen(false)}>
                <img src="close.svg" alt="" />
              </a>
              <nav>
                <div>
                  <LinkScroll to="home" spy={true} smooth="easeOutQuint" >
                    <a > Home </a>
                  </LinkScroll>
                  <LinkScroll to="projects" spy={true} smooth="easeOutQuint" >
                    <a > Projects </a>
                  </LinkScroll>
                  <LinkScroll to="contact" spy={true} smooth="easeOutQuint" >
                    <a > Contact </a>
                  </LinkScroll>


                </div>
              </nav>
            </div>
          </div>

        {isSideBarOpen ? (<div className={styles.mobileBackground} onClick={() => setIsSideBarOpen(false)} ></div>) : (<div></div>)}
          

        </div>
      ) }
    </div>
  )


}