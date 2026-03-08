export default function Contact() {
  return (
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
  )
}
