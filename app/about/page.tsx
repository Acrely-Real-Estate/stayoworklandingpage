import AboutHero from "@/components/about/AboutHero";
import AboutNarrative from "@/components/about/AboutNarrative";
import StayoModel from "@/components/about/StayoModel";
import WhatWeDo from "@/components/about/WhatWeDo";
import WhoWeWorkWith from "@/components/about/WhoWeWorkWith";
import AboutApproach from "@/components/about/AboutApproach";
import ParentCompany from "@/components/about/ParentCompany";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata = {
  title: "About | STAYO WorkStay",
  description: "Learn how STAYO WorkStay approaches workforce accommodation as a demand-led infrastructure and operational requirement."
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-surface-container-lowest">
      <AboutHero />
      <AboutNarrative />
      <StayoModel />
      <WhatWeDo />
      <WhoWeWorkWith />
      <AboutApproach />
      <ParentCompany />
      <AboutCTA />
    </div>
  );
}
