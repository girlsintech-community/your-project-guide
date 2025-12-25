import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

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
    highlight: "Top 100 Women Transforming India",
  },
  {
    name: "Shilpi Mitra",
    role: "Principal Software Engineering Manager",
    company: "Microsoft",
    image: speakerShilpi,
    bio: "Technology leader with 18+ years of experience in scalable cloud deployments. Leads the Hybrid pillar at Microsoft Azure Data, driving solutions for SQL and SQL Migration.",
    highlight: "18+ Years in Tech",
  },
  {
    name: "Rajini Ramesh",
    role: "Senior Principal Consultant",
    company: "Infosys",
    image: speakerRajini,
    bio: "Corporate trainer in Cloud and Generative AI, award-winning author of 'Friction-Free Parenting'. Keynote speaker reaching over 1 million learners worldwide.",
    highlight: "1M+ Learners Reached",
  },
  {
    name: "Madhu Sathvik",
    role: "Founder",
    company: "Satwa Yoga & Diet Centre",
    image: speakerMadhu,
    bio: "Certified yoga trainer, lifestyle coach, and wellness expert dedicated to holistic well-being. Blends traditional yogic practices with modern wellness strategies.",
    highlight: "Wellness Expert",
  },
  {
    name: "Dr. Naga Swathi T.J",
    role: "Global Sr. Director, SAP Business AI",
    company: "SAP",
    image: speakerNaga,
    bio: "Veteran strategist with nearly 20 years driving digital transformation for 200+ global customers. Award-winning author and energy transformation coach.",
    highlight: "200+ Global Customers",
  },
];

const SpeakersSection = () => {
  return (
    <section id="speakers" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-magenta/10 rounded-full blur-3xl" />
      </div>

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
            <span className="text-sm font-semibold tracking-wider text-coral uppercase mb-4 block">
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
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-coral/30 transition-all duration-500 hover:shadow-card">
                  {/* Image Container */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    
                    {/* Highlight Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-coral/90 text-primary-foreground text-xs font-semibold rounded-full backdrop-blur-sm">
                        {speaker.highlight}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 -mt-16 relative z-10">
                    <div className="bg-card rounded-2xl p-5 shadow-soft border border-border/30">
                      <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                        {speaker.name}
                      </h3>
                      <p className="text-coral font-medium text-sm mb-1">
                        {speaker.role}
                      </p>
                      <p className="text-muted-foreground text-sm mb-4">
                        {speaker.company}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {speaker.bio}
                      </p>
                    </div>
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

export default SpeakersSection;
