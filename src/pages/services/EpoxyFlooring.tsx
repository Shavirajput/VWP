import ServicePageTemplate from "@/components/ServicePageTemplate";
import serviceImage from "@/assets/service-floor.jpg";

const EpoxyFlooring = () => (
  <ServicePageTemplate
    title="Epoxy Flooring Solutions"
    heroTitle="Upgrade to Seamless, Durable Flooring"
    description="Industrial, commercial, and residential spaces demand flooring systems that combine strength, durability, and style. Ordinary concrete floors often suffer from cracks, dusting, and chemical damage over time."
    boldText="high-performance epoxy flooring solutions that enhance surface durability, resist wear and tear, and deliver a seamless, attractive finish suitable for every environment"
    problemsTitle="Common Flooring Problems"
    problems={[
      "Cracks and surface dusting due to heavy foot or machinery movement",
      "Stains and chemical damage in industrial and workshop floors",
      "Poor surface appearance and loss of gloss",
      "Difficult-to-clean and uneven floor surfaces",
      "Water or oil absorption leading to long-term deterioration",
    ]}
    ctaTitle="Get in Touch with Our Flooring Experts Today"
    ctaQuestion="Ready to enhance your floors with strength and style?"
    ctaDescription="Our epoxy flooring solutions deliver a seamless, durable, and easy-to-maintain finish for industrial, commercial, and residential spaces."
    image={serviceImage}
  />
);

export default EpoxyFlooring;
