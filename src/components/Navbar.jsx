import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'journey', label: 'Journey' },
    { id: 'certificates', label: 'Certificates' }
  ]

  // Handle smooth scrolling
  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean)
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">
          {/* Logo */}
          <div className="logo-box">
            <span className="logo-text">&lt;Bunny./&gt;</span>
          </div>

          {/* Navigation Links */}
          <div className="nav-links">
            {navItems.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <a href="#contact" className="contact-btn" onClick={(e) => handleNavClick(e, 'contact')}>
            Contact
          </a>
        </div>
      </nav>
      <div className="navbar-separator"></div>
    </>
  )
}

export default Navbar
