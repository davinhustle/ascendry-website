import Link from 'next/link'

export default function Nav() {
  return (
    <nav id="main-nav">
      <Link href="#" className="nav-logo">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 8 L88 88 H72 L50 38 L28 88 H12 Z" fill="#C9B47A"/>
          <path d="M38 65 H62" stroke="#080807" strokeWidth="10"/>
          <path d="M42 65 L50 48 L58 65" fill="#C9B47A"/>
        </svg>
        <span className="nav-wordmark">Ascendry</span>
      </Link>
      <ul className="nav-links">
        <li><Link href="#about">Über uns</Link></li>
        <li><Link href="#portfolio">Portfolio</Link></li>
        <li><Link href="#contact">Kontakt</Link></li>
      </ul>
      <Link href="#contact" className="nav-cta">Gespräch starten</Link>
    </nav>
  )
}