import { ProjectCard } from '@/components/cards/ProjectCard'
import type { Project } from '@/types/project'

type Props = {
  projects: Project[]
  limit?: number
}

export function ProjectsGrid({ projects, limit }: Props) {
  const visible = limit ? projects.slice(0, limit) : projects

  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {visible.map((project) => (
            <div
              key={project.href}
              className={project.colSpan === 2 ? 'md:col-span-2' : ''}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}