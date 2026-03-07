import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ClientScripts from '@/components/ClientScripts'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
})

export const metadata = {
  title: 'Ascendry – We Think. You Grow.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={`${cormorant.variable} ${dmSans.variable}`}>
        <div className="cursor" id="cursor"></div>
        <div className="cursor-ring" id="cursorRing"></div>
        <Nav />
        {children}
        <Footer />
        <ClientScripts />
      </body>
    </html>
  )
}