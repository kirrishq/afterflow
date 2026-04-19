import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    title: 'Ультракор',
    href: '/projects/ultracore',
    services: ['Tilda'],
    year: '2025',
    imageSrc: '/assets/projects/ultracore/ultracore-thumbnail.png',
    imageAlt: 'MoC project preview',
    colSpan: 1,
  },
  {
    title: 'Project Two',
    href: '/work/project-two',
    services: ['Branding', 'Web'],
    year: '2022',
    imageSrc: '/images/projects/project-two.jpg',
    imageAlt: 'Project Two preview',
    colSpan: 1,
  },
]