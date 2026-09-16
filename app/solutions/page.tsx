import SolutionsHero from "@/components/hero/SolutionsHero";
import SolutionNarrative from "@/components/sections/SolutionNarrative";
import SolutionDetail from "@/components/sections/SolutionDetail";
import SolutionFit from "@/components/sections/SolutionFit";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = {
  title: "Solutions | STAYO WorkStay",
  description: "Accommodation designed around your workforce."
};

export default function SolutionsPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-surface-container-lowest">
      <SolutionsHero />
      <SolutionNarrative />
      <SolutionDetail />
      <SolutionFit />
      <FinalCTA />
    </div>
  );
}
