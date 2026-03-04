import ServicePageTemplate from "@/components/ServicePageTemplate";
import serviceImage from "@/assets/service-tank.jpg";

const TankWaterproofing = () => (
  <ServicePageTemplate
    title="Overhead, Underground & STP Tank Waterproofing"
    heroTitle="Ensure Your Water Tanks Stay Leak-Free"
    description="Water storage tanks, whether overhead, underground, or sewage treatment plants (STP), require robust waterproofing to prevent leakage, contamination, and structural deterioration. Constant water contact accelerates wear on concrete surfaces."
    boldText="specialized tank waterproofing solutions that ensure watertight integrity, prevent contamination, and extend the lifespan of your water storage infrastructure"
    problemsTitle="Common Tank Waterproofing Problems"
    problems={[
      "Water leakage through tank walls and joints",
      "Contamination of stored water due to seepage",
      "Corrosion of reinforcement in concrete tanks",
      "Algae and bacterial growth on internal surfaces",
      "Structural weakening from prolonged water exposure",
    ]}
    ctaTitle="Get in Touch with Our Waterproofing Experts Today"
    ctaQuestion="Ready to ensure your tanks are watertight and safe?"
    ctaDescription="Our tank waterproofing solutions provide durable, food-grade protection for all types of water storage tanks."
    image={serviceImage}
  />
);

export default TankWaterproofing;
