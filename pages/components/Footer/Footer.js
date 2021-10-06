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
    <br />
    <br />
    {"Source code available "}
    <a
      href='https://github.com/ScottyMJacobson/new-scottymjacobson-site'
      className={`link ${styles.footer__link}`}
    >
      {" here."}
    </a>
  </footer>
)

export default Footer
