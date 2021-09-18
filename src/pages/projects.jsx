import { Header } from "../components/Header";
import styles from './projects.module.scss';

import Link from 'next/link';


export default function Projects() {
  return (
    <div>
      <Header />

      <div className={styles.MainContainer}>
        <h1>Personal Projects</h1>

        <div className={styles.ProjectBox} >
          <span>NX-Weather</span>
          <div className={styles.ImgWrapper} >
            <img src="nxweather1.png" alt="" />
   
            <div className={styles.ExtLink}>
              <img src="launch.svg" alt="" />
              <p>project.com</p>
            </div>
            
            {/* <div className={styles.ExtLink}>
              <span><img src="launch.svg" alt="" />Teste</span>
            </div> */}

          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>HTML | CSS | Javascript | React</p>
        </div>


      </div>


    </div>
  )
}