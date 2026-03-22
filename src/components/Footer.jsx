import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <Link href="/" className="footer-logo">
        <Image src="/logo-icon-dark.svg" alt="Ascendry Logo" width={22} height={22} />
        <span>Ascendry</span>
      </Link>
      <div className="footer-copy">© 2026 Ascendry. Alle Rechte vorbehalten.</div>
      <nav className="footer-links" aria-label="Rechtliches">
        <Link href="/impressum">Impressum</Link>
        <Link href="/datenschutz">Datenschutz</Link>
      </nav>
    </footer>
  )
}
