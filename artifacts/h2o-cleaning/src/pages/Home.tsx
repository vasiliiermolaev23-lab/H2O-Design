import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, Shield, Sparkles, Clock, Award, Users, Heart } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import cleanInterior from "@/assets/clean-interior.png";
import holidayHome from "@/assets/holiday-home.png";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Pristine luxury living room" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-background/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6 pt-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.p variants={fadeIn} className="text-primary font-medium tracking-[0.2em] uppercase text-sm md:text-base mb-4">
              Premium Professional Cleaning
            </motion.p>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground leading-[1.1] mb-6">
              Experience the Art of <br/>
              <span className="text-primary italic">Pristine Living</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-foreground/80 font-light max-w-2xl mb-10 leading-relaxed">
              We blend elegance with dependability to provide a luxury cleaning service that genuinely cares about the sanctuary you call home.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm tracking-widest uppercase px-8 h-14 rounded-none">
                  Book a Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-white/5 hover:text-primary text-sm tracking-widest uppercase px-8 h-14 rounded-none">
                  Explore Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features / Why Choose Us */}
      <section className="py-24 bg-card relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.h2 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="text-3xl md:text-5xl font-serif mb-4"
            >
              Excellence in Every Detail
            </motion.h2>
            <motion.p 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="text-muted-foreground text-lg"
            >
              Our standards are uncompromising. We deliver a meticulously tailored cleaning experience.
            </motion.p>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Sparkles, title: "Immaculate Detail", desc: "We clean beyond the surface, ensuring every corner of your space sparkles with perfection." },
              { icon: Shield, title: "Trusted Professionals", desc: "Fully vetted, insured, and highly trained staff you can trust implicitly in your home." },
              { icon: Clock, title: "Reliable Service", desc: "Punctuality and consistency are the hallmarks of our service. We respect your time." },
              { icon: CheckCircle2, title: "Eco-Conscious", desc: "Premium, environmentally friendly products that are tough on dirt but safe for your family." }
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeIn} className="p-8 border border-border/50 bg-background/50 hover:bg-background transition-colors duration-300">
                <feature.icon className="text-primary w-10 h-10 mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-serif mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.p variants={fadeIn} className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Who We Are
            </motion.p>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
              A Name You Can Trust in Your Home
            </motion.h2>
            <motion.p variants={fadeIn} className="text-muted-foreground text-lg font-light leading-relaxed">
              H2O Cleaning was built on a simple belief: your home deserves to be treated with the same care and respect you give it yourself. We are a dedicated team of professional cleaners serving clients across Dubai, committed to delivering a consistently exceptional standard — every single visit.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-px border border-border"
          >
            {[
              {
                icon: Heart,
                title: "We Care About Your Space",
                body: "We don't just clean — we take pride in the work we do. Every home we enter is treated with discretion, care, and the highest level of professionalism. We understand that inviting someone into your home requires trust, and we take that seriously."
              },
              {
                icon: Award,
                title: "Trained & Reliable",
                body: "Our cleaners are thoroughly vetted, trained, and held to strict quality standards. You will always receive the same high level of service, whether it is your first booking or your fiftieth. Consistency is not an accident — it is our promise."
              },
              {
                icon: Users,
                title: "Built on Reputation",
                body: "We have grown entirely through word of mouth and the trust of our clients. Every recommendation we receive is a reflection of the work we do. We are proud of the relationships we have built, and we work hard every day to earn them."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="bg-card p-10 flex flex-col gap-5"
              >
                <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center shrink-0">
                  <item.icon className="text-primary" size={20} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">{item.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] relative z-10 overflow-hidden shadow-2xl">
                <img src={cleanInterior} alt="Sparkling clean kitchen interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute top-10 -left-6 md:-left-10 w-full h-full border border-primary/30 z-0"></div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">The H2O Standard of Clean</h2>
              <p className="text-foreground/80 mb-6 text-lg font-light leading-relaxed">
                We believe that a clean environment is the foundation of a peaceful mind. Our team approaches every assignment with the reverence it deserves, treating your property not just as a job, but as a sanctuary.
              </p>
              <p className="text-foreground/80 mb-10 text-lg font-light leading-relaxed">
                Whether you require weekly upkeep or a transformative deep clean, our bespoke services are designed to elevate your living or working space to its highest potential.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Tailored cleaning protocols for luxury finishes",
                  "Discreet and professional conduct at all times",
                  "Quality assurance inspections on every visit"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/services">
                <Button variant="link" className="text-primary p-0 h-auto font-medium tracking-wide uppercase text-sm group">
                  View Our Services
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Short-Term Banner */}
      <section className="relative py-32">
        <div className="absolute inset-0 z-0">
          <img src={holidayHome} alt="Holiday home interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/90 mix-blend-multiply" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">Holiday Homes & Short Lets</p>
            <h2 className="text-3xl md:text-5xl font-serif mb-6">Guest-Ready, Every Time</h2>
            <p className="text-lg md:text-xl text-foreground/80 mb-10 font-light">
              We specialise in short-term property turnovers — getting your Airbnb or holiday home spotless between every stay, so your guests always arrive to perfection.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm tracking-widest uppercase px-8 h-14 rounded-none">
                Book a Turnover
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
