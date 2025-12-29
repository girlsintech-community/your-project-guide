import { motion } from "framer-motion";
import { Linkedin, Sparkles } from "lucide-react";
import moderatorVijay from "@/assets/moderator-vijay.jpg";
import moderatorBagavati from "@/assets/moderator-bagavati.jpg";
import moderatorManik from "@/assets/moderator-manik.jpg";

const moderators = [
  {
    name: "Vijay Laxmi",
    role: "Community Manager",
    organization: "Girls Leading Tech",
    image: moderatorVijay,
    linkedin: "https://www.linkedin.com/in/laxmi-vijay/",
  },
  {
    name: "Bagavati Narayanan",
    role: "Content Writer Head",
    organization: "Girls Leading Tech",
    image: moderatorBagavati,
    linkedin: "https://www.linkedin.com/in/bagavati-narayanan-98484b292/",
  },
  {
    name: "Manik",
    role: "Builder",
    organization: "Girls Leading Tech",
    image: moderatorManik,
    linkedin: "https://www.linkedin.com/in/mrmanik/",
  },
];

const ModeratorsSection = () => {
  return (
    <section id="moderators" className="py-24 relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative z-10 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Your Hosts
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Event Moderators
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Guiding our conversations and ensuring everyone's voice was heard.
            </p>
          </motion.div>

          {/* Moderators Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {moderators.map((moderator, index) => (
              <motion.div
                key={moderator.name}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group"
              >
                <div className="relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow">
                  {/* Gradient overlay at top */}
                  <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-primary/20 to-transparent z-0" />
                  
                  {/* Image */}
                  <div className="relative pt-8 px-8">
                    <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden ring-4 ring-background shadow-lg group-hover:ring-primary/20 transition-all duration-300">
                      <img
                        src={moderator.image}
                        alt={moderator.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    {/* Mic badge */}
                    <div className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 pt-8 text-center">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                      {moderator.name}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-1">
                      {moderator.role}
                    </p>
                    <p className="text-muted-foreground text-sm mb-4">
                      {moderator.organization}
                    </p>

                    {/* LinkedIn */}
                    {moderator.linkedin && (
                      <a
                        href={moderator.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        <Linkedin className="w-4 h-4" />
                        Connect
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModeratorsSection;
