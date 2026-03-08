import Link from 'next/link'

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg"></div>
      <div className="hero-line"></div>
      <div className="hero-label">Kreativboutique · Strategie · Execution</div>
      <h1 className="hero-headline">
        Wir denken<br />wie ein <em>Unter-<br />nehmer.</em>
      </h1>
      <div className="hero-sub-row">
        <p className="hero-sub">Ascendry bringt Strategie und Umsetzung zusammen – von CGI und digitalem Marketing bis zum vollständigen Markenauftritt. Kein Agentur-Denken. Echtes Unternehmertum.</p>
        <div className="hero-actions">
          <Link href="#portfolio" className="btn-primary">Unsere Arbeit</Link>
          <Link href="#contact" className="btn-ghost">Gespräch starten <span>→</span></Link>
        </div>
      </div>
      <div className="hero-scroll">Scroll</div>
    </section>
  )
}
