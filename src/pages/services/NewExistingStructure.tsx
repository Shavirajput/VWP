import ServicePageTemplate from "@/components/ServicePageTemplate";
import serviceImage from "@/assets/service-structure.jpg";

const NewExistingStructure = () => (
  <ServicePageTemplate
    title="New & Existing Structure Waterproofing"
    heroTitle="Protect Your Building from Water Damage"
    description="Waterproofing is essential for both new constructions and existing buildings to prevent structural damage, dampness, and leakage problems. Whether it's a freshly built structure or an old building showing signs of seepage, effective waterproofing ensures long-term durability and safety."
    boldText="comprehensive waterproofing solutions for new and existing structures to protect walls, slabs, basements, terraces, and other critical areas from water ingress"
    problemsTitle="Common Problems in Structures"
    problems={[
      "Leakage and dampness in basements, walls, and terraces",
      "Cracks in concrete due to shrinkage, aging, or settlement",
      "Efflorescence and mold growth on walls and ceilings",
      "Corrosion of reinforcement and structural weakening",
      "Water penetration causing damage to finishes, flooring, and plaster",
    ]}
    ctaTitle="Get in Touch with Our Waterproofing Experts Today"
    ctaQuestion="Ready to protect your building from water damage and deterioration?"
    ctaDescription="Our waterproofing solutions for new and existing structures ensure lasting protection, strength, and peace of mind."
    image={serviceImage}
  />
);

export default NewExistingStructure;
