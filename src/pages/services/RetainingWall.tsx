import ServicePageTemplate from "@/components/ServicePageTemplate";
import serviceImage from "@/assets/service-wall.jpg";

const RetainingWall = () => (
  <ServicePageTemplate
    title="Retaining Wall Waterproofing"
    heroTitle="Protect Your Retaining Walls from Water Damage"
    description="Retaining walls are constantly exposed to soil moisture, groundwater pressure, and surface runoff. Without proper waterproofing, water can seep through, causing structural damage, soil erosion, and compromised stability."
    boldText="specialized retaining wall waterproofing solutions that prevent water ingress, protect structural integrity, and ensure long-term durability"
    problemsTitle="Common Retaining Wall Problems"
    problems={[
      "Water seepage through retaining wall surfaces",
      "Hydrostatic pressure causing cracks and displacement",
      "Efflorescence and mineral deposits on wall surfaces",
      "Soil erosion behind retaining walls",
      "Corrosion of reinforcement due to moisture exposure",
    ]}
    ctaTitle="Get in Touch with Our Waterproofing Experts Today"
    ctaQuestion="Ready to protect your retaining walls from water damage?"
    ctaDescription="Our retaining wall waterproofing solutions ensure lasting protection and structural stability."
    image={serviceImage}
  />
);

export default RetainingWall;
