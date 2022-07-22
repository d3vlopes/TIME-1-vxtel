import styles from './styles.module.scss'
import TwitterIcon from '../../assets/images/twitter.svg'
import InstagramIcon from '../../assets/images/instagram.svg'
import FacebookIcon from '../../assets/images/facebook.svg'

export const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
      <a href="#">
        <img src={InstagramIcon} alt="Instagram" />
      </a>
      <a href="#">
        <img src={TwitterIcon} alt="Twitter" />
      </a>
      <a href="#">
        <img src={FacebookIcon} alt="Facebook" />
      </a>
    </div>
  )
}
