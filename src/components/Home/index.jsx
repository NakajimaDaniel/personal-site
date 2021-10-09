import styles from './style.module.scss';
import Link from 'next/link';
import { useDimensions } from '../../hooks/useDimensions';


export default function Home() {

  const { width, heigth } = useDimensions();



  return (
    <div id="home">
      {width <= 1100 ? (
        <div className={styles.HomeContainerMobile} >
          
          <div className={styles.HomeTextArea}>
                <h3>Hi, my name is</h3>
                <h4>Daniel !</h4>
                <p>Im a front end developer looking for new oportunities. 
                </p>
      
                <div className={styles.socialLink}>
                  <Link href="https://github.com/NakajimaDaniel" >
                    <img src="github_icon.svg" alt="github social link" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/daniel-akio-nakajima-745319146/" >
                    <img src="linkedin_social_icon.svg" alt="linkedin social link" />
                  </Link>
                </div>
          </div>

          <div  className={styles.mobileImg} >
            <img src="homeImgMobile.svg" alt="" />
            <img src="homeImgRightMobile.svg" alt="" />
          </div>

        </div>
      ) : (
              <div className={styles.HomeContainer}>
              <img src="homeImg.svg" alt="" />
      
              <div className={styles.HomeTextArea}>
                <h3>Hi, my name is</h3>
                <h4>Daniel</h4>
                <p>
                  Im a front end developer looking for new oportunities. 
                </p>
      
                <div className={styles.socialLink}>
                  <Link href="https://github.com/NakajimaDaniel" >
                    <img src="github_icon.svg" alt="github social link" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/daniel-akio-nakajima-745319146/" >
                    <img src="linkedin_social_icon.svg" alt="linkedin social link" />
                  </Link>
                </div>
      
              </div>
              <img src="homeImgRight.svg" alt="" /> 
      
      
            </div>
      )}
    </div>
  )
}