import { motion } from "framer-motion";
import { Heart, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-16">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-heading text-2xl font-bold text-background mb-4">
                Empower<span className="text-coral">Her</span>
              </h3>
              <p className="text-background/70 text-sm leading-relaxed mb-4">
                A celebration of strength, resilience, and inclusivity. 
                Elevate • Inspire • Lead
              </p>
              <p className="text-background/50 text-xs">
                Organized by Girls in Tech
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="font-semibold text-background mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-background/70 hover:text-coral transition-colors text-sm">
                    About Event
                  </a>
                </li>
                <li>
                  <a href="#speakers" className="text-background/70 hover:text-coral transition-colors text-sm">
                    Speakers
                  </a>
                </li>
                <li>
                  <a href="#moderators" className="text-background/70 hover:text-coral transition-colors text-sm">
                    Moderators
                  </a>
                </li>
                <li>
                  <a 
                    href="https://events.cmxhub.com/events/details/cmx-mohali-presents-empowerher-elevate-inspire-lead/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-background/70 hover:text-coral transition-colors text-sm inline-flex items-center gap-1"
                  >
                    Register Now
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Event Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-semibold text-background mb-4">Event Details</h4>
              <ul className="space-y-3 text-sm text-background/70">
                <li>
                  <span className="text-background/50">Date:</span>{" "}
                  March 8, 2025
                </li>
                <li>
                  <span className="text-background/50">Occasion:</span>{" "}
                  International Women's Day
                </li>
                <li>
                  <span className="text-background/50">Location:</span>{" "}
                  Mohali, India
                </li>
                <li>
                  <span className="text-background/50">Organized by:</span>{" "}
                  Girls in Tech
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-background/10 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-background/50 text-sm">
                © {currentYear} EmpowerHer. All rights reserved.
              </p>
              <p className="text-background/50 text-sm flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-coral fill-coral" /> for Women in Tech
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
