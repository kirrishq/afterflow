import Link from 'next/link'

const serviceRows = [
  {
    title: 'Дизайн',
    scope: 'UX/UI, прототипы, визуальная система',
    result: 'Понятный интерфейс и структура, которая ведет к заявке',
    from: 'от 120 000 ₽',
    href: '/services/design',
  },
  {
    title: 'Разработка',
    scope: 'Next.js, адаптив, CMS-интеграция',
    result: 'Быстрый сайт, который удобно обновлять и развивать',
    from: 'от 180 000 ₽',
    href: '/services/development',
  },
  {
    title: 'Автоматизация',
    scope: 'CRM, сценарии, формы, уведомления',
    result: 'Меньше ручной рутины и выше скорость команды',
    from: 'от 90 000 ₽',
    href: '/services/automatisation',
  },
  {
    title: 'ИИ-разработка',
    scope: 'AI-ассистенты, чат-сценарии, RAG',
    result: 'Новый уровень сервиса и обработки лидов',
    from: 'от 140 000 ₽',
    href: '/services/ai',
  },
]

const processSteps = [
  {
    id: '01',
    title: 'Созвон 30 минут',
    text: 'Фиксируем цель, аудиторию и что нужно запустить в первую очередь.',
  },
  {
    id: '02',
    title: 'Маршрут проекта',
    text: 'Показываем этапы, сроки, диапазон стоимости и точки согласования.',
  },
  {
    id: '03',
    title: 'Запуск и рост',
    text: 'Запускаем, собираем данные и дорабатываем то, что влияет на конверсию.',
  },
]

export default function ServicesPage() {
  return (
    <main className="page-wrap">
      <section className="section">
        <div className="container inverted">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <div className="mb-3 flex items-center gap-2">
                <div className="button__dot fill" />
                <p className="mb-0 heading-sm uppercase font-light">Услуги</p>
              </div>
              <h1 className="heading-2xl mb-4">
                Делаем сайты, которые не просто выглядят хорошо, а работают на бизнес-цель.
              </h1>
              <p className="paragraph inverted mb-0 max-w-[64ch]">
                Ведем проект как маршрут: от задачи и структуры до запуска и первых метрик.
                Без перегруза процессом, но с понятным результатом на каждом этапе.
              </p>
            </div>

            <div className="w-full max-w-md border border-[var(--color-border)] rounded-[1rem] p-4">
              <p className="heading mb-2">Ближайший слот на старт</p>
              <p className="paragraph inverted mb-4">
                Обычно можем начать через 5–10 рабочих дней после брифа.
              </p>
              <a
                href="https://t.me/afterflow_studio"
                target="_blank"
                rel="noopener noreferrer"
                className="button button--secondary button--with-dot w-full md:w-auto"
              >
                <span>Обсудить в Telegram</span>
                <span className="button__dot" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container inverted">
          <div className="border-bottom pb-4 mb-4">
            <h2 className="heading-lg mb-0">Что мы делаем</h2>
          </div>

          <div className="flex flex-col">
            {serviceRows.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group border-bottom py-5 md:py-6"
              >
                <div className="grid gap-3 md:grid-cols-[1.1fr_1fr_auto] md:gap-6 md:items-end">
                  <div>
                    <h3 className="heading mb-1 group-hover:text-(--color-accent)">{item.title}</h3>
                    <p className="paragraph inverted mb-0">{item.scope}</p>
                  </div>
                  <p className="paragraph inverted mb-0">{item.result}</p>
                  <p className="heading mb-0 md:text-right">{item.from}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 md:gap-10">
            <div>
              <h2 className="heading-lg mb-3">Как строим работу</h2>
              <p className="paragraph mb-0 max-w-[62ch]">
                Вместо длинной бюрократии — короткие, но четкие итерации.
                Это помогает быстрее дойти до релиза и не терять фокус.
              </p>
            </div>

            <div className="flex flex-col border-t border-dashed border-[var(--color-border)]">
              {processSteps.map((step) => (
                <div
                  key={step.id}
                  className="grid grid-cols-[56px_1fr] gap-4 border-b border-dashed border-[var(--color-border)] py-4"
                >
                  <p className="heading mb-0 text-[var(--color-accent)]">{step.id}</p>
                  <div>
                    <p className="heading mb-1">{step.title}</p>
                    <p className="paragraph mb-0">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container inverted">
          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="heading-lg mb-2">Нужен быстрый ориентир по бюджету?</h2>
              <p className="paragraph inverted mb-0">
                Можно сразу пройти калькулятор и получить диапазон по стоимости и срокам.
              </p>
            </div>
            <Link href="/" className="button button--secondary">
              <span>Открыть калькулятор</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
