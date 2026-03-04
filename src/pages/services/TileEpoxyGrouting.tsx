import ServicePageTemplate from "@/components/ServicePageTemplate";
import serviceImage from "@/assets/service-floor.jpg";

const TileEpoxyGrouting = () => (
  <ServicePageTemplate
    title="Tile Epoxy Grouting"
    heroTitle="Seal Your Tiles with Professional Epoxy Grouting"
    description="Tile joints are vulnerable to water seepage, staining, and microbial growth. Traditional cement grout degrades over time, allowing moisture to penetrate beneath tiles, leading to dampness, loosening, and structural damage."
    boldText="specialized tile epoxy grouting solutions that provide watertight, stain-resistant, and long-lasting tile joints for bathrooms, kitchens, balconies, and commercial spaces"
    problemsTitle="Common Tile Grouting Problems"
    problems={[
      "Water seepage through tile joints causing dampness",
      "Staining and discoloration of grout lines",
      "Mold and fungal growth in wet areas",
      "Loose or hollow tiles due to moisture beneath",
      "Cracking and crumbling of cement-based grout",
    ]}
    ctaTitle="Get in Touch with Our Grouting Experts Today"
    ctaQuestion="Ready to seal your tiles with durable epoxy grouting?"
    ctaDescription="Our tile epoxy grouting solutions provide watertight, stain-resistant joints for long-lasting protection."
    image={serviceImage}
  />
);

export default TileEpoxyGrouting;
