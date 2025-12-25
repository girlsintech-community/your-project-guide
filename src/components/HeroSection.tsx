import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="EmpowerHer abstract background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Floating decorative elements - static */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-coral/20 rounded-full blur-3xl" />
      <div className="absolute bottom-32 right-20 w-48 h-48 bg-magenta/15 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-10 w-24 h-24 bg-rose/20 rounded-full blur-2xl" />

      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm border border-coral/20 mb-8"
          >
            <span className="text-sm font-medium text-foreground">
              Women's Day Special
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="text-foreground">Empower</span>
            <span className="text-gradient">Her</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-heading text-2xl md:text-3xl lg:text-4xl text-muted-foreground italic mb-8"
          >
            Elevate • Inspire • Lead
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            A celebration of strength, resilience, and inclusivity. This inspiring event was 
            organized by{" "}
            <span className="text-foreground font-semibold">Girls Leading Tech</span> on March 8, 2025.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => document.getElementById('sessions')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Watch Sessions
            </Button>
            <Button 
              variant="hero-outline" 
              size="lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;