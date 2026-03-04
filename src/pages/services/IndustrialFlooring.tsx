import ServicePageTemplate from "@/components/ServicePageTemplate";
import serviceImage from "@/assets/service-floor.jpg";

const IndustrialFlooring = () => (
  <ServicePageTemplate
    title="Industrial Flooring Solutions"
    heroTitle="Upgrade to Durable, Safe, and Efficient Industrial Floors"
    description="Industrial floors are exposed to heavy machinery, chemical spills, high foot traffic, and environmental stress, making durability and safety critical concerns. Ordinary concrete floors often suffer from cracks, dusting, and wear over time."
    boldText="specialized industrial flooring solutions that ensure high strength, chemical resistance, and long-lasting performance while improving safety and aesthetics in factories, warehouses, and production units"
    problemsTitle="Common Industrial Flooring Problems"
    problems={[
      "Cracks and surface wear due to heavy machinery or forklift movement",
      "Chemical spills causing corrosion and floor damage",
      "Dusting and uneven surfaces affecting hygiene and safety",
      "Poor abrasion resistance leading to frequent maintenance",
      "Slippery floors posing safety hazards for workers",
    ]}
    ctaTitle="Get in Touch with Our Flooring Experts Today"
    ctaQuestion="Ready to upgrade your industrial space with durable flooring?"
    ctaDescription="Our industrial flooring solutions provide high strength, chemical resistance, and a seamless finish for long-lasting performance."
    image={serviceImage}
  />
);

export default IndustrialFlooring;
