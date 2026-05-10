'use client'

import { useEffect, useMemo, useState } from 'react'
import { Button } from '@/components/ui/Button'

type Props = {
  contextTitle?: string
}

export function ServiceCtaCard({ contextTitle = 'услугу' }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (!isModalOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false)
      }
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isModalOpen])

  const telegramUrl = useMemo(
    () => `https://t.me/afterflow_studio?text=${encodeURIComponent(`Хочу обсудить ${contextTitle}`)}`,
    [contextTitle]
  )

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="service-cta">
            <div className="service-cta__copy">
              <p className="heading-lg mb-0">Готовы обсудить проект?</p>
              <p className="paragraph mb-0">
                Опиши задачу в двух словах: подскажем формат, сроки и стартовую вилку стоимости.
              </p>
            </div>
            <div className="service-cta__actions">
              <Button
                variant="primary"
                withDot
                onClick={() => {
                  setIsSubmitted(false)
                  setIsModalOpen(true)
                }}
              >
                Оставить заявку
              </Button>
              <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="button button--secondary">
                <span>Связаться в Telegram</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div
          className="service-detail-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-cta-modal-title"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setIsModalOpen(false)
            }
          }}
        >
          <div className="service-detail-modal__card">
            <div className="service-detail-modal__header">
              <h2 id="service-cta-modal-title" className="heading mb-0">
                Заявка на {contextTitle}
              </h2>
              <button
                type="button"
                className="service-detail-modal__close"
                onClick={() => setIsModalOpen(false)}
                aria-label="Закрыть форму"
              >
                ×
              </button>
            </div>

            {!isSubmitted ? (
              <form
                className="service-detail-modal__form"
                onSubmit={(event) => {
                  event.preventDefault()
                  setIsSubmitted(true)
                }}
              >
                <label className="service-detail-modal__field">
                  <span className="heading-sm uppercase font-light">Имя</span>
                  <input className="service-detail-modal__input" name="name" required />
                </label>

                <label className="service-detail-modal__field">
                  <span className="heading-sm uppercase font-light">Контакт (Telegram или Email)</span>
                  <input className="service-detail-modal__input" name="contact" required />
                </label>

                <label className="service-detail-modal__field">
                  <span className="heading-sm uppercase font-light">Кратко о задаче</span>
                  <textarea className="service-detail-modal__input service-detail-modal__textarea" name="task" required />
                </label>

                <Button type="submit" variant="primary" withDot>
                  Отправить заявку
                </Button>
              </form>
            ) : (
              <div className="service-detail-modal__success">
                <p className="heading mb-2">Спасибо, получили заявку.</p>
                <p className="paragraph mb-4">
                  Чтобы ускорить старт, можно сразу перейти в Telegram.
                </p>
                <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="button button--primary">
                  <span>Перейти в Telegram</span>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
