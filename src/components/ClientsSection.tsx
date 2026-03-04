import { ChevronRight } from "lucide-react";
import watercolorBg from "@/assets/watercolor-clients-bg.jpg";

const clients = [
  // Column 1
  "Svamitva Landmarks",
  "SMR Vinay Endeavour Apartment",
  "SMR Builders (P) LTD",
  "Shankeshwara Landmarks LLP",
  "Sai Raghavendra Constructions",
  "Ryan International Academy",
  "Sattva Divinity Apartment",
  "Continental Exporters",
  "Chitrakut Basil Apartments",
  "Cascading Meadows",
  "Charge Infra",
  "Century Celeste Apartment",
  "Axis Infinity",
  "Chitrakut Century Apartment",
  "Alpine view apartments",
  "SMR Vinay Galaxy Apartment",
  "Home Lane",
  "Aapka Painter Solutions Pvt. Ltd",
  "Nagarabhavi Club (R)",
  "DVR Properties",
  "Workie Private Limited",
  "SMR Blue Valley Projects Pvt Ltd",
  // Column 2
  "SAF Tejas Bloomingdale",
  "Autoliv India Private Limited",
  "Karan Balaji Heights",
  "Jiva Projects",
  "Prestige Casablanca",
  "Maruthi Enclave",
  "Svamitva Emerald Square",
  "SMR Vinay Estella Apartment",
  "Golden Mark Builders & Developers",
  "Bharani Constructions",
  "Pinnacle Prime Constructions Pvt Ltd",
  "N G Developers Design Innovation",
  "Cube Space",
  "Infra Support",
  "M/s. Styczne Pvt Ltd",
  "Ceder Woods Apartment",
  "Prestige Sunny Side Oak",
  "Preeti Developers Private Limited",
  "Shelcel Biozeen Technologies Private Limited",
  "Svamitva Floresta",
  "axis raga",
  "Axis Concept Construction Pvt Ltd",
  // Column 3
  "Sree Pride Apartments",
  "Aryan Moon Stone Apartments",
  "Prestige greenwoods apartment",
  "TS Constructions",
  "Binary system",
  "Teva Pharmaceuticals",
  "Lotus Labs Private Limited",
  "Isha Institute Of Inner Science",
  "Artizen Interiors Pvt. Ltd.",
  "Snow Drop Apartments",
  "Raalak Enterprises",
  "Ganapa Constructions",
  "Indar Constructions",
  "Aqua Green Engineers",
  "Xylem Office Owners Association (XOOA)",
  "Spectra Cypress Apartment Owners Welfare Association",
  "Sanvik Engineers(I) Pvt Ltd",
  "Skhandha Developers",
  "Yolo Property Services Pvt Ltd",
  "Skandapurvaja Buildtech Pvt Ltd",
  "M/s. Shankeshwar Ventures",
  "Radiance Realty Developers India Limited",
];

const ClientsSection = () => {
  // Split clients into 3 columns
  const columnSize = Math.ceil(clients.length / 3);
  const column1 = clients.slice(0, columnSize);
  const column2 = clients.slice(columnSize, columnSize * 2);
  const column3 = clients.slice(columnSize * 2);

  return (
    <section
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${watercolorBg})` }}
    >
      <div className="absolute inset-0 bg-background/60" />
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Clientele</span>
          <h2 className="section-title mt-2">
            Trusted by Leading Builders,{" "}
            <span className="text-accent">Architects, and Property Owners</span>
          </h2>
          <div className="flex items-center justify-center gap-1 mt-4 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="w-12 h-1 bg-accent rounded"></span>
          </div>
          <p className="section-subtitle max-w-4xl mx-auto">
            Over the years, VWP Waterproofing Solutions has proudly partnered with a wide range of clients across residential, commercial, and industrial sectors. Our commitment to quality workmanship, reliability, and long-term protection has earned us lasting relationships with some of the most respected names in the construction industry.
          </p>
        </div>

        {/* Client list card */}
        <div className="bg-background/80 backdrop-blur-sm border-2 border-dashed border-primary/30 rounded-xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
            {/* Column 1 */}
            <div className="space-y-3">
              {column1.map((client) => (
                <div key={client} className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{client}</span>
                </div>
              ))}
            </div>
            {/* Column 2 */}
            <div className="space-y-3">
              {column2.map((client) => (
                <div key={client} className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{client}</span>
                </div>
              ))}
            </div>
            {/* Column 3 */}
            <div className="space-y-3">
              {column3.map((client) => (
                <div key={client} className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
