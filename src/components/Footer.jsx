import React from 'react'
import "../App.css"
import { useThemeContext } from "../context/ThemeContext"
import { Link } from 'react-router-dom'
const Footer = () => {
  const { color } = useThemeContext(useThemeContext)
  return (
    <div className='footer' style={{ backgroundColor: color }}>
      <div className="footer-content">
        <h3>Moris Media - Theme Switcher</h3>
        <p>
          This App is Just for testing Purpose to identify the intregration of this application that footer is working fine and if you want to play here
          then click on <Link to="/setting"><button className="FooterButton">SETTING</button></Link>
        </p>
      </div>
      <div className="footer-bottom">
        <p>copyright &copy; <Link to="/">Moris Media - Theme Switcher</Link>  </p>
        <div className="footer-menu">
          <ul className="f-menu">
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/analytics">Analytics</Link></li>
            <li><Link to="/setting">Setting</Link></li>
          </ul>
        </div>
      </div>
    </div>

  )
}
export default Footer
