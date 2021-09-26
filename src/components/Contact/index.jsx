
import styles from './style.module.scss';

export default function Contact() {
  return (
    <div id="contact">
      <div className={styles.MainContainer}>
        <span># Contact</span>
        <div className={styles.ContactContent}>
          <p>If you have a question, send me a message. </p>
          <a>Contact Me</a>
          <div className={styles.ContactInfo}>
            <a href="">
              <img src="github_icon.svg" alt="" />
            </a>
            <a href="">
              <img src="linkedin_social_icon.svg" alt="" />
            </a>
          </div>
          <img src="contactImg.svg" alt="" />
          <p>Designed by Daniel</p>
        </div>
      </div>
    </div>
  )
}