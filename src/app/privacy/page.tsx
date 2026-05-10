import Link from 'next/link'

const updatedAt = '10 мая 2026'

export default function PrivacyPage() {
  return (
    <main className="page-wrap">
      <section className="section services-page-hero">
        <div className="container inverted">
          <div className="services-page__heading">
            <div className="flex items-center gap-2">
              <div className="button__dot fill" />
              <p className="heading-sm uppercase font-light">Документы</p>
            </div>
            <h1 className="heading-lg max-w-3xl">Политика конфиденциальности</h1>
            <p className="paragraph inverted services-page__lead">
              Настоящая Политика регулирует обработку персональных данных пользователей сайта{' '}
              <strong>https://afterflow.ru</strong>.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="policy-page">
            <p className="paragraph">
              Дата последнего обновления: <strong>{updatedAt}</strong>
            </p>

            <h2 className="heading">1. Общие положения</h2>
            <p className="paragraph">
              Политика разработана в соответствии с Федеральным законом РФ от 27.07.2006 №152-ФЗ «О персональных
              данных», а также с учетом иных применимых норм законодательства РФ в части обработки и защиты данных.
            </p>
            <p className="paragraph">
              Пользуясь сайтом, вы подтверждаете, что ознакомились с условиями настоящей Политики.
            </p>

            <h2 className="heading">2. Какие данные мы обрабатываем</h2>
            <p className="paragraph">В зависимости от ваших действий на сайте могут обрабатываться:</p>
            <ul className="policy-page__list">
              <li className="paragraph">контактные данные, которые вы указываете в формах (например, имя, email, Telegram, телефон);</li>
              <li className="paragraph">данные обращения (содержание сообщения, комментарии к задаче);</li>
              <li className="paragraph">технические данные: IP-адрес, тип устройства, браузер, дата/время посещения, источник перехода;</li>
              <li className="paragraph">данные, собираемые через cookie и сервис веб-аналитики Яндекс.Метрика.</li>
            </ul>

            <h2 className="heading">3. Цели обработки</h2>
            <ul className="policy-page__list">
              <li className="paragraph">обработка входящих заявок и обратной связи;</li>
              <li className="paragraph">подготовка коммерческих предложений и коммуникация по проекту;</li>
              <li className="paragraph">улучшение качества сайта, контента и пользовательского опыта;</li>
              <li className="paragraph">аналитика посещаемости и эффективности каналов привлечения.</li>
            </ul>

            <h2 className="heading">4. Cookie и веб-аналитика</h2>
            <p className="paragraph">
              На сайте используются cookie-файлы: необходимые для корректной работы сайта, а также аналитические
              cookie для оценки поведения пользователей.
            </p>
            <p className="paragraph">
              Для аналитики может использоваться сервис <strong>Яндекс.Метрика</strong>, который может собирать
              обезличенные данные о действиях пользователей на сайте. Обработка таких данных осуществляется в
              соответствии с условиями Яндекса и применимым законодательством РФ.
            </p>
            <p className="paragraph">
              Вы можете ограничить использование cookie в настройках браузера. Отключение некоторых cookie может
              повлиять на корректность работы отдельных функций сайта.
            </p>

            <h2 className="heading">5. Правовые основания обработки</h2>
            <p className="paragraph">
              Мы обрабатываем персональные данные на основании:
            </p>
            <ul className="policy-page__list">
              <li className="paragraph">согласия субъекта персональных данных;</li>
              <li className="paragraph">необходимости обработки для ответа на запрос и исполнения договорных обязательств;</li>
              <li className="paragraph">законных интересов оператора в части аналитики и обеспечения безопасности сайта.</li>
            </ul>

            <h2 className="heading">6. Хранение и защита данных</h2>
            <p className="paragraph">
              Мы принимаем необходимые организационные и технические меры для защиты данных от неправомерного доступа,
              изменения, раскрытия или уничтожения.
            </p>
            <p className="paragraph">
              Данные хранятся не дольше, чем этого требуют цели обработки либо требования законодательства РФ.
            </p>

            <h2 className="heading">7. Передача третьим лицам</h2>
            <p className="paragraph">
              Передача данных третьим лицам допускается только в случаях, предусмотренных законодательством РФ, либо
              когда это необходимо для работы сервисов, обеспечивающих функционирование сайта и коммуникации с
              пользователем (например, хостинг, почтовые/аналитические сервисы).
            </p>

            <h2 className="heading">8. Права пользователя</h2>
            <p className="paragraph">Вы вправе:</p>
            <ul className="policy-page__list">
              <li className="paragraph">запросить сведения об обработке ваших персональных данных;</li>
              <li className="paragraph">потребовать уточнения, блокирования или удаления данных, если они неточны или обрабатываются с нарушениями;</li>
              <li className="paragraph">отозвать согласие на обработку персональных данных;</li>
              <li className="paragraph">обратиться с жалобой в уполномоченный орган по защите прав субъектов персональных данных.</li>
            </ul>

            <h2 className="heading">9. Контакты по вопросам обработки данных</h2>
            <p className="paragraph">
              По вопросам, связанным с обработкой персональных данных, вы можете обратиться:
            </p>
            <ul className="policy-page__list">
              <li className="paragraph">
                Email: <a href="mailto:hello@afterflow.studio">hello@afterflow.studio</a>
              </li>
              <li className="paragraph">
                Telegram: <a href="https://t.me/afterflow_studio" target="_blank" rel="noopener noreferrer">@afterflow_studio</a>
              </li>
            </ul>

            <h2 className="heading">10. Изменения Политики</h2>
            <p className="paragraph">
              Мы можем обновлять Политику конфиденциальности. Актуальная редакция всегда доступна на этой странице.
            </p>

            <div className="policy-page__back-wrap">
              <Link href="/" className="button button--secondary">
                <span>Вернуться на главную</span>
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
