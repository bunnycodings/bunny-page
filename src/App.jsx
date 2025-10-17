import { useEffect } from 'react'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import AboutSection from './components/AboutSection'
import JourneySection from './components/JourneySection'
import CertificatesSection from './components/CertificatesSection'
import ContactSection from './components/ContactSection'
import { addProtection } from './utils/Protection'
import './App.css'

function App() {
  useEffect(() => {
    addProtection();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <MainContent />
      <AboutSection />
      <JourneySection />
      <CertificatesSection />
      <ContactSection />
    </div>
  )
}

export default App
