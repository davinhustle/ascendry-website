'use client'
import { useEffect } from 'react'

export default function ClientScripts() {
  useEffect(() => {
    // Custom cursor
    const cursor = document.getElementById('cursor')
    const ring = document.getElementById('cursorRing')

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
      setTimeout(() => {
        ring.style.left = e.clientX + 'px'
        ring.style.top = e.clientY + 'px'
      }, 80)
    }
    document.addEventListener('mousemove', moveCursor)

    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '20px'; cursor.style.height = '20px'
        cursor.style.background = 'transparent'
        ring.style.width = '50px'; ring.style.height = '50px'
      })
      el.addEventListener('mouseleave', () => {
        cursor.style.width = '10px'; cursor.style.height = '10px'
        cursor.style.background = 'var(--gold)'
        ring.style.width = '36px'; ring.style.height = '36px'
      })
    })

    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1 })
    reveals.forEach(el => observer.observe(el))

    // Nav scroll effect
    const nav = document.getElementById('main-nav')
    const handleScroll = () => {
      if (window.scrollY > 80) {
        nav.style.background = 'rgba(8,8,7,0.97)'
        nav.style.backdropFilter = 'blur(12px)'
      } else {
        nav.style.background = 'linear-gradient(to bottom, rgba(8,8,7,0.95), transparent)'
        nav.style.backdropFilter = 'none'
      }
    }
    window.addEventListener('scroll', handleScroll)

    // Cleanup on unmount
    return () => {
      document.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return null
}