export interface Logo {
  src: string
  alt: string
  width?: number
  height?: number
}

export const clientLogos: Logo[] = [
  {
    src: '@/public/logos/slack.png,
    alt: 'Slack',
    width: 120,
    height: 40,
  },
  {
    src: '/logos/notion.svg',
    alt: 'Notion',
    width: 120,
    height: 40,
  },
  {
    src: '/logos/figma.svg',
    alt: 'Figma',
    width: 120,
    height: 40,
  },
  {
    src: '/logos/webflow.svg',
    alt: 'Webflow',
    width: 120,
    height: 40,
  },
  {
    src: '/logos/framer.svg',
    alt: 'Framer',
    width: 120,
    height: 40,
  },
  {
    src: '/logos/vercel.svg',
    alt: 'Vercel',
    width: 120,
    height: 40,
  },
]