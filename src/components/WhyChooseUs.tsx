import { Award, Users, ThumbsUp, Clock } from "lucide-react";
import workerImg from "@/assets/worker-waterproofing.jpg";

const stats = [
{ icon: Award, value: "10+", label: "Years Experience" },
{ icon: Users, value: "2000+", label: "Projects Delivered" },
{ icon: ThumbsUp, value: "100%", label: "Customer Satisfaction" },
{ icon: Clock, value: "24/7", label: "Support Available" }];


const WhyChooseUs = () => {
  return (
    <section className="py-20 gradient-navy">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="font-medium text-sm uppercase tracking-wider text-primary-foreground">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-2 mb-4">
            Trusted Waterproofing Experts with{" "}
            <span className="text-primary-foreground">Proven Results</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            VWP is your reliable partner for all waterproofing needs with years of experience
            and thousands of successful projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Stats */}
          <div className="grid sm:grid-cols-2 gap-6">
            {stats.map((stat) =>
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl backdrop-blur-sm border border-primary-foreground/10 transition-all duration-300 text-secondary bg-primary-foreground">

                <stat.icon className="mx-auto mb-3 rounded-3xl px-[10px] py-[10px] bg-white text-black h-[60px] w-[60px]" />
                <div className="text-3xl font-bold mb-1 text-primary">{stat.value}</div>
                <div className="text-sm font-medium text-secondary-foreground">{stat.label}</div>
              </div>
            )}
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={workerImg}
              alt="VWP waterproofing workers on site"
              className="w-full h-[400px] object-cover"
              loading="lazy" />

          </div>
        </div>
      </div>
    </section>);

};

export default WhyChooseUs;