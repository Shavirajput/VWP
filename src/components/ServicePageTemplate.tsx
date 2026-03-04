import { Link } from "react-router-dom";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

interface ServicePageProps {
  title: string;
  heroTitle: string;
  description: string;
  boldText: string;
  problemsTitle: string;
  problems: string[];
  ctaTitle: string;
  ctaDescription: string;
  ctaQuestion: string;
  image: string;
  ctaImage?: string;
}

const ServicePageTemplate = ({
  title,
  heroTitle,
  description,
  boldText,
  problemsTitle,
  problems,
  ctaTitle,
  ctaDescription,
  ctaQuestion,
  image,
  ctaImage,
}: ServicePageProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="gradient-navy section-padding py-16 md:py-24">
          <div className="container-custom">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground max-w-3xl">
              {title}
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding py-16 md:py-20">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left - Image */}
              <div className="rounded-xl h-64 md:h-96 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>

              {/* Right - Text */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  {heroTitle}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {description}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  At <strong className="text-foreground">VWP Waterproofing</strong>, we provide{" "}
                  <strong className="text-foreground">{boldText}</strong>.
                </p>

                <h3 className="text-xl font-bold text-foreground pt-2">
                  {problemsTitle}
                </h3>
                <ul className="space-y-3">
                  {problems.map((problem) => (
                    <li key={problem} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding py-12 md:py-16">
          <div className="container-custom">
            <div className="grid lg:grid-cols-5 gap-0 rounded-xl overflow-hidden shadow-xl">
              <div className="lg:col-span-2 h-48 lg:h-auto overflow-hidden">
                <img
                  src={ctaImage || image}
                  alt={`${title} - Expert Solutions`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="lg:col-span-3 gradient-navy p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                  {ctaTitle}
                </h2>
                <p className="text-primary-foreground/80 mb-2">{ctaQuestion}</p>
                <p className="text-primary-foreground/80 mb-6">{ctaDescription}</p>
                <Link to="/contact" className="btn-accent self-start">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default ServicePageTemplate;
