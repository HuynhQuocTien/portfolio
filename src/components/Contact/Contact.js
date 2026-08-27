import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Get In Touch</h2>
      <p className='contact__desc'>
        I am actively seeking Full-Stack / Backend Developer opportunities.
        Whether you have an inquiry, a project collaboration in mind, or just
        want to connect, my inbox is always open!
      </p>
      <div className='contact__actions center'>
        <a href={`mailto:${contact.email}`}>
          <span type='button' className='btn btn--outline'>
            Email Me
          </span>
        </a>
      </div>
    </section>
  )
}

export default Contact
