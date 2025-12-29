import { motion } from "framer-motion";
import { Heart, ExternalLink, Linkedin, Youtube, Instagram, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const initiatives = [
    { name: "Global AI Buildathon", url: "https://global-ai-buildathon.girlsleadingtech.com/" },
    { name: "Hack Aura", url: "https://hackaura.girlsleadingtech.com/" },
    { name: "Code at Christmas", url: "https://codeatchristmas.girlsleadingtech.com/" },
    { name: "Hack My Valentine", url: "https://hackmyvalentine.girlsleadingtech.com/" },
    { name: "ML Cohort", url: null },
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/company/girlsleadingtech", icon: Linkedin },
    { name: "YouTube", url: "https://youtube.com/@girlsleadingtech", icon: Youtube },
    { name: "Instagram", url: "https://www.instagram.com/girlsleadingtech", icon: Instagram },
  ];

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
                Empower<span className="text-primary">Her</span>
              </h3>
              <p className="text-background/70 text-sm leading-relaxed mb-4">
                A celebration of strength, resilience, and inclusivity. 
                Elevate • Inspire • Lead
              </p>
              <p className="text-background/50 text-xs">
                Organized by Girls Leading Tech
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3 mt-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center text-background/70 hover:bg-primary hover:text-background transition-all"
                    aria-label={link.name}
                  >
                    <link.icon className="w-4 h-4" />
                  </a>
                ))}
                <a
                  href="https://x.com/GirlLeadingTech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center text-background/70 hover:bg-primary hover:text-background transition-all"
                  aria-label="Twitter/X"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Initiatives */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="font-semibold text-background mb-4">Our Initiatives</h4>
              <ul className="space-y-3">
                {initiatives.map((initiative) => (
                  <li key={initiative.name}>
                    {initiative.url ? (
                      <a
                        href={initiative.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-background/70 hover:text-primary transition-colors text-sm inline-flex items-center gap-1"
                      >
                        {initiative.name}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-background/50 text-sm">
                        {initiative.name} <span className="text-xs">(Coming soon)</span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Community Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-semibold text-background mb-4">Join Our Community</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://whatsapp.com/channel/0029VayYXL4K5cD7Zrzq052G"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/70 hover:text-primary transition-colors text-sm inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Channel
                  </a>
                </li>
                <li>
                  <a
                    href="https://forms.gle/LL115pGiuLKYLzk26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/70 hover:text-primary transition-colors text-sm inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Join WhatsApp Community
                  </a>
                </li>
                <li>
                  <a
                    href="https://girlsintech.substack.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/70 hover:text-primary transition-colors text-sm inline-flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Subscribe to Newsletter
                  </a>
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
                Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by Girls Leading Tech
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;