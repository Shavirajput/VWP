import { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const serviceCategories = [
  {
    title: "Waterproofing",
    items: [
      { name: "Terrace & Roof (Flat & Sloped)", href: "/services/terrace-roof" },
      { name: "Basement Waterproofing", href: "/services/basement" },
      { name: "Bathroom & Sunken Toilet", href: "/services/bathroom" },
      { name: "Exterior Wall Waterproofing", href: "/services/exterior-wall" },
      { name: "Podium Waterproofing", href: "/services/podium" },
      { name: "Swimming Pool", href: "/services/swimming-pool" },
      { name: "Retaining Wall", href: "/services/retaining-wall" },
      { name: "Tank Waterproofing", href: "/services/tank-waterproofing" },
      { name: "Planter Box", href: "/services/planter-box" },
      { name: "Water Bodies", href: "/services/water-bodies" },
    ],
  },
  {
    title: "Specialized Solutions",
    items: [
      { name: "Lift Pit Waterproofing", href: "/services/lift-pit" },
      { name: "Tile Epoxy Grouting", href: "/services/tile-epoxy-grouting" },
      { name: "Pressure Grouting", href: "/services/pressure-grouting" },
      { name: "Crack Filling & Sealing", href: "/services/crack-filling" },
      { name: "Expansion Joint Treatment", href: "/services/expansion-joint" },
      { name: "Structural Retrofitting", href: "/services/structural-retrofitting" },
      { name: "Epoxy Flooring", href: "/services/epoxy-flooring" },
      { name: "Industrial Flooring", href: "/services/industrial-flooring" },
      { name: "New & Existing Structure", href: "/services/new-existing-structure" },
    ],
  },
];

const allServices = serviceCategories.flatMap((c) => c.items);

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "#", hasDropdown: true },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="bg-card sticky top-0 z-50 shadow-md">
      <div className="container-custom">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/assets/logo.png"
              alt="VWP Solutions - The Waterproofing Specialists"
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setShowServices(true)}
                onMouseLeave={() => item.hasDropdown && setShowServices(false)}
              >
                {item.hasDropdown ? (
                  <button
                    className="flex items-center gap-1 text-foreground hover:text-primary px-4 py-3 rounded-lg transition-colors font-medium text-[15px]"
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${showServices ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="flex items-center gap-1 text-foreground hover:text-primary px-4 py-3 rounded-lg transition-colors font-medium text-[15px]"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Mega Menu Dropdown */}
                {item.hasDropdown && showServices && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[680px] bg-card rounded-xl shadow-2xl border border-border z-50 animate-fade-in overflow-hidden">
                    {/* Header */}
                    <div className="bg-primary px-6 py-3">
                      <h3 className="text-primary-foreground font-semibold text-sm tracking-wide uppercase">Our Services</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-0">
                      {serviceCategories.map((category) => (
                        <div key={category.title} className="p-5">
                          <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-3 pb-2 border-b border-border">
                            {category.title}
                          </h4>
                          <div className="space-y-0.5">
                            {category.items.map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="flex items-center gap-2 px-2 py-2 text-sm rounded-md hover:bg-primary/5 transition-all group"
                              >
                                <ChevronRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className="text-foreground group-hover:text-primary font-medium transition-colors text-[13px]">
                                  {service.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Footer CTA */}
                    <div className="bg-secondary/50 px-6 py-3 flex items-center justify-between border-t border-border">
                      <span className="text-sm text-muted-foreground">Need help choosing?</span>
                      <Link to="/contact" className="text-sm font-semibold text-primary hover:underline">
                        Get Free Consultation →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <Link to="/contact" className="hidden md:block btn-primary rounded-full px-8">
            Enquiry Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full flex items-center justify-between py-3 text-foreground font-medium"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileServicesOpen && (
                      <div className="pl-4 pb-2 space-y-1 animate-fade-in">
                        {allServices.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className="block py-3 text-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="btn-primary mt-4 w-full justify-center rounded-full"
              onClick={() => setIsOpen(false)}
            >
              Enquiry Now
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
