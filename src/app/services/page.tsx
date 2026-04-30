import Link from 'next/link'

const services = [
  {
    title: 'Дизайн',
    scope: 'UX/UI, прототипы, дизайн-система',
    result:
      'Проектируем интерфейс так, чтобы пользователю было легко принять решение и оставить заявку с первого касания.',
    from: 'от 120 000 ₽',
    href: '/services/design',
    imageSrc: '/assets/projects/ultracore/ultracore-thumbnail.png',
  },
  {
    title: 'Разработка',
    scope: 'Next.js, адаптив, CMS',
    result:
      'Собираем быстрые и чистые сайты, где контент обновляется без боли, а архитектура готова к дальнейшему росту.',
    from: 'от 180 000 ₽',
    href: '/services/development',
    imageSrc: '/assets/projects/ultracore/ultracore-thumbnail.png',
  },
  {
    title: 'Автоматизация',
    scope: 'CRM, интеграции, сценарии',
    result:
      'Настраиваем связки между формами, CRM и уведомлениями, чтобы команда тратила время на продажи, а не на рутину.',
    from: 'от 90 000 ₽',
    href: '/services/automatisation',
    imageSrc: '/assets/projects/ultracore/ultracore-thumbnail.png',
  },
  {
    title: 'ИИ-разработка',
    scope: 'AI-ассистенты, RAG, боты',
    result:
      'Встраиваем AI в процессы бизнеса: от первичной обработки лидов до внутренних ассистентов для команды.',
    from: 'от 140 000 ₽',
    href: '/services/ai',
    imageSrc: '/assets/projects/ultracore/ultracore-thumbnail.png',
  },
]

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
            <h1 className="heading-2xl services-page__title">
              Закрываем цикл: от смысла и дизайна до запуска и масштабирования.
            </h1>
            <p className="paragraph inverted services-page__lead">
              Выбирай нужное направление или бери полный цикл: проектируем, реализуем и доводим до измеримого результата.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-page__grid">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className="services-page-card"
              >
                <div className="services-page-card__media">
                  <div
                    className="services-page-card__media-image"
                    style={{ backgroundImage: `url(${service.imageSrc})`, animationDelay: `${index * 0.7}s` }}
                  />
                </div>

                <div className="services-page-card__content">
                  <div className="services-page-card__top">
                    <h2 className="heading">{service.title}</h2>
                    <p className="heading-sm uppercase font-light">{service.from}</p>
                  </div>

                  <p className="paragraph">{service.scope}</p>
                  <p className="paragraph">{service.result}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container inverted">
          <div className="services-page__cta">
            <h2 className="heading-lg">Нужна точная смета по вашему проекту?</h2>
            <p className="paragraph inverted">
              Напиши в Telegram: зададим 3 вопроса и вернёмся с понятным планом, сроками и вилкой стоимости.
            </p>
            <a
              href="https://t.me/afterflow_studio"
              target="_blank"
              rel="noopener noreferrer"
              className="button button--secondary button--with-dot"
            >
              <span>Обсудить в Telegram</span>
              <span className="button__dot" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
