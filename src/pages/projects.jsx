import { Header } from "../components/Header";
import styles from './projects.module.scss';

import Link from 'next/link';


export default function Projects() {
  return (
    <div>
      <Header />

      <div className={styles.MainContainer}>
        <h1>Personal Projects</h1>

        <div className={styles.ProjectsContainer}>
          <div className={styles.ProjectBox} >
            <span>NX-Weather</span>
            <div className={styles.ImgWrapper} >
              <img src="nxweather1.png" alt="" />
    
              <div className={styles.ExtLink}>
                <img src="launch.svg" alt="" />
                <p>nx-weather.vercel.app</p>
              </div>
              
            </div>
            <p>Simple weather (current and forecast) app.</p>
            <p>HTML | CSS | Javascript | React</p>
          </div>

          <div className={styles.ProjectBox} >
            <span>Simple Form</span>
            <div className={styles.ImgWrapper} >
              <img src="simpleform.png" alt="" />
    
              <div className={styles.ExtLink}>
                <img src="launch.svg" alt="" />
                <p>simple-form-mu.vercel.app</p>
              </div>
              
            </div>
            <p> Simple form created with HTML, CSS, JS only. Its possible to register user in database (IndexedDB), show a list of registered users and delete user in database. </p>
            <p> HTML | CSS | Javascript </p>
          </div>
          
          <div className={styles.ProjectBox} >
            <span>LetmeAsk</span>
            <div className={styles.ImgWrapper} >
              <img src="letmeask.png" alt="" />
    
              <div className={styles.ExtLink}>
                <img src="launch.svg" alt="" />
                <p>letmeask-kappa-swart.vercel.app</p>
              </div>
              
            </div>
            <p>Simple app for ask a question</p>
            <p> HTML | CSS | Javascript | ReactJs | Firebase | TailwindCSS </p>
          </div>

        </div>




      </div>


    </div>
  )
}