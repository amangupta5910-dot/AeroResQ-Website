import SolutionsHero from "@/components/solutions/SolutionsHero";
import Industries from "@/components/solutions/Industries";
import SolutionWorkflow from "@/components/solutions/SolutionWorkflow";
import SuccessMetrics from "@/components/solutions/SuccessMetrics";
import WhyChooseUs from "@/components/solutions/WhyChooseUs";
import SolutionsCTA from "@/components/solutions/SolutionsCTA";

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <Industries />
      <SolutionWorkflow />
      <SuccessMetrics />
      <WhyChooseUs />
      <SolutionsCTA />
    </>
  );
}