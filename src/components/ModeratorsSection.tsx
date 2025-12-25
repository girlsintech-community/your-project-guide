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
    bio: "Engineering student at Indira Gandhi Delhi Technical University specializing in Electrical and Communication Engineering with a focus on AI. Passionate about Web3, Blockchain, and public speaking.",
    linkedin: "https://www.linkedin.com/in/laxmi-vijay/",
  },
  {
    name: "Bagavati Narayanan",
    role: "Content Writer Head",
    organization: "Girls Leading Tech",
    image: moderatorBagavati,
    bio: "Information Technology undergraduate with a passion for coding and storytelling. Strong leader who thrives in team environments, sharing insights through technical writing and blogging.",
    linkedin: "https://www.linkedin.com/in/bagavati-narayanan-98484b292/",
  },
  {
    name: "Manik",
    role: "Builder",
    organization: "Girls Leading Tech",
    image: moderatorManik,
    bio: "Passionate builder dedicated to empowering women in technology through community building and technical innovation.",
    linkedin: "https://www.linkedin.com/in/mrmanik/",
  },
];

const ModeratorsSection = () => {
  return (
    <section id="moderators" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-coral/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-magenta/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold tracking-wider text-magenta uppercase mb-4 block">
              Your Hosts
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Event Moderators
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Guiding our conversations and ensuring everyone's voice is heard.
            </p>
          </motion.div>

          {/* Moderators Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {moderators.map((moderator, index) => (
              <motion.div
                key={moderator.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-card rounded-3xl p-6 border border-border/50 hover:border-magenta/30 transition-all duration-300 hover:shadow-card">
                  {/* Image */}
                  <div className="relative flex-shrink-0">
                    <div className="w-28 h-28 rounded-2xl overflow-hidden ring-4 ring-secondary">
                      <img
                        src={moderator.image}
                        alt={moderator.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-magenta rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center sm:text-left flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-heading text-xl font-bold text-foreground">
                        {moderator.name}
                      </h3>
                      {moderator.linkedin && (
                        <a
                          href={moderator.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-magenta transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                    <p className="text-magenta font-medium text-sm mb-1">
                      {moderator.role}
                    </p>
                    <p className="text-muted-foreground text-sm mb-3">
                      {moderator.organization}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {moderator.bio}
                    </p>
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
