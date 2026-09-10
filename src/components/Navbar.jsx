import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`main-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">Syarla A.</div>
      <ul className="nav-links mt-3">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}
