import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

import gallery1 from "@/assets/gallery/gallery-1.jpg";
import gallery2 from "@/assets/gallery/gallery-2.jpg";
import gallery3 from "@/assets/gallery/gallery-3.jpg";
import gallery4 from "@/assets/gallery/gallery-4.jpg";
import gallery5 from "@/assets/gallery/gallery-5.jpg";
import gallery6 from "@/assets/gallery/gallery-6.jpg";
import gallery7 from "@/assets/gallery/gallery-7.jpg";
import gallery8 from "@/assets/gallery/gallery-8.jpg";
import gallery9 from "@/assets/gallery/gallery-9.jpg";
import gallery10 from "@/assets/gallery/gallery-10.jpg";
import gallery11 from "@/assets/gallery/gallery-11.jpg";
import gallery12 from "@/assets/gallery/gallery-12.jpg";
import gallery13 from "@/assets/gallery/gallery-13.jpg";
import gallery14 from "@/assets/gallery/gallery-14.jpg";
import gallery15 from "@/assets/gallery/gallery-15.jpg";
import gallery16 from "@/assets/gallery/gallery-16.jpg";
import gallery17 from "@/assets/gallery/gallery-17.jpg";
import gallery18 from "@/assets/gallery/gallery-18.jpg";
import gallery19 from "@/assets/gallery/gallery-19.jpg";
import gallery20 from "@/assets/gallery/gallery-20.jpg";
import gallery21 from "@/assets/gallery/gallery-21.jpg";
import gallery22 from "@/assets/gallery/gallery-22.jpg";
import gallery23 from "@/assets/gallery/gallery-23.jpg";
import gallery24 from "@/assets/gallery/gallery-24.jpg";
import gallery25 from "@/assets/gallery/gallery-25.jpg";
import gallery26 from "@/assets/gallery/gallery-26.jpg";
import gallery27 from "@/assets/gallery/gallery-27.jpg";
import gallery28 from "@/assets/gallery/gallery-28.jpg";
import gallery29 from "@/assets/gallery/gallery-29.jpg";
import gallery30 from "@/assets/gallery/gallery-30.jpg";
import gallery31 from "@/assets/gallery/gallery-31.jpg";
import gallery32 from "@/assets/gallery/gallery-32.jpg";
import gallery33 from "@/assets/gallery/gallery-33.jpg";
import gallery34 from "@/assets/gallery/gallery-34.jpg";
import gallery35 from "@/assets/gallery/gallery-35.jpg";
import gallery36 from "@/assets/gallery/gallery-36.jpg";
import gallery37 from "@/assets/gallery/gallery-37.jpg";
import gallery38 from "@/assets/gallery/gallery-38.jpg";
import gallery39 from "@/assets/gallery/gallery-39.jpg";
import gallery40 from "@/assets/gallery/gallery-40.jpg";
import gallery41 from "@/assets/gallery/gallery-41.jpg";
import gallery42 from "@/assets/gallery/gallery-42.jpg";
import gallery43 from "@/assets/gallery/gallery-43.jpg";
import gallery44 from "@/assets/gallery/gallery-44.jpg";
import gallery45 from "@/assets/gallery/gallery-45.jpg";
import gallery46 from "@/assets/gallery/gallery-46.jpg";
import gallery47 from "@/assets/gallery/gallery-47.jpg";
import gallery48 from "@/assets/gallery/gallery-48.jpg";
import gallery49 from "@/assets/gallery/gallery-49.jpg";
import gallery50 from "@/assets/gallery/gallery-50.jpg";
import gallery51 from "@/assets/gallery/gallery-51.jpg";
import gallery52 from "@/assets/gallery/gallery-52.jpg";
import gallery53 from "@/assets/gallery/gallery-53.jpg";
import gallery54 from "@/assets/gallery/gallery-54.jpg";

const galleryImages = [
  { src: gallery1, alt: "Terrace roof waterproofing coating application" },
  { src: gallery2, alt: "Red epoxy flooring installation" },
  { src: gallery3, alt: "Swimming pool waterproofing" },
  { src: gallery13, alt: "Basement waterproofing construction site" },
  { src: gallery14, alt: "Swimming pool tile grouting work" },
  { src: gallery15, alt: "Roof tile waterproofing coating" },
  { src: gallery16, alt: "Epoxy flooring in commercial hotel lobby" },
  { src: gallery17, alt: "Commercial building rooftop waterproofing" },
  { src: gallery18, alt: "Terrazzo flooring in commercial building" },
  { src: gallery4, alt: "Basement waterproofing membrane" },
  { src: gallery5, alt: "Exterior wall waterproofing with scaffolding" },
  { src: gallery6, alt: "Concrete crack filling and sealing" },
  { src: gallery19, alt: "Tile grouting and renovation work" },
  { src: gallery20, alt: "Wall texture and crack repair" },
  { src: gallery21, alt: "Planter box waterproofing services" },
  { src: gallery26, alt: "Terrace waterproofing coating completed" },
  { src: gallery27, alt: "Tile epoxy grouting before and after" },
  { src: gallery28, alt: "Balcony tile grouting work in progress" },
  { src: gallery7, alt: "Podium deck waterproofing" },
  { src: gallery8, alt: "Retaining wall waterproofing" },
  { src: gallery9, alt: "Pressure grouting injection" },
  { src: gallery29, alt: "Floor tile grouting preparation" },
  { src: gallery30, alt: "Tile grouting by skilled worker" },
  { src: gallery31, alt: "Staircase and floor epoxy grouting" },
  { src: gallery22, alt: "Planter box waterproofing closeup" },
  { src: gallery23, alt: "Bituminous membrane waterproofing application" },
  { src: gallery24, alt: "Swimming pool waterproofing service" },
  { src: gallery32, alt: "Red epoxy waterproofing for water body" },
  { src: gallery33, alt: "Water tank waterproofing before and after" },
  { src: gallery34, alt: "Water tank and sump waterproofing collage" },
  { src: gallery10, alt: "Rooftop waterproofing completed project" },
  { src: gallery11, alt: "Bathroom waterproofing" },
  { src: gallery12, alt: "Expansion joint treatment" },
  { src: gallery25, alt: "Sunken area bathroom waterproofing" },
  { src: gallery35, alt: "Swimming pool edge waterproofing" },
  { src: gallery36, alt: "Blue waterproofing coating application" },
  { src: gallery37, alt: "Structural retrofitting rebar work" },
  { src: gallery38, alt: "Ceiling crack and water seepage repair" },
  { src: gallery39, alt: "Basement waterproofing completed" },
  { src: gallery40, alt: "Podium deck waterproofing with drainage" },
  { src: gallery41, alt: "Expansion joint crack closeup" },
  { src: gallery42, alt: "Planter box bituminous waterproofing" },
  { src: gallery43, alt: "Planter box waterproofing membrane" },
  { src: gallery44, alt: "Podium membrane waterproofing installation" },
  { src: gallery45, alt: "Podium waterproofing coating service" },
  { src: gallery46, alt: "Foundation construction waterproofing site" },
  { src: gallery47, alt: "Building exterior waterproofing reflection" },
  { src: gallery48, alt: "Bathroom floor waterproofing coating" },
  { src: gallery49, alt: "Swimming pool waterproofing maintenance" },
  { src: gallery50, alt: "Sunken bathroom waterproofing coating" },
  { src: gallery51, alt: "Terrace roof waterproofing completed" },
  { src: gallery52, alt: "Basement wall seepage treatment" },
  { src: gallery53, alt: "Foundation bituminous waterproofing" },
  { src: gallery54, alt: "Retaining wall waterproofing membrane" },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />

      {/* Hero Section */}
      <section className="gradient-navy py-16 text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Gallery
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Explore our portfolio of completed waterproofing projects across residential, commercial, and industrial sectors.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg group cursor-pointer shadow-md"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Gallery;
