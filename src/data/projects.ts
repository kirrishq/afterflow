import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    title: 'Ультракор',
    href: '/projects/ultracore',
    services: ['Next.js', 'GSAP', 'Адаптив'],
    serviceKeys: ['development', 'development:react-next'],
    year: '2026',
    imageSrc: '/assets/images/development.jpg',
    imageAlt: 'Кейс Ультракор',
    colSpan: 1,
  },
  {
    title: 'Aster Studio',
    href: '/projects/aster-studio',
    services: ['UX/UI', 'Лендинг', 'Брендинг'],
    serviceKeys: ['design', 'design:websites'],
    year: '2026',
    imageSrc: '/assets/images/design.jpg',
    imageAlt: 'Кейс Aster Studio',
    colSpan: 1,
  },
  {
    title: 'Flow Capital',
    href: '/projects/flow-capital',
    services: ['Webflow', 'CMS', 'SEO'],
    serviceKeys: ['development', 'development:no-low-code', 'automation', 'automation:integrations'],
    year: '2026',
    imageSrc: '/assets/projects/ultracore/ultracore-thumbnail.png',
    imageAlt: 'Кейс Flow Capital',
    colSpan: 1,
  },
  {
    title: 'Nordline',
    href: '/projects/nordline',
    services: ['Дизайн', 'Разработка', 'Контент'],
    serviceKeys: ['automation', 'automation:chatbots', 'automation:ai-agents', 'design', 'design:pdf-books'],
    year: '2026',
    imageSrc: '/assets/projects/ultracore/ultracore-thumbnail.png',
    imageAlt: 'Кейс Nordline',
    colSpan: 1,
  },
]
