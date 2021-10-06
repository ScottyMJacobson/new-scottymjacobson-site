import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import styles from './About.module.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className={`${styles.about} ${styles.center}`}>
      {name && (
        <h1>
          Hi, I am <span className={styles.about__name}>{name}.</span>
        </h1>
      )}

      {role && <h2 className={styles.about__role}>A {role}.</h2>}
      <p className={styles.about__desc}>{description && description}</p>

      <div className={`${styles.about__contact} ${styles.center}`}>
        {resume && (
          <a href={resume}>
            <span type='button' className={`${styles.btn} ${styles['btn--outline']}`}>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className={`${styles.link} ${styles['link--icon']}`}
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className={`${styles.link} ${styles['link--icon']}`}
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
