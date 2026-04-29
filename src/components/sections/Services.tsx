'use client'

import Link from 'next/link'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Button } from '../ui/Button'

gsap.registerPlugin(ScrollTrigger)

type ServiceItem = {
  title: string
  href: string
  imageSrc: string
  imageAlt: string
  tags: string[]
}

const services: ServiceItem[] = [
  {
    title: 'Дизайн',
    href: '/services/design',
    imageSrc: '/assets/projects/ultracore/ultracore-thumbnail.png',
    imageAlt: 'Дизайн',
    tags: ['UX/UI', 'Брендинг', 'Лендинги'],
  },
  {
    title: 'Разработка',
    href: '/services/development',
    imageSrc: '/assets/projects/ultracore/ultracore-thumbnail.png',
    imageAlt: 'Разработка',
    tags: ['Next.js', 'Webflow', 'Адаптив'],
  },
  {
    title: 'Автоматизация',
    href: '/services/automatisation',
    imageSrc: '/assets/projects/ultracore/ultracore-thumbnail.png',
    imageAlt: 'Автоматизация',
    tags: ['CRM', 'Интеграции', 'Сценарии'],
  },
  {
    title: 'ИИ разработка',
    href: '/services/ai',
    imageSrc: '/assets/projects/ultracore/ultracore-thumbnail.png',
    imageAlt: 'ИИ разработка',
    tags: ['Боты', 'AI-ассистенты', 'RAG'],
  },
]

export function Services() {
  const sectionRef = useRef<HTMLElement | null>(null)

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>('[data-wwd-card]')
      const masks = gsap.utils.toArray<HTMLElement>('[data-wwd-mask]')
      const images = gsap.utils.toArray<HTMLElement>('[data-wwd-image]')
      const arrows = gsap.utils.toArray<HTMLElement>('[data-wwd-arrow]')

      gsap.set(cards, { opacity: 1 })
      gsap.set(masks, { clipPath: 'inset(0% 100% 0% 0% round 1rem)' })
      gsap.set(arrows, { opacity: 0, x: -8 })

      cards.forEach((card, index) => {
        const mask = masks[index]
        const image = images[index]
        const arrow = arrows[index]

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 30%',
            scrub: true,
          },
        })

        if (mask) {
          tl.to(mask, {
            clipPath: 'inset(0% 0% 0% 0% round 1rem)',
            ease: 'none',
            duration: 1,
          })
        }

        if (arrow) {
          tl.to(
            arrow,
            {
              opacity: 1,
              x: 0,
              ease: 'none',
              duration: 0.6,
            },
            '<0.15'
          )
        }

        if (image) {
          gsap.fromTo(
            image,
            { yPercent: 0, scale: 1.08 },
            {
              yPercent: -5,
              scale: 1.12,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            }
          )
        }
      })

      ScrollTrigger.refresh()
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} className="section">
      <div className="container">
        <div className="relative">
          <div className="md:absolute md:left-0 md:top-0 md:mb-0">
              <div className='flex items-center gap-2'>
                <div className='button__dot fill'></div>
                <h2 className='heading-sm uppercase'>Услуги</h2>
              </div>
          </div>

          <div className="services-wrap flex flex-col">
            {services.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                data-wwd-card
                className="group grid gap-y-6 border-bottom py-6 md:grid-cols-2 md:gap-x-8 md:py-4"
              >
                <div
                  className="md:order-last overflow-hidden rounded-[1rem] will-change-[clip-path]"
                  data-wwd-mask
                >
                  <div className="relative h-[240px] bg-black text-white">
                    <div className="absolute inset-0 overflow-hidden">
                      <div
                        data-wwd-image
                        className="absolute inset-0 will-change-transform"
                      >
                        <img
                          src={item.imageSrc}
                          alt={item.imageAlt}
                          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <span
                      data-wwd-arrow
                      className="absolute bottom-5 right-5 inline-flex h-8 w-8 items-center justify-center"
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M5 12h13" />
                        <path d="m13 6 6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 md:gap-6">
                  <h3
                    data-wwd-title
                    className="heading group-hover:text-(--color-accent)"
                  >
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 md:justify-end">
                    {item.tags.map((tag) => (
                      <span key={`${item.title}-${tag}`} className="service-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
              <div className="grid gap-y-6 py-6 md:grid-cols-2 md:gap-x-8 md:py-4">
                <div className="flex flex-col items-start mt-4 md:col-start-2 md:max-w-md">
                  <p className="heading mb-3">
                    Помогаем брендам расти и&nbsp;рассказывать свои истории миру.
                  </p>
                  <p className="paragraph mb-6">
                    Мы не стараемся впечатлить — мы стараемся решить. Впечатление приходит с&nbsp;результатом.
                  </p>
                  <Button variant="primary" withDot>Все услуги</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
