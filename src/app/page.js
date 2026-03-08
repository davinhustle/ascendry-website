import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="divider"></div>
      <About />
      <div className="divider"></div>
      <Services />
      <div className="divider"></div>
      <Portfolio />
      <div className="divider"></div>
      <Contact />
    </main>
  )
}
