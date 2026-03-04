import ServicePageTemplate from "@/components/ServicePageTemplate";
import serviceImage from "@/assets/service-liftpit.jpg";

const LiftPit = () => (
  <ServicePageTemplate
    title="Lift Pit Waterproofing"
    heroTitle="Ensure Your Lift Pit Stays Dry and Protected"
    description="Lift pits are one of the most critical areas in any building that require effective waterproofing. Continuous groundwater pressure, seepage through concrete joints, and poor drainage can lead to serious water leakage problems that damage lift equipment and compromise safety."
    boldText="specialized lift pit waterproofing solutions that protect lift shafts and foundations from water ingress, ensuring long-term safety, durability, and structural integrity"
    problemsTitle="Common Lift Pit Waterproofing Problems"
    problems={[
      "Groundwater seepage through cold joints or cracks in the lift pit walls",
      "Dampness and water accumulation at the base of lift pits",
      "Corrosion of lift machinery, cables, and electrical systems",
      "Fungal growth and unpleasant odors due to constant moisture",
      "Structural weakening caused by hydrostatic water pressure",
    ]}
    ctaTitle="Get in Touch with Our Waterproofing Experts Today"
    ctaQuestion="Ready to protect your lift pit from water ingress and corrosion?"
    ctaDescription="Our lift pit waterproofing solutions provide long-term protection against seepage, ensuring safety and structural durability."
    image={serviceImage}
  />
);

export default LiftPit;
