type ProcessStep = {
  id: string
  title: string
  text: string
}

const steps: ProcessStep[] = [
  {
    id: '01',
    title: 'Погружение в задачу',
    text: 'Созваниваемся, фиксируем цели, аудиторию и критерии результата.',
  },
  {
    id: '02',
    title: 'Концепция и структура',
    text: 'Собираем каркас проекта: смыслы, сценарии пользователя и приоритеты.',
  },
  {
    id: '03',
    title: 'Дизайн и разработка',
    text: 'Делаем визуал и код параллельно, чтобы не терять темп и качество.',
  },
  {
    id: '04',
    title: 'Запуск и развитие',
    text: 'Публикуем, подключаем аналитику и усиливаем то, что влияет на конверсию.',
  },
]

export function ProcessSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
          <div className="md:sticky md:top-28 md:self-start">
            <div className="mb-3 flex items-center gap-2">
              <div className="button__dot fill" />
              <h2 className="heading-sm uppercase font-light">Процесс</h2>
            </div>
            <p className="heading-lg mb-0 max-w-xl">
              Работаем короткими итерациями, чтобы проект двигался быстро и прозрачно.
            </p>
          </div>

          <div className="border-t border-dashed border-[var(--color-border)]">
            {steps.map((step) => (
              <div
                key={step.id}
                className="grid grid-cols-[56px_1fr] gap-4 border-bottom py-4 md:grid-cols-[72px_1fr]"
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
  )
}
