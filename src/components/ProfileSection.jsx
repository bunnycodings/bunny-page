import './ProfileSection.css'

function ProfileSection() {
  return (
    <div className="profile-section">
      <div className="profile-image">
        <img 
          src="/img/hero/bunny.png" 
          alt="Bunny - Software Developer" 
        />
        <div className="profile-status">
          <span className="status-dot"></span>
          <span className="status-text">Available for projects</span>
        </div>
      </div>
      <h1 className="profile-name">Bunny</h1>
      <p className="profile-title">Freelance Software Developer</p>
      <p className="profile-location">📍 Rawang, Selangor, Malaysia</p>
      
      <div className="profile-stats">
        <div className="stat-item">
          <span className="stat-number">15+</span>
          <span className="stat-label">Projects Completed</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">3+</span>
          <span className="stat-label">Years Experience</span>
        </div>
      </div>

      <div className="social-links">
        <a href="#" className="social-link" title="LinkedIn">
          <span className="linkedin-icon">in</span>
        </a>
        <a href="#" className="social-link" title="GitHub">
          <span className="github-icon">⚡</span>
        </a>
        <a href="#" className="social-link" title="Email">
          <span className="email-icon">✉</span>
        </a>
      </div>
      
      <button className="download-btn">
        <span className="btn-icon">📄</span>
        Download CV/Resume
      </button>
    </div>
  )
}

export default ProfileSection
