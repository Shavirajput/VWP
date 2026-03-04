import ServicePageTemplate from "@/components/ServicePageTemplate";
import serviceImage from "@/assets/service-planter.jpg";

const PlanterBox = () => (
  <ServicePageTemplate
    title="Planter Box Waterproofing"
    heroTitle="Preserve Your Garden, Protect Your Structure"
    description="Planter boxes and garden areas often face continuous moisture exposure, leading to water seepage, leakage, and concrete deterioration. Over time, this can cause damage to surrounding walls, slabs, and structural elements."
    boldText="specialized planter box waterproofing solutions designed to protect your building structure while preserving the beauty of your landscaping"
    problemsTitle="Common Planter Box Waterproofing Problems"
    problems={[
      "Water leakage from planter boxes onto walls or balconies",
      "Dampness and efflorescence on external walls below planters",
      "Cracks in the planter bed allowing water seepage",
      "Root penetration causing coating or concrete damage",
      "Structural corrosion due to constant wet conditions",
    ]}
    ctaTitle="Get in Touch with Our Waterproofing Experts Today"
    ctaQuestion="Ready to prevent water leakage and root damage in planter areas?"
    ctaDescription="Our planter box waterproofing solutions ensure long-lasting protection while maintaining healthy plant growth and structural safety."
    image={serviceImage}
  />
);

export default PlanterBox;
