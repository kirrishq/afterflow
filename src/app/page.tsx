import Image from "next/image";
import { HeroSectionHome } from "@/components/sections/HeroSectionHome";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { ProjectsGrid } from '@/components/sections/ProjectsGrid';
import { projects } from '@/data/projects';
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
      <main className="page-wrap">
        {/* <Navbar /> */}
        <HeroSectionHome />
        <MarqueeSection 
          logoSet="stack"
          text="Используем проверенный стек для&nbsp;дизайна, разработки и&nbsp;контента"
        />
        <WhatWeDoSection />
        <SectionTitle />
        <ProjectsGrid projects={projects} limit={6} />
        <MarqueeSection 
          logoSet="stack"
          text="Используем проверенный стек для&nbsp;дизайна, разработки и&nbsp;контента"
          action={
            <Button children='Связаться' variant='primary' withDot />
          }
        />
      </main>
  );
}
