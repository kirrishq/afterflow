import Link from 'next/link';
import { HeroSectionHome } from "@/components/sections/HeroSectionHome";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { Services } from "@/components/sections/Services";
import { ServicesCardsSection } from "@/components/sections/ServicesCardsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { QuickEstimateCalculator } from '@/components/sections/QuickEstimateCalculator';
import { FundCard } from "@/components/cards/FundCard";
import { ServiceCtaCard } from '@/components/sections/ServiceCtaCard';

export default function Home() {
  return (
      <main className="page-wrap">
        <HeroSectionHome />
        <MarqueeSection 
          logoSet="stack"
          text="Используем проверенный стек для&nbsp;дизайна, разработки и&nbsp;контента"
        />
        {/* <AboutSectionHome /> */}
        <Services />
        <MarqueeSection 
          logoSet="clients"
          text="Нас выбирают за&nbsp;скорость, прозрачность и&nbsp;результат"
          action={
            <Link href="/projects" className="button button--primary">
              <span>Все проекты</span>
              <span className="button__dot" aria-hidden="true" />
            </Link>
          }
        />
        <ServicesCardsSection />
        <ProcessSection />
        <ServiceCtaCard contextTitle="услуги студии" />
        <FundCard
          fundName="Преданное сердце"
          fundDescription="Ежемесячно выбираем фонд и отправляем 5% от выручки на поддержку."
          imageSrc="/assets/images/fund.jpg"
          imageAlt="Фонд преданное сердце"
          href="https://predannoeserdce.ru/"
        />
        {/* <QuickEstimateCalculator /> */}
      </main>
  );
}
