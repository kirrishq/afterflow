import Link from 'next/link'
import type { Project } from '@/types/project'

type Props = {
  project: Project
}

export function ProjectCard({ project }: Props) {
  return (
    <Link
      href={project.href}
      className="group block relative"
    >
      <div className="mb-4 overflow-hidden rounded-[1rem] bg-neutral-100">
        <div className="relative aspect-[695/480]">
          <img
            src={project.imageSrc}
            alt={project.imageAlt}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            loading="lazy"
          />
        </div>
      </div>

      <div className="flex flex-col leading-tight">
        <h2 className="mb-0 text-sm md:text-base text-[var(--color-text-primary)]">
          <span>{project.title}</span>
        </h2>

        <p className="mb-0 text-xs text-[var(--color-text-muted)]">
          {project.services.join(', ')}
        </p>

        <p className="mb-0 text-xs text-[var(--color-text-muted)]">
          ({project.year})
        </p>
      </div>
    </Link>
  )
}