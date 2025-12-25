import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Facebook, ChevronDown } from "lucide-react";
import { useState } from "react";

import speakerNidhi from "@/assets/speaker-nidhi.jpg";
import speakerShilpi from "@/assets/speaker-shilpi.jpg";
import speakerRajini from "@/assets/speaker-rajini.jpg";
import speakerMadhu from "@/assets/speaker-madhu.jpg";
import speakerNaga from "@/assets/speaker-naga.jpg";

const speakers = [
  {
    name: "Nidhi Banthia Mehta",
    role: "Founder & CEO",
    company: "Self Achievers",
    image: speakerNidhi,
    bio: "Serial entrepreneur from Silicon Valley with 22+ years of venture-building experience. Named in Niti Aayog's 'Top 100 Women Transforming India'. TEDx speaker and mentor to 1000+ women entrepreneurs.",
    linkedin: "https://www.linkedin.com/in/nidhibanthiamehta/",
  },
  {
    name: "Shilpi Mitra",
    role: "Principal Software Engineering Manager",
    company: "Microsoft",
    image: speakerShilpi,
    bio: "Technology leader with 18+ years of experience in scalable cloud deployments. Leads the Hybrid pillar at Microsoft Azure Data, driving solutions for SQL and SQL Migration.",
    linkedin: "https://www.linkedin.com/in/shilpimitra/",
  },
  {
    name: "Rajini Ramesh",
    role: "Senior Principal Consultant",
    company: "Infosys",
    image: speakerRajini,
    bio: "Corporate trainer in Cloud and Generative AI, award-winning author of 'Friction-Free Parenting'. Keynote speaker reaching over 1 million learners worldwide.",
    linkedin: "https://www.linkedin.com/in/rameshrajini/",
  },
  {
    name: "Madhu Sathvik",
    role: "Founder",
    company: "Satwa Yoga & Diet Centre",
    image: speakerMadhu,
    bio: "Certified yoga trainer, lifestyle coach, and wellness expert dedicated to holistic well-being. Blends traditional yogic practices with modern wellness strategies.",
    facebook: "https://www.facebook.com/madhu.sathvik/",
  },
  {
    name: "Dr. Naga Swathi T.J",
    role: "Global Sr. Director, SAP Business AI",
    company: "SAP",
    image: speakerNaga,
    bio: "Veteran strategist with nearly 20 years driving digital transformation for 200+ global customers. Award-winning author and energy transformation coach.",
    linkedin: "https://www.linkedin.com/in/drnagaswathitj/",
  },
];

const SpeakerCard = ({ speaker, index }: { speaker: typeof speakers[0]; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative glass-card rounded-3xl overflow-hidden hover:shadow-glow transition-all duration-500">
        {/* Image Container */}
        <div className="relative h-80 overflow-hidden">
          <img
            src={speaker.image}
            alt={speaker.name}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 -mt-16 relative z-10">
          <div className="glass-card rounded-2xl p-5">
            <div className="flex items-start justify-between mb-1">
              <h3 className="font-heading text-xl font-bold text-foreground">
                {speaker.name}
              </h3>
              {(speaker.linkedin || speaker.facebook) && (
                <a
                  href={speaker.linkedin || speaker.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {speaker.linkedin ? (
                    <Linkedin className="w-5 h-5" />
                  ) : (
                    <Facebook className="w-5 h-5" />
                  )}
                </a>
              )}
            </div>
            <p className="text-primary font-medium text-sm mb-1">
              {speaker.role}
            </p>
            <p className="text-muted-foreground text-sm mb-3">
              {speaker.company}
            </p>
            
            {/* Expandable Bio */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1 text-primary text-sm font-medium hover:text-primary/80 transition-colors"
            >
              {isExpanded ? "Show less" : "Learn more"}
              <ChevronDown 
                className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} 
              />
            </button>
            
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-muted-foreground text-sm leading-relaxed mt-3 pt-3 border-t border-border/30">
                    {speaker.bio}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SpeakersSection = () => {
  return (
    <section id="speakers" className="py-24 bg-sky-gradient relative overflow-hidden">
      {/* Background glass elements */}
      <div className="absolute top-1/4 left-0 w-48 h-48 rounded-full glass opacity-20" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full glass opacity-15" />

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
              Meet Our Speakers
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Inspiring Leaders
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn from industry pioneers who bring years of experience and insights 
              to share their transformative journeys.
            </p>
          </motion.div>

          {/* Speakers Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <SpeakerCard key={speaker.name} speaker={speaker} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;