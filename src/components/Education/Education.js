import React from 'react'
import uniqid from 'uniqid'
import { education } from '../../portfolio'
import './Education.css'

const Education = () => {
  if (!education || !education.length) return null

  return (
    <section id='education' className='section education'>
      <h2 className='section__title'>Education</h2>

      <div className='education__list'>
        {education.map((item) => (
          <div key={uniqid()} className='education__item'>
            <div className='education__header'>
              <h3 className='education__degree'>{item.degree}</h3>
              <p className='education__school'>{item.school}</p>
            </div>
            <div className='education__meta'>
              <span className='education__date'>{item.date}</span>
              {item.location && (
                <span className='education__location'>• {item.location}</span>
              )}
              {item.gpa && (
                <span className='education__gpa'>• GPA: {item.gpa}</span>
              )}
            </div>
            {item.details && (
              <ul className='education__details'>
                {item.details.map((detail) => (
                  <li key={uniqid()}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
