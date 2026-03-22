'use client'
import { useState } from 'react'

const filters = ['Alle', 'CGI', 'Web', 'Branding']

export default function PortfolioFilter() {
  const [active, setActive] = useState('Alle')

  return (
    <div className="portfolio-filter reveal" role="group" aria-label="Projektfilter">
      {filters.map(f => (
        <button
          type="button"
          key={f}
          className={`filter-btn ${active === f ? 'active' : ''}`}
          aria-pressed={active === f}
          onClick={() => setActive(f)}
        >
          {f}
        </button>
      ))}
    </div>
  )
}
