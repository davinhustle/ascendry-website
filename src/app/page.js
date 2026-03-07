import Link from 'next/link'
import PortfolioFilter from '@/components/Portfolio'

export default function Home() {
  return (
    <main>
      {/* HERO */}
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

      <div className="divider"></div>

      {/* ABOUT */}
      <section id="about">
        <div className="section-inner">
          <div className="section-tag reveal">Über Ascendry</div>
          <div className="about-grid">
            <div className="about-left">
              <h2 className="reveal">Aus einer <em>Idee</em><br />wurde ein<br />Ansatz.</h2>
              <p className="about-text reveal reveal-delay-1">Ascendry entstand aus der Erkenntnis, dass Agenturen Projekte liefern – aber selten mitdenken. Wir sind anders aufgestellt: Wir denken uns in euer Unternehmen rein, verstehen eure Ziele und bauen daran.</p>
              <p className="about-text reveal reveal-delay-2">Ob komplettes All-in-One Paket zur Umsatzmaximierung oder ein einzelnes, präzises Projekt – wir arbeiten mit derselben Ernsthaftigkeit. Keine Kompromisse.</p>
              <div className="about-stats reveal reveal-delay-3">
                <div className="stat"><div className="stat-num">3</div><div className="stat-label">Gründer mit Vision</div></div>
                <div className="stat"><div className="stat-num">100%</div><div className="stat-label">Unternehmerisch</div></div>
                <div className="stat"><div className="stat-num">4</div><div className="stat-label">Leistungsbereiche</div></div>
                <div className="stat"><div className="stat-num">∞</div><div className="stat-label">Commitment</div></div>
              </div>
            </div>
            <div className="about-right">
              <div className="about-quote reveal">
                <p>„Wir liefern keine Dienstleistung. Wir schaffen Wachstum."</p>
              </div>
              <div className="about-pillars reveal reveal-delay-1">
                {['Social Media Management', 'Websites & Onlineshops', 'CGI & 3D-Produktion', 'Markeninszenierung'].map(name => (
                  <div className="pillar" key={name}>
                    <span className="pillar-name">{name}</span>
                    <span className="pillar-icon">↗</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* PORTFOLIO */}
      <section id="portfolio">
        <div className="section-inner">
          <div className="portfolio-header">
            <div>
              <div className="section-tag reveal">Ausgewählte Arbeiten</div>
              <h2 className="reveal">Unsere <em>Projekte</em></h2>
            </div>
            <PortfolioFilter />
          </div>
          <div className="portfolio-grid">
            <div className="portfolio-card wide reveal">
              <div className="card-bg card-pattern-1"></div>
              <div className="card-geo">A</div>
              <div className="card-gradient"></div>
              <span className="card-num">01</span>
              <div className="card-content">
                <div className="card-tag">E-Commerce · Shopify</div>
                <div className="card-title">Vollständiger Markenauftritt & Shop</div>
                <div className="card-desc">Von der Markenentwicklung bis zum conversionoptimierten Onlineshop – alles aus einer Hand.</div>
              </div>
            </div>
            <div className="portfolio-card reveal reveal-delay-1">
              <div className="card-bg card-pattern-2"></div>
              <div className="card-geo">3D</div>
              <div className="card-gradient"></div>
              <span className="card-num">02</span>
              <div className="card-content">
                <div className="card-tag">CGI · 3D-Produktion</div>
                <div className="card-title">Produktvisualisierung Automotive</div>
                <div className="card-desc">High-End CGI Renders für physische Markenartikel.</div>
              </div>
            </div>
            <div className="portfolio-card reveal reveal-delay-1">
              <div className="card-bg card-pattern-3"></div>
              <div className="card-geo">∞</div>
              <div className="card-gradient"></div>
              <span className="card-num">03</span>
              <div className="card-content">
                <div className="card-tag">Social Media · Content</div>
                <div className="card-title">Content-Strategie & Reels-Produktion</div>
                <div className="card-desc">Wachstum durch datengestützte Content-Systeme.</div>
              </div>
            </div>
            <div className="portfolio-card reveal reveal-delay-2">
              <div className="card-bg card-pattern-4"></div>
              <div className="card-geo">W</div>
              <div className="card-gradient"></div>
              <span className="card-num">04</span>
              <div className="card-content">
                <div className="card-tag">Web · UX</div>
                <div className="card-title">Website für lokalen Premium-Betrieb</div>
                <div className="card-desc">Klares Design, starke Conversion, schnelle Ladezeiten.</div>
              </div>
            </div>
            <div className="portfolio-card reveal reveal-delay-2">
              <div className="card-bg card-pattern-1"></div>
              <div className="card-geo">B</div>
              <div className="card-gradient"></div>
              <span className="card-num">05</span>
              <div className="card-content">
                <div className="card-tag">Branding · Identity</div>
                <div className="card-title">Markenidentität für Startup</div>
                <div className="card-desc">Logo, Sprache, visuelle Systeme – vom ersten Tag an.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* CONTACT */}
      <section id="contact">
        <div className="contact-glow"></div>
        <div className="contact-inner">
          <div className="section-tag reveal" style={{justifyContent:'center'}}>Kontakt</div>
          <h2 className="reveal">Bereit zu <em>wachsen?</em></h2>
          <p className="reveal reveal-delay-1">Sagt uns, was ihr aufbaut. Wir sagen euch, wie wir es gemeinsam größer machen.</p>
          <div className="contact-form reveal reveal-delay-2">
            <div className="form-row">
              <div className="form-field"><input type="text" placeholder="Name" /></div>
              <div className="form-field"><input type="text" placeholder="Unternehmen" /></div>
            </div>
            <div className="form-field" style={{marginBottom:'2px'}}><input type="email" placeholder="E-Mail" /></div>
            <div className="form-field" style={{marginBottom:'2px'}}><textarea placeholder="Erzählt uns von eurem Projekt..."></textarea></div>
            <button className="form-submit">Nachricht senden →</button>
          </div>
          <div className="contact-alt reveal reveal-delay-3">
            Lieber direkt? <a href="mailto:hello@ascendry.de">hello@ascendry.de</a>
          </div>
        </div>
      </section>
    </main>
  )
}