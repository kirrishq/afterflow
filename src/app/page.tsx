import { HeroSectionHome } from "@/components/sections/HeroSectionHome";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { Services } from "@/components/sections/Services";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectsGrid } from '@/components/sections/ProjectsGrid';
import { QuickEstimateCalculator } from '@/components/sections/QuickEstimateCalculator';
import { FundCard } from "@/components/cards/FundCard";
import { projects } from '@/data/projects';
import { Button } from "@/components/ui/Button";

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
        <ProcessSection />
        <SectionTitle />
        <ProjectsGrid projects={projects} limit={6} />
        <MarqueeSection 
          logoSet="clients"
          text="Наши клиенты выбирают нас за&nbsp;скорость, прозрачность и&nbsp;результат"
          action={
            <Button variant='primary' withDot>Связаться</Button>
          }
        />
        <FundCard
          fundName="KittensPittens"
          fundDescription="Ежемесячно выбираем фонд и отправляем 5% от выручки на поддержку."
          imageSrc="/assets/images/fund.jpg"
          imageAlt="Команда фонда Котики"
        />
        <QuickEstimateCalculator />
      </main>
  );
}
