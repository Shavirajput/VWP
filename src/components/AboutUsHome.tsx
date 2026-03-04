import { Link } from "react-router-dom";
import { Users, Settings } from "lucide-react";
import aboutWorker from "@/assets/about-workers.jpg";
import aboutProject from "@/assets/about-project.jpg";

const AboutUsHome = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Images */}
          <div className="relative flex gap-4">
            <div className="flex flex-col gap-4">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src={aboutWorker}
                  alt="Waterproofing specialist at work"
                  className="w-full h-[320px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="bg-primary rounded-xl p-6 text-center text-primary-foreground">
                <span className="text-4xl font-bold block">10+</span>
                <span className="text-sm font-medium">Years of Experience</span>
              </div>
            </div>
            <div className="mt-8">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src={aboutProject}
                  alt="Waterproofing project in progress"
                  className="w-full h-[380px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-2">
              Durable Waterproofing for{" "}
              <span className="text-primary">Every Surface</span>
            </h2>
            {/* Decorative divider */}
            <div className="flex items-center gap-1 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="w-10 h-1 bg-primary rounded" />
            </div>
            <p className="text-muted-foreground text-lg mb-8">
              VWP Solutions is a trusted waterproofing company in Bengaluru, offering reliable,
              long-lasting solutions for residential, commercial, and industrial structures,
              including roofs, terraces, basements, swimming pools, and more.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 bg-secondary rounded-xl p-5">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Expertise & Experience</h4>
                  <p className="text-sm text-muted-foreground">
                    Skilled team using advanced techniques and high-quality materials.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-secondary rounded-xl p-5">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Comprehensive Solutions</h4>
                  <p className="text-sm text-muted-foreground">
                    Services cover new and existing structures, including epoxy flooring,
                    grouting, and expansion joint sealing.
                  </p>
                </div>
              </div>
            </div>

            <Link to="/about" className="btn-primary rounded-lg">
              Know More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHome;
