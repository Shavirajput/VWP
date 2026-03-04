import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import terraceImg from "@/assets/service-terrace.jpg";
import basementImg from "@/assets/service-basement.jpg";
import podiumImg from "@/assets/service-podium.jpg";
import poolImg from "@/assets/service-pool.jpg";
import wallImg from "@/assets/service-wall.jpg";
import bathroomImg from "@/assets/service-bathroom.jpg";
import crackImg from "@/assets/service-crack.jpg";
import tankImg from "@/assets/service-tank.jpg";
import floorImg from "@/assets/service-floor.jpg";

const services = [
  { title: "Terrace / Roof Waterproofing", image: terraceImg, href: "/services/terrace-roof" },
  { title: "Basement Waterproofing", image: basementImg, href: "/services/basement" },
  { title: "Podium Waterproofing", image: podiumImg, href: "/services/podium" },
  { title: "Swimming Pool Waterproofing", image: poolImg, href: "/services/swimming-pool" },
  { title: "Exterior Wall Waterproofing", image: wallImg, href: "/services/exterior-wall" },
  { title: "Bathroom Waterproofing", image: bathroomImg, href: "/services/bathroom" },
  { title: "Crack Filling & Sealing", image: crackImg, href: "/services/crack-filling" },
  { title: "Tank Waterproofing", image: tankImg, href: "/services/tank-waterproofing" },
  { title: "Epoxy Flooring", image: floorImg, href: "/services/epoxy-flooring" },
];

const VISIBLE = 3;

const ServicesSection = () => {
  const [startIndex, setStartIndex] = useState(0);

  const next = () => setStartIndex((prev) => (prev + 1) % services.length);
  const prev = () => setStartIndex((prev) => (prev - 1 + services.length) % services.length);

  const visibleServices = Array.from({ length: VISIBLE }, (_, i) =>
    services[(startIndex + i) % services.length]
  );

  return (
    <section className="py-20 bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Expertise</span>
          <h2 className="section-title mt-2">
            Comprehensive Solutions for{" "}
            <span className="text-accent">Leak-Free, Durable Structures</span>
          </h2>
          <p className="section-subtitle">
            VWP offers a wide range of waterproofing services to protect your property from water damage.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity"
            aria-label="Previous services"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity"
            aria-label="Next services"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
            {visibleServices.map((service) => (
              <div key={service.title} className="card-service animate-fade-in">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <Link
                    to={service.href}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setStartIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === startIndex ? "bg-primary w-6" : "bg-primary/30"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
