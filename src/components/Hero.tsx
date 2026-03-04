import { ArrowRight, Shield, CheckCircle, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-waterproofing.jpg";
const Hero = () => {
  return <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground animate-slide-in-left">
            <span className="inline-block bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium mb-6">
              Trusted Waterproofing Specialists
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Expert Waterproofing Solutions in{" "}
              <span className="text-primary-foreground">Bengaluru</span>
            </h1>
            <p className="text-lg opacity-90 mb-8 max-w-xl">
              VWP provides premium waterproofing services for residential, commercial, 
              and industrial buildings. Protect your investment with our proven solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-accent">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/services" className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Our Services
              </Link>
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="hidden lg:block animate-slide-in-right">
            <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary-foreground">10+</span>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">EXPERTISE</span>
                  <h3 className="text-xl font-semibold">Years of Service</h3>
                </div>
              </div>
              
              <h4 className="text-2xl font-bold mb-4">
                Durable Waterproofing for{" "}
                <span className="text-accent">Every Surface</span>
              </h4>
              <p className="text-muted-foreground mb-6">
                VWP Waterproofing is trusted by leading builders and property owners 
                for comprehensive waterproofing solutions.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h5 className="font-semibold">End-to-End Supervision</h5>
                    <p className="text-sm text-muted-foreground">Complete project management from start to finish</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h5 className="font-semibold">Comprehensive Solutions</h5>
                    <p className="text-sm text-muted-foreground">All types of waterproofing under one roof</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h5 className="font-semibold">Certified Experts</h5>
                    <p className="text-sm text-muted-foreground">Industry-certified professionals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;