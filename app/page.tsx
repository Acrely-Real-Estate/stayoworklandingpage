import WorkStayHero from "@/components/hero/WorkStayHero";
import WorkforceStory from "@/components/sections/WorkforceStory";
import WorkStayModel from "@/components/sections/WorkStayModel";
import SolutionsShowcase from "@/components/sections/SolutionsShowcase";
import BuiltToSuit from "@/components/sections/BuiltToSuit";
import Operations from "@/components/sections/Operations";
import HowItWorks from "@/components/sections/HowItWorks";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import AboutIntro from "@/components/sections/AboutIntro";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-surface-container-lowest">
      <WorkStayHero />
      <WorkforceStory />
      <WorkStayModel />
      <SolutionsShowcase />
      <BuiltToSuit />
      <Operations />
      <HowItWorks />
      <ProjectShowcase />
      <AboutIntro />
      <FinalCTA />
    </div>
  );
}
