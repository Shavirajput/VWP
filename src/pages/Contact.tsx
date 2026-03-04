import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { z } from "zod";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { useToast } from "@/hooks/use-toast";
import contactImage from "@/assets/contact-waterproofing.jpg";

const contactSchema = z.object({
  firstName: z.string().trim().max(100).optional(),
  lastName: z.string().trim().max(100).optional(),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  subject: z.string().trim().max(200).optional(),
  message: z.string().trim().nonempty({ message: "Message is required" }).max(2000),
});

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    lines: ["info@vwpwaterproofing.com", "vwpsolutions@gmail.com"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91 77608 35959"],
  },
  {
    icon: MapPin,
    title: "Location",
    lines: [
      "Khatha No.954 P No 28/2, 1st Floor, No.01, K Narayanapura Main Rd, BDS Nagar,",
      "Narayanapura, Bengaluru, Karnataka 560077.",
    ],
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setForm({ firstName: "", lastName: "", email: "", subject: "", message: "" });
  };

  const phoneNumber = "917760835959";
  const callNowUrl = `tel:+917760835959`;

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="gradient-navy py-16 md:py-20">
          <div className="container-custom text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground">Contact Us</h1>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-12 md:py-16">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-6">
              {contactCards.map((card) => (
                <div key={card.title} className="border rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                  <card.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-3">{card.title}</h3>
                  {card.lines.map((line, i) => (
                    <p key={i} className="text-muted-foreground text-sm">{line}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + Form */}
        <section className="py-12 md:py-16 bg-secondary">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left - CTA */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Let's Protect Your Structure with Expert Waterproofing Solutions
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  At VWP Solutions, we're ready to assist you with professional waterproofing services for residential, commercial, and industrial projects. Contact our team today for inspections, quotations, or expert guidance.
                </p>
                <a href={callNowUrl} className="btn-primary inline-block">
                  CALL NOW
                </a>
                <img
                  src={contactImage}
                  alt="Waterproofing work in progress"
                  className="w-full rounded-xl shadow-lg object-cover h-56 md:h-64 mt-4"
                />
              </div>

              {/* Right - Form */}
              <div className="bg-background rounded-xl shadow-lg p-8 border">
                <h3 className="text-xl font-bold text-foreground mb-1">Get in Touch</h3>
                <p className="text-muted-foreground text-sm mb-6 italic">
                  We're Just a Call Away from Making Your Structure Leak-Proof.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">First Name</label>
                      <input
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        className="w-full border rounded-md px-3 py-2 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Last Name</label>
                      <input
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="w-full border rounded-md px-3 py-2 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className="w-full border rounded-md px-3 py-2 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Subject</label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      className="w-full border rounded-md px-3 py-2 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      Your Message <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows={4}
                      className="w-full border rounded-md px-3 py-2 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-y"
                    />
                    {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                  </div>
                  <button type="submit" className="btn-primary">
                    Submit Form
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Google Map */}
        <section>
          <iframe
            title="VWP Waterproofing Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.541369276499!2d77.64474007685034!3d13.064839112823705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1976fbfdb7dd%3A0x31ae628dbf3a1303!2sVWP%20Waterproofing%20Solutions%20-%20Best%20Waterproofing%20Contractors%20In%20Bangalore!5e0!3m2!1sen!2sin!4v1772438340088!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Contact;
