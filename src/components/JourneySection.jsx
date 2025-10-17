import './JourneySection.css'

function JourneySection() {
  const timelineData = [
    {
      id: 1,
      title: "College / University",
      institution: "Raffles for Higher Education (Kuala Lumpur)",
      side: "right"
    },
    {
      id: 2,
      title: "Higher Secondary Education",
      institution: "Regent International School (Rawang, Selangor)",
      side: "left"
    },
    {
      id: 3,
      title: "Lower Secondary Education",
      institution: "The Demonstration School of Ramkhamhaeng University (Bangkok)",
      side: "right"
    },
    {
      id: 4,
      title: "Upper Primary Education",
      institution: "Jintek School (Bangkok)",
      side: "left"
    },
    {
      id: 5,
      title: "Lower Primary Education",
      institution: "Jintek School (Bangkok)",
      side: "right"
    },
    {
      id: 6,
      title: "Kindergarten",
      institution: "Jintek School (Bangkok)",
      side: "left"
    }
  ]

  return (
    <section id="journey" className="journey-section">
      <div className="journey-container">
        {/* Section Header */}
        <div className="journey-header">
          <h2 className="journey-title">
            <span className="graduation-icon">🎓</span>
            Learning Journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {timelineData.map((item, index) => (
            <div key={item.id} className={`timeline-item ${item.side}`}>
              <div className="timeline-node"></div>
               <div className="timeline-content">
                 <h3 className="timeline-title">{item.title}</h3>
                 <p className="timeline-institution">{item.institution}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JourneySection
