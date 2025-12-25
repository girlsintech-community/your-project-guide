import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-sky-gradient">
      {/* Floating geometric elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large glass circles */}
        <div className="absolute top-20 left-[10%] w-32 h-32 rounded-full glass opacity-40" />
        <div className="absolute top-40 right-[15%] w-24 h-24 rounded-full glass opacity-30" />
        <div className="absolute bottom-32 left-[20%] w-40 h-40 rounded-full glass opacity-35" />
        <div className="absolute bottom-20 right-[10%] w-28 h-28 rounded-full glass opacity-25" />
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-[5%] w-16 h-16 rotate-45 glass opacity-30" />
        <div className="absolute top-1/3 right-[8%] w-20 h-20 rotate-12 glass opacity-25" />
        <div className="absolute bottom-1/4 right-[25%] w-12 h-12 rotate-45 glass opacity-35" />
        
        {/* Subtle floating triangles */}
        <svg className="absolute top-32 left-[30%] w-16 h-16 opacity-20" viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="currentColor" className="text-primary" />
        </svg>
        <svg className="absolute bottom-40 right-[35%] w-12 h-12 opacity-15 rotate-180" viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="currentColor" className="text-accent" />
        </svg>
      </div>

      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card mb-8"
          >
            <span className="text-sm font-semibold text-foreground tracking-wide">
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
            <span className="text-primary">Her</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-heading text-2xl md:text-3xl lg:text-4xl text-foreground/80 italic mb-8"
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
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => document.getElementById('sessions')?.scrollIntoView({ behavior: 'smooth' })}
              className="shadow-glow"
            >
              Watch Sessions
            </Button>
            <Button 
              variant="hero-outline" 
              size="lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass-card border-primary/30 hover:bg-primary/10"
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