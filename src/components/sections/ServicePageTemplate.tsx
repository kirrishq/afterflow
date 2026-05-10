import Link from 'next/link'
import type { ServiceContent, ServiceSubItem } from '@/data/serviceCatalog'

type Props = {
  service: ServiceContent
}

function SubserviceCard({
  parentSlug,
  sub,
}: {
  parentSlug: string
  sub: ServiceSubItem
}) {
  return (
    <Link href={`/services/${parentSlug}/${sub.slug}`} className="services-page-card">
      <div className="services-page-card__content">
        <div className="services-page-card__top">
          <h3 className="heading">{sub.title}</h3>
        </div>
        <p className="paragraph">{sub.lead}</p>
        <div className="services-cards__tags">
          {sub.tags.map((tag) => (
            <span key={`${sub.slug}-${tag}`} className="service-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

export function ServicePageTemplate({ service }: Props) {
  return (
    <>
      <section className="section services-page-hero">
        <div className="container inverted">
          <div className="services-page__heading">
            <div className="flex items-center gap-2">
              <div className="button__dot fill" />
              <p className="heading-sm uppercase font-light">Услуга</p>
            </div>
            <h1 className="heading-lg max-w-3xl">{service.title}</h1>
            <p className="paragraph inverted services-page__lead">{service.heroLead}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-detail__grid">
            <article className="service-detail__card">
              <p className="heading-sm uppercase font-light service-detail__step">Attention</p>
              <p className="heading service-detail__card-title">Какая проблема чаще всего мешает росту</p>
              <p className="paragraph mb-0">{service.attention}</p>
            </article>

            <article className="service-detail__card">
              <p className="heading-sm uppercase font-light service-detail__step">Interest</p>
              <p className="heading service-detail__card-title">{service.interestTitle}</p>
              <p className="paragraph">{service.interestText}</p>
              <div className="services-cards__tags">
                {service.scope.map((item) => (
                  <span key={item} className="service-tag">
                    {item}
                  </span>
                ))}
              </div>
            </article>

            <article className="service-detail__card">
              <p className="heading-sm uppercase font-light service-detail__step">Desire</p>
              <p className="heading service-detail__card-title">{service.desireTitle}</p>
              <p className="paragraph">{service.desireText}</p>
              <ul className="service-detail__list">
                {service.outcomes.map((item) => (
                  <li key={item} className="paragraph">
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="service-detail__card service-detail__card--action">
              <p className="heading-sm uppercase font-light service-detail__step">Action</p>
              <p className="heading service-detail__card-title">Быстрый старт</p>
              <p className="paragraph mb-0">
                <span className="services-cards__meta-label">Стоимость:</span> {service.priceFrom}
              </p>
              <p className="paragraph mb-0">
                <span className="services-cards__meta-label">Срок:</span> {service.timelineFrom}
              </p>
              <Link href="/services" className="service-detail__back-link">
                Все услуги
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mb-4 flex items-center gap-2">
            <div className="button__dot fill" />
            <h2 className="heading-sm uppercase font-light">Направления внутри услуги</h2>
          </div>
          <div className="services-page__grid">
            {service.subservices.map((sub) => (
              <SubserviceCard key={sub.slug} parentSlug={service.slug} sub={sub} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
