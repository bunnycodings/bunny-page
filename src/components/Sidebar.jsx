import Navigation from './Navigation'
import ProfileSection from './ProfileSection'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar">
      <Navigation />
      <ProfileSection />
      <div className="copyright">
        © 2025 All rights reserved.
      </div>
    </div>
  )
}

export default Sidebar
