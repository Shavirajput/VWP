import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import CTASection from "@/components/CTASection";

import terraceImg from "@/assets/service-terrace.jpg";
import basementImg from "@/assets/service-basement.jpg";
import bathroomImg from "@/assets/service-bathroom.jpg";
import wallImg from "@/assets/service-wall.jpg";
import podiumImg from "@/assets/service-podium.jpg";
import poolImg from "@/assets/service-pool.jpg";
import tankImg from "@/assets/service-tank.jpg";
import planterImg from "@/assets/service-planter.jpg";
import crackImg from "@/assets/service-crack.jpg";
import floorImg from "@/assets/service-floor.jpg";
import structureImg from "@/assets/service-structure.jpg";
import liftpitImg from "@/assets/service-liftpit.jpg";

const serviceCategories = [
  {
    title: "Waterproofing Services",
    services: [
      { name: "Terrace & Roof Waterproofing", image: terraceImg, href: "/services/terrace-roof" },
      { name: "Basement Waterproofing", image: basementImg, href: "/services/basement" },
      { name: "Bathroom & Sunken Toilet", image: bathroomImg, href: "/services/bathroom" },
      { name: "Exterior Wall Waterproofing", image: wallImg, href: "/services/exterior-wall" },
      { name: "Podium Waterproofing", image: podiumImg, href: "/services/podium" },
      { name: "Swimming Pool", image: poolImg, href: "/services/swimming-pool" },
      { name: "Retaining Wall", image: wallImg, href: "/services/retaining-wall" },
      { name: "Tank Waterproofing", image: tankImg, href: "/services/tank-waterproofing" },
      { name: "Planter Box", image: planterImg, href: "/services/planter-box" },
      { name: "Water Bodies", image: poolImg, href: "/services/water-bodies" },
    ],
  },
  {
    title: "Specialized Solutions",
    services: [
      { name: "Lift Pit Waterproofing", image: liftpitImg, href: "/services/lift-pit" },
      { name: "Tile Epoxy Grouting", image: bathroomImg, href: "/services/tile-epoxy-grouting" },
      { name: "Pressure Grouting", image: crackImg, href: "/services/pressure-grouting" },
      { name: "Crack Filling & Sealing", image: crackImg, href: "/services/crack-filling" },
      { name: "Expansion Joint Treatment", image: structureImg, href: "/services/expansion-joint" },
      { name: "Structural Retrofitting", image: structureImg, href: "/services/structural-retrofitting" },
      { name: "Epoxy Flooring", image: floorImg, href: "/services/epoxy-flooring" },
      { name: "Industrial Flooring", image: floorImg, href: "/services/industrial-flooring" },
      { name: "New & Existing Structure", image: structureImg, href: "/services/new-existing-structure" },
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="gradient-navy py-16">
          <div className="container-custom text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Our Services
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Comprehensive waterproofing and structural solutions for every type of building and surface.
            </p>
          </div>
        </section>

        {/* Service Categories */}
        {serviceCategories.map((category) => (
          <section key={category.title} className="py-16 bg-background even:bg-secondary">
            <div className="container-custom">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                {category.title}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="card-service group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-foreground mb-2">{service.name}</h3>
                      <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:text-accent transition-colors">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}

        <CTASection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Services;
