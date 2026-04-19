import Image from "next/image";
import { HeroSectionHome } from "@/components/sections/HeroSectionHome";
import { MarqueeStack } from "@/components/sections/MarqueeStack";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { ProjectsGrid } from '@/components/sections/ProjectsGrid'
import { projects } from '@/data/projects'

export default function Home() {
  return (
      <main className="page-wrap">
        {/* <Navbar /> */}
        <HeroSectionHome />
        <MarqueeStack />
        <WhatWeDoSection />
        <SectionTitle />
        <ProjectsGrid projects={projects} limit={6} />
      </main>
  );
}
