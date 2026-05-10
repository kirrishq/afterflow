import { SectionTitle } from '@/components/sections/SectionTitle'
import { ProjectsGrid } from '@/components/sections/ProjectsGrid'
import { projects } from '@/data/projects'

export default function ProjectsPage() {
  return (
    <main className="page-wrap">
      <SectionTitle />
      <ProjectsGrid projects={projects} />
    </main>
  )
}
