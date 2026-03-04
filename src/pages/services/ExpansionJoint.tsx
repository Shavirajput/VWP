import ServicePageTemplate from "@/components/ServicePageTemplate";
import serviceImage from "@/assets/service-crack.jpg";

const ExpansionJoint = () => (
  <ServicePageTemplate
    title="Expansion Joint Treatment"
    heroTitle="Protect Your Building with Effective Joint Sealing"
    description="Expansion joints in buildings, floors, terraces, and concrete structures are essential to accommodate thermal movement, shrinkage, and structural stress. However, without proper sealing, these joints can allow water ingress, debris accumulation, and structural damage over time."
    boldText="specialized expansion joint treatment solutions that ensure watertight, durable, and flexible joints for long-lasting structural performance"
    problemsTitle="Common Expansion Joint Problems"
    problems={[
      "Water leakage through poorly sealed joints",
      "Debris accumulation causing joint blockage or damage",
      "Cracking or deterioration of joint edges",
      "Mold, fungus, and dampness due to water penetration",
      "Structural stress caused by movement without proper joint treatment",
    ]}
    ctaTitle="Get in Touch with Our Waterproofing Experts Today"
    ctaQuestion="Ready to protect your structure from movement and water leakage?"
    ctaDescription="Our expansion joint treatment solutions ensure flexibility, durability, and long-term waterproofing for all types of buildings."
    image={serviceImage}
  />
);

export default ExpansionJoint;
