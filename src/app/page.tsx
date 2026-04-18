import Image from "next/image";
import { HeroSectionHome } from "@/components/sections/HeroSectionHome";
import { MarqueeStack } from "@/components/sections/MarqueeStack";
import { SectionTitle } from "@/components/sections/SectionTitle";

export default function Home() {
  return (
      <main className="page-wrap">
        <div className="flex items-stretch">
          {/* <Navbar /> */}
          <HeroSectionHome />
        </div>
        <MarqueeStack />
        <div className="section">
          <div className="container-sm">
            <SectionTitle />
          </div>
        </div>
      </main>
  );
}
