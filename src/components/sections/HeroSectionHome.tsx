'use client'

import { NeuroBackground } from '../effects/NeuroBackground'
import { Tag } from '../ui/Tag'
import { HeroContactCard } from '../cards/HeroContactCard'

export function HeroSectionHome() {
  return (
    <div className='section w-full h-screen'>
      <div className='container flex flex-col justify-end'>
        <div className='flex justify-between items-center'>
          <h1 className='heading-hero uppercase'>Веб-студия полного цикла</h1>
        </div>

        <div className='home-header_card'>
          <div className='overlay-neuro'></div>
          <NeuroBackground />

          <div className='hidden md:grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-2 md:gap-4 z-2'>
            <Tag label='Дизайн' variant='dark'/>
            <Tag label='Разработка' variant='dark'/>
            <Tag label='Сайты' variant='dark'/>
            <Tag label='Приложения' variant='dark'/>
            <Tag label='Автоматизация' variant='dark'/>
            <Tag label='Чат-боты' variant='dark'/>
          </div>

          <div className='flex flex-col flex-1 md:flex-row justify-between items-start md:items-end gap-4 z-2'>
            <div>
              <p className='heading-lg max-w-xl md:mb-0 mb-6 text-white'>
                Создаем сайты и продукты, которые приводят клиентов и&nbsp;упрощают процессы
              </p>
            </div>
            <HeroContactCard />
          </div>
        </div>
      </div>
    </div>
  )
}
