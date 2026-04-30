'use client'

import { useEffect, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'

type Props = {
  children: React.ReactNode
}

type ViewTransitionLike = {
  finished: Promise<void>
  updateCallbackDone?: Promise<void>
}

type TransitionDocument = Document & {
  startViewTransition?: (update: () => void | Promise<void>) => ViewTransitionLike
}

function scrollToTopImmediate() {
  if (typeof window === 'undefined') return

  const lenis = window.__lenis
  if (lenis) {
    lenis.scrollTo(0, { immediate: true, force: true })
    return
  }

  window.scrollTo({ top: 0, left: 0 })
}

function isModifiedEvent(event: MouseEvent) {
  return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey
}

export function PageTransition({ children }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const isTransitioningRef = useRef(false)
  const shouldScrollTopRef = useRef(false)

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || isModifiedEvent(event)) {
        return
      }

      const target = event.target as HTMLElement | null
      const anchor = target?.closest('a[href]') as HTMLAnchorElement | null
      if (!anchor) return

      const hrefAttr = anchor.getAttribute('href')
      if (!hrefAttr) return
      if (hrefAttr.startsWith('#')) return
      if (hrefAttr.startsWith('mailto:') || hrefAttr.startsWith('tel:')) return
      if (anchor.hasAttribute('download')) return
      if (anchor.getAttribute('target') === '_blank') return
      if (anchor.dataset.noTransition === 'true') return

      const url = new URL(anchor.href, window.location.href)
      if (url.origin !== window.location.origin) return

      if (url.hash) return

      const nextPath = `${url.pathname}${url.search}${url.hash}`
      const currentPath = `${window.location.pathname}${window.location.search}${window.location.hash}`
      if (nextPath === currentPath || isTransitioningRef.current) return

      event.preventDefault()

      const navigate = () => router.push(nextPath, { scroll: false })
      const doc = document as TransitionDocument

      if (!doc.startViewTransition) {
        navigate()
        scrollToTopImmediate()
        return
      }

      isTransitioningRef.current = true
      shouldScrollTopRef.current = true

      const transition = doc.startViewTransition(() => {
        navigate()
      })

      transition.updateCallbackDone?.then(() => {
        if (shouldScrollTopRef.current) {
          scrollToTopImmediate()
        }
      })

      transition.finished.finally(() => {
        isTransitioningRef.current = false
        shouldScrollTopRef.current = false
      })
    }

    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [router])

  useEffect(() => {
    if (isTransitioningRef.current && shouldScrollTopRef.current) {
      scrollToTopImmediate()
    }
  }, [pathname])

  return <>{children}</>
}
