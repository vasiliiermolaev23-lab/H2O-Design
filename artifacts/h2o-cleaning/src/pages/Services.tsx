import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import cleanBathroom from "@/assets/clean-bathroom.png";
import cleanInterior from "@/assets/clean-interior.png";
import holidayHome from "@/assets/holiday-home.png";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const services = [
  {
    title: "Residential Cleaning",
    description: "Our signature service for homeowners who demand perfection. We provide comprehensive, meticulous cleaning for luxury residences, ensuring every surface — from hardwood to delicate marble — is treated with the appropriate care and specialized products.",
    image: cleanBathroom,
    features: ["Routine Maintenance (Weekly / Bi-weekly)", "High-dusting & Baseboard Cleaning", "Kitchen & Bath Sanitization", "Floor Care & Polishing"]
  },
  {
    title: "Deep Cleaning",
    description: "A transformative service designed to reset your home to its pristine state. Ideal for seasonal refreshes or preparing for significant events, our deep cleaning addresses the hidden dirt and neglected areas that regular cleaning might miss.",
    image: cleanInterior,
    features: ["Interior Cabinet & Appliance Cleaning", "Detailed Window & Track Cleaning", "Upholstery & Carpet Refresh", "Intensive Grout Scrubbing"]
  },
  {
    title: "Short-Term Cleaning",
    description: "Designed for holiday homes, Airbnb properties, and short-let apartments, this service ensures your property is guest-ready between every stay. We deliver a swift, thorough turnaround that maintains five-star standards — every single time.",
    image: holidayHome,
    features: ["Rapid Guest-Ready Turnovers", "Fresh Linen & Towel Arrangement", "Full Kitchen & Bathroom Reset", "Restocking & Presentation Check"]
  },
  {
    title: "Move-in / Move-out",
    description: "Starting fresh or handing over the keys? Our move-in and move-out cleaning ensures properties are spotless for new occupants or returned in immaculate condition. Every corner, cupboard, and surface is covered.",
    image: cleanBathroom,
    features: ["Full Property Deep Clean", "Inside Oven & Fridge Cleaning", "Wardrobe & Storage Detailing", "Final Inspection Walkthrough"]
  }
];

export default function Services() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="py-20 md:py-32 bg-card border-b border-border text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.p variants={fadeIn} className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Our Expertise
            </motion.p>
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
              Bespoke Cleaning Services
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
              We do not believe in one-size-fits-all. Every property is unique, and our services are tailored to meet the specific demands of your space and lifestyle.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
              >
                <div className="w-full lg:w-1/2 relative">
                  <div className="aspect-[4/3] overflow-hidden shadow-2xl relative z-10">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                  <div className={`absolute top-8 ${index % 2 !== 0 ? '-right-8' : '-left-8'} w-full h-full border border-primary/20 z-0 hidden md:block`}></div>
                </div>

                <div className="w-full lg:w-1/2 max-w-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-primary/50 font-serif text-6xl">{(index + 1).toString().padStart(2, '0')}</span>
                    <h2 className="text-3xl md:text-4xl font-serif">{service.title}</h2>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed font-light mb-8">
                    {service.description}
                  </p>
                  <div className="mb-10">
                    <h4 className="text-sm tracking-widest uppercase text-foreground mb-4 font-medium">Included Focus Areas</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                          <div className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/contact">
                    <Button data-testid={`button-enquire-${index}`} variant="outline" className="border-border text-foreground hover:bg-white/5 hover:text-primary text-sm tracking-widest uppercase px-8 h-12 rounded-none">
                      Enquire Now
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.p variants={fadeIn} className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4 text-center">
              Transparent Pricing
            </motion.p>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-serif mb-4 text-center">
              Price List
            </motion.h2>
            <motion.p variants={fadeIn} className="text-muted-foreground text-lg mb-16 font-light text-center">
              All prices are per hour unless stated otherwise. No hidden fees.
            </motion.p>

            {/* Cleaner Tiers */}
            <motion.div variants={fadeIn} className="mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-border">
                <div className="flex items-center justify-between gap-4 p-6 bg-background border-b border-border md:border-b-0">
                  <p className="font-serif text-lg text-foreground">Regular Cleaning</p>
                  <span className="text-primary font-medium text-sm tracking-wide whitespace-nowrap">50 AED / hour</span>
                </div>
                <div className="flex items-center justify-between gap-4 p-6 bg-background">
                  <p className="font-serif text-lg text-foreground">Regular Cleaning + Chemicals</p>
                  <span className="text-primary font-medium text-sm tracking-wide whitespace-nowrap">55 AED / hour</span>
                </div>
              </div>
            </motion.div>

            {/* Specialist Services */}
            <motion.div variants={fadeIn}>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 pl-1">Specialist Services</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-border">
                {[
                  { label: "Deep Cleaning", price: "85 AED / hour" },
                  { label: "Carpet Cleaning", price: "15 AED / m²" },
                  { label: "Sofa Cleaning", price: "60 AED / seat" },
                  { label: "Mattress Cleaning", price: "170–300 AED" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between gap-4 p-6 bg-background border-b border-border last:border-b-0 md:last:border-b-0 md:[&:nth-last-child(2)]:border-b-0">
                    <p className="font-serif text-lg text-foreground">{item.label}</p>
                    <span className="text-primary font-medium text-sm tracking-wide whitespace-nowrap">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background text-center border-t border-border">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-2xl mx-auto">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-serif mb-6">Ready for a pristine home?</motion.h2>
            <motion.p variants={fadeIn} className="text-muted-foreground text-lg mb-10 font-light">
              Contact us today to schedule your cleaning and discover the H2O difference.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link href="/contact">
                <Button data-testid="button-book-cta" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm tracking-widest uppercase px-10 h-14 rounded-none">
                  Book Now
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
