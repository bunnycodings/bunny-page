import './AboutSection.css'

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Main Heading */}
        <div className="section-header">
          <h2 className="section-title">About Me & Skills</h2>
          <p className="section-tagline">
            <span className="star-icon">⭐</span>
            A passionate developer crafting digital experiences with creativity and code
          </p>
        </div>

        <div className="about-content">
          {/* Left Column: My Story */}
          <div className="story-column">
            <h3 className="column-title">My Journey</h3>
            <div className="story-content">
              <div className="story-intro">
                <p>
                  Hello! I'm <strong>Bunny</strong>, a 24-year-old freelance software developer from Malaysia. 
                  My journey into the world of programming began with a simple curiosity about how video games work.
                </p>
              </div>
              
              <div className="story-main">
                <p>
                  What started as wondering "how was this made?" while playing games has evolved into a deep passion 
                  for creating digital solutions. I love the challenge of learning new technologies and the satisfaction 
                  of turning ideas into reality through code.
                </p>
                <p>
                  As a freelancer, I've had the opportunity to work on diverse projects, from web applications to 
                  mobile apps, constantly expanding my skill set and pushing the boundaries of what I can create.
                </p>
              </div>

              <div className="achievements">
                <h4 className="achievements-title">🎯 Key Achievements</h4>
                <ul className="achievements-list">
                  <li>Successfully delivered 15+ freelance projects</li>
                  <li>Built responsive web applications for various industries</li>
                  <li>Developed cross-platform mobile applications</li>
                  <li>Contributed to open-source projects</li>
                </ul>
              </div>

              <div className="personal-details">
                <div className="detail-item">
                  <span className="detail-icon">🎂</span>
                  <span><strong>Birthday:</strong> June 15, 2002</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">📍</span>
                  <span><strong>Location:</strong> Rawang, Selangor, Malaysia</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">💼</span>
                  <span><strong>Status:</strong> Available for freelance projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Skills */}
          <div className="skills-column">
            <h3 className="column-title">Technical Expertise</h3>
            
            {/* Programming Languages */}
            <div className="skill-category">
              <div className="skill-header">
                <span className="skill-icon">💻</span>
                <span className="skill-category-title">Programming Languages</span>
              </div>
              <div className="skill-items">
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">JavaScript</span>
                    <span className="skill-level">Expert</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Python</span>
                    <span className="skill-level">Advanced</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">C#</span>
                    <span className="skill-level">Intermediate</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '70%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">HTML5/CSS3</span>
                    <span className="skill-level">Expert</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '95%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="skill-category">
              <div className="skill-header">
                <span className="skill-icon">🚀</span>
                <span className="skill-category-title">Frameworks & Libraries</span>
              </div>
              <div className="skill-items">
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">React</span>
                    <span className="skill-level">Expert</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Node.js</span>
                    <span className="skill-level">Advanced</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Next.js</span>
                    <span className="skill-level">Advanced</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Flutter</span>
                    <span className="skill-level">Intermediate</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '70%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="skill-category">
              <div className="skill-header">
                <span className="skill-icon">🔧</span>
                <span className="skill-category-title">Tools & Technologies</span>
              </div>
              <div className="skill-tags">
                <span className="skill-tag">Git & GitHub</span>
                <span className="skill-tag">VS Code</span>
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Postman</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Firebase</span>
                <span className="skill-tag">Vercel</span>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="skill-category">
              <div className="skill-header">
                <span className="skill-icon">🌟</span>
                <span className="skill-category-title">Soft Skills</span>
              </div>
              <div className="skill-tags">
                <span className="skill-tag soft-skill">Problem Solving</span>
                <span className="skill-tag soft-skill">Team Collaboration</span>
                <span className="skill-tag soft-skill">Communication</span>
                <span className="skill-tag soft-skill">Time Management</span>
                <span className="skill-tag soft-skill">Adaptability</span>
                <span className="skill-tag soft-skill">Continuous Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
