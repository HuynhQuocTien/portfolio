import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills || !skills.length) return null

  const isCategorized = typeof skills[0] === 'object' && skills[0].category

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Technical Skills</h2>

      {isCategorized ? (
        <div className='skills__grid'>
          {skills.map((group) => (
            <div key={uniqid()} className='skills__category'>
              <h3 className='skills__category-title'>{group.category}</h3>
              <ul className='skills__list'>
                {group.items.map((skill) => (
                  <li
                    key={uniqid()}
                    className='skills__list-item btn btn--plain'
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className='skills__list'>
          {skills.map((skill) => (
            <li key={uniqid()} className='skills__list-item btn btn--plain'>
              {skill}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Skills
