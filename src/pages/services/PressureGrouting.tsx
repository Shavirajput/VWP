import ServicePageTemplate from "@/components/ServicePageTemplate";
import serviceImage from "@/assets/service-crack.jpg";

const PressureGrouting = () => (
  <ServicePageTemplate
    title="Pressure Grouting"
    heroTitle="Stop Water Leakage with Advanced Pressure Grouting"
    description="Pressure grouting is a specialized technique used to fill voids, cracks, and gaps in concrete structures by injecting grout material under high pressure. This method is highly effective for stopping active leaks and strengthening weakened structures."
    boldText="professional pressure grouting services that effectively seal cracks, stop water ingress, and restore structural integrity in buildings and infrastructure"
    problemsTitle="Common Pressure Grouting Problems"
    problems={[
      "Active water leakage through concrete cracks",
      "Seepage through construction joints and cold joints",
      "Voids and honeycombing in concrete structures",
      "Water ingress in basements and underground areas",
      "Structural weakening due to water penetration",
    ]}
    ctaTitle="Get in Touch with Our Grouting Experts Today"
    ctaQuestion="Ready to stop active leaks and strengthen your structure?"
    ctaDescription="Our pressure grouting solutions effectively seal cracks and prevent water ingress for long-term protection."
    image={serviceImage}
  />
);

export default PressureGrouting;
