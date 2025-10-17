import './CertificatesSection.css'

function CertificatesSection() {
  const certificates = [
    {
      id: 1,
      title: "Callsign 9W3SWP",
      description: "Malaysian Communications and Multimedia Commission (MCMC) Radio Operator License",
      image: "/img/cert/mcmc.png",
      alt: "MCMC Radio Operator License"
    },
    {
      id: 2,
      title: "Callsign E26AFI",
      description: "National Broadcasting and Telecommunications Commission (NBTC) Radio Operator License",
      image: "/img/cert/nbtc.png",
      alt: "NBTC Radio Operator License"
    }
  ]

  return (
    <section id="certificates" className="certificates-section">
      <div className="certificates-container">
        {/* Section Header */}
        <div className="certificates-header">
          <h2 className="certificates-title">
            <span className="certificate-icon">🏆</span>
            Certificates
          </h2>
          <p className="certificates-subtitle">
            Radio Operator Licenses and Professional Certifications
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div className="certificate-image-container">
                <img 
                  src={cert.image} 
                  alt={cert.alt}
                  className="certificate-image"
                />
              </div>
              <div className="certificate-content">
                <h3 className="certificate-title">{cert.title}</h3>
                <p className="certificate-description">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* QRZ Links */}
        <div className="qrz-links">
          <h3 className="qrz-title">Visit on QRZ.com</h3>
          <div className="qrz-buttons">
            <a 
              href="https://www.qrz.com/db/9W3SWP" 
              target="_blank" 
              rel="noopener noreferrer"
              className="qrz-link"
            >
              <span className="qrz-icon">📻</span>
              <span>9W3SWP</span>
              <span className="external-icon">↗</span>
            </a>
            <a 
              href="https://www.qrz.com/db/E26AFI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="qrz-link"
            >
              <span className="qrz-icon">📻</span>
              <span>E26AFI</span>
              <span className="external-icon">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CertificatesSection
