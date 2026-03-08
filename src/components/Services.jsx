'use client'
import { useEffect, useRef } from 'react'

const CARD_IDS = ['service-social', 'service-web', 'service-onlineshop', 'service-cgi']

export default function Services() {
  const cardRefs    = useRef({})
  const current     = useRef(null)
  const readyToClear = useRef(false)

  const highlight = (id) => {
    if (current.current) cardRefs.current[current.current]?.classList.remove('service-card--highlighted')
    current.current = id
    if (id) cardRefs.current[id]?.classList.add('service-card--highlighted')
  }

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (CARD_IDS.includes(hash)) {
        readyToClear.current = false
        highlight(hash)
        setTimeout(() => { readyToClear.current = true }, 800)
      }
    }
    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const onLeave = (id) => {
    if (current.current === id && readyToClear.current) highlight(null)
  }

  const setRef = (id) => (el) => { cardRefs.current[id] = el }

  return (
    <section id="services" style={{padding: '160px 0', background: 'var(--dark)'}}>
      <div className="section-inner">
        <div className="section-tag reveal">Was wir machen</div>
        <h2 className="reveal" style={{fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(42px, 5vw, 72px)', fontWeight: 300}}>
          Unsere <em style={{fontStyle: 'italic', color: 'var(--gold)'}}>Leistungen</em>
        </h2>
        <div className="services-grid">
          <div ref={setRef('service-social')} className="service-card reveal reveal-delay-1" id="service-social" onMouseLeave={() => onLeave('service-social')}>
            <div className="service-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8l-5 4V8a2 2 0 0 1 1-1.73"/>
                <circle cx="20" cy="8" r="4" fill="var(--dark)" stroke="var(--gold)" strokeWidth="1.5"/>
                <path d="M20 6v4M18 8h4" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="service-title">Social Media Management</div>
            <div className="service-desc">Wir konzipieren, produzieren und steuern Content, der wirklich performt – mit Fokus auf Reels, Ads und Community-Bindung. Für Marken, die auffallen und im Feed bleiben.</div>
          </div>
          <div ref={setRef('service-web')} className="service-card reveal reveal-delay-2" id="service-web" onMouseLeave={() => onLeave('service-web')}>
            <div className="service-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="5" width="24" height="18" rx="2"/>
                <path d="M2 10h24"/>
                <circle cx="6" cy="7.5" r="0.8" fill="var(--gold)"/>
                <circle cx="9.5" cy="7.5" r="0.8" fill="var(--gold)"/>
                <circle cx="13" cy="7.5" r="0.8" fill="var(--gold)"/>
              </svg>
            </div>
            <div className="service-title">Websites & Onlineshops</div>
            <div className="service-desc">Wir entwickeln performante Websites mit klarem Design, intuitiver UX und optimierter Ladezeit – gebaut für Vertrauen, Wiedererkennung und Conversion.</div>
          </div>
          <div ref={setRef('service-onlineshop')} className="service-card reveal reveal-delay-3" id="service-onlineshop" onMouseLeave={() => onLeave('service-onlineshop')}>
            <div className="service-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3h3l2.4 12h12l2.6-8H8"/>
                <circle cx="11" cy="22" r="1.5"/>
                <circle cx="20" cy="22" r="1.5"/>
              </svg>
            </div>
            <div className="service-title">Onlineshop & E-Commerce</div>
            <div className="service-desc">Conversionstarke Shopify-Setups, smartes UX-Design und technischer Feinschliff – für digitale Verkaufsflächen, die nicht nur funktionieren, sondern verkaufen.</div>
          </div>
          <div ref={setRef('service-cgi')} className="service-card reveal reveal-delay-4" id="service-cgi" onMouseLeave={() => onLeave('service-cgi')}>
            <div className="service-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 3L17 9L23 10L18.5 14.5L19.5 21L14 18L8.5 21L9.5 14.5L5 10L11 9L14 3Z"/>
                <circle cx="14" cy="14" r="2"/>
              </svg>
            </div>
            <div className="service-title">Markeninszenierung</div>
            <div className="service-desc">Wir bauen Marken, die man nicht vergisst. Von der visuellen Identität über CGI-Produktionen bis zur physischen Markenwelt – wir schaffen Wiedererkennung, die verkauft.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
