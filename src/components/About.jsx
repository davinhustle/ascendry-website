export default function About() {
  return (
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
  )
}
