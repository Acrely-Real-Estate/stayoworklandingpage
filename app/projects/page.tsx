import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectNarrative from "@/components/projects/ProjectNarrative";
import ProjectLifecycle from "@/components/projects/ProjectLifecycle";
import WorkforceContexts from "@/components/projects/WorkforceContexts";
import ProjectApproach from "@/components/projects/ProjectApproach";
import ProjectsCTA from "@/components/projects/ProjectsCTA";

export const metadata = {
  title: "Projects | STAYO WorkStay",
  description: "Explore the project-led approach STAYO WorkStay takes to workforce accommodation, from demand and feasibility through development and operations."
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-surface-container-lowest">
      <ProjectsHero />
      <ProjectNarrative />
      <ProjectLifecycle />
      <WorkforceContexts />
      <ProjectApproach />
      <ProjectsCTA />
    </div>
  );
}
