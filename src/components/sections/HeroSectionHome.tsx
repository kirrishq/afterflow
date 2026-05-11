'use client'

import { useEffect, useMemo, useState } from 'react'
import { NeuroBackground } from '../effects/NeuroBackground'
import { Tag } from '../ui/Tag'
import { HeroContactCard } from '../cards/HeroContactCard'

const words = ['Афтэрфлоу эдженси', 'Afterflow agency']

export function HeroSectionHome() {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const currentWord = useMemo(() => words[wordIndex], [wordIndex])

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (media.matches) {
      setDisplayedText('Афтэрфлоу эдженси / Afterflow agency')
      return
    }

    const typingSpeed = isDeleting ? 45 : 85
    const pauseBeforeDelete = 1400
    const pauseBeforeNextWord = 250

    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayedText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseBeforeDelete)
    } else if (isDeleting && displayedText === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
      }, pauseBeforeNextWord)
    } else {
      timeout = setTimeout(() => {
        const nextText = isDeleting
          ? currentWord.slice(0, displayedText.length - 1)
          : currentWord.slice(0, displayedText.length + 1)

        setDisplayedText(nextText)
      }, typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [currentWord, displayedText, isDeleting])

  return (
    <section className='section w-full h-screen'>
      <div className='container flex flex-col justify-end md:pb-0 pb-4'>
        <div className='flex justify-between items-center'>
          <h1 className='heading-hero uppercase hero-typing' aria-label='Афтэрфлоу эдженси / Afterflow agency'>
            {displayedText}
            <span className='hero-caret' aria-hidden='true' />
          </h1>
        </div>

        <div className='home-header_card'>
          <div className='overlay-neuro'></div>
          <NeuroBackground />

          <div className='hidden md:grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-2 md:gap-4 z-2'>
            <Tag label='Дизайн' variant='dark' />
            <Tag label='Разработка' variant='dark' />
            <Tag label='Сайты' variant='dark' />
            <Tag label='Приложения' variant='dark' />
            <Tag label='Автоматизация' variant='dark' />
            <Tag label='Чат-боты' variant='dark' />
          </div>

          <div className='flex flex-col flex-1 md:flex-row justify-between items-start md:items-end gap-4 z-2'>
            <div>
              <p className='heading-lg max-w-xl md:mb-0 mb-6 text-white'>
                Создаем сайты и продукты, которые приводят клиентов и&nbsp;упрощают процессы
              </p>
            </div>
            <HeroContactCard />
          </div>
        </div>
      </div>
    </section>
  )
}