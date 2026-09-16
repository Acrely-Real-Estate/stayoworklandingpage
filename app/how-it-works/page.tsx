import HowItWorksHero from "@/components/hero/HowItWorksHero";
import ProcessStory from "@/components/sections/ProcessStory";
import CorporateRelationship from "@/components/sections/CorporateRelationship";
import LongTermModel from "@/components/sections/LongTermModel";
import FeasibilitySection from "@/components/sections/FeasibilitySection";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = {
  title: "How It Works | STAYO WorkStay",
  description: "From requirement to residence. How STAYO WorkStay operates."
};

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-surface-container-lowest">
      <HowItWorksHero />
      <ProcessStory />
      <CorporateRelationship />
      <LongTermModel />
      <FeasibilitySection />
      <FinalCTA />
    </div>
  );
}
