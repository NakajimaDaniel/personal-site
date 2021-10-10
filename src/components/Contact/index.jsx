
import styles from './style.module.scss';

export default function Contact() {
  return (
    <div id="contact">
      <div className={styles.MainContainer}>
        <span># Contact</span>
        <div className={styles.ContactContent}>
          <p>If you have any question, feel free to send me a message! </p>
          <a>Contact Me</a>
          <div className={styles.ContactInfo}>
            <a href="https://github.com/NakajimaDaniel">
              <img src="github_icon.svg" alt="" />
            </a>
            <a href="">
              <img src="linkedin_social_icon.svg" alt="" />
            </a>
          </div>
          <img src="contactImg.svg" alt="" />
          <p>Designed by Daniel N.</p>
        </div>
      </div>
    </div>
  )
}