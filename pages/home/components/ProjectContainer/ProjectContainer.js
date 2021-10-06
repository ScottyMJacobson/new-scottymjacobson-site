import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import styles from './ProjectContainer.module.css'

const ProjectContainer = ({ project }) => (
  <div className={styles.project}>
    <h3>{project.name}</h3>

    <p className={styles['project__description']}>{project.description}</p>
    {project.stack && (
      <ul className={styles['project__stack']}>
        {project.stack.map((item) => (
          <li key={uniqid()} className={styles['project__stack-item']}>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default ProjectContainer
