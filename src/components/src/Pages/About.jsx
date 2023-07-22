import React from 'react'
import { useThemeContext } from '../context/ThemeContext'

const About = () => {
  document.title="Moris-Media: About"
  const { color } = useThemeContext(useThemeContext)

  return (
    <div className='text-center headCentral'>
      <div className="card cardHeading">
        <span>
          <b>Our </b> <button className='text-center Doctorsbtn'>
            Digital Doctors
          </button>
        </span>
        <span>
          <b style={{ color: "red" }}>Create,
            Build & Grow
          </b>
        </span>
        <span>
          <b>
            Your Brands <b style={{ color: "red" }}>Digitally</b>
          </b>
        </span>
        <div className="card card-Content" style={{ color: color }}>
          Supercharge your brand with the best Digital Doctors in India who, before implementing any action, scrutinise you and your business.
        </div>
      </div>
    </div>
  )
}
export default About
