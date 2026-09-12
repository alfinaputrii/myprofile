import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <nav
      className={`main-nav ${scrolled ? "scrolled" : ""} ${open ? "open" : ""}`}
    >
      <div className="logo">Syarla A.</div>

      <button
        className="nav-toggle"
        aria-label="Buka menu"
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links mt-3 ${open ? "show" : ""}`}>
        <li>
          <a href="#beranda" onClick={closeMenu}>
            Beranda
          </a>
        </li>
        <li>
          <a href="#tentang" onClick={closeMenu}>
            Tentang
          </a>
        </li>
        <li>
          <a href="#proyek" onClick={closeMenu}>
            Proyek
          </a>
        </li>
        <li>
          <a href="#kontak" onClick={closeMenu}>
            Kontak
          </a>
        </li>
      </ul>
    </nav>
  );
}
