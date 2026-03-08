import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <Image src="/logo-icon-dark.svg" alt="Ascendry" width={22} height={22} />
        Ascendry
      </div>
      <div className="footer-copy">© 2025 Ascendry. Alle Rechte vorbehalten.</div>
      <div className="footer-links">
        <a href="#">Impressum</a>
        <a href="#">Datenschutz</a>
      </div>
    </footer>
  )
}