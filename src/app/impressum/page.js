export const metadata = {
  title: 'Impressum | Ascendry',
}

export default function ImpressumPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <section className="legal-card">
          <h1>Impressum <em>& Kontakt</em></h1>
          <p>
            Das vollstaendige Impressum fuer Ascendry wird derzeit ergaenzt.
            Bis die finalen Unternehmensdaten eingepflegt sind, erreicht ihr uns unter{' '}
            <a href="mailto:hello@ascendry.de">hello@ascendry.de</a>.
          </p>
          <p>
            Wenn du moechtest, kann ich im naechsten Schritt auch direkt eine
            richtige Impressumsseite mit euren echten Pflichtangaben einbauen.
          </p>
        </section>
      </div>
    </main>
  )
}
