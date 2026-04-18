'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="fixed bottom-6 right-6 z-50 rounded-full bg-black px-4 py-3 text-sm text-white shadow-lg"
    >
      {resolvedTheme === 'dark' ? 'Светлая' : 'Тёмная'}
    </button>
  )
}