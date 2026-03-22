import PortfolioFilter from '@/components/PortfolioFilter'

export default function Portfolio() {
  return (
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
              <h3 className="card-title">Vollständiger Markenauftritt & Shop</h3>
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
              <h3 className="card-title">Produktvisualisierung Automotive</h3>
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
              <h3 className="card-title">Content-Strategie & Reels-Produktion</h3>
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
              <h3 className="card-title">Website für lokalen Premium-Betrieb</h3>
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
              <h3 className="card-title">Markenidentität für Start-up</h3>
              <div className="card-desc">Logo, Sprache, visuelle Systeme – vom ersten Tag an.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
