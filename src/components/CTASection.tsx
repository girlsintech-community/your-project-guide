import { motion } from "framer-motion";
import { Calendar, Heart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border border-primary-foreground/30 rounded-full" />
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-primary-foreground/20 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-primary-foreground/40 rounded-full" />
      </div>

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8">
              <Heart className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">
                Thank You for Joining Us
              </span>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              The Movement Continues
            </h2>
            
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 leading-relaxed">
              EmpowerHer 2025 was a success! The impact we created together continues to 
              uplift, empower, and transform lives. Stay connected for future events.
            </p>

            {/* Event Details */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">Held on March 8, 2025</span>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                size="xl"
                className="bg-primary-foreground text-coral hover:bg-primary-foreground/90 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                onClick={() => window.open("https://www.linkedin.com/company/girlsleadingtech", "_blank")}
              >
                Follow Us on LinkedIn
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            <p className="text-primary-foreground/70 text-sm mt-6">
              Virtual event • Organized by Girls Leading Tech
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;