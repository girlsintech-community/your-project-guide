import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Sessions", href: "#sessions" },
  { label: "Impact", href: "/impact", isRoute: true },
];

const humansLinks = [
  { label: "Speakers", href: "#speakers" },
  { label: "Moderators", href: "#moderators" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHumansOpen, setIsHumansOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (location.pathname !== "/") {
      window.location.href = "/" + href;
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    setIsHumansOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass shadow-glass py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="font-heading text-2xl font-bold">
              <span className="text-foreground">Empower</span>
              <span className="text-primary">Her</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="text-foreground/70 hover:text-primary transition-colors font-medium"
                  >
                    {link.label}
                  </button>
                )
              ))}
              
              {/* Humans Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsHumansOpen(!isHumansOpen)}
                  className="flex items-center gap-1 text-foreground/70 hover:text-primary transition-colors font-medium"
                >
                  Humans
                  <ChevronDown className={`w-4 h-4 transition-transform ${isHumansOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isHumansOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full mt-2 left-0 glass-card rounded-xl py-2 min-w-[140px] shadow-glass"
                    >
                      {humansLinks.map((link) => (
                        <button
                          key={link.label}
                          onClick={() => handleNavClick(link.href)}
                          className="block w-full text-left px-4 py-2 text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors font-medium"
                        >
                          {link.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <ThemeToggle />

              <Button
                size="sm"
                variant="hero"
                onClick={() => handleNavClick('#sessions')}
              >
                Watch Sessions
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                className="p-2 text-foreground"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 glass shadow-glass md:hidden"
          >
            <div className="container px-6 py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  link.isRoute ? (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="text-foreground font-medium py-2 hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      key={link.label}
                      onClick={() => handleNavClick(link.href)}
                      className="text-left text-foreground font-medium py-2 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </button>
                  )
                ))}
                
                {/* Mobile Humans Section */}
                <div className="border-t border-border/30 pt-4">
                  <span className="text-muted-foreground text-sm font-medium">Humans</span>
                  {humansLinks.map((link) => (
                    <button
                      key={link.label}
                      onClick={() => handleNavClick(link.href)}
                      className="block w-full text-left text-foreground font-medium py-2 pl-4 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>

                <Button
                  variant="hero"
                  className="mt-2"
                  onClick={() => handleNavClick('#sessions')}
                >
                  Watch Sessions
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
