import { useState } from 'react'
import { useScrolled } from '../hooks/useScrolled'

const links = [
  { label: 'Home',     id: 'hero' },
  { label: 'About',    id: 'about' },
  { label: 'Skills',   id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact',  id: 'contact' },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)

  const handleLink = (id: string) => { scrollTo(id); setOpen(false) }

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <button className="navbar__logo" onClick={() => handleLink('hero')}>
          <span className="navbar__dot" />
          Jo.dev
        </button>

        <ul className={`navbar__links${open ? ' open' : ''}`}>
          {links.map(l => (
            <li key={l.id}>
              <button className="navbar__link" onClick={() => handleLink(l.id)}>
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className={`hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="메뉴 열기"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
