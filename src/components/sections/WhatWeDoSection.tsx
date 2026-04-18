'use client'

import Link from 'next/link'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

type ServiceItem = {
  title: string
  href: string
  imageSrc: string
  imageAlt: string
}

const services: ServiceItem[] = [
  {
    title: 'Strategy',
    href: '/work/strategy',
    imageSrc: '/images/services/strategy.jpg',
    imageAlt: 'Strategy preview',
  },
  {
    title: 'Visual Identity',
    href: '/work/visual-identity',
    imageSrc: '/images/services/identity.jpg',
    imageAlt: 'Visual identity preview',
  },
  {
    title: 'Communication',
    href: '/work/communication',
    imageSrc: '/images/services/communication.jpg',
    imageAlt: 'Communication preview',
  },
]

export function WhatWeDoSection() {
  const sectionRef = useRef<HTMLElement | null>(null)

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>('[data-wwd-card]')
      const masks = gsap.utils.toArray<HTMLElement>('[data-wwd-mask]')
      const images = gsap.utils.toArray<HTMLElement>('[data-wwd-image]')
      const titles = gsap.utils.toArray<HTMLElement>('[data-wwd-title]')
      const arrows = gsap.utils.toArray<HTMLElement>('[data-wwd-arrow]')

      gsap.set(cards, { opacity: 1 })
      gsap.set(masks, { clipPath: 'inset(0% 100% 0% 0% round 1rem)' })
      gsap.set(titles, { opacity: 0, y: 24 })
      gsap.set(arrows, { opacity: 0, x: -8 })

      cards.forEach((card, index) => {
        const mask = masks[index]
        const image = images[index]
        const title = titles[index]
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

        if (title) {
          tl.to(
            title,
            {
              opacity: 1,
              y: 0,
              ease: 'none',
              duration: 0.6,
            },
            '<0.15'
          )
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
              yPercent: -10,
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
    <section ref={sectionRef} className="section mt-8">
      <div className="container">
        <div className="relative">
          <div className="md:absolute md:left-0 md:top-0 md:mb-0">
              <div className='flex items-center gap-2'>
                <div className='button__dot'></div>
                <h2 className='heading-sm uppercase font-light'>Услуги</h2>
            </div>
          </div>

          <div className="flex flex-col">
            {services.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                data-wwd-card
                className="group grid gap-y-6 border-bottom py-6 md:grid-cols-2 md:gap-x-10 md:py-4"
              >
                <div
                  className="md:order-last overflow-hidden rounded-[1rem] will-change-[clip-path]"
                  data-wwd-mask
                >
                  <div className="relative h-[210px] bg-black text-white">
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

                <div className="flex items-end justify-between gap-6">
                  <h3
                    data-wwd-title
                    className="heading-lg"
                  >
                    {item.title}
                  </h3>

                  <span className="hidden text-sm uppercase tracking-[0.18em] text-black/50 md:block">
                    View
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}