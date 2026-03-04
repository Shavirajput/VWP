import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
const CTASection = () => {
  return <section className="py-20 gradient-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Reliable Waterproofing.{" "}
            <span className="text-primary-foreground">Long-Lasting Results.</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Don't let water damage compromise your property. Contact VWP today for a free 
            consultation and let our experts provide you with the best waterproofing solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-accent bg-primary-foreground text-primary">
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+917760835959" className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default CTASection;