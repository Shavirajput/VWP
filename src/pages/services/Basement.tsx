import ServicePageTemplate from "@/components/ServicePageTemplate";
import serviceImage from "@/assets/service-basement.jpg";

const Basement = () => (
  <ServicePageTemplate
    title="Basement Waterproofing"
    heroTitle="Keep Your Basement Dry and Protected"
    description="Basements are highly susceptible to water ingress due to their below-ground location. Groundwater pressure, poor drainage, and cracks in walls and floors can lead to persistent dampness, flooding, and structural damage."
    boldText="comprehensive basement waterproofing solutions that protect your underground spaces from water damage, ensuring a dry, safe, and usable environment"
    problemsTitle="Common Basement Waterproofing Problems"
    problems={[
      "Groundwater seepage through walls and floors",
      "Hydrostatic pressure causing cracks and leaks",
      "Dampness and musty odors in basement areas",
      "Mold and fungal growth affecting air quality",
      "Damage to stored items and equipment from moisture",
    ]}
    ctaTitle="Get in Touch with Our Waterproofing Experts Today"
    ctaQuestion="Ready to protect your basement from water damage?"
    ctaDescription="Our basement waterproofing solutions ensure a dry, safe environment for your underground spaces."
    image={serviceImage}
  />
);

export default Basement;
