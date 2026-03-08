import Image from 'next/image'

export default function About() {
  return (
    <section id="about">
      <div className="section-inner">
        <div className="section-tag reveal">Wer wir sind</div>
        <div className="about-grid">
          <div className="about-left">
            <h2 className="reveal">Aus einer <em>Idee</em><br />wurde ein<br />Unternehmen.</h2>
            <p className="about-text reveal reveal-delay-1">Als wir Ascendry im Jahr 2024 gründeten – jeder von uns gerade mal 19 Jahre alt – starteten wir mit einem Fokus auf 3D-Druck und Print-on-Demand-Produkte für Autofans. Die Vision war da, der Weg noch unklar.</p>
            <p className="about-text reveal reveal-delay-2">Ein Gespräch mit einem unserer ersten Kunden stellte alles auf den Kopf. Statt einzelner Produkte wollten wir echten unternehmerischen Mehrwert schaffen. Heute helfen wir Unternehmen – vom lokalen Betrieb bis zur wachsenden Marke – beim Schritt in die digitale Welt.</p>
            <div className="about-stats reveal reveal-delay-3">
              <div className="stat"><div className="stat-num">3</div><div className="stat-label">Gründer mit Vision</div></div>
              <div className="stat"><div className="stat-num">100%</div><div className="stat-label">Unternehmerisch</div></div>
              <div className="stat"><div className="stat-num">4</div><div className="stat-label">Leistungsbereiche</div></div>
              <div className="stat"><div className="stat-num">∞</div><div className="stat-label">Commitment</div></div>
            </div>
          </div>
          <div className="about-right">
            <Image src="/team.jpg" alt="Ascendry Team" width={600} height={400} style={{width:'100%', height:'auto', marginBottom:'48px'}} />
            <div className="about-quote reveal">
              <p>„Wir liefern keine Dienstleistung. Wir schaffen Wachstum."</p>
            </div>
            <div className="about-pillars reveal reveal-delay-1">
              {[
                { name: 'Social Media Management', href: '#service-social' },
                { name: 'Websites & Onlineshops', href: '#service-web' },
                { name: 'Onlineshop & E-Commerce', href: '#service-onlineshop' },
                { name: 'Markeninszenierung', href: '#service-cgi' },
              ].map(({ name, href }) => (
                <a className="pillar" key={name} href={href} style={{cursor:'pointer'}}>
                  <span className="pillar-name">{name}</span>
                  <span className="pillar-icon">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
