import React from 'react'
import { experience } from '../../portfolio'
import './Experience.css'

const Experience = () => {
  if (!experience.length) return null

  return (
    <section className='section experience'>
      <h2 className='section__title'>Experience</h2>

      <div className='experience__list'>
        {experience.map((item) => (
          <div key={item.title} className='experience__item'>
            <h3 className='experience__role'>
              {item.title}
              <span className='experience__company'> @ {item.company}</span>
            </h3>
            <p className='experience__date'>{item.date}</p>
            <p className='experience__location'>{item.location}</p>
            <ul className='experience__details'>
              {item.details.map((line) => (
                <li key={`${item.title}-${line}`}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
