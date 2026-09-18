import { useEffect, useState } from 'react'

const menu = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'tentang', label: 'Tentang' },
  { id: 'portofolio', label: 'Portofolio' },
  { id: 'blog', label: 'Blog' },
  { id: 'kontak', label: 'Kontak' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('beranda')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll spy: highlight menu sesuai section yang lagi kelihatan
  useEffect(() => {
    const sections = menu
      .map((m) => document.getElementById(m.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <nav className={`main-nav ${scrolled ? 'scrolled' : ''} ${open ? 'open' : ''}`}>
      <div className="logo">Syarla A.</div>

      <button className="nav-toggle" aria-label="Buka menu" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${open ? 'show' : ''}`}>
        {menu.map((m) => (
          <li key={m.id}>
            <a
              href={`#${m.id}`}
              className={active === m.id ? 'active' : ''}
              onClick={closeMenu}
            >
              {m.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}