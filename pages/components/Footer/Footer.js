import styles from './Footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    Forked and Next-ified from Raj Shekhar&apos;s
    <a
      href='https://github.com/rajshekhar26/cleanfolio'
      className={`link ${styles.footer__link}`}
    >
      {" Cleanfolio."}
    </a>
  </footer>
)

export default Footer
