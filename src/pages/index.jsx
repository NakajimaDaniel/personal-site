import { Header } from "../components/Header";

import styles from './home.module.scss';
import Link from 'next/link';


export default function Home() {
  return (
    <div>
      <Header />

      <div className={styles.HomeContainer}>
        <img src="homeImg.svg" alt="" />

        <div className={styles.HomeTextArea}>
          <h3>Lorem ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Quisque sit amet imperdiet odio, sodales ultricies ipsum. 
            In vel libero vitae nisl maximus convallis nec vel magna. 
          </p>

          <div className={styles.socialLink}>
            <Link href="/" >
              <img src="github_icon.svg" alt="github social link" />
            </Link>
            <Link href="/" >
              <img src="linkedin_social_icon.svg" alt="linkedin social link" />
            </Link>
          </div>

        </div>


      </div>

    </div>
  )
}