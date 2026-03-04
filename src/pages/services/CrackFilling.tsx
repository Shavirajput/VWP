import ServicePageTemplate from "@/components/ServicePageTemplate";
import serviceImage from "@/assets/service-crack.jpg";

const CrackFilling = () => (
  <ServicePageTemplate
    title="Crack Filling & Sealing"
    heroTitle="Prevent Structural Damage and Water Seepage"
    description="Cracks in concrete, walls, floors, and structural elements are among the most common issues in both residential and commercial buildings. If left untreated, they can allow water seepage, weaken structures, and lead to costly repairs over time."
    boldText="expert crack filling and sealing solutions that restore structural integrity, prevent water ingress, and extend the lifespan of your surfaces"
    problemsTitle="Common Crack Problems"
    problems={[
      "Hairline or visible cracks in walls, floors, and ceilings",
      "Water seepage through cracks leading to damp patches",
      "Widening cracks due to structural movement or environmental stress",
      "Mold, fungus, and unpleasant odors caused by moisture penetration",
      "Damage to coatings, tiles, or plaster finishes",
    ]}
    ctaTitle="Get in Touch with Our Repair Experts Today"
    ctaQuestion="Ready to stop leaks and prevent structural damage?"
    ctaDescription="Our crack filling and sealing solutions effectively repair gaps and prevent water ingress, ensuring long-lasting surface protection."
    image={serviceImage}
  />
);

export default CrackFilling;
