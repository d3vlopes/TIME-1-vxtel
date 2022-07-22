import { SocialLinks } from 'components/SocialLinks'
import styles from './styles.module.scss'
import { AiFillHeart } from 'react-icons/ai'

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <h2>VxTel</h2>
      <div>
        <SocialLinks />
      </div>
      <div className={styles.footerSmallText}>
        Desenvolvido com <AiFillHeart /> por <strong>Union Group</strong>
      </div>
    </div>
  )
}
