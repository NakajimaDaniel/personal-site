
import styles from './style.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

import {Link as LinkScroll} from 'react-scroll'

export function Header() {



  return (
    <div className={styles.MainContainer}>
      <Link href="/" >
        <img src="logo.svg" alt="logo image" />
      </Link>
      <nav className={styles.HeaderMenu}>
        <LinkScroll to="home" spy={true}  activeClassName={styles.active}>
          <span>Home</span>
        </LinkScroll>
        <LinkScroll to="projects" spy={true}  activeClassName={styles.active} >
          <span>Projects</span>
        </LinkScroll>
        <LinkScroll to="contact" spy={true}  activeClassName={styles.active} >
          <span>Contact</span>
        </LinkScroll>
      </nav>
    </div>
  )


}