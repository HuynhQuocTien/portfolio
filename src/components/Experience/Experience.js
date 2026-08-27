import React from 'react'
import uniqid from 'uniqid'
import { experience } from '../../portfolio'
import './Experience.css'

const Experience = () => {
  if (!experience || !experience.length) return null

  return (
    <section id='experience' className='section experience'>
      <h2 className='section__title'>Experience</h2>

      <div className='experience__list'>
        {experience.map((item) => (
          <div key={uniqid()} className='experience__item'>
            <h3 className='experience__role'>
              {item.title}
              <span className='experience__company'> @ {item.company}</span>
            </h3>
            <div className='experience__meta'>
              <span className='experience__date'>{item.date}</span>
              {item.location && (
                <span className='experience__location'>• {item.location}</span>
              )}
            </div>
            <ul className='experience__details'>
              {item.details.map((line) => (
                <li key={uniqid()}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
