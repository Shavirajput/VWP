import ServicePageTemplate from "@/components/ServicePageTemplate";
import serviceImage from "@/assets/service-wall.jpg";

const ExteriorWall = () => (
  <ServicePageTemplate
    title="Exterior Wall Waterproofing"
    heroTitle="Protect Your Walls from Rain and Moisture Damage"
    description="Exterior walls are constantly exposed to rain, wind, and humidity. Over time, water penetration through cracks, joints, and porous surfaces can cause dampness, paint peeling, efflorescence, and structural deterioration."
    boldText="comprehensive exterior wall waterproofing solutions that create a protective barrier against water ingress while maintaining the aesthetic appeal of your building"
    problemsTitle="Common Exterior Wall Problems"
    problems={[
      "Dampness and water stains on interior walls",
      "Paint peeling, bubbling, or flaking on exterior surfaces",
      "Efflorescence (white salt deposits) on walls",
      "Cracks in plaster allowing water penetration",
      "Mold and fungal growth due to moisture retention",
    ]}
    ctaTitle="Get in Touch with Our Waterproofing Experts Today"
    ctaQuestion="Ready to protect your exterior walls from water damage?"
    ctaDescription="Our exterior wall waterproofing solutions ensure lasting protection against rain and moisture."
    image={serviceImage}
  />
);

export default ExteriorWall;
