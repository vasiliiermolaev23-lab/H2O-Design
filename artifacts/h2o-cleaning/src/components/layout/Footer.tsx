import { Link } from "wouter";
import logoPath from "@assets/h2o_logo_transparent.png";
import { Mail, Phone } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/">
              <div className="flex items-center gap-3 cursor-pointer inline-block">
                <img src={logoPath} alt="H2O Cleaning Logo" className="h-16 w-auto" />
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Premium professional cleaning services. We blend elegance with dependability to provide a luxury service that genuinely cares about your home.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/h2o_proclean/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <SiInstagram size={20} />
              </a>
              <a href="https://wa.me/971523025022" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="WhatsApp">
                <SiWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/">
                  <span className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer">Our Services</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer">Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-foreground">Our Services</h4>
            <ul className="space-y-4">
              <li className="text-muted-foreground text-sm">Residential Cleaning</li>
              <li className="text-muted-foreground text-sm">Short-Term Cleaning</li>
              <li className="text-muted-foreground text-sm">Deep Cleaning</li>
              <li className="text-muted-foreground text-sm">Move-in / Move-out</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-foreground">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="text-primary shrink-0" size={16} />
                <a href="tel:+971523025022" className="hover:text-primary transition-colors">+971 52 302 5022</a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="text-primary shrink-0" size={16} />
                <a href="mailto:h2ocleaningdxb@gmail.com" className="hover:text-primary transition-colors">h2ocleaningdxb@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <SiWhatsapp className="text-primary shrink-0" size={16} />
                <a href="https://wa.me/971523025022" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            &copy; {new Date().getFullYear()} H2O Cleaning. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
