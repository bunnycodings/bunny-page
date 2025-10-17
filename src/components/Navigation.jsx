import './Navigation.css'

function Navigation() {
  const navItems = [
    { id: 'home', icon: '🏠', label: 'Home', active: true },
    { id: 'about', icon: '👤', label: 'About Me', active: false },
    { id: 'portfolio', icon: '💼', label: 'Portfolio', active: false },
    { id: 'blog', icon: '📖', label: 'Blog', active: false },
    { id: 'contact', icon: '✉️', label: 'Contact', active: false }
  ]

  return (
    <nav className="nav">
      {navItems.map((item) => (
        <div 
          key={item.id} 
          className={`nav-item ${item.active ? 'active' : ''}`}
        >
          <div className="nav-icon">{item.icon}</div>
          <span>{item.label}</span>
        </div>
      ))}
    </nav>
  )
}

export default Navigation
