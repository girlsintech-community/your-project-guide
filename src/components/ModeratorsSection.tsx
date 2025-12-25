import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
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
    <section id="moderators" className="py-24 bg-sky-gradient relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full glass opacity-15" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full glass opacity-10" />

      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold tracking-wider text-primary uppercase mb-4 block">
              Your Hosts
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Event Moderators
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Guiding our conversations and ensuring everyone's voice was heard.
            </p>
          </motion.div>

          {/* Moderators Grid - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {moderators.map((moderator, index) => (
              <motion.div
                key={moderator.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="flex flex-col items-center text-center glass-card rounded-3xl p-6 hover:shadow-glow transition-all duration-300 h-full">
                  {/* Image */}
                  <div className="relative mb-4">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden ring-4 ring-primary/20">
                      <img
                        src={moderator.image}
                        alt={moderator.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                      {moderator.name}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-1">
                      {moderator.role}
                    </p>
                    <p className="text-muted-foreground text-sm mb-3">
                      {moderator.organization}
                    </p>
                  </div>

                  {/* LinkedIn */}
                  {moderator.linkedin && (
                    <a
                      href={moderator.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
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