import Link from 'next/link'
import { servicesCatalog } from '@/data/serviceCatalog'
import { ServiceCtaCard } from '@/components/sections/ServiceCtaCard'
import { ServiceCasesSection } from '@/components/sections/ServiceCasesSection'

export default function ServicesPage() {
  return (
    <main className="page-wrap">
      <section className="section services-page-hero">
        <div className="container inverted">
          <div className="services-page__heading">
            <div className="flex items-center gap-2">
              <div className="button__dot fill" />
              <p className="heading-sm uppercase font-light">Услуги</p>
            </div>
            <h1 className="heading-lg max-w-3xl">Разработка сайтов, дизайн и автоматизация</h1>
            <p className="paragraph inverted services-page__lead">
              Три ключевых направления, которые закрывают весь цикл: от идеи и интерфейса до запуска и оптимизации
              процессов.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-page__grid">
            {servicesCatalog.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="services-page-card">
                <div className="services-page-card__content">
                  <div className="services-page-card__top">
                    <h2 className="heading">{service.title}</h2>
                    <p className="heading-sm uppercase font-light">{service.priceFrom}</p>
                  </div>

                  <p className="paragraph">{service.heroLead}</p>
                  <div className="services-cards__tags">
                    {service.tags.map((tag) => (
                      <span key={`${service.slug}-${tag}`} className="service-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceCasesSection
        title="Кейсы по услугам"
        serviceKeys={['development', 'design', 'automation']}
      />

      <ServiceCtaCard contextTitle="услуги студии" />
    </main>
  )
}
