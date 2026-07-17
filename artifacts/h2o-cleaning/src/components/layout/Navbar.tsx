import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoPath from "@assets/h2o_logo_transparent.png";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <img src={logoPath} alt="H2O Cleaning Logo" className="h-12 w-auto" />
              <span className="font-serif text-xl tracking-wide text-foreground">H2O Cleaning</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <span
                  className={`text-sm tracking-wide uppercase transition-colors hover:text-primary cursor-pointer ${
                    location === link.path ? "text-primary font-medium" : "text-foreground"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors uppercase tracking-wide text-xs px-6">
                Book a Cleaning
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col py-4 px-6 gap-4">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path}>
                  <span
                    className={`block py-2 text-lg tracking-wide uppercase transition-colors hover:text-primary cursor-pointer border-b border-border/50 ${
                      location === link.path ? "text-primary font-medium" : "text-foreground"
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              ))}
              <div className="pt-4">
                <Link href="/contact">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors uppercase tracking-wide text-sm py-6">
                    Book a Cleaning
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
