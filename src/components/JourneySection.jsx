import './JourneySection.css'

function JourneySection() {
  const timelineData = [
    {
      id: 1,
      title: "Higher Education",
      institution: "Raffles for Higher Education",
      location: "Kuala Lumpur, Malaysia",
      period: "2022 - Present",
      description: "Pursuing advanced studies in technology and software development, focusing on modern programming languages and industry best practices.",
      icon: "🎓",
      side: "right"
    },
    {
      id: 2,
      title: "Higher Secondary Education",
      institution: "Regent International School",
      location: "Rawang, Selangor, Malaysia",
      period: "2018 - 2022",
      description: "Completed A-Levels with focus on Mathematics, Physics, and Computer Science. Developed strong analytical and problem-solving skills.",
      icon: "📚",
      side: "left"
    },
    {
      id: 3,
      title: "Secondary Education",
      institution: "The Demonstration School of Ramkhamhaeng University",
      location: "Bangkok, Thailand",
      period: "2014 - 2018",
      description: "Completed secondary education with excellent academic performance. Participated in various extracurricular activities and leadership programs.",
      icon: "🏫",
      side: "right"
    },
    {
      id: 4,
      title: "Primary Education",
      institution: "Jintek School",
      location: "Bangkok, Thailand",
      period: "2008 - 2014",
      description: "Completed primary education with strong foundation in core subjects. Developed early interest in technology and programming.",
      icon: "✏️",
      side: "left"
    },
    {
      id: 5,
      title: "Early Education",
      institution: "Jintek School",
      location: "Bangkok, Thailand",
      period: "2006 - 2008",
      description: "Early childhood education focusing on fundamental learning skills and social development.",
      icon: "🌟",
      side: "right"
    }
  ]

  return (
    <section id="journey" className="journey-section">
      <div className="journey-container">
        {/* Section Header */}
        <div className="journey-header">
          <h2 className="journey-title">
            <span className="graduation-icon">🎓</span>
            Educational Journey
          </h2>
          <p className="journey-subtitle">
            A comprehensive overview of my academic progression and learning milestones
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {timelineData.map((item, index) => (
            <div key={item.id} className={`timeline-item ${item.side}`}>
              <div className="timeline-node">
                <span className="timeline-icon">{item.icon}</span>
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{item.title}</h3>
                  <span className="timeline-period">{item.period}</span>
                </div>
                <h4 className="timeline-institution">{item.institution}</h4>
                <p className="timeline-location">{item.location}</p>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JourneySection
