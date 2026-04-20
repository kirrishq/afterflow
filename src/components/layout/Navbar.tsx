'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo, useState } from 'react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Button } from '@/components/ui/Button'

type NavItem = {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Главная', href: '/' },
  { label: 'Проекты', href: '/work' },
  { label: 'Услуги', href: '/services' },
  { label: 'О нас', href: '/about' },
]

function BurgerButton({
  isOpen,
  onClick,
}: {
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      className="navbar__burger"
      onClick={onClick}
      aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
      aria-expanded={isOpen}
    >
      <span className={`navbar__burger-line ${isOpen ? 'is-open' : ''}`} />
      <span className={`navbar__burger-line ${isOpen ? 'is-open' : ''}`} />
      <span className={`navbar__burger-line ${isOpen ? 'is-open' : ''}`} />
    </button>
  )
}

function MobileMenu({
  isOpen,
  onClose,
  pathname,
}: {
  isOpen: boolean
  onClose: () => void
  pathname: string
}) {
  return (
    <div className={`mobile-menu ${isOpen ? 'is-open' : ''}`}>
      <button
        type="button"
        className={`mobile-menu__backdrop ${isOpen ? 'is-open' : ''}`}
        onClick={onClose}
        aria-label="Закрыть меню"
      />

      <div className={`mobile-menu__panel ${isOpen ? 'is-open' : ''}`}>

        <nav className="mobile-menu__nav">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`mobile-menu__link ${isActive ? 'is-active' : ''}`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="mobile-menu__footer">
          <Button variant="secondary" withDot>
            Связаться
          </Button>
        </div>
      </div>
    </div>
  )
}

export function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isHome = pathname === '/'

  const logoText = useMemo(() => {
    return isHome ? 'Afterflow' : 'Afterflow Studio'
  }, [isHome])

  return (
    <>
      <header className="navbar">
        <div className="navbar__inner">
          <div className="navbar__left">
            <Link href="/" className="navbar__logo" aria-label="На главную">
              <span className="navbar__logo-text">{logoText}</span>
            </Link>

            <nav className="navbar__nav" aria-label="Main Nav">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`navbar__link ${isActive ? 'is-active' : ''}`}
                  >
                    <span className="navbar__link-text">{item.label}</span>
                    <span className="navbar__link-line" />
                  </Link>
                )
              })}
            </nav>
          </div>

          <div className="navbar__right">
            <ThemeToggle />

            <div className="navbar__desktop-action">
              <Button variant="primary" withDot>
                Связаться
              </Button>
            </div>

            <div className="navbar__mobile-toggle">
              <BurgerButton
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              />
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        pathname={pathname}
      />
    </>
  )
}