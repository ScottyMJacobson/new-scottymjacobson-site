import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import styles from './Skills.module.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className={`section ${styles.skills}`} id='skills'>
      <h2 className='section__title'>Skills &amp; Frameworks</h2>
      <ul className={styles.skills__list}>
        {skills.map((skill) => (
          <li key={uniqid()} className={`${styles['skills__list-item']} btn btn--plain`}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
