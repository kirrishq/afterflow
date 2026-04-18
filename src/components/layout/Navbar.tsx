'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Об агентсве', href: '/about' },
  { label: 'Проекты', href: '/projects', badge: '3' },
  { label: 'Блог', href: '/blog' },
  { label: 'Контакты', href: '/contact' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md' : ''
        }`}
      >
        <div className="padding-global is-small">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Brand */}
            <div className="flex items-center gap-5">
              <Link href="/" aria-label="Afterflow home">
                <Image
                  src="https://cdn.prod.website-files.com/6840876d4d1ed0e8e2a330b9/68471099e731abf2b2a848de_logo-2.svg"
                  alt="Afterfow logo"
                  width={90}
                  height={28}
                  priority
                />
              </Link>
              <div className="hidden md:flex items-center gap-2 opacity-50">
                <Image
                  src="https://cdn.prod.website-files.com/6840876d4d1ed0e8e2a330b9/6840ad47034f7c5148f8b56b_bar-code-1.svg"
                  alt=""
                  width={28}
                  height={20}
                />
                <span className="text-label text-[10px] text-[#f5f5f0]">Creative Studio</span>
              </div>
            </div>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  badge={link.badge}
                  active={pathname === link.href}
                />
              ))}
            </div>

            {/* Desktop CTA buttons */}
            <div className="hidden md:flex items-center gap-2">
              <a
                href="https://webflow.com/templates/designers/templatesupply"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-[#f5f5f0]"
              >
                <span className="btn-texts">
                  <span className="btn-text-1">Buy template</span>
                  <span className="btn-text-2">Buy template</span>
                </span>
                <span className="btn-dot-wrap"><span className="btn-dot" /></span>
              </a>
              <a
                href="https://www.template.supply/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-[#f5f5f0]"
              >
                <span className="btn-texts">
                  <span className="btn-text-1">More templates</span>
                  <span className="btn-text-2">More templates</span>
                </span>
                <span className="btn-dot-wrap"><span className="btn-dot" /></span>
              </a>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-[5px] p-2 md:hidden"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span
                className={`block w-6 h-[1.5px] bg-[#f5f5f0] transition-all duration-300 origin-center ${
                  menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''
                }`}
              />
              <span
                className={`block w-6 h-[1.5px] bg-[#f5f5f0] transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-[0px]' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Bottom line */}
        <div className="section-line mx-6 md:mx-14" />
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0f0f0f] flex flex-col transition-all duration-500 ease-out-expo ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col justify-between h-full pt-24 pb-10 px-8">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-3xl font-display font-bold py-2 transition-opacity duration-200 ${
                  pathname === link.href ? 'text-[#f5f5f0]' : 'text-[#f5f5f0]/50 hover:text-[#f5f5f0]'
                }`}
              >
                {link.label}
                {link.badge && (
                  <sup className="text-sm ml-1 opacity-60">{link.badge}</sup>
                )}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              {[
                { href: 'https://instagram.com', src: 'https://cdn.prod.website-files.com/6840876d4d1ed0e8e2a330b9/68642b559d94bcc3773fc317_social-insta.svg', label: 'Instagram' },
                { href: 'https://x.com', src: 'https://cdn.prod.website-files.com/6840876d4d1ed0e8e2a330b9/68642b569d94bcc3773fc318_social-x.svg', label: 'X' },
                { href: 'https://dribbble.com', src: 'https://cdn.prod.website-files.com/6840876d4d1ed0e8e2a330b9/686464e5c7256ddd81c074ee_dribble.svg', label: 'Dribbble' },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  <Image src={s.src} alt={s.label} width={22} height={22} />
                </a>
              ))}
            </div>
            <div className="flex gap-4 text-xs text-[#f5f5f0]/40">
              <Link href="/legal/privacy-policy" className="hover:text-[#f5f5f0]/70 transition-colors">Privacy Policy</Link>
              <Link href="/legal/terms-of-use" className="hover:text-[#f5f5f0]/70 transition-colors">Terms of use</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function NavLink({ href, label, badge, active }: {
  href: string; label: string; badge?: string; active: boolean
}) {
  return (
    <Link
      href={href}
      className={`group relative px-3 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 flex items-center gap-1
        ${active ? 'text-[#f5f5f0]' : 'text-[#f5f5f0]/50 hover:text-[#f5f5f0]'}`}
    >
      <span className="relative overflow-hidden h-[1.1em] flex items-center">
        <span className="block transition-transform duration-300 group-hover:-translate-y-full">{label}</span>
        <span className="absolute top-full left-0 block transition-transform duration-300 group-hover:-translate-y-full">{label}</span>
      </span>
      {badge && (
        <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#f5f5f0]/10 text-[10px]">
          {badge}
        </span>
      )}
      {active && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#f5f5f0]" />
      )}
    </Link>
  )
}