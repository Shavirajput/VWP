import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Property Developer",
    company: "Prestige Group",
    content: "VWP Waterproofing has been our trusted partner for over 5 years. Their expertise and commitment to quality is unmatched. Highly recommended for any waterproofing needs.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Architect",
    company: "Design Studios",
    content: "The team at VWP understands the importance of proper waterproofing in construction. Their solutions are comprehensive and their execution is flawless.",
    rating: 5,
  },
  {
    name: "Suresh Reddy",
    role: "Home Owner",
    company: "Whitefield, Bengaluru",
    content: "After years of struggling with terrace leakage, VWP provided a permanent solution. It's been 3 years and not a single leak. Excellent service!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="section-title mt-2">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-background p-8 rounded-xl shadow-lg relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-secondary" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-accent">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
