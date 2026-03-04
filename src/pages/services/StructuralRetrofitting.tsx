import ServicePageTemplate from "@/components/ServicePageTemplate";
import serviceImage from "@/assets/service-structure.jpg";

const StructuralRetrofitting = () => (
  <ServicePageTemplate
    title="Structural Retrofitting Solutions"
    heroTitle="Strengthen and Restore Your Building's Structural Integrity"
    description="Aging buildings, seismic activity, and environmental factors can weaken structural elements over time. Structural retrofitting involves strengthening existing structures to improve their load-bearing capacity, seismic resistance, and overall durability."
    boldText="comprehensive structural retrofitting solutions that restore and enhance the strength of buildings, bridges, and infrastructure using advanced materials and techniques"
    problemsTitle="Common Structural Problems"
    problems={[
      "Cracks in beams, columns, and slabs",
      "Corrosion of reinforcement steel",
      "Deflection or sagging of structural elements",
      "Inadequate load-bearing capacity for new requirements",
      "Damage from seismic activity or environmental factors",
    ]}
    ctaTitle="Get in Touch with Our Structural Experts Today"
    ctaQuestion="Ready to strengthen and restore your building?"
    ctaDescription="Our structural retrofitting solutions enhance durability, safety, and load-bearing capacity."
    image={serviceImage}
  />
);

export default StructuralRetrofitting;
