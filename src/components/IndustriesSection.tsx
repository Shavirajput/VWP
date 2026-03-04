import { useState } from "react";
import { Building2, Home, Factory, Building, CheckCircle } from "lucide-react";
import terraceImg from "@/assets/service-terrace.jpg";
import basementImg from "@/assets/service-basement.jpg";
import floorImg from "@/assets/service-floor.jpg";
import workerImg from "@/assets/worker-exterior.jpg";

const industriesData = [
  {
    icon: Building2,
    name: "Residential Buildings",
    image: terraceImg,
    description: "Comprehensive waterproofing solutions for residential buildings, ensuring your home stays dry and protected.",
    features: [
      "Complete waterproofing for residential complexes",
      "Expert basement and foundation waterproofing",
      "Roof and terrace waterproofing solutions",
      "Bathroom and wet area waterproofing",
      "Swimming pool waterproofing",
      "Water tank waterproofing",
    ],
  },
  {
    icon: Building,
    name: "Commercial Complexes",
    image: basementImg,
    description: "Professional waterproofing for commercial buildings, malls, offices, and mixed-use developments.",
    features: [
      "Podium and parking deck waterproofing",
      "Expansion joint treatment for large structures",
      "Industrial flooring solutions",
      "Exterior wall waterproofing",
      "Pressure grouting for active leaks",
      "Structural retrofitting solutions",
    ],
  },
  {
    icon: Factory,
    name: "Industrial Facilities",
    image: floorImg,
    description: "Specialized waterproofing for factories, warehouses, and industrial structures requiring heavy-duty protection.",
    features: [
      "Epoxy flooring for industrial spaces",
      "Chemical-resistant waterproofing",
      "STP and water treatment tank waterproofing",
      "Crack filling and sealing",
      "Retaining wall waterproofing",
      "Heavy-duty roof waterproofing",
    ],
  },
  {
    icon: Home,
    name: "Individual Homes",
    image: workerImg,
    description: "Tailored waterproofing solutions for individual villas and independent houses.",
    features: [
      "Terrace and roof waterproofing",
      "Bathroom leakage solutions",
      "Tile epoxy grouting",
      "Planter box waterproofing",
      "External wall dampness treatment",
      "Lift pit waterproofing",
    ],
  },
];

const IndustriesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = industriesData[activeIndex];

  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Coverage</span>
          <h2 className="section-title mt-2">
            Reliable Waterproofing Solutions{" "}
            <span className="text-accent">Across Diverse Industries</span>
          </h2>
          <p className="section-subtitle">
            VWP caters to all segments of the construction industry with specialized waterproofing solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Tabs */}
          <div className="space-y-3">
            {industriesData.map((industry, index) => (
              <button
                key={industry.name}
                onClick={() => setActiveIndex(index)}
                className={`w-full flex items-center gap-4 p-4 rounded-lg transition-all duration-300 text-left ${
                  index === activeIndex
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary hover:bg-primary/10 text-foreground"
                }`}
              >
                <industry.icon className="w-6 h-6 shrink-0" />
                <span className="font-medium">{industry.name}</span>
              </button>
            ))}

            {/* Image below tabs */}
            <div className="rounded-xl overflow-hidden mt-4 hidden lg:block">
              <img
                src={active.image}
                alt={active.name}
                className="w-full h-48 object-cover transition-all duration-300"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="bg-secondary rounded-2xl p-8 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-foreground">{active.name}</h3>
            <p className="text-muted-foreground mb-6">{active.description}</p>
            <div className="space-y-3">
              {active.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Mobile image */}
            <div className="rounded-xl overflow-hidden mt-6 lg:hidden">
              <img
                src={active.image}
                alt={active.name}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
