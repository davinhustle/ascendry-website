'use client'
import { useState } from 'react'

const filters = ['Alle', 'CGI', 'Web', 'Branding']

export default function PortfolioFilter() {
  const [active, setActive] = useState('Alle')

  return (
    <div className="portfolio-filter reveal">
      {filters.map(f => (
        <button
          key={f}
          className={`filter-btn ${active === f ? 'active' : ''}`}
          onClick={() => setActive(f)}
        >
          {f}
        </button>
      ))}
    </div>
  )
}
