'use client'
import { useEffect } from 'react'

export default function ClientScripts() {
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const ring = document.getElementById('cursorRing')
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const interactiveSelector = 'a, button, input, textarea'
    const interactiveElements = Array.from(document.querySelectorAll(interactiveSelector))
    const cleanupFns = []

    if (finePointer && cursor && ring) {
      const moveCursor = (e) => {
        cursor.style.left = e.clientX + 'px'
        cursor.style.top = e.clientY + 'px'
        window.setTimeout(() => {
          ring.style.left = e.clientX + 'px'
          ring.style.top = e.clientY + 'px'
        }, 80)
      }
      const expandCursor = () => {
        cursor.style.width = '20px'; cursor.style.height = '20px'
        cursor.style.background = 'transparent'
        ring.style.width = '50px'; ring.style.height = '50px'
      }
      const resetCursor = () => {
        cursor.style.width = '10px'; cursor.style.height = '10px'
        cursor.style.background = 'var(--gold)'
        ring.style.width = '36px'; ring.style.height = '36px'
      }

      document.addEventListener('mousemove', moveCursor)
      cleanupFns.push(() => document.removeEventListener('mousemove', moveCursor))

      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', expandCursor)
        el.addEventListener('mouseleave', resetCursor)
        el.addEventListener('focus', expandCursor)
        el.addEventListener('blur', resetCursor)

        cleanupFns.push(() => {
          el.removeEventListener('mouseenter', expandCursor)
          el.removeEventListener('mouseleave', resetCursor)
          el.removeEventListener('focus', expandCursor)
          el.removeEventListener('blur', resetCursor)
        })
      })
    }

    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1 })
    reveals.forEach(el => observer.observe(el))
    cleanupFns.push(() => observer.disconnect())

    const nav = document.getElementById('main-nav')
    const handleScroll = () => {
      if (!nav) return
      if (window.scrollY > 80) {
        nav.style.background = 'rgba(8,8,7,0.97)'
        nav.style.backdropFilter = 'blur(12px)'
      } else {
        nav.style.background = 'linear-gradient(to bottom, rgba(8,8,7,0.95), transparent)'
        nav.style.backdropFilter = 'none'
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    cleanupFns.push(() => window.removeEventListener('scroll', handleScroll))

    const mobileBtn = document.getElementById('mobileMenuBtn')
    const navLinks = document.querySelector('.nav-links')
    const navItems = Array.from(document.querySelectorAll('.nav-links a'))

    const closeMobileMenu = () => {
      if (!mobileBtn || !navLinks) return
      navLinks.classList.remove('nav-links--open')
      mobileBtn.setAttribute('aria-expanded', 'false')
      mobileBtn.setAttribute('aria-label', 'Navigationsmenü öffnen')
    }

    const handleMobileMenu = () => {
      if (!mobileBtn || !navLinks) return
      const isOpen = navLinks.classList.toggle('nav-links--open')
      mobileBtn.setAttribute('aria-expanded', String(isOpen))
      mobileBtn.setAttribute('aria-label', isOpen ? 'Navigationsmenü schließen' : 'Navigationsmenü öffnen')
    }

    const handleResize = () => {
      if (window.innerWidth > 768) closeMobileMenu()
    }

    if (mobileBtn && navLinks) {
      mobileBtn.addEventListener('click', handleMobileMenu)
      cleanupFns.push(() => mobileBtn.removeEventListener('click', handleMobileMenu))
    }

    navItems.forEach((item) => {
      item.addEventListener('click', closeMobileMenu)
      cleanupFns.push(() => item.removeEventListener('click', closeMobileMenu))
    })

    window.addEventListener('resize', handleResize)
    cleanupFns.push(() => window.removeEventListener('resize', handleResize))

    const contactForm = document.getElementById('contactForm')
    const handleContactSubmit = (event) => {
      event.preventDefault()

      const formData = new FormData(event.currentTarget)
      const name = formData.get('name')?.toString().trim() || 'Nicht angegeben'
      const company = formData.get('company')?.toString().trim() || 'Nicht angegeben'
      const email = formData.get('email')?.toString().trim() || 'Nicht angegeben'
      const message = formData.get('message')?.toString().trim() || 'Keine Nachricht angegeben.'
      const body = [
        `Name: ${name}`,
        `Unternehmen: ${company}`,
        `E-Mail: ${email}`,
        '',
        'Projekt:',
        message,
      ].join('\n')

      window.location.href = `mailto:hello@ascendry.de?subject=${encodeURIComponent('Projektanfrage über Ascendry')}&body=${encodeURIComponent(body)}`
    }

    if (contactForm instanceof HTMLFormElement) {
      contactForm.addEventListener('submit', handleContactSubmit)
      cleanupFns.push(() => contactForm.removeEventListener('submit', handleContactSubmit))
    }

    return () => {
      cleanupFns.forEach((cleanup) => cleanup())
    }
  }, [])

  return null
}
