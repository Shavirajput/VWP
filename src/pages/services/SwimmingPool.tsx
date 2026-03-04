import ServicePageTemplate from "@/components/ServicePageTemplate";
import serviceImage from "@/assets/service-pool.jpg";

const SwimmingPool = () => (
  <ServicePageTemplate
    title="Swimming Pool Waterproofing"
    heroTitle="Ensure a Leak-Free, Long-Lasting Pool"
    description="Swimming pools require reliable waterproofing systems to prevent water leakage, structural damage, and long-term maintenance issues. Constant exposure to water and chemicals can deteriorate concrete surfaces if not properly sealed."
    boldText="durable and chemical-resistant swimming pool waterproofing solutions to ensure total protection, longevity, and aesthetic appeal"
    problemsTitle="Common Swimming Pool Leakage Problems"
    problems={[
      "Cracks in the pool structure or joints",
      "Seepage through concrete and tile grout lines",
      "Leakage from expansion joints and plumbing points",
      "Efflorescence and discoloration due to water seepage",
      "Weak bonding between tiles and substrate",
    ]}
    ctaTitle="Get in Touch with Our Waterproofing Experts Today"
    ctaQuestion="Ready to ensure your pool stays watertight and durable?"
    ctaDescription="Our swimming pool waterproofing solutions prevent leakage, enhance longevity, and maintain a smooth, crack-free finish."
    image={serviceImage}
  />
);

export default SwimmingPool;
