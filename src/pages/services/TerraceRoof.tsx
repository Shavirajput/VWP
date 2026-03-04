import ServicePageTemplate from "@/components/ServicePageTemplate";
import serviceImage from "@/assets/service-terrace.jpg";
import ctaImage from "@/assets/terrace-cta.jpg";

const TerraceRoof = () => (
  <ServicePageTemplate
    title="Terrace & Roof Waterproofing (Flat & Sloped Roofs)"
    heroTitle="Protect Your Terrace & Roof from Water Leakage"
    description="Terraces and roofs are the most exposed parts of any structure, constantly facing harsh weather conditions like rain, heat, and UV rays. Over time, cracks, poor drainage, and aging materials can lead to seepage, damp patches, and internal leaks."
    boldText="advanced terrace and roof waterproofing solutions for both flat and sloped roofs, ensuring complete protection and long-term durability"
    problemsTitle="Common Terrace & Roof Waterproofing Problems"
    problems={[
      "Water seepage during monsoons",
      "Cracks on the roof surface or joints",
      "Dampness on ceiling and walls below the roof",
      "Fungal or algae growth due to moisture retention",
      "Weakening of concrete due to continuous water exposure",
    ]}
    ctaTitle="Get in Touch with Our Waterproofing Experts Today"
    ctaQuestion="Ready to protect your building from leaks and dampness?"
    ctaDescription="Whether it's a flat terrace or a sloped roof, we ensure long-lasting waterproof protection."
    image={serviceImage}
    ctaImage={ctaImage}
  />
);

export default TerraceRoof;
