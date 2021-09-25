import { Header } from "../Header";
import styles from './projects.module.scss';

import Link from 'next/link';


export default function Projects() {
  return (
    <div id="projects">
   

      <div className={styles.MainContainer}>
        <span> # Personal Projects</span>
        <div className={styles.ProjectsMainWrapper}>

          <img src="projectLeftImg.svg" alt="" />

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
              <div className={styles.ProjectBoxText} >
                <p>Simple weather (current and forecast) app.</p>
                <p>HTML  CSS  Javascript  React</p>
              </div>

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
              <div className={styles.ProjectBoxText}>
                <p> Simple form created with HTML, CSS, JS only. Its possible to register user in database (IndexedDB), show a list of registered users and delete user in database. </p>
                <p> HTML  CSS  Javascript </p>
              </div>

            </div>
            
          </div>

          <img src="projectRightImg.svg" alt="" />
        </div>


        <div className={styles.ProjectsMainWrapper}>

          <img src="projectLeftImg.svg" alt="" />

          <div className={styles.ProjectsContainer}>
            <div className={styles.ProjectBox} >
              <span>LetmeAsk</span>
              <div className={styles.ImgWrapper} >
                <img src="letmeask.png" alt="" />
      
                <div className={styles.ExtLink}>
                  <img src="launch.svg" alt="" />
                  <p>letmeask-kappa-swart.vercel.app</p>
                </div>
                
              </div>
              <div className={styles.ProjectBoxText}>
                <p>Simple app for ask a question</p>
                <p> HTML  CSS  Javascript  ReactJs  Firebase  TailwindCSS </p>
              </div>
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
              <div className={styles.ProjectBoxText}>
                <p> Simple form created with HTML, CSS, JS only. Its possible to register user in database (IndexedDB), show a list of registered users and delete user in database. </p>
                <p> HTML  CSS  Javascript </p>
              </div>

            </div>
            
          </div>

          <img src="projectRightImg.svg" alt="" />
          </div>


      </div>


    </div>
  )
}