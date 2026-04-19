export type Project = {
  title: string
  href: string
  services: string[]
  year: string
  imageSrc: string
  imageAlt: string
  colSpan?: 1 | 2  // широкая или узкая карточка
}