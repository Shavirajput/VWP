import ServicePageTemplate from "@/components/ServicePageTemplate";
import serviceImage from "@/assets/service-pool.jpg";

const WaterBodies = () => (
  <ServicePageTemplate
    title="Water Bodies Waterproofing"
    heroTitle="Keep Your Water Features Beautiful and Leak-Free"
    description="Decorative water bodies like swimming pools, fountains, ponds, and artificial lakes enhance the beauty of residential and commercial spaces — but constant water exposure can lead to serious leakage and structural damage if not properly waterproofed."
    boldText="specialized water bodies waterproofing solutions that ensure complete watertightness, long-term durability, and a clean, algae-free finish"
    problemsTitle="Common Water Body Waterproofing Problems"
    problems={[
      "Leakage and water seepage through concrete structures",
      "Cracks in the base or sidewalls of pools and fountains",
      "Efflorescence and white salt deposits on surfaces",
      "Algae, fungal growth, or water discoloration",
      "Structural weakening due to prolonged moisture exposure",
    ]}
    ctaTitle="Get in Touch with Our Waterproofing Experts Today"
    ctaQuestion="Ready to keep your water features leak-free and beautiful?"
    ctaDescription="Our water bodies waterproofing solutions ensure durable protection for fountains, ponds, and decorative pools, maintaining their elegance and integrity."
    image={serviceImage}
  />
);

export default WaterBodies;
