export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-glow"></div>
      <div className="contact-inner">
        <div className="section-tag reveal" style={{justifyContent:'center'}}>Kontakt</div>
        <h2 className="reveal">Bereit zu <em>wachsen?</em></h2>
        <p className="reveal reveal-delay-1">Sagt uns, was ihr aufbaut. Wir sagen euch, wie wir es gemeinsam größer machen.</p>
        <form className="contact-form reveal reveal-delay-2" id="contactForm">
          <div className="form-row">
            <div className="form-field">
              <label className="sr-only" htmlFor="contact-name">Name</label>
              <input id="contact-name" name="name" type="text" placeholder="Name" autoComplete="name" />
            </div>
            <div className="form-field">
              <label className="sr-only" htmlFor="contact-company">Unternehmen</label>
              <input id="contact-company" name="company" type="text" placeholder="Unternehmen" autoComplete="organization" />
            </div>
          </div>
          <div className="form-field" style={{marginBottom:'2px'}}>
            <label className="sr-only" htmlFor="contact-email">E-Mail</label>
            <input id="contact-email" name="email" type="email" placeholder="E-Mail" autoComplete="email" />
          </div>
          <div className="form-field" style={{marginBottom:'2px'}}>
            <label className="sr-only" htmlFor="contact-message">Projektbeschreibung</label>
            <textarea id="contact-message" name="message" placeholder="Erzählt uns von eurem Projekt..."></textarea>
          </div>
          <button type="submit" className="form-submit">Nachricht senden <span aria-hidden="true">→</span></button>
        </form>
        <div className="contact-alt reveal reveal-delay-3">
          Lieber direkt? <a href="mailto:hello@ascendry.de">hello@ascendry.de</a>
        </div>
      </div>
    </section>
  )
}
