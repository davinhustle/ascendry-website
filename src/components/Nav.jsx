import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  return (
    <nav id="main-nav" aria-label="Hauptnavigation">
      <Link href="/" className="nav-logo">
        <Image src="/logo-icon-dark.svg" alt="Ascendry Logo" width={34} height={34} />
        <span className="nav-wordmark">Ascendry</span>
      </Link>
      <ul className="nav-links" id="primary-navigation">
        <li><Link href="/#about">Über uns</Link></li>
        <li><Link href="/#services">Leistungen</Link></li>
        <li><Link href="/#portfolio">Portfolio</Link></li>
        <li><Link href="/#contact">Kontakt</Link></li>
      </ul>
      <Link href="/#contact" className="nav-cta">Gespräch starten</Link>
      <button
        type="button"
        className="nav-mobile-menu"
        id="mobileMenuBtn"
        aria-label="Navigationsmenü öffnen"
        aria-controls="primary-navigation"
        aria-expanded="false"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  )
}
