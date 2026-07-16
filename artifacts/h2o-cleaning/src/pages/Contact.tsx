import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

export default function Contact() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Get In Touch
            </p>
            <h1 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Let's discuss your cleaning needs.
            </h1>
            <p className="text-muted-foreground text-lg mb-16 font-light leading-relaxed">
              Whether you're looking for ongoing residential care, a short-term property refresh, or a deep clean, our team is ready to help. Reach out through any of the channels below.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <a href="tel:+971523025022" data-testid="link-phone" className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center shrink-0 group-hover:border-primary transition-colors">
                  <Phone className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-1">Phone</h3>
                  <p className="text-muted-foreground font-light group-hover:text-primary transition-colors">+971 52 302 5022</p>
                </div>
              </a>

              <a href="https://wa.me/971523025022" target="_blank" rel="noopener noreferrer" data-testid="link-whatsapp" className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center shrink-0 group-hover:border-primary transition-colors">
                  <SiWhatsapp className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-1">WhatsApp</h3>
                  <p className="text-muted-foreground font-light group-hover:text-primary transition-colors">Message us on WhatsApp</p>
                </div>
              </a>

              <a href="mailto:h2ocleaningdxb@gmail.com" data-testid="link-email" className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center shrink-0 group-hover:border-primary transition-colors">
                  <Mail className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-1">Email</h3>
                  <p className="text-muted-foreground font-light group-hover:text-primary transition-colors">h2ocleaningdxb@gmail.com</p>
                </div>
              </a>

              <a href="https://www.instagram.com/h2o_proclean/" target="_blank" rel="noopener noreferrer" data-testid="link-instagram" className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center shrink-0 group-hover:border-primary transition-colors">
                  <SiInstagram className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-1">Instagram</h3>
                  <p className="text-muted-foreground font-light group-hover:text-primary transition-colors">@h2o_proclean</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
