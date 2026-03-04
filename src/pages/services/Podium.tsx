import ServicePageTemplate from "@/components/ServicePageTemplate";
import serviceImage from "@/assets/service-podium.jpg";

const Podium = () => (
  <ServicePageTemplate
    title="Podium Waterproofing"
    heroTitle="Our Podium Waterproofing Solutions"
    description="Podium slabs, often located above parking areas or utility spaces, serve as landscaped gardens, driveways, or recreational zones. These areas are continuously exposed to rainwater, irrigation, and surface runoff — making them highly susceptible to seepage and leakage."
    boldText="comprehensive podium waterproofing solutions that protect both the podium surface and the occupied spaces below, ensuring long-term durability and zero water ingress"
    problemsTitle="Common Podium Waterproofing Problems"
    problems={[
      "Water leakage through the podium slab to parking or basement areas below",
      "Cracks in concrete or expansion joints",
      "Damp patches or efflorescence on ceilings underneath",
      "Tile joint failure or poor drainage causing water stagnation",
      "Degradation of waterproofing layer due to UV exposure and traffic load",
    ]}
    ctaTitle="Get in Touch with Our Waterproofing Experts Today"
    ctaQuestion="Ready to safeguard your podium areas from leaks and seepage?"
    ctaDescription="Our podium waterproofing solutions provide durable protection, ensuring lasting performance and structural integrity in high-traffic zones."
    image={serviceImage}
  />
);

export default Podium;
