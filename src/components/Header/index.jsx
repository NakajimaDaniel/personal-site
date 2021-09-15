
import styles from './style.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ActiveLink } from '../ActiveLink'


export function Header() {



  return (
    <div className={styles.MainContainer}>
      <Link href="/" >
        <img src="logo.svg" alt="logo image" />
      </Link>
      <nav className={styles.HeaderMenu}>
        <ActiveLink href="/" activeClassName={styles.active}>
          <span>Home</span>
        </ActiveLink>
        <ActiveLink href="/projects" activeClassName={styles.active} prefetch>
          <span>Projects</span>
        </ActiveLink>
        <ActiveLink href="/contact" activeClassName={styles.active} prefetch>
          <span>Contact</span>
        </ActiveLink>
      </nav>
    </div>
  )


}