import { notFound } from 'next/navigation'
import { ServicePageTemplate } from '@/components/sections/ServicePageTemplate'
import { ServiceCasesSection } from '@/components/sections/ServiceCasesSection'
import { ServiceCtaCard } from '@/components/sections/ServiceCtaCard'
import { serviceBySlug, type ServiceKey } from '@/data/serviceCatalog'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  if (!(slug in serviceBySlug)) {
    notFound()
  }

  const service = serviceBySlug[slug as ServiceKey]

  return (
    <main className="page-wrap">
      <ServicePageTemplate service={service} />
      {/* <ServiceCasesSection
        title="Кейсы по направлению"
        serviceKeys={[service.slug, ...service.subservices.map((sub) => `${service.slug}:${sub.slug}`)]}
      /> */}
      <ServiceCtaCard contextTitle={service.title} />
    </main>
  )
}
