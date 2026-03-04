import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2">
      <div className="container-custom flex flex-wrap justify-between items-center text-sm">
        <div className="flex items-center gap-6">
          <a href="tel:+917760835959" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone className="w-4 h-4" />
            <span>+91 77608 35959</span>
          </a>
          <a href="mailto:info@vwpwaterproofing.com" className="hidden sm:flex items-center gap-2 hover:text-accent transition-colors">
            <Mail className="w-4 h-4" />
            <span>info@vwpwaterproofing.com</span>
          </a>
          <span className="hidden md:flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Bengaluru, Karnataka</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-accent transition-colors"><Facebook className="w-4 h-4" /></a>
          <a href="#" className="hover:text-accent transition-colors"><Twitter className="w-4 h-4" /></a>
          <a href="#" className="hover:text-accent transition-colors"><Instagram className="w-4 h-4" /></a>
          <a href="#" className="hover:text-accent transition-colors"><Linkedin className="w-4 h-4" /></a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
