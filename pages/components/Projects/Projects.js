import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import styles from './Projects.module.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className={`section ${styles.projects}`}>
      <h2 className='section__title'>Projects</h2>

      <div className={styles.projects__grid}>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
