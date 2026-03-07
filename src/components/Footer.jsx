export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <svg viewBox="0 0 100 100" fill="none">
          <path d="M50 8 L88 88 H72 L50 38 L28 88 H12 Z" fill="#C9B47A"/>
          <path d="M38 65 H62" stroke="#080807" strokeWidth="10"/>
          <path d="M42 65 L50 48 L58 65" fill="#C9B47A"/>
        </svg>
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