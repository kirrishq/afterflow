type LogoItem = {
  srcLight: string
  srcDark?: string
  alt: string
}

type LogoSet = {
  stack: LogoItem[]
  clients: LogoItem[]
  partners: LogoItem[]
}

export const marqueeLogos: LogoSet = {
  stack: [
    {
      srcLight: 'assets/stack-logos/figma.svg',
      srcDark: 'assets/stack-logos/figma-light.svg',
      alt: 'Figma',
    },
    {
      srcLight: 'assets/stack-logos/tilda.png',
      srcDark: 'assets/stack-logos/tilda-light.png',
      alt: 'Tilda',
    },
    {
      srcLight: 'assets/stack-logos/webflow.svg',
      srcDark: 'assets/stack-logos/webflow-light.svg',
      alt: 'Webflow',
    },
    {
      srcLight: 'assets/stack-logos/react.svg',
      srcDark: 'assets/stack-logos/react.svg',
      alt: 'React',
    },
    {
      srcLight: 'assets/stack-logos/nextjs.svg',
      srcDark: 'assets/stack-logos/nextjs-light.svg',
      alt: 'Next.js',
    },
  ],
  clients: [
    {
      srcLight: 'assets/clients-logos/stoli.svg',
      srcDark: 'assets/clients-logos/stoli.svg',
      alt: 'Stoli',
    },
    {
      srcLight: 'assets/clients-logos/two-tails.svg',
      srcDark: 'assets/clients-logos/two-tails-light.svg',
      alt: 'Два Хвоста',
    },
    // {
    //   srcLight: 'assets/clients-logos/lyna-plus.png',
    //   srcDark: 'assets/clients-logos/lyna-plus-light.png',
    //   alt: 'Lyna Plus',
    // },
    {
      srcLight: 'assets/clients-logos/getanalyst.svg',
      srcDark: 'assets/clients-logos/getanalyst-light.svg',
      alt: 'GetAnalyst',
    },
    {
      srcLight: 'assets/clients-logos/soha-smm.svg',
      srcDark: 'assets/clients-logos/soha-smm-light.svg',
      alt: 'SOHA SMM',
    },
    {
      srcLight: 'assets/clients-logos/lvc.svg',
      srcDark: 'assets/clients-logos/lvc-light.svg',
      alt: 'Legacy Vision Capital',
    },
    {
      srcLight: 'assets/clients-logos/nexa-ai.svg',
      srcDark: 'assets/clients-logos/nexa-ai-light.svg',
      alt: 'NEXA AI',
    },
  ],
  partners: [
    {
      srcLight: '/partners/partner-a.svg',
      srcDark: '/partners/partner-a-dark.svg',
      alt: 'Partner A',
    },
    {
      srcLight: '/partners/partner-b.svg',
      srcDark: '/partners/partner-b-dark.svg',
      alt: 'Partner B',
    },
  ],
}