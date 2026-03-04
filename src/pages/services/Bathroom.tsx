import ServicePageTemplate from "@/components/ServicePageTemplate";
import serviceImage from "@/assets/service-bathroom.jpg";

const Bathroom = () => (
  <ServicePageTemplate
    title="Bathroom & Sunken Toilet Waterproofing"
    heroTitle="Keep Your Bathrooms Dry and Leak-Free"
    description="Bathrooms and sunken toilets are among the most moisture-prone areas in any building. Constant water exposure, poor drainage, and aging waterproofing membranes can lead to seepage, dampness, and structural damage to surrounding areas."
    boldText="specialized bathroom and sunken toilet waterproofing solutions that provide complete moisture protection, preventing leaks and extending the life of your bathroom infrastructure"
    problemsTitle="Common Bathroom Waterproofing Problems"
    problems={[
      "Water seepage from bathroom floors to rooms below",
      "Dampness and paint peeling on walls adjacent to bathrooms",
      "Leakage from sunken toilet areas causing ceiling damage",
      "Mold and fungal growth due to persistent moisture",
      "Deterioration of tiles and grout from water exposure",
    ]}
    ctaTitle="Get in Touch with Our Waterproofing Experts Today"
    ctaQuestion="Ready to stop bathroom leaks and water seepage?"
    ctaDescription="Our bathroom waterproofing solutions ensure complete moisture protection for your wet areas."
    image={serviceImage}
  />
);

export default Bathroom;
