import Image from "next/image";
import { HeroSectionHome } from "@/components/sections/HeroSectionHome";
import { MarqueeStack } from "@/components/sections/MarqueeStack";

export default function Home() {
  return (
      <main className="page-wrap">
        <div className="flex items-stretch">
          {/* <Navbar /> */}
          <HeroSectionHome />
        </div>
        <MarqueeStack />
      </main>
  );
}
