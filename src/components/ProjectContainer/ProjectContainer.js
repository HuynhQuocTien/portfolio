import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const GitLabIcon = () => (
  <svg
    role='img'
    viewBox='0 0 24 24'
    width='22'
    height='22'
    fill='currentColor'
    style={{ display: 'inline-block', verticalAlign: 'middle' }}
  >
    <path d='M23.6 9.58l-1.32-4.06a.83.83 0 0 0-.32-.42.85.85 0 0 0-.54-.15.86.86 0 0 0-.53.18.88.88 0 0 0-.29.43l-1.63 5.01H4.43L2.8 5.56a.88.88 0 0 0-.29-.43.86.86 0 0 0-.53-.18.85.85 0 0 0-.54.15.83.83 0 0 0-.32.42L.4 9.58a1.35 1.35 0 0 0 .49 1.51l11.11 8.07 11.11-8.07c.45-.33.65-.92.49-1.51z' />
  </svg>
)

const ProjectContainer = ({ project }) => {
  const isGitLab =
    project.sourceCode && project.sourceCode.includes('gitlab.com')
  const hasLivePreview =
    project.livePreview &&
    project.livePreview !== '#' &&
    project.livePreview.trim() !== ''

  return (
    <div className='project'>
      <div>
        <h3 className='project__title'>{project.name}</h3>
        <p className='project__description'>{project.description}</p>
      </div>

      <div>
        {project.stack && (
          <ul className='project__stack'>
            {project.stack.map((item) => (
              <li key={uniqid()} className='project__stack-item'>
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className='project__links'>
          {project.sourceCode && (
            <a
              href={project.sourceCode}
              target='_blank'
              rel='noreferrer'
              aria-label={isGitLab ? 'gitlab repository' : 'github repository'}
              className='link link--icon'
            >
              {isGitLab ? <GitLabIcon /> : <GitHubIcon />}
            </a>
          )}

          {hasLivePreview && (
            <a
              href={project.livePreview}
              target='_blank'
              rel='noreferrer'
              aria-label='live preview'
              className='link link--icon'
            >
              <LaunchIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectContainer
