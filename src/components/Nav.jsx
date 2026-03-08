import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  return (
    <nav id="main-nav">
      <Link href="#" className="nav-logo">
        <Image src="/logo-icon-dark.svg" alt="Ascendry" width={34} height={34} />
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