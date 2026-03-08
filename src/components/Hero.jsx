import Link from 'next/link'

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg"></div>
      <div className="hero-line"></div>
      <div className="hero-label">Mesmerize · Magnetize · Monetize</div>
      <h1 className="hero-headline">
        Wir denken<br />wie ein <em>Unter-<br />nehmer.</em>
      </h1>
      <div className="hero-sub-row">
        <p className="hero-sub">Asendry ist eine kreativ Boutique für CGI, Content und Weblösungen. Wir gestalten visuelle Systeme, die Marken sichtbar machen, Emotionen wecken und messbare Ergebnisse liefern.</p>
        <div className="hero-actions">
          <Link href="#portfolio" className="btn-primary">Unsere Arbeit</Link>
          <Link href="#contact" className="btn-ghost">Gespräch starten <span>→</span></Link>
        </div>
      </div>
      <div className="hero-scroll">Scroll</div>
    </section>
  )
}
