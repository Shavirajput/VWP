import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const serviceColumns = [
  [
    { name: "Terrace & Roof Waterproofing (Flat & Sloped Roofs)", href: "/services/terrace-roof" },
    { name: "Tile Epoxy Grouting", href: "/services/tile-epoxy-grouting" },
    { name: "Exterior Wall Waterproofing", href: "/services/exterior-wall" },
    { name: "Pressure Grouting", href: "/services/pressure-grouting" },
    { name: "Retaining Wall Waterproofing", href: "/services/retaining-wall" },
  ],
  [
    { name: "Structural Retrofitting Solutions", href: "/services/structural-retrofitting" },
    { name: "Bathroom & Sunken Toilet Waterproofing", href: "/services/bathroom" },
    { name: "Basement Waterproofing", href: "/services/basement" },
    { name: "Overhead, Underground & STP Tank Waterproofing", href: "/services/tank-waterproofing" },
    { name: "Podium Waterproofing", href: "/services/podium" },
  ],
  [
    { name: "Swimming Pool Waterproofing", href: "/services/swimming-pool" },
    { name: "Epoxy Flooring Solutions", href: "/services/epoxy-flooring" },
    { name: "Planter Box Waterproofing", href: "/services/planter-box" },
    { name: "Water Bodies Waterproofing", href: "/services/water-bodies" },
    { name: "Lift Pit Waterproofing", href: "/services/lift-pit" },
  ],
  [
    { name: "Crack Filling & Sealing", href: "/services/crack-filling" },
    { name: "Expansion Joint Treatment", href: "/services/expansion-joint" },
    { name: "Industrial Flooring Solutions", href: "/services/industrial-flooring" },
    { name: "New & Existing Structure Waterproofing", href: "/services/new-existing-structure" },
  ],
];

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "hsl(131, 88%, 95%)" }}>
      {/* Contact Info Bar */}
      <div className="container-custom py-10">
        <div className="flex flex-wrap items-center justify-center gap-12 mb-10">
          <div className="flex items-center gap-4">
            <img src="/assets/logo.png" alt="VWP Solutions" className="h-20 w-auto" />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-bold text-foreground">Phone Number</p>
              <a href="tel:+917760835959" className="text-primary hover:underline">+91 77608 35959</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-bold text-foreground">E-Mail</p>
              <p className="text-muted-foreground text-sm">info@vwpwaterproofing.com</p>
              <p className="text-muted-foreground text-sm">vwpsolutions@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-bold text-foreground">Address</p>
              <p className="text-muted-foreground text-sm">954, K Narayanapura Main Road,</p>
              <p className="text-muted-foreground text-sm">Bengaluru – 560077, Karnataka,</p>
            </div>
          </div>
        </div>

        <hr className="border-primary/20 mb-10" />

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">Contact Us</Link></li>
            </ul>
            <div className="flex gap-2 mt-4">
              <a href="#" className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-80 transition-opacity">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-80 transition-opacity">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-80 transition-opacity">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Service Columns */}
          {serviceColumns.map((col, i) => (
            <div key={i}>
              <h4 className="font-bold text-foreground mb-4">Our Services</h4>
              <ul className="space-y-2">
                {col.map((s) => (
                  <li key={s.href}>
                    <Link to={s.href} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary/20">
        <div className="container-custom py-4 text-center">
          <p className="text-muted-foreground text-sm">
            ©2025. VWP Waterproofing Solutions. All Rights Reserved | Designed & Developed By Adyasoft Technologies Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
