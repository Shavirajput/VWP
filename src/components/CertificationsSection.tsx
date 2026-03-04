import { Award, Shield, FileCheck, BadgeCheck } from "lucide-react";

const certifications = [
  {
    icon: Award,
    title: "ISO 9001:2015 Certified",
    description: "Quality management systems certification ensuring consistent quality in all our services.",
  },
  {
    icon: Shield,
    title: "Industry Approved Materials",
    description: "We use only certified and tested waterproofing materials from leading manufacturers.",
  },
  {
    icon: FileCheck,
    title: "Licensed & Insured",
    description: "Fully licensed waterproofing contractor with comprehensive insurance coverage.",
  },
  {
    icon: BadgeCheck,
    title: "Trained Professionals",
    description: "Our team undergoes regular training and certification from material manufacturers.",
  },
];

const memberships = [
  "Member of Indian Institute of Waterproofing",
  "Association of Waterproofing Professionals, Karnataka",
  "Certified Applicator - BASF, STP, Fosroc",
  "Member of Builders Association of India",
];

const products = [
  "BASF Construction Chemicals",
  "STP Limited",
  "Fosroc Chemicals",
  "Pidilite Industries",
  "Asian Paints SmartCare",
  "Sika India",
];

const CertificationsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Credentials</span>
          <h2 className="section-title mt-2">
            Building Trust Through{" "}
            <span className="text-accent">Certified Expertise</span>
          </h2>
          <p className="section-subtitle">
            VWP maintains the highest standards of quality through industry certifications and partnerships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="p-6 bg-secondary rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <cert.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-secondary rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4">Industry Memberships</h3>
            <ul className="space-y-3">
              {memberships.map((membership) => (
                <li key={membership} className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  <span>{membership}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-secondary rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4">Materials from Leading Brands</h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product} className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  <span>{product}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
