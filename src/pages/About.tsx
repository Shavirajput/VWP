import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Eye, Target, Heart, CheckCircle, Users, ClipboardCheck, Package, Clock, ThumbsUp } from "lucide-react";
import aboutWorkers from "@/assets/about-workers.jpg";
import aboutProject from "@/assets/about-project.jpg";
const visionMissionValues = [{
  icon: Eye,
  title: "Our Vision",
  description: "To be the most trusted and innovative waterproofing solutions provider, delivering long-lasting protection and setting new standards in quality, reliability, and customer satisfaction across the industry."
}, {
  icon: Target,
  title: "Our Mission",
  description: "To deliver reliable, long-lasting waterproofing solutions using advanced technology and expert workmanship, protecting every structure from water damage while ensuring customer satisfaction, safety, and trust."
}, {
  icon: Heart,
  title: "Our Values",
  description: "We value integrity, quality, safety, innovation, and customer commitment, delivering every project with professionalism, transparency, and long-term reliability while building strong client relationships."
}];
const whyChooseItems = [{
  icon: CheckCircle,
  title: "Proven Expertise",
  description: "Years of hands-on experience in advanced waterproofing solutions for residential, commercial, and industrial projects."
}, {
  icon: Users,
  title: "Skilled Professionals",
  description: "Our trained team ensures flawless execution and attention to detail in every application."
}, {
  icon: Package,
  title: "Quality Materials",
  description: "We use only certified, high-grade waterproofing products for long-lasting durability."
}, {
  icon: ClipboardCheck,
  title: "Tailored Solutions",
  description: "We design customized waterproofing plans to match your property's unique needs."
}, {
  icon: Clock,
  title: "On-Time Delivery",
  description: "Efficient processes and planning ensure timely project completion without compromising quality."
}, {
  icon: ThumbsUp,
  title: "Customer Satisfaction",
  description: "We build trust through transparency, after-service support, and guaranteed results."
}];
const About = () => {
  return <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="gradient-navy py-16 md:py-20">
          <div className="container-custom text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground">About Us</h1>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 md:py-20">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* Left - Images */}
              <div className="space-y-6">
                <img src={aboutWorkers} alt="VWP waterproofing team at work" className="w-full rounded-xl shadow-lg object-cover h-64 md:h-72" />
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our team of certified waterproofing experts{" "}
                  <strong className="text-foreground">is dedicated to providing top-tier solutions</strong> that not only stop leaks but also extend the life and value of your property. Whether it's a residential, commercial, or industrial project, we use cutting-edge and industry-proven methods to ensure complete protection. From membrane systems and liquid coatings to foundation sealing and roof treatments — we deliver{" "}
                  <strong className="text-foreground">efficiency, safety, and perfection in every layer.</strong>
                </p>
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground">10 +</div>
                    <div className="text-sm text-muted-foreground">Years of Experience</div>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground">2,000 +</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                </div>
              </div>

              {/* Right - Text */}
              <div className="space-y-4">
                <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Passion Meets Protection –{" "}
                  <span className="text-primary">Transforming Waterproofing</span>
                </h2>
                <div className="flex items-center gap-1 my-2">
                  <span className="w-3 h-3 rounded-full bg-accent" />
                  <span className="w-3 h-3 rounded-full bg-primary" />
                  <span className="w-12 h-0.5 bg-primary" />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  At <strong className="text-foreground">VWP Waterproofing</strong>, we believe peace of mind starts with a leak-free foundation. With proven expertise and innovation, we deliver durable waterproofing solutions that protect your property from water damage and weather impact.
                </p>
                <img src={aboutProject} alt="Waterproofing project" className="w-full rounded-xl shadow-lg object-cover h-56 md:h-64 mt-4" />
              </div>
            </div>
          </div>
        </section>

        {/* Vision, Mission & Values */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Our Vision, Mission & Values
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">
                Guiding principles inspiring innovation, integrity, and{" "}
                <span className="text-primary">excellence in all we do</span>
              </h2>
              <div className="flex items-center justify-center gap-1 mt-4">
                <span className="w-3 h-3 rounded-full bg-accent" />
                <span className="w-3 h-3 rounded-full bg-primary" />
                <span className="w-12 h-0.5 bg-primary" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {visionMissionValues.map(item => <div key={item.title} className="bg-background rounded-xl p-8 shadow-sm border">
                  <div className="flex items-center gap-3 mb-4">
                    <item.icon className="w-8 h-8 text-accent" />
                    <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-20 gradient-navy">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="font-medium text-sm uppercase tracking-wider text-primary-foreground">Why Choose Us?</span>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mt-2">
                Reliable protection, expert solutions,{" "}
                <span className="text-primary-foreground">and lasting performance you can count on.</span>
              </h2>
              <div className="flex items-center justify-center gap-1 mt-4">
                <span className="w-3 h-3 rounded-full bg-accent" />
                <span className="w-3 h-3 rounded-full bg-primary-foreground/50" />
                <span className="w-12 h-0.5 bg-primary-foreground/50" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {whyChooseItems.map(item => <div key={item.title} className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6 hover:bg-primary-foreground/10 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <item.icon className="w-7 h-7 text-accent" />
                    <h3 className="text-lg font-semibold text-primary-foreground">{item.title}</h3>
                  </div>
                  <p className="text-primary-foreground/70 text-sm">{item.description}</p>
                </div>)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>;
};
export default About;