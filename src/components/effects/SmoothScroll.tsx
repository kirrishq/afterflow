'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

declare global {
  interface Window {
    __lenis?: Lenis
  }
}

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const isTouch = window.matchMedia('(pointer: coarse)').matches

    const lenis = new Lenis({
      autoRaf: false,
      smoothWheel: true,
      syncTouch: true,
      wheelMultiplier: isTouch ? 1 : 0.92,
      touchMultiplier: 1,
      lerp: isTouch ? 0.1 : 0.085,
      duration: isTouch ? 0.95 : 1.1,
    })

    window.__lenis = lenis

    const onScroll = () => ScrollTrigger.update()
    lenis.on('scroll', onScroll)

    const raf = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(raf)

    return () => {
      gsap.ticker.remove(raf)
      lenis.off('scroll', onScroll)
      lenis.destroy()
      if (window.__lenis === lenis) {
        delete window.__lenis
      }
    }
  }, [])

  return null
}
