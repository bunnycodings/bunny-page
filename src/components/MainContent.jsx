import { useEffect, useState } from 'react'
import './MainContent.css'

function MainContent() {
  const [displayText, setDisplayText] = useState('')
  const fullText = '< Aspiring Software Developer />'
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    
    return () => clearInterval(timer)
  }, [])

  return (
    <div id="home" className="main-content">
      <div className="content-container">
        {/* Text Section */}
        <div className="text-section">
          {/* Welcome Badge */}
          <div className="welcome-badge">
            <span className="wave-emoji">👋</span>
            <span className="welcome-text">Hello! Welcome</span>
          </div>

          {/* Main Name */}
          <h1 className="hero-title">Bunny. ₍^. .^₎⟆</h1>

          {/* Title with typing effect */}
          <p className="typing-effect">
            {displayText}
            <span className="cursor">|</span>
          </p>

          {/* Descriptive Text */}
          <div className="description-section">
            <p className="description-text">
              🚀 Dedicated to creating innovation with code and creative ideas
            </p>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="cta-buttons">
            <a href="#projects" className="btn btn-primary">
              <span className="btn-content">
                <span className="target-emoji">🎯</span>
                <span>Explore Work</span>
                <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </span>
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span className="btn-content">
                <span className="chat-emoji">💬</span>
                <span>Contact</span>
                <svg className="chat-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="image-section">
          <div className="image-container">
            <div className="gradient-blur"></div>
            <img 
              src="/img/hero/bunny.png" 
              alt="Yong Zhong Jie" 
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContent
