type LogoItem = {
  src: string
  alt: string
}

type LogoSet = {
  stack: LogoItem[]
  clients: LogoItem[]
  partners: LogoItem[]
  // добавляй сюда новые наборы
}

export const marqueeLogos: LogoSet = {
  stack: [
    { src: 'figma.svg', alt: 'Figma' },
    { src: 'tilda.png', alt: 'Tilda' },
    { src: 'webflow.svg', alt: 'Webflow' },
    { src: 'react.svg', alt: 'React' },
    { src: 'nextjs.svg', alt: 'Next.js' },
  ],
  clients: [
    { src: 'client-a.svg', alt: 'Client A' },
    { src: 'client-b.svg', alt: 'Client B' },
  ],
  partners: [
    { src: 'partner-a.svg', alt: 'Partner A' },
    { src: 'partner-b.svg', alt: 'Partner B' },
  ],
}