import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import { about } from '../../portfolio'
import './About.css'

const GitLabIcon = () => (
  <svg
    role='img'
    viewBox='0 0 24 24'
    width='24'
    height='24'
    fill='currentColor'
    style={{ display: 'inline-block', verticalAlign: 'middle' }}
  >
    <path d='M23.6 9.58l-1.32-4.06a.83.83 0 0 0-.32-.42.85.85 0 0 0-.54-.15.86.86 0 0 0-.53.18.88.88 0 0 0-.29.43l-1.63 5.01H4.43L2.8 5.56a.88.88 0 0 0-.29-.43.86.86 0 0 0-.53-.18.85.85 0 0 0-.54.15.83.83 0 0 0-.32.42L.4 9.58a1.35 1.35 0 0 0 .49 1.51l11.11 8.07 11.11-8.07c.45-.33.65-.92.49-1.51z' />
  </svg>
)

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>{role}</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume} target='_blank' rel='noreferrer'>
            <span type='button' className='btn btn--outline'>
              Résumé
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                target='_blank'
                rel='noreferrer'
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.gitlab && (
              <a
                href={social.gitlab}
                target='_blank'
                rel='noreferrer'
                aria-label='gitlab'
                className='link link--icon'
              >
                <GitLabIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                target='_blank'
                rel='noreferrer'
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}

            {social.email && (
              <a
                href={`mailto:${social.email}`}
                aria-label='email'
                className='link link--icon'
              >
                <EmailIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
